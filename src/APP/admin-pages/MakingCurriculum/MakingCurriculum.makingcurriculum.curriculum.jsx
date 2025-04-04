import React, { useContext, useEffect, useState } from 'react'
import Select, { components } from 'react-select';
import * as itemS from "./Styled/MakingCurriculum.makingcurriculum.curriculum.styles"
import QuillPractice from "./MakingCurriculum.makingcurriculum.quilleditor"
import request from '../../Api/request';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function MakingCurriculum() {
    const { studyId } = useParams();  //스터디 아이디
    const navigate = useNavigate();
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [regularStudyList, setRegularStudyList] = useState([]);
    const { alert } = useContext(AlertContext);

    useEffect(() => {
        const fetchStudyCurriculum = async () => {
            try {
                const responseCurriculum = await request.get('/study');
                if (responseCurriculum.isSuccess) {
                    setRegularStudyList(responseCurriculum.result.studyList);
                }
            } catch (error) {
                console.error('스터디 커리큘럼 목록 조회 오류', error);
            }
        };
        fetchStudyCurriculum();
    }, []);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSave = async () => {
        const requestData = {
            studyId: studyId,  
            title: title,
            week: selectedWeek,
            content: content
        };

        try {
            const response = await request.post('/curriculum', requestData)
            console.log(response);

            if (response["isSuccess"]) {
                navigate(`/regularstudy/${studyId}?activeComponent=curriculum`);
                window.history.replaceState({}, '', `/regularstudy/${studyId}`);  //이 코드를 통해 ?activeComponent=curriculum에 해당하는 부분을 주소창에서 숨긴다
            } 
        } catch (error) {
            console.error('커리큘럼 저장과정에서 에러', error);
        }
    };

    // const CustomDropdownIndicator = props => {
    //     return (
    //         <components.DropdownIndicator {...props}>
    //             <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px", paddingRight: "216px" }} />
    //         </components.DropdownIndicator>
    //     );
    // };

    // const formatOptionLabel = ({ value, label }) => (
    //     <div>
    //         {label.replace(" 지원서", "")}
    //     </div>
    // );

    // const options = regularStudyList.map(study => ({
    //     value: study.studyId,
    //     label: `${study.name} 지원서`
    // }));

    // const handleStudyChange = selectedOption => {
    //     setStudyId(selectedOption.value);
    // };

    const WeeksSelect = ({ value, onChange }) => {
        const CustomDropdownIndicator = props => {
            return (
                <components.DropdownIndicator {...props}>
            <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "1rem", height: "1rem", padding: "0" }} />
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
                    <itemS.StyledTitle>제목</itemS.StyledTitle>
                    <itemS.StyledInput placeholder='이름을 입력해주세요' type='text' value={title} onChange={onChangeTitle} />
                </itemS.LittleContainer>

                {/* <itemS.LittleContainer>
                    <itemS.StyledTitle>스터디 선택</itemS.StyledTitle>
                    <itemS.WeeksSelectContainer
                        options={options}
                        value={options.find(option => option.value === studyId)}
                        onChange={handleStudyChange}
                        placeholder="스터디 선택"
                        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
                        formatOptionLabel={formatOptionLabel}
                        isSearchable={false}
                    />
                </itemS.LittleContainer> */}
                <itemS.LittleContainer>
                    <itemS.StyledTitle>주차</itemS.StyledTitle>
                    <WeeksSelect value={selectedWeek} onChange={setSelectedWeek}/>
                </itemS.LittleContainer>

                <itemS.LittleContainer>
                    <itemS.StyledTitle>설명</itemS.StyledTitle>
                    <QuillPractice setContent={setContent} />
                </itemS.LittleContainer>
            </itemS.ContentContainer>
        </itemS.Container>

        <itemS.BtnContainer>
            <itemS.BtnContainer2>
                <itemS.Btn onClick={handleSave}>생성하기</itemS.Btn>
            </itemS.BtnContainer2>
        </itemS.BtnContainer>
    </itemS.BackGroundContainer>
  )
}
