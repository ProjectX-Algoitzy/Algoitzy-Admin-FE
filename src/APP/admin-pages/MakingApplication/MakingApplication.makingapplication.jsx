import React, { useState } from 'react'
import * as items from './Styled/MakingApplication.makingapplication.styles'
import request from '../../Api/request';
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';

export default function MakingApplication() { 
    //지원저 제작을 담당하는 페이지입니다. 로그인화면이 구현됨에 따라 accesstoken을 따로 받아올 수 있돌고 처리하겠습니다
    const [title, setTitle] = useState('');  // 해당 지원서의 제목을 저장
    const [showImage, setShowImage] = useState(false); // 문항번호 이미지 표시 여부를 관리하는 상태

    const [initialQuestion, setInitialQuestion] = useState({ 
        type: '객관식-복수',
        selectQuestion: '가능한 면접 일정을 선택해주세요',
        isRequired: true,
        isMultiselect: true,
        sequence: 1,
        howManyFields: 0,
        stringFields: [''] // 여기서는 하나의 보기를 기본으로 가정합니다.
    }); 
    const [questions, setQuestions] = useState([initialQuestion]); //각 문항들을 저장하는 배열
    const navigate = useNavigate();

    const StudySelect =  ({ value, onChange }) => {  //어떤 스터디인지 react-select를 통해 선택
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
    }

    const handleContainerClick = () => {
        setShowImage(!showImage); // 이미지 표시 상태를 토글
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
                <span className="custom-option-label">{children}</span>
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
            <items.TypeSelectContainer 
                options={options} 
                value={options.find(option => option.value === questions[index]?.type)}
                onChange={handleTypeSelection} 
                // components={{Option: CustomOption}}
                components={{ Option: CustomOption, ValueContainer: CustomValueContainer, DropdownIndicator: CustomDropdownIndicator }}
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

    const makeApplicationForm = async () => { // 지원서 만드는 함수
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
                    createFieldRequestList: createFieldRequestList
                });
            }
        });
    
        const requestData = {
            studyId: 1,
            title: title,
            createTextQuestionRequestList: createTextQuestionRequestList,
            createSelectQuestionRequestList: createSelectQuestionRequestList
        };
    
        try {
            const response = await request.post('/application', requestData);
            console.log("response", response);
            if (response["isSuccess"]) {
                console.log("지원서 제작 성공");
                alert("지원서 제작이 완료되었습니다");
                navigate("/makedapplicationlist");
            } else {
                console.error("지원서 제작 실패:", response);
            }
        } catch (error) {
            console.error("지원서 제작 오류", error);
        }
    }

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
        <items.Container>
            <items.InnerContainer>
                <items.TitleContainer>제목</items.TitleContainer>
                <items.ContentForTitleContainer>
                    <items.ApplicationName>KOALA 1기 스터디 지원서</items.ApplicationName>
                    <StudySelect value={title} onChange={setTitle} />
                </items.ContentForTitleContainer>
            </items.InnerContainer>

            {questions.map((question, index) => (
                <items.InnerContainer key={index} draggable="true" onDragStart={(e) => handleDragStart(e, index)} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, index)} >
                    <items.QuestionNumberContainer>
                        {/* <img src="/img/touchblock.png" alt="터치블록" style={{width:"17.2", height:"10.64px", marginRight:"12px"}} /> */}
                        <items.QuestionNumberText>문항 {index + 1}</items.QuestionNumberText>
                    </items.QuestionNumberContainer>
                    <items.ContentContainer>
                        <items.TypeAndQuestionContainer>
                            <TypeSelection index={index} sequenceByIndex={index + 1} />
                            {question.type === '주관식' ? (
                                <items.TextQuestionContainer>
                                    <items.QuestionContainer type='text' placeholder='질문을 작성해주세요' value={question.textQuestion} onChange={(e) => onChangeTextQuestion(index, e)} />
                                </items.TextQuestionContainer>
                            ) : question.type === '객관식-단일' || question.type === '객관식-복수' ? (
                                <items.SelectionQuestionContainer>
                                    <items.QuestionContainer type='text' placeholder='질문을 작성해주세요' value={question.selectQuestion} onChange={(e) => onChangeSelectQuestion(index, e)} />
                                    
                                    {question.stringFields.map((value, fieldIndex) => (
                                        <div key={fieldIndex}>
                                            {question.type === '객관식-단일' ? (
                                                <img src="/img/iconcircle.png" alt="단일응답" style={{width:"20px", height:"20px"}} />
                                            ) : question.type === '객관식-복수' ? (
                                                <img src="/img/iconsquare.png" alt="복수응답" style={{width:"20px", height:"20px"}} />
                                            ) : null}
                                            <items.ChoiceForSelectQuestionContainer placeholder='옵션' type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} />
                                            <img onClick={() => removeStringField(index, fieldIndex)} src="/img/iconx.png" alt="x표시" style={{width:"24px", height:"24px"}} />
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {question.type === '객관식-단일' ? (
                                            <img src="/img/iconcircle.png" alt="단일응답" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                                        ) : question.type === '객관식-복수' ? (
                                            <img src="/img/iconsquare.png" alt="복수응답" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                                        ) : null}
                                        <div onClick={() => addStringField(index)} style={{ display: "inline", paddingLeft:"12px" }}>옵션 추가 또는 '기타' 추가</div>
                                    </div>
                                </items.SelectionQuestionContainer>
                            ) : (
                                <div>어느 타입인지 선택해주세요.</div>
                            )}
                        </items.TypeAndQuestionContainer>

                        <items.RequiredAndDeleteContainer>
                            <items.RequiredContainer>
                                <div style={{marginRight:"17px"}}>필수&nbsp;설정</div>
                                <RoundedSwitch onChange={(value) => onChangeIsRequired(index, value)} checked={question.isRequired} />
                            </items.RequiredContainer>
                            <img onClick={() => removeQuestion(index)} src="/img/trashcan.png" alt="쓰레기통" style={{width:"24px", height:"24px"}} />
                        </items.RequiredAndDeleteContainer> 
                    </items.ContentContainer>
                </items.InnerContainer>
            ))}
            <img src="/img/makingapplicationbtn.png" alt="문항추가하기" onClick={addQuestion} style={{ marginTop:"40px", width: "189px", height:"63px", marginBottom:"100px"}} />
            
            <items.BtnContainer>
                <items.ArbitaryBtn>임시저장</items.ArbitaryBtn>
                <items.Btn onClick={makeApplicationForm} >저장하기</items.Btn>
            </items.BtnContainer>
        </items.Container>
    )
}
