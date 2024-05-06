import React, { useState } from 'react'
import * as items from './Styled/MakingApplication.makingapplication.styles'
import request from '../../Api/request';
import styled from 'styled-components';
import * as tokens from "../../../tokens"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  //background-image: ;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
  border:5px solid red;  
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border:5px solid blue; 
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.Grey_4};
  border-radius: 20px;
  padding: 128px 305px;
  /* height: 172px;
  width: 50%; */
`;

const TypeContainer = styled.div` //주관식인지 객관식인지 판별하는 type를 위한 콘테이너
  display: flex;
  flex-direction: column;
  border: 5px solid blue;
`;

const TextQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border:5px solid purple; 
`;

const SelectionQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border:5px solid green; 
`;

export default function MakingApplication() { 
    //지원저 제작을 담당하는 페이지입니다. 로그인화면이 구현됨에 따라 accesstoken을 따로 받아올 수 있돌고 처리하겠습니다
    const [title, setTitle] = useState('');  // 해당 지원서의 제목을 저장
    const [questions, setQuestions] = useState([]); //각 문항들을 저장하는 배열
    const navigate = useNavigate();

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const StudySelect = ({ value, onChange }) => {  //해당 지원서의 스터디들을 정리해놓은 select box
        return (
            <select value={value} onChange={onChange}>
                <option value="">스터디 선택</option>
                <option value="코딩테스트 대비반">코딩테스트 대비반</option>
                <option value="코딩테스트 기초반">코딩테스트 기초반</option>
                <option value="CS면접대비">CS면접대비</option>
            </select>
        );
    }
    
    const addQuestion = () => { // 문항 추가
        setQuestions([...questions, {type: ''}]);
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

    const TypeSelection = ({ index, sequenceByIndex }) => { //어떤 종류의 질문인지 정하고 그 종류에 맞는 Question 배열을 초기화하는 함수
        const handleTypeSelection = (selectedType) => {
            const updatedQuestions = [...questions];
            let newQuestion = {};
    
            if (selectedType === "주관식") {
                newQuestion = {
                    type: selectedType,
                    textQuestion: '',
                    isRequired_Text: false,
                    sequence: sequenceByIndex
                };
            } else if (selectedType === "객관식-단일") {
                newQuestion = {
                    type: selectedType,
                    selectQuestion: '',
                    isRequired_Select: false,
                    isMultiselect: false,
                    sequence: sequenceByIndex,
                    howManyFields: 0,
                    stringFields: []
                };
            } else if (selectedType === '객관식-복수') {
                newQuestion = {
                    type: selectedType,
                    selectQuestion: '',
                    isRequired_Select: false,
                    isMultiselect: true,
                    sequence: sequenceByIndex,
                    howManyFields: 0,
                    stringFields: []
                };
            }
    
            updatedQuestions[index] = newQuestion;
            setQuestions(updatedQuestions);
        };
    
        return (
            <select value={questions[index]?.type} onChange={(e) => handleTypeSelection(e.target.value)}>
                <option value="">질문 유형 선택</option>
                <option value="주관식">주관식 질문</option>
                <option value="객관식-단일">객관식 질문 (단일 응답) </option>
                <option value="객관식-복수">객관식 질문 (복수 응답) </option>
            </select>
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

    const onChangeHowManyFields = (index, e) => {  //객관식 보기의 개수를 담당하는 onChnage함수 
        const count = parseInt(e.target.value);
        const updatedQuestions = [...questions];
        updatedQuestions[index].howManyFields = count;

        const fieldsArray = Array.from({ length: count }, () => '');
        updatedQuestions[index].stringFields = fieldsArray;

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

    const onChangeIsRequired_Text = (index, e) => {  //주관식의 필수대답 여부를 결정하는 함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].isRequired_Text = e.target.checked;
        setQuestions(updatedQuestions);
    }

    const onChangeIsRequired_Select = (index, e) => { //객관식의 필수대답 여부를 결정하는 함수
        const updatedQuestions = [...questions];
        updatedQuestions[index].isRequired_Select = e.target.checked;
        setQuestions(updatedQuestions);
    } 

    const makeApplicationForm = async () => { // 지원서 만드는 함수
        const createTextQuestionRequestList = [];
        const createSelectQuestionRequestList = [];
    
        questions.forEach(question => {
            if (question.type === '주관식') {
                createTextQuestionRequestList.push({
                    question: question.textQuestion,
                    isRequired: question.isRequired_Text,
                    sequence: question.sequence
                });
            } else if (question.type === '객관식-단일' || question.type === '객관식-복수') {
                const createFieldRequestList = question.stringFields.map(value => ({ context: value }));
                createSelectQuestionRequestList.push({
                    question: question.selectQuestion,
                    isRequired: question.isRequired_Select,
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

    return (
        <Container>
            <InnerContainer>
                <TitleContainer>제목</TitleContainer>
                <ContentContainer>
                    <div>KOALA 1기 스터디 지원서</div>
                    <StudySelect value={title} onChange={onChangeTitle} />
                </ContentContainer>
            </InnerContainer>

            {questions.map((question, index) => (
                <InnerContainer key={index} draggable="true" onDragStart={(e) => handleDragStart(e, index)} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, index)} >
                    <TitleContainer>문항 {index + 1}</TitleContainer>
                    <ContentContainer>
                        <TypeContainer>
                            <TypeSelection index={index} sequenceByIndex={index + 1} />
                            {question.type === '주관식' ? (
                                <TextQuestionContainer>
                                    <input type='text' placeholder='질문을 작성해주세요-주관식-' value={question.textQuestion} onChange={(e) => onChangeTextQuestion(index, e)} />
                                    <div>필수설정<input type="checkbox" checked={question.isRequired_Text} onChange={(e) => onChangeIsRequired_Text(index, e)}/></div>
                                </TextQuestionContainer>
                            ) : question.type === '객관식-단일' || question.type === '객관식-복수' ? (
                                <SelectionQuestionContainer>
                                    <input type='text' placeholder='질문을 작성해주세요-객관식-' value={question.selectQuestion} onChange={(e) => onChangeSelectQuestion(index, e)} />
                                    {/* <div>답변개수<input type='number' value={question.howManyFields} onChange={(e) => onChangeHowManyFields(index, e)} /></div> */}
                                    
                                    {question.stringFields.map((value, fieldIndex) => (
                                        <div key={fieldIndex}>
                                            <input type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} />
                                            <button onClick={() => removeStringField(index, fieldIndex)}>-</button>
                                        </div>
                                    ))}
                                    <button onClick={() => addStringField(index)}>+</button>
                                    <div>필수설정<input type="checkbox" checked={question.isRequired_Select} onChange={(e) => onChangeIsRequired_Select(index, e)}/></div>
                                </SelectionQuestionContainer>
                            // ) : question.type === '객관식-복수' ? (
                            //     <SelectionQuestionContainer>
                            //         <input type='text' placeholder='질문을 작성해주세요-객관식-' value={question.selectQuestion} onChange={(e) => onChangeSelectQuestion(index, e)} />
                            //         <div>답변개수<input type='number' value={question.howManyFields} onChange={(e) => onChangeHowManyFields(index, e)} /></div>
                            //         {question.stringFields.map((value, fieldIndex) => (
                            //             <div key={fieldIndex}>
                            //                 <input type='text' value={value} onChange={(e) => onChangeStringField(index, fieldIndex, e)} />
                            //             </div>
                            //         ))}
                            //         <div>필수설정<input type="checkbox" checked={question.isRequired_Select} onChange={(e) => onChangeIsRequired_Select(index, e)}/></div>
                            //     </SelectionQuestionContainer>
                            ) : (
                                <div>어느 타입인지 선택해주세요.</div>
                            )}
                            <button onClick={() => removeQuestion(index)}>문항 삭제</button>
                        </TypeContainer>
                    </ContentContainer>
                </InnerContainer>
            ))}
            <button onClick={addQuestion}>문항 추가하기</button>
            <button onClick={makeApplicationForm}>저장하기</button>            
        </Container>
    )
}
