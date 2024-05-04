import React, { useState } from 'react'
import * as items from './Styled/MakingApplication.makingapplication.styles'
import request from '../../Api/request';
import styled from 'styled-components';
import * as tokens from "../../../tokens"

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

export default function MakingApplication() { 
    //지원저 제작을 담당하는 페이지입니다. 로그인화면이 구현됨에 따라 accesstoken을 따로 받아올 수 있돌고 처리하겠습니다
    const [title, setTitle] = useState('');
    const [textQuestion, setTextQuestion] = useState('');
    const [selectQuestion, setSelectQuestion] = useState('');
    const [howManyFields, setHowManyFields] = useState(0);
    const [stringFields, setStringFields] = useState([]);
    const [isRequired_Text, setIsRequired_Text] = useState(false);
    const [isRequired_Select, setIsRequired_Select] = useState(false);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const StudySelect = ({ value, onChange }) => {
        return (
            <select value={value} onChange={onChange}>
                <option value="">스터디 선택</option>
                <option value="코딩테스트 대비반">코딩테스트 대비반</option>
                <option value="코딩테스트 기초반">코딩테스트 기초반</option>
                <option value="CS면접대비">CS면접대비</option>
            </select>
        );
    }

    const onChangeTextQuestion = (e) => {
        setTextQuestion(e.target.value);
    }

    const onChangeSelectQuestion = (e) => {
        setSelectQuestion(e.target.value);
    }

    const onChangeHowManyFields = (e) => { //객관식 문항을 담당하는 onChange함수입니다
        const count = parseInt(e.target.value);
        setHowManyFields(count);

        const fieldsArray = Array.from({ length: count }, () => '');
        setStringFields(fieldsArray);
    }

    const onChangeStringField = (e, index) => { //객관식 문항의 개수를 담당하는 onChnage함수입니다
        const updatedFields = [...stringFields];
        updatedFields[index] = e.target.value;
        setStringFields(updatedFields);
    }

    const onChangeIsRequired_Text = (e) => {
        setIsRequired_Text(e.target.checked);
    }

    const onChangeIsRequired_Select = (e) => {
        setIsRequired_Select(e.target.checked);
    } 

    const makeApplicationForm = async () => {
        const createFieldRequestList = stringFields.map(value => ({ context: value }));
        const requestData = {
            studyId: 1,
            title: title,
            createTextQuestionRequestList: [
                { 
                    question: textQuestion, 
                    isRequired: isRequired_Text 
                }
            ],
            createSelectQuestionRequestList: [
                {
                    question: selectQuestion,
                    isRequired: isRequired_Select,
                    isMultiSelect: true,
                    createFieldRequestList: createFieldRequestList
                }
            ]
        };

        try {
            const response = await request.post('/application', requestData);
            console.log("response", response);
            if (response["isSuccess"]) {
                console.log("지원서 제작 성공");
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

            <InnerContainer>
                <TitleContainer>문항1</TitleContainer>
                <ContentContainer>
                    <input type='text' placeholder='질문을 작성해주세요-주관식-' value={textQuestion} onChange={onChangeTextQuestion} />
                    <div>필수설정<input type="checkbox" checked={isRequired_Text} onChange={onChangeIsRequired_Text}/></div>
                </ContentContainer>
            </InnerContainer>

            <InnerContainer>
                <TitleContainer>문항2</TitleContainer>
                <ContentContainer>
                    <input type='text' placeholder='질문을 작성해주세요-객관식-' value={selectQuestion} onChange={onChangeSelectQuestion} />
                    <div>답변개수<input type='number' value={howManyFields} onChange={onChangeHowManyFields} /></div>
                    {stringFields.map((value, index) => (
                        <div key={index}>
                            <input type='text' value={value} onChange={(e) => onChangeStringField(e, index)} />
                        </div>
                    ))}
                    <div>필수설정<input type="checkbox" checked={isRequired_Select} onChange={onChangeIsRequired_Select}/></div>
                </ContentContainer>
            </InnerContainer>
            
            <button onClick={makeApplicationForm}>저장하기</button>
        </Container>
    )
}
