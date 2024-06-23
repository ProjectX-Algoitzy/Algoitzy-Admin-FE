import React, { useState } from 'react'
import Select, { components } from 'react-select';
import * as itemS from "./Styled/MakingRegularStudy.makingregularstudy.curriculum.styles"
import QuillPractice from "./MakingRegularStudy.makingregularstudy.quilleditor"
import request from '../../Api/request';

export default function MakingRegularStudyCurriculum() {
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSave = async () => {
        const requestData = {
            studyId: 2,
            title: title,
            week: selectedWeek,
            content: content
        };

        try {
            const response = await request.post('/curriculum', requestData)
            console.log(response);

            if (response["isSuccess"]) {
                alert("커리큘럼 제작됨")
            } 
        } catch (error) {
            console.error('커리큘럼 저장과정에서 에러', error);
        }
    };

    const WeeksSelect = ({ value, onChange }) => {
        const CustomDropdownIndicator = props => {
            return (
                <components.DropdownIndicator {...props}>
                    <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px", paddingRight:"216px" }} />
                </components.DropdownIndicator>
            );
        };

        const options = [
            { value: '1', label: '1주차' },
            { value: '2', label: '2주차' },
            { value: '3', label: '3주차' },
            { value: '4', label: '4주차' },
            { value: '5', label: '5주차' },
            { value: '6', label: '6주차' },
            { value: '7', label: '7주차' },
            { value: '8', label: '8주차' },
        ];

        return (
            <itemS.WeeksSelectContainer
                options={options}
                value={options.find(option => option.value === value)} 
                onChange={selectedOption => onChange(selectedOption.value)}
                placeholder="주차 선택"
                components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
                isSearchable={false}
            />
        );
    };
  return (
    <itemS.BackGroundContainer>
        <itemS.Container>
            <itemS.StyledPageName>커리큘럼</itemS.StyledPageName>
            <itemS.ContentContainer>
                <itemS.LittleContainer>
                    <itemS.StyledTitle>주차</itemS.StyledTitle>
                    <WeeksSelect value={selectedWeek} onChange={setSelectedWeek}/>
                </itemS.LittleContainer>

                <itemS.LittleContainer>
                    <itemS.StyledTitle>제목</itemS.StyledTitle>
                    <itemS.StyledInput placeholder='이름을 입력해주세요' type='text' value={title} onChange={onChangeTitle} />
                </itemS.LittleContainer>

                <itemS.LittleContainer>
                    <itemS.StyledTitle>설명</itemS.StyledTitle>
                    <QuillPractice setContent={setContent} />
                </itemS.LittleContainer>
            </itemS.ContentContainer>
        </itemS.Container>

        <itemS.BtnContainer>
            <itemS.BtnContainer2>
                <itemS.ArbitaryBtn onClick={handleSave}>임시저장</itemS.ArbitaryBtn>
                <itemS.Btn>개설하기</itemS.Btn>
            </itemS.BtnContainer2>
        </itemS.BtnContainer>
    </itemS.BackGroundContainer>
  )
}
