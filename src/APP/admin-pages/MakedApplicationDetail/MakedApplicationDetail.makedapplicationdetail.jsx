import React, { useContext, useEffect, useState } from 'react'
import * as items from './Styled/MakedApplicationDetail.makedapplicationDetail'
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../Api/request';
import Select, { components } from 'react-select';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function MakedApplicationDetail() {
    const { id } = useParams();  //파라미터로 각 학생별로 부여된 id를 받아옵니다
    const [isConfirm, setIsConfirm] = useState(false); // 초기값 false로 설정
    const [title, setTitle] = useState('');  // 해당 지원서의 제목을 저장
    const [studyId, setStudyId] = useState(null); // api로 받아온 스터디의 ID를 관리하는 state
    const [studyName, setStudyName] = useState(''); //해당 지원서의 스터디이름을 저장
    // const [regularStudyList, setRegularStudyList] = useState([]); //정규 스터디의 목록을 저장 
    const [questions, setQuestions] = useState([]); //각 문항들을 저장하는 배열
    const [innerContainerClicked, setInnerContainerClicked] = useState(Array(questions.length).fill(false));  // useState(false)하나의 문단 클릭시 색을 변화시키는 용도
    const navigate = useNavigate();
    const { alert } = useContext(AlertContext);
    const { confirm } = useContext(ConfirmContext);

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

        // const fetchStudyCurriculum = async() => {
        //     try {
        //         const responseCurriculum = await request.get('/study');
        //         console.log("responseCurriculum", responseCurriculum);
        //         if(responseCurriculum["isSuccess"]) {
        //             console.log("제작된 커리큘럼 조회 성공");
        //             setRegularStudyList(responseCurriculum.result.studyList);
        //         }
        //     } catch (error) {
        //         console.error('스터디 커리큘럼 목록 조회 오류', error);
        //     }
        // }
    
        const fetchMakedApplicationDetail = async() => {
            try {
                const response = await request.get(`/application/${id}`); 
                console.log("response", response);
                setLoading(false);
                if (response["isSuccess"]) {
                    console.log("제작된 지원서 조회 성공: ", response);
                    const transformedQuestions = transformReceivedQuestions(response.result.selectQuestionList.concat(response.result.textQuestionList));
                    setIsConfirm(response.result.confirmYN);
                    setTitle(response.result.title);
                    setStudyId(response.result.studyId);
                    setStudyName(response.result.studyName);
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
        // fetchStudyCurriculum();
    }, [id]);

    useEffect(() => {
        questions.forEach((question, index) => {
            adjustTextAreaHeight(`textarea-${index}`);
        });
    }, [questions]);

    const adjustTextAreaHeight = (id) => {
        const textArea = document.getElementById(id);
        if (textArea) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // const handleContainerClick = () => {  // 배포되었을 때, 못클릭하게 하려고
    //     if (isConfirm) {
    //       // isConfirm이 true인 경우 경고창 띄우기
    //       alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
    //       setInnerContainerClicked(false)
    //     } else {
    //       // isConfirm이 false인 경우 원하는 동작 수행
    //       // 예시: 다른 페이지로 이동하거나 다른 작업 수행
    //       console.log('items.Container를 클릭했습니다.');
    //     }
    // };

    const handleClick = (index) => {    //하나의 문단 클릭했음을 나타내는 함수
        if (isConfirm) {
            alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
            setInnerContainerClicked(false)
        } else {
            const updatedClickedState = Array(questions.length).fill(false);
            updatedClickedState[index] = true;
            setInnerContainerClicked(updatedClickedState);
        }
    };

    // const StudySelect =  ({ value, onChange, isConfirm  }) => {  //어떤 스터디인지 react-select를 통해 선택
    //     const CustomMenu = props => {  //동적으로 메뉴의 높이를 할당한다
    //         const {  options } = props;
    //         const menuHeight = options.length * 48;
    //         return (
    //             <components.Menu {...props} style={{ height: `${menuHeight}px` }} >
    //                 {props.children}
    //             </components.Menu>
    //         );
    //     };
        
    //     const CustomDropdownIndicator = props => {  //주관식인지 객관식인지 판별하는 과정에서 역삼각형을 꾸며주는 컴포넌트
    //         return (
    //           <components.DropdownIndicator {...props}>
    //             <img src="/img/icontriangle.png" alt="triangle-icon" style={{width: "20px", height: "20px", marginRight:"10px"}} />
    //           </components.DropdownIndicator>
    //         );
    //     };
        
    //     // const options = [
    //     //     {value: "코딩테스트 대비반", label:"코딩테스트 대비반"},
    //     //     {value: "코딩테스트 기초반", label:"코딩테스트 기초반"},
    //     //     {value: "CS면접대비", label:"CS면접대비"}
    //     // ]
    //     const options = regularStudyList.map(study => ({
    //         value: study.studyId,
    //         label: study.name
    //     }));

    //     const handleStudyChange = selectedOption => {
    //         setStudyId(selectedOption.value); // 선택된 스터디의 ID를 state로 업데이트
    //         onChange(selectedOption.label + " 지원서");
    //     };

    //     useEffect(() => {
    //         //console.log("스터디아이디", studyId);
    //     }, [studyId]);
        
    //     return(
    //         <div onClick={e => e.stopPropagation()}>
    //             <items.StudySelectContainer
    //                 options={options}
    //                 value={options.find(option => option.label+ " 지원서" === value)}
    //                 onChange={handleStudyChange}
    //                 placeholder="스터디 선택"
    //                 isSearchable={false} // 직접 입력 비활성화
    //                 components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null, Menu: CustomMenu}}
    //                 disabled={isConfirm} // isConfirm에 따라 비활성화
    //             />  
    //         </div>
    //     )
    // } 
    
    const addQuestion = () => { // 문항 추가
        if (isConfirm) {
            alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
        } else {
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
    }

    const removeQuestion = (index) => { //문항 제거
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    }

    const handleDragStart = (e, index) => { //드래그앤 드롭을 위한 함수1
        if (isConfirm) {
            alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
        } else {
            e.dataTransfer.setData('index', index);
        }
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

    const TypeSelection = ({ index, sequenceByIndex }) => {
        const isDisabled = questions[index]?.selectQuestion === "가능한 면접 일자를 선택해주세요.";

        const handleTypeSelection = (selectedOption) => {
            const selectedType = selectedOption.value;
            const updatedQuestions = [...questions];
            let currentQuestion = updatedQuestions[index] || {};
    
            if (Object.keys(currentQuestion).length === 0) {
                // currentQuestion이 비어있는 경우 새로운 질문을 생성
                if (selectedType === "주관식") {
                    currentQuestion = {
                        type: selectedType,
                        textQuestion: '',
                        isRequired: false,
                        sequence: sequenceByIndex
                    };
                } else if (selectedType === "객관식-단일") {
                    currentQuestion = {
                        type: selectedType,
                        selectQuestion: '',
                        isRequired: false,
                        isMultiselect: false,
                        sequence: sequenceByIndex,
                        howManyFields: 0,
                        stringFields: [''] //기본적으로 하나는 있음
                    };
                } else if (selectedType === '객관식-복수') {
                    currentQuestion = {
                        type: selectedType,
                        selectQuestion: '',
                        isRequired: false,
                        isMultiselect: true,
                        sequence: sequenceByIndex,
                        howManyFields: 0,
                        stringFields: [''] //기본적으로 하나는 있음
                    };
                }
            } else {
                // currentQuestion이 비어있지 않은 경우 기존 값을 유지하면서 업데이트
                if (selectedType === "주관식") {
                    currentQuestion = {
                        ...currentQuestion,
                        type: selectedType,
                        textQuestion: currentQuestion.selectQuestion || currentQuestion.textQuestion || '',
                        isRequired: currentQuestion.isRequired || false,
                        sequence: sequenceByIndex
                    };
                } else if (selectedType === "객관식-단일") {
                    currentQuestion = {
                        ...currentQuestion,
                        type: selectedType,
                        selectQuestion: currentQuestion.selectQuestion|| currentQuestion.textQuestion || '',
                        isRequired: currentQuestion.isRequired || false,
                        isMultiselect: false,
                        sequence: sequenceByIndex,
                        howManyFields: currentQuestion.howManyFields || 0,
                        stringFields: currentQuestion.stringFields || [''] //기본적으로 하나는 있음
                    };
                } else if (selectedType === '객관식-복수') {
                    currentQuestion = {
                        ...currentQuestion,
                        type: selectedType,
                        selectQuestion: currentQuestion.selectQuestion || currentQuestion.textQuestion || '',
                        isRequired: currentQuestion.isRequired || false,
                        isMultiselect: true,
                        sequence: sequenceByIndex,
                        howManyFields: currentQuestion.howManyFields || 0,
                        stringFields: currentQuestion.stringFields || [''] //기본적으로 하나는 있음
                    };
                }
            }
    
            updatedQuestions[index] = currentQuestion;
            setQuestions(updatedQuestions);
            console.log("Questions updated: ", updatedQuestions);  // 상태 업데이트 확인용 로그
        };
        // const handleTypeSelection = (selectedOption) => {
        //     const selectedType = selectedOption.value;
        //     const updatedQuestions = [...questions];
        //     let newQuestion = {};
        //     if (selectedType === "주관식") {
        //         newQuestion = {
        //             type: selectedType,
        //             textQuestion: '',
        //             isRequired: false,
        //             sequence: sequenceByIndex
        //         };
        //     } else if (selectedType === "객관식-단일") {
        //         newQuestion = {
        //             type: selectedType,
        //             selectQuestion: '',
        //             isRequired: false,
        //             isMultiselect: false,
        //             sequence: sequenceByIndex,
        //             howManyFields: 0,
        //             stringFields: [''] //기본적으로 하나는 있음
        //         };
        //     } else if (selectedType === '객관식-복수') {
        //         newQuestion = {
        //             type: selectedType,
        //             selectQuestion: '',
        //             isRequired: false,
        //             isMultiselect: true,
        //             sequence: sequenceByIndex,
        //             howManyFields: 0,
        //             stringFields: [''] //기본적으로 하나는 있음
        //         };
        //     }
        //     updatedQuestions[index] = newQuestion;
        //     setQuestions(updatedQuestions);
        //     console.log("Questions updated: ", updatedQuestions);  // 상태 업데이트 확인용 로그
        // };
    
        const options = [
            { value: '객관식-단일', label: '객관식 질문 (단일 응답)' },
            { value: '객관식-복수', label: '객관식 질문 (복수 응답)' },
            { value: '주관식', label: '주관식 질문' }
        ];
    
        const CustomValueContainer = ({ children, ...props }) => {
            const selectedOption = props.getValue()[0];
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
                    {iconSrc && <img src={iconSrc} alt={selectedOption.value} className="custom-option-icon" style={{width:"0.833rem", height:"0.833rem"}} />}
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
                    {iconSrc && <img src={iconSrc} alt={props.value} className="custom-option-icon" style={{width:"0.833rem", height:"0.833rem"}} />}
                    <span className="custom-option-label">{props.label}</span>
                </components.Option>
            );
        };
    
        const CustomDropdownIndicator = props => {
            return (
                <components.DropdownIndicator {...props}>
                    <img src="/img/Polygon.png" alt="triangle-icon" style={{width: "14px", height: "10px"}} />
                </components.DropdownIndicator>
            );
        };
    
        return (
            <items.ContainerForTypeSelectContainer onClick={e => e.stopPropagation()} innerContainerClicked={innerContainerClicked[index]} >
                <items.TypeSelectContainer
                    options={options}
                    value={options.find(option => option.value === questions[index]?.type)}
                    // onChange={handleTypeSelection}
                    onChange={isDisabled ? null : handleTypeSelection} // 비활성화된 경우 변경 함수 비활성화
                    components={{ Option: CustomOption, ValueContainer: CustomValueContainer, DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
                    innerContainerClicked={innerContainerClicked[index]} 
                    isSearchable={false} // 직접 입력 비활성화
                    isDisabled={isDisabled} // 조건에 따라 비활성화
                />
            </items.ContainerForTypeSelectContainer>
        );
    };

    const onChangeTextQuestion = (index, e) => { //주관식 전용 question 생성함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].textQuestion = e.target.value;
        setQuestions(updatedQuestions);
    }

    const onChangeSelectQuestion = (index, e) => { //객관식 전용 question 생성함수
        const updatedQuestions = [...questions];
        if(updatedQuestions[index].selectQuestion === "가능한 면접 일자를 선택해주세요.") {
            alert('변경할 수 없습니다');
        } else {
            updatedQuestions[index].selectQuestion = e.target.value;
            setQuestions(updatedQuestions);
        }
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
    
    const onBlurStringField = (questionIndex, fieldIndex) => { //면접 일자 질문 한정으로 x월 x일이 되도록 조건걸기
        const question = questions[questionIndex];
        const fieldValue = question.stringFields[fieldIndex];
    
        if(question.selectQuestion === "가능한 면접 일자를 선택해주세요.") {
            if (!/^\d{1,2}월 \d{1,2}일$/.test(fieldValue)) {
                alert("입력 형식은 'x월 x일' 형태여야 합니다.");
                const updatedQuestions = [...questions];
                updatedQuestions[questionIndex].stringFields[fieldIndex] = "";
                setQuestions(updatedQuestions);
            }
        }
    };

    const onChangeIsRequired = (index, value) => { //주관식이든 객관식이든 모두 이 함수로 필수대답 여부를 결정한다
        const updatedQuestions = [...questions];
        updatedQuestions[index].isRequired = value;
        setQuestions(updatedQuestions);
    };

    const makeApplicationForm = async (distribution) => { // 지원서를 제작하는 api호출 함수
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
                const createFieldRequestList = question.stringFields
                                                            .filter(value => value.trim() !== '') // 공백인 보기 걸러내기
                                                            .map(value => ({ context: value }));
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
            studyId: studyId, 
            title: title,
            confirmYN: distribution, // props로 받은 값에 따라 변화를 줘서 임시저장과 저장을 구분합니다
            updateTextQuestionList: createTextQuestionRequestList,
            updateSelectQuestionList: createSelectQuestionRequestList
        };

        // createSelectQuestionRequestList에서 updateFieldRequestList가 비어 있는지 확인
        if (distribution) {
            for (let item of createSelectQuestionRequestList) {
                if (item.updateFieldRequestList.length === 0) {
                    alert(`모든 객관식 질문의 보기를 입력해 주세요.`);
                    return; 
                }
            }
        }
    
        try {
            const response = await request.patch(`/application/${id}`, requestData);
            console.log("response", response);
            if (response["isSuccess"]) {
                const message = await alert("지원서를 " + (distribution ? "저장" : "임시저장") + " 하였습니다");
                if(message) {
                    navigate(`/regularstudy/${studyId}`);
                }
            } else {
                console.error("지원서 " + (distribution ? "저장" : "임시저장") + " 실패:", response); // 저장 또는 임시저장 실패 메시지 출력
                alert("지원서 " + (distribution ? "저장" : "임시저장") + " 실패하였습니다");
            }
        } catch (error) {
            console.error("지원서 " + (distribution ? "저장" : "임시저장") + " 오류", error); // 저장 또는 임시저장 오류 메시지 출력
            // alert("지원서 " + (distribution ? "저장" : "임시저장") + " 실패하였습니다");
        }
    };

    const handleSaveBtnClick = async () => { // 저장하기 버튼 클릭 시 사용하는 함수
        if (isConfirm) {
            alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
        } else {
            const confirmation = await confirm("지원서를 배포하시겠습니까?"); //window.confirm("지원서를 저장하시겠습니까?");
            if (confirmation) {
                await makeApplicationForm(true);
            }
        }
    };

    const handleTempSaveBtnClick = async () => { // 임시저장 버튼 클릭 시
        if (isConfirm) {
            alert('이 지원서는 이미 배포되었습니다. 수정할 수 없습니다.');
        } else {
            await makeApplicationForm(false);
        }
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
                    <items.ApplicationName>{title}</items.ApplicationName>
                    <items.StudySelectContainer>{studyName}</items.StudySelectContainer>
                    {/* <StudySelect value={title} onChange={setTitle} isConfirm={isConfirm} /> */}
                </items.ContentForTitleContainer>
            </items.InnerContainer>

            {questions.map((question, index) => (
            <items.SecondInnerContainer onClick={(e) => { e.stopPropagation(); handleClick(index); }} innerContainerClicked={innerContainerClicked[index]} key={index}>
                <items.QuestionNumberContainer innerContainerClicked={innerContainerClicked[index]} draggable="true" onDragStart={(e) => handleDragStart(e, index)} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, index)}>
                    <items.QuestionNumberImg innerContainerClicked={innerContainerClicked[index]} src="/img/touchblock.png" alt="터치블록" />
                    <items.QuestionNumberText>문항 {index + 1}</items.QuestionNumberText>
                </items.QuestionNumberContainer>
                <items.ContentContainer innerContainerClicked={innerContainerClicked[index]}>
                    <items.TypeAndQuestionContainer innerContainerClicked={innerContainerClicked[index]} >
                        <TypeSelection index={index} sequenceByIndex={index + 1} />
                        {question.type === '주관식' ? (
                            <items.TextQuestionContainer>
                                <items.QuestionContainer id={`textarea-${index}`} innerContainerClicked={innerContainerClicked[index]} type='text' placeholder='질문을 작성해주세요' value={question.textQuestion} onChange={(e) => onChangeTextQuestion(index, e)} />
                                {question.isRequired === true ? (
                                    <items.NecessaryImg src='/img/necessarystar.png' alt='필수' innerContainerClicked={innerContainerClicked[index]}  />
                                ) : (
                                    null
                                )}
                            </items.TextQuestionContainer>
                        ) : question.type === '객관식-단일' || question.type === '객관식-복수' ? (
                            <items.SelectionQuestionContainer>
                                <items.QuestionContainer id={`textarea-${index}`} innerContainerClicked={innerContainerClicked[index]} type='text' placeholder='질문을 작성해주세요' value={question.selectQuestion} onChange={(e) => onChangeSelectQuestion(index, e)} />
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
                                    <items.OptionsContainer key={fieldIndex}>
                                        {question.type === '객관식-단일' ? (
                                            <img src="/img/iconcircle.png" alt="단일응답" style={{width:"0.833rem", height:"0.833rem"}}  />
                                        ) : question.type === '객관식-복수' ? (
                                            <img src="/img/iconsquare.png" alt="복수응답" style={{width:"0.833rem", height:"0.833rem"}} />
                                        ) : null}
                                        <items.ChoiceForSelectQuestionContainer placeholder='옵션' type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} onBlur={() => onBlurStringField(index, fieldIndex)} />
                                        <items.ximg innerContainerClicked={innerContainerClicked[index]} onClick={() => removeStringField(index, fieldIndex)} src="/img/iconx.png" alt="x표시" />
                                    </items.OptionsContainer>
                                ))}
                                <items.AddOptionContainer innerContainerClicked={innerContainerClicked[index]}>
                                    {question.type === '객관식-단일' ? (
                                        <img src="/img/iconcircle.png" alt="단일응답" style={{ width: "0.833rem", height: "0.833rem"}} />
                                    ) : question.type === '객관식-복수' ? (
                                        <img src="/img/iconsquare.png" alt="복수응답" style={{ width: "0.833rem", height: "0.833rem"}} />
                                    ) : null}
                                    <items.AddOptionParagraphContainer onClick={() => addStringField(index)}>
                                        <items.paragraph1>옵션 추가</items.paragraph1>
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
                        <img onClick={() => removeQuestion(index)} src="/img/trashcan.png" alt="쓰레기통" style={{width:"1rem", height:"1rem", cursor:"pointer"}} />
                    </items.RequiredAndDeleteContainer> 
                </items.ContentContainer>
            </items.SecondInnerContainer>
            ))}
            <img src="/img/makingapplicationbtn.png" alt="문항추가하기" onClick={addQuestion} style={{ marginTop:"1.667rem", width: "7.875rem", height:"2.625rem", marginBottom:"8.167rem", cursor:"pointer"}} />

            
            <items.BtnContainer>
                <items.BtnContainer2>
                    <items.ArbitaryBtn onClick={handleTempSaveBtnClick} >임시저장</items.ArbitaryBtn>
                    <items.Btn onClick={handleSaveBtnClick}>저장하기</items.Btn>
                </items.BtnContainer2>
            </items.BtnContainer>
        </items.Container>
    )
}