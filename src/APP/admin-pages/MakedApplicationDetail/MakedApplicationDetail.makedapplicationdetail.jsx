import React, { useEffect, useState } from 'react'
import * as items from './Styled/MakedApplicationDetail.makedapplicationDetail'
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../Api/request';
import Select, { components } from 'react-select';

export default function MakedApplicationDetail() {
    const { id } = useParams();  //파라미터로 각 학생별로 부여된 id를 받아옵니다
    const [title, setTitle] = useState('');  // 해당 지원서의 제목을 저장
    const [questions, setQuestions] = useState([]); //각 문항들을 저장하는 배열
    const [innerContainerClicked, setInnerContainerClicked] = useState(Array(questions.length).fill(false));  // useState(false)하나의 문단 클릭시 색을 변화시키는 용도
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const transformReceivedQuestions = (receivedQuestions) => { // receivedQuestions를 initialQuestion과 유사한 형태로 변환하여 questions 배열에 추가하는 함수
            const transformedQuestions = receivedQuestions.map((receivedQuestion) => {
                let type = '주관식';
                if (receivedQuestion.fieldList) {
                    if (receivedQuestion.multiSelect) {
                        type = '객관식-복수';
                    } else {
                        type = '객관식-단일';
                    }
                } 
                const transformedQuestion = {
                    type: type,
                    selectQuestion: receivedQuestion.fieldList ? receivedQuestion.question : '',
                    textQuestion: receivedQuestion.fieldList ? '' : receivedQuestion.question,
                    isRequired: receivedQuestion.required,
                    isMultiselect: receivedQuestion.multiSelect,
                    sequence: receivedQuestion.sequence,
                    howManyFields: receivedQuestion.fieldList ? receivedQuestion.fieldList.length : 0,
                    stringFields: receivedQuestion.fieldList ? receivedQuestion.fieldList.map(field => field.context) : ['']
                };
                return transformedQuestion;
            });
            return transformedQuestions.sort((a, b) => a.sequence - b.sequence);
        };
    
        const fetchMakedApplicationDetail = async() => {
            try {
                const response = await request.get(`/application/${id}`); 
                console.log("response", response);
                setLoading(false);
                if (response["isSuccess"]) {
                    console.log("제작된 지원서 조회 성공");
                    const transformedQuestions = transformReceivedQuestions(response.result.selectQuestionList.concat(response.result.textQuestionList));
                    setTitle(response.result.title);
                    setQuestions(transformedQuestions);
                } else {
                    console.error("제작된 지원서 조회 실패:", response);
                }
            } catch (error) {
                console.error('제작된 지원서 조회 오류', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchMakedApplicationDetail();
    }, [id]);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleClick = (index) => {    //하나의 문단 클릭했음을 나타내는 함수
        // const updatedClickedState = [...innerContainerClicked];
        // updatedClickedState[index] = !updatedClickedState[index]; // 클릭된 문항의 상태를 반전시킴
        // setInnerContainerClicked(updatedClickedState);
        // 모든 문항을 false로 설정한 후 클릭된 문항만 true로 설정
        const updatedClickedState = Array(questions.length).fill(false);
        updatedClickedState[index] = true;
        setInnerContainerClicked(updatedClickedState);
    };

    const StudySelect =  ({ value, onChange }) => {  //어떤 스터디인지 react-select를 통해 선택
        const CustomDropdownIndicator = props => {  //주관식인지 객관식인지 판별하는 과정에서 역삼각형을 꾸며주는 컴포넌트
            return (
              <components.DropdownIndicator {...props}>
                <img src="/img/icontriangle.png" alt="triangle-icon" style={{width: "24px", height: "24px"}} />
              </components.DropdownIndicator>
            );
        };
        
        const options = [
            {value: "코딩테스트 대비반", label:"코딩테스트 대비반"},
            {value: "코딩테스트 기초반", label:"코딩테스트 기초반"},
            {value: "CS면접대비", label:"CS면접대비"}
        ]
        return(
            <items.StudySelectContainer
                options={options}
                value={options.find(option => option.value === value)}
                onChange={selectedOption => onChange(selectedOption.value)}
                defaultValue={options[0]}
                components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null}}
            />  
        )
    } 
    
    const addQuestion = () => { // 문항 추가
        setQuestions([...questions, { 
            type: '객관식-단일', // 새로운 문항의 타입을 '객관식-단일'로 설정
            selectQuestion: '', // 초기값 설정 가능한 필드들은 모두 초기화
            isRequired: false,
            isMultiselect: false,
            sequence: questions.length + 1, // 새로운 문항의 순서 설정
            howManyFields: 0,
            stringFields: ['']
        }]);
    }

    const removeQuestion = (index) => { //문항 제거
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    }

    const handleDragStart = (e, index) => { //드래그앤 드롭을 위한 함수1
        e.dataTransfer.setData('index', index);
    }

    const handleDragOver = (e) => {  //드래그앤 드롭을 위한 함수2
        e.preventDefault();
    }

    const handleDrop = (e, targetIndex) => { //드래그앤 드롭을 위한 함수3
        const sourceIndex = e.dataTransfer.getData('index');
        const updatedQuestions = [...questions];
        const temp = updatedQuestions[sourceIndex];
        updatedQuestions[sourceIndex] = updatedQuestions[targetIndex];
        updatedQuestions[targetIndex] = temp;

        // 순서 변경에 따라 sequence 업데이트
        updatedQuestions.forEach((question, index) => {
            question.sequence = index + 1;
        }); 

        setQuestions(updatedQuestions.map((question, i) => ({ ...question, text: `문항 ${i + 1}` })));
    };

    const TypeSelection = ({ index, sequenceByIndex }) => { //어떤 종류의 질문인지 정하고 그 종류에 맞는 Question 배열을 초기화하는 함수
        const handleTypeSelection = (selectedOption) => {
            const selectedType = selectedOption.value;
            const updatedQuestions = [...questions];
            let newQuestion = {};
            if (selectedType === "주관식") {
                newQuestion = {
                    type: selectedType,
                    textQuestion: '',
                    isRequired: false,
                    sequence: sequenceByIndex
                };
            } else if (selectedType === "객관식-단일") {
                newQuestion = {
                    type: selectedType,
                    selectQuestion: '',
                    isRequired: false,
                    isMultiselect: false,
                    sequence: sequenceByIndex,
                    howManyFields: 0,
                    stringFields: [''] //기본적으로 하나는 있음
                };
            } else if (selectedType === '객관식-복수') {
                newQuestion = {
                    type: selectedType,
                    selectQuestion: '',
                    isRequired: false,
                    isMultiselect: true,
                    sequence: sequenceByIndex,
                    howManyFields: 0,
                    stringFields: [''] //기본적으로 하나는 있음
                };
            }
            updatedQuestions[index] = newQuestion;
            setQuestions(updatedQuestions);
        };
    
        const options = [
            { value: '객관식-단일', label: '객관식 질문 (단일 응답)' },
            { value: '객관식-복수', label: '객관식 질문 (복수 응답)' },
            { value: '주관식', label: '주관식 질문' }
        ];

        const CustomValueContainer = ({ children, ...props }) => {
            // 현재 선택된 옵션을 찾음
            const selectedOption = props.getValue()[0];
            // 선택된 옵션의 이미지 경로 설정
            let iconSrc;
            switch (selectedOption.value) {
              case '주관식':
                iconSrc = "/img/icontext.png";
                break;
              case '객관식-단일':
                iconSrc = "/img/icondoublecircle.png";
                break;
              case '객관식-복수':
                iconSrc = "/img/icondoublesquare.png";
                break;
              default:
                iconSrc = null;
            }   
            return (
              <components.ValueContainer {...props} className="custom-option">
                {iconSrc && <img src={iconSrc} alt={selectedOption.value} className="custom-option-icon" />}
                {children}
              </components.ValueContainer>
            );
        };

        const CustomOption = (props) => {
            let iconSrc;
            switch (props.value) {
              case '주관식':
                iconSrc = "/img/icontext.png";
                break;
              case '객관식-단일':
                iconSrc = "/img/icondoublecircle.png";
                break;
              case '객관식-복수':
                iconSrc = "/img/icondoublesquare.png";
                break;
              default:
                iconSrc = null;
            } 
            return (
              <components.Option {...props} className="custom-option">
                {iconSrc && <img src={iconSrc} alt={props.value} className="custom-option-icon" />}
                <span className="custom-option-label">{props.label}</span>
              </components.Option>
            );
        };

        const CustomDropdownIndicator = props => {  //주관식인지 객관식인지 판별하는 과정에서 역삼각형을 꾸며주는 컴포넌트
            return (
              <components.DropdownIndicator {...props}>
                <img src="/img/icontriangle.png" alt="triangle-icon" style={{width: "24px", height: "24px"}} />
              </components.DropdownIndicator>
            );
        };
        
        return (
            <items.TypeSelectContainer innerContainerClicked={innerContainerClicked[index]} 
                options={options} 
                value={options.find(option => option.value === questions[index]?.type)}
                onChange={handleTypeSelection} 
                components={{ Option: CustomOption, ValueContainer: CustomValueContainer, DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
            />
        );
    };

    const onChangeTextQuestion = (index, e) => { //주관식 전용 question 생성함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].textQuestion = e.target.value;
        setQuestions(updatedQuestions);
    }

    const onChangeSelectQuestion = (index, e) => { //객관식 전용 question 생성함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].selectQuestion = e.target.value;
        setQuestions(updatedQuestions);
    }

    const addStringField = (index) => { // 보기 추가 함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].stringFields.push(''); // 빈 보기 추가
        setQuestions(updatedQuestions);
    }

    const removeStringField = (index, fieldIndex) => { // 보기 제거 함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].stringFields.splice(fieldIndex, 1); // 해당 인덱스의 보기 제거
        setQuestions(updatedQuestions);
    }

    const onChangeStringField = (questionIndex, fieldIndex, e) => {  //객관식의 각 보기를 담당하는 onChange함수
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].stringFields[fieldIndex] = e.target.value;
        setQuestions(updatedQuestions);
    }

    const onChangeIsRequired = (index, value) => { //주관식이든 객관식이든 모두 이 함수로 필수대답 여부를 결정한다
        const updatedQuestions = [...questions];
        updatedQuestions[index].isRequired = value;
        setQuestions(updatedQuestions);
    };

    const makeApplicationForm = async (confirm) => { // 지원서를 제작하는 api호출 함수
        const createTextQuestionRequestList = [];
        const createSelectQuestionRequestList = [];
    
        questions.forEach(question => {
            if (question.type === '주관식') {
                createTextQuestionRequestList.push({
                    question: question.textQuestion,
                    isRequired: question.isRequired,
                    sequence: question.sequence
                });
            } else if (question.type === '객관식-단일' || question.type === '객관식-복수') {
                const createFieldRequestList = question.stringFields.map(value => ({ context: value }));
                createSelectQuestionRequestList.push({
                    question: question.selectQuestion,
                    isRequired: question.isRequired,
                    isMultiSelect: question.isMultiselect,
                    sequence: question.sequence,
                    updateFieldRequestList: createFieldRequestList
                });
            }
        });
    
        const requestData = {
            studyId: 1,
            title: title,
            confirmYN: confirm, // props로 받은 값에 따라 변화를 줘서 임시저장과 저장을 구분합니다
            updateTextQuestionList: createTextQuestionRequestList,
            updateSelectQuestionList: createSelectQuestionRequestList
        };
    
        try {
            const response = await request.patch(`/application/${id}`, requestData);
            console.log("response", response);
            if (response["isSuccess"]) {
                console.log("지원서 " + (confirm ? "저장" : "임시저장") + " 성공"); // 저장 또는 임시저장 메시지 출력
                alert("지원서 " + (confirm ? "저장" : "임시저장") + "이 완료되었습니다"); // 저장 또는 임시저장 메시지 출력
                navigate("/makedapplicationlist");
            } else {
                console.error("지원서 " + (confirm ? "저장" : "임시저장") + " 실패:", response); // 저장 또는 임시저장 실패 메시지 출력
            }
        } catch (error) {
            console.error("지원서 " + (confirm ? "저장" : "임시저장") + " 오류", error); // 저장 또는 임시저장 오류 메시지 출력
        }
    };

    const handleSaveBtnClick = async () => { // 저장하기 버튼 클릭 시 사용하는 함수
        await makeApplicationForm(true);
    };

    const handleTempSaveBtnClick = async () => { // 임시저장 버튼 클릭 시
        await makeApplicationForm(false);
    };

    const RoundedSwitch = ({ onChange, checked }) => { // 스위치 컴포넌트
        const [isActive, setIsActive] = useState(checked);
        const handleClick = () => {
            setIsActive(!isActive);
            onChange && onChange(!isActive);
        };
        return (
            <items.SwitchContainer onClick={handleClick}>
                <items.Switch isActive={isActive}>
                    <items.Handle isActive={isActive} />
                </items.Switch>
            </items.SwitchContainer>
        );
    };

    return (
        <items.Container onClick={() => setInnerContainerClicked(false)}>
            <items.InnerContainer>
                <items.TitleContainer>제목</items.TitleContainer>
                <items.ContentForTitleContainer>
                    <items.ApplicationName>KOALA 1기 스터디 지원서</items.ApplicationName>
                    <StudySelect value={title} onChange={setTitle} />
                </items.ContentForTitleContainer>
            </items.InnerContainer>

            {questions.map((question, index) => (
            <items.SecondInnerContainer onClick={(e) => { e.stopPropagation(); handleClick(index); }} innerContainerClicked={innerContainerClicked[index]} key={index} draggable="true" onDragStart={(e) => handleDragStart(e, index)} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, index)} >
                <items.QuestionNumberContainer innerContainerClicked={innerContainerClicked[index]}>
                    <items.QuestionNumberImg innerContainerClicked={innerContainerClicked[index]} src="/img/touchblock.png" alt="터치블록" />
                    <items.QuestionNumberText>문항 {index + 1}</items.QuestionNumberText>
                </items.QuestionNumberContainer>
                <items.ContentContainer innerContainerClicked={innerContainerClicked[index]}>
                    <items.TypeAndQuestionContainer innerContainerClicked={innerContainerClicked[index]} >
                        <TypeSelection index={index} sequenceByIndex={index + 1} />
                        {question.type === '주관식' ? (
                            <items.TextQuestionContainer>
                                <items.QuestionContainer innerContainerClicked={innerContainerClicked[index]} type='text' placeholder='질문을 작성해주세요' value={question.textQuestion} onChange={(e) => onChangeTextQuestion(index, e)} />
                                {question.isRequired === true ? (
                                    <items.NecessaryImg src='/img/necessarystar.png' alt='필수' innerContainerClicked={innerContainerClicked[index]}  />
                                ) : (
                                    null
                                )}
                            </items.TextQuestionContainer>
                        ) : question.type === '객관식-단일' || question.type === '객관식-복수' ? (
                            <items.SelectionQuestionContainer>
                                <items.QuestionContainer innerContainerClicked={innerContainerClicked[index]} type='text' placeholder='질문을 작성해주세요' value={question.selectQuestion} onChange={(e) => onChangeSelectQuestion(index, e)} />
                                {question.isRequired === true ? (
                                    <items.NecessaryImg src='/img/necessarystar.png' alt='필수' innerContainerClicked={innerContainerClicked[index]}  />
                                ) : (
                                    null
                                )}
                            </items.SelectionQuestionContainer>
                        ) : (
                            null
                        )}
                        {question.isMultiselect === true ? (
                            <items.MultiselectImg src='/img/textmultiselect.png' alt='필수' innerContainerClicked={innerContainerClicked[index]} />
                        ) : (
                            null
                        )}
                    </items.TypeAndQuestionContainer>
                    
                    <items.SelectAndAnswerContainer>
                        {question.type === '주관식' ? (
                            <items.AnswerInputContainer innerContainerClicked={innerContainerClicked[index]} type='text' placeholder='답변을 적어주세요' />
                        ):  question.type === '객관식-단일' || question.type === '객관식-복수' ? (
                            <items.SelectContainer>    
                                {question.stringFields.map((value, fieldIndex) => (
                                    // <items.OptionsContainer key={fieldIndex} onClick={() => setSelectedFieldIndex(fieldIndex)}>
                                    //     <items.OptionImg src='/img/optionblock.png' alt='옵션블록' style={{ display: selectedFieldIndex === fieldIndex ? 'block' : 'none' }} />
                                    //     {question.type === '객관식-단일' ? (
                                    //         <img src="/img/iconcircle.png" alt="단일응답" style={{width:"20px", height:"20px", marginLeft: selectedFieldIndex === fieldIndex ? '0px' : '24px'}}  />
                                    //     ) : question.type === '객관식-복수' ? (
                                    //         <img src="/img/iconsquare.png" alt="복수응답" style={{width:"20px", height:"20px", marginLeft: selectedFieldIndex === fieldIndex ? '0px' : '24px'}} />
                                    //     ) : null}
                                    //     <items.ChoiceForSelectQuestionContainer placeholder='옵션' type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} />
                                    //     <items.ximg innerContainerClicked={innerContainerClicked[index]} onClick={() => removeStringField(index, fieldIndex)} src="/img/iconx.png" alt="x표시" />
                                    // </items.OptionsContainer>
                                    <items.OptionsContainer key={fieldIndex}>
                                        {question.type === '객관식-단일' ? (
                                            <img src="/img/iconcircle.png" alt="단일응답" style={{width:"20px", height:"20px"}}  />
                                        ) : question.type === '객관식-복수' ? (
                                            <img src="/img/iconsquare.png" alt="복수응답" style={{width:"20px", height:"20px"}} />
                                        ) : null}
                                        <items.ChoiceForSelectQuestionContainer placeholder='옵션' type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} />
                                        <items.ximg innerContainerClicked={innerContainerClicked[index]} onClick={() => removeStringField(index, fieldIndex)} src="/img/iconx.png" alt="x표시" />
                                    </items.OptionsContainer>
                                ))}
                                <items.AddOptionContainer innerContainerClicked={innerContainerClicked[index]}>
                                    {question.type === '객관식-단일' ? (
                                        <img src="/img/iconcircle.png" alt="단일응답" style={{ width: "20px", height: "20px"}} />
                                    ) : question.type === '객관식-복수' ? (
                                        <img src="/img/iconsquare.png" alt="복수응답" style={{ width: "20px", height: "20px"}} />
                                    ) : null}
                                    <items.AddOptionParagraphContainer onClick={() => addStringField(index)}>
                                        <items.paragraph1>옵션 추가</items.paragraph1>
                                        <items.paragraph2>&nbsp;또는</items.paragraph2>
                                        <items.paragraph3>&nbsp;‘기타’ 추가</items.paragraph3>
                                    </items.AddOptionParagraphContainer>
                                </items.AddOptionContainer>
                            </items.SelectContainer>
                        ): (
                            null
                        )}
                    </items.SelectAndAnswerContainer>

                    <items.RequiredAndDeleteContainer innerContainerClicked={innerContainerClicked[index]}>
                        <items.RequiredContainer>
                            <items.RequiredText>필수&nbsp;설정</items.RequiredText>
                            <RoundedSwitch onChange={(value) => onChangeIsRequired(index, value)} checked={question.isRequired} />
                        </items.RequiredContainer>
                        <img onClick={() => removeQuestion(index)} src="/img/trashcan.png" alt="쓰레기통" style={{width:"24px", height:"24px"}} />
                    </items.RequiredAndDeleteContainer> 
                </items.ContentContainer>
            </items.SecondInnerContainer>
            ))}
            <img src="/img/makingapplicationbtn.png" alt="문항추가하기" onClick={addQuestion} style={{ marginTop:"40px", width: "189px", height:"63px", marginBottom:"100px", marginLeft:"866px"}} />
            
            <items.BtnContainer>
                <items.BtnContainer2>
                    <items.ArbitaryBtn onClick={handleTempSaveBtnClick} >임시저장</items.ArbitaryBtn>
                    <items.Btn onClick={handleSaveBtnClick}>저장하기</items.Btn>
                </items.BtnContainer2>
            </items.BtnContainer>
        </items.Container>
    )
}