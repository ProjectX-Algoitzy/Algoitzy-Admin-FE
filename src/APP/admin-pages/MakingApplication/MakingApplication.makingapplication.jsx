import React, { useState } from 'react'
import * as items from './Styled/MakingApplication.makingapplication.styles'
import axios from 'axios'

export default function MakingApplication() { 
    //지원저 제작을 담당하는 페이지입니다. 로그인화면이 구현됨에 따라 accesstoken을 따로 받아올 수 있돌고 처리하겠습니다
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndGo1NTdAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImVtYWlsIjoiZ3RqNTU3QG5hdmVyLmNvbSIsImV4cCI6MTcxNDI5MjQxM30.A5yByCAjusF8UJR2FJFympsxXn_V-FIkC4sLz7OAUjVqVW_cPW6eoGbfhoGqqC-YnLTVVbgT3q0tiI_0vRNhnA";
    const [title, setTitle] = useState('');
    const [textQuestion, setTextQuestion] = useState('');
    const [selectQuestion, setSelectQuestion] = useState('');
    const [howManyFields, setHowManyFields] = useState(0);
    const [stringFields, setStringFields] = useState([]);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
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

    const makeApplicationForm = async () => {
        const createFieldRequestList = stringFields.map(value => ({ context: value }));
        const requestData = {
            studyId: 1,
            title: title,
            createTextQuestionRequestList: [{ question: textQuestion }],
            createSelectQuestionRequestList: [
                {
                    question: selectQuestion,
                    createFieldRequestList: createFieldRequestList
                }
            ]
        };

        const header = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post('http://3.35.47.250:8181/application', requestData, header);
            console.log("response", response);
            if (response.status === 200) {
                console.log("지원서 제작 성공");
            } else {
                console.error("지원서 제작 실패:", response.data);
            }
        } catch (error) {
            console.error("지원서 제작 오류", error);
        }
    }

    return (
        <div>
            <div>지원서 제작을 위한 페이지</div>
            <div><input type='text' placeholder='이 지원서의 제목을 적어라' value={title} onChange={onChangeTitle} /></div>
            <div><input type='text' placeholder='이 지원서의 주관식 내용을 적어라' value={textQuestion} onChange={onChangeTextQuestion} /></div>
            <div><input type='text' placeholder='이 지원서의 객관식 내용을 적어라' value={selectQuestion} onChange={onChangeSelectQuestion} /></div>
            <div><input type='number' placeholder='객관식 필드' value={howManyFields} onChange={onChangeHowManyFields} /></div>
            {stringFields.map((value, index) => (
                <div key={index}>
                    <input type='text' value={value} onChange={(e) => onChangeStringField(e, index)} />
                </div>
            ))}
            <button onClick={makeApplicationForm}>저장하기</button>
        </div>
    )
}
