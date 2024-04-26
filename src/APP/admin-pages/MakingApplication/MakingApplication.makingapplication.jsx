import React, { useState } from 'react'
import * as items from './Styled/MakingApplication.makingapplication.styles'
import axios from 'axios'
import styled from "styled-components";
import * as tokens from "../../../tokens"

export default function MakingApplication() {

    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndGo1NTdAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImVtYWlsIjoiZ3RqNTU3QG5hdmVyLmNvbSIsImV4cCI6MTcxNDE0NDcwNn0.n8gf77BvPCG1MSG64hk-yEM-ErecLkasjVB9FMi3h0_j27ykwD82nvBTSkrgcHm8hXg258iRhCqefHJxNKEmHw";


    const [title, setTitle] = useState('');
    const [textQuestion, setTextQuestion] = useState('');
    const [selectQuestion, setSelectQuestion] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    
    
    //지금은 임시로 이렇게 주관식 1개, 객관식2개만 만들어서 잘 동작하는 지 확인만
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeTextQestion = (e) => {
        setTextQuestion(e.target.value);
    }

    const onChangeSelectQuestion = (e) => {
        setSelectQuestion(e.target.value);
    }

    const onChangeSelectedDepartment = (e) => {
        setSelectedDepartment(e.target.value);
    } 

    // const OPTIONS = [
    //     { selectValue: "소프트웨어학과", name: "소프트웨어학과" },
    //     { selectValue: "항공우주기계공학과", name: "항공우주기계공학과" },
    //     { selectValue: "경영학과", name: "경영학과" },
    // ];
    
    // const SelectBox = (props) => {
    //     return (
    //         <select>
    //             {props.options.map((option) => (
    //                 <option
    //                     key={option.selectValue}
    //                     value={option.selectValue}
    //                 >
    //                     {option.name}
    //                 </option>
    //             ))}
    //         </select>
    //     );
    // };

    const SelectBox = ({ value, onChange }) => {
        return (
            <select value={value} onChange={onChange}>
                <option value="소프트웨어학과">소프트웨어학과</option>
                <option value="경영학과">경영학과</option>
                <option value="기계공학과">기계공학과</option>
            </select>
        );
    }

    const makeApplicationForm = async () => {
        const requestData = {
        studyId: 1,
        title: title,
        createTextQuestionRequestList: [
            {
            question: textQuestion
            }
        ],
        createSelectQuestionRequestList: [
            {
            question: selectQuestion,
            createFieldRequestList: [
                {
                stringField: selectedDepartment
                }
            ]
            }
        ]
        };

        const header = {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }

        try {
        const response = await axios.post('http://3.35.47.250:8181/application', requestData, header);
        console.log("response", response);
        if(response.status === 200){
            console.log("지원서 제작성공")

        } else {
            console.error("회원가입 실패:", response.data);
        }
        } catch (error) {
        console.log("지원서 제작오류", error);
        }

    }

  return (
    <div>
        <div>지원서제작을 위한 페이지</div>
        <div><items.InputBox type='text' placeholder='이 지원서의 제목을 적어라' value={title} onChange={onChangeTitle} /></div>
        <div><items.InputBox type='text' placeholder='이 지원서의 주관식 내용을 적어라' value={textQuestion} onChange={onChangeTextQestion} /></div>
        <div>
            <items.InputBox type='text' placeholder='이 지원서의 객관식 내용을 적어라' value={selectQuestion} onChange={onChangeSelectQuestion} />
            <SelectBox value={selectedDepartment} onChange={onChangeSelectedDepartment} />
        </div>
        <items.Btn onClick={makeApplicationForm}>
            <div>저장하기</div>
        </items.Btn>
    </div>
  )
}
