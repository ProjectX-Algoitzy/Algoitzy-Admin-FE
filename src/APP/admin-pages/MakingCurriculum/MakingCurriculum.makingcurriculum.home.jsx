import React, { useEffect, useState } from 'react';
import * as items from "./Styled/MakingCurriculum.makingcurriculum.home.styles";
import request from '../../Api/request';
import Select, { components } from 'react-select';
import { useNavigate } from 'react-router-dom';

export default function MakingCurriculumHome() {
    const navigate = useNavigate();
    const [studyId, setStudyId] = useState(null);
    const [isConfirm, setIsConfirm] = useState(false);
    const [title, setTitle] = useState('');
    const [regularStudyList, setRegularStudyList] = useState([]);
    const [curriculumList, setCurriculumList] = useState([]); // 커리큘럼 리스트 상태 추가

    useEffect(() => {
        const fetchStudyCurriculum = async () => {
            try {
                const responseCurriculum = await request.get('/study');
                if(responseCurriculum.isSuccess) {
                    setRegularStudyList(responseCurriculum.result.studyList);
                }
            } catch (error) {
                console.error('스터디 커리큘럼 목록 조회 오류', error);
            }
        }
        fetchStudyCurriculum();
    }, []);

    useEffect(() => {
        const fetchCurriculumList = async () => {
            if (studyId !== null) {
                try {
                    const responseCurriculum = await request.get(`/study/${studyId}/curriculum`);
                    console.log("responseCurriculum", responseCurriculum);
                    if (responseCurriculum.isSuccess) {
                        setCurriculumList(responseCurriculum.result.curriculumList);
                    }
                } catch (error) {
                    console.error('커리큘럼 목록 조회 오류', error);
                }
            }
        }
        fetchCurriculumList();
    }, [studyId]); // studyId가 변경될 때마다 커리큘럼 목록을 가져옴

    const CustomDropdownIndicator = props => (
        <components.DropdownIndicator {...props}>
            <img src="/img/icontriangle.png" alt="triangle-icon" style={{width: "20px", height: "20px", marginRight:"10px"}} />
        </components.DropdownIndicator>
    );

    const formatOptionLabel = ({ value, label }) => (
        <div>
            {label.replace(" 지원서", "")}
        </div>
    );

    const options = regularStudyList.map(study => ({
        value: study.studyId,
        label: `${study.name} 지원서`
    }));

    const handleStudyChange = selectedOption => {
        setStudyId(selectedOption.value);
        setTitle(selectedOption.label);
    };

    const handleMakeCurri = () => {
        navigate('/makingcurriculum');
    };

    const handleCurriculumClick = (curriculumId) => {
        navigate(`/curriculumcheck`, { state: { curriculumId } });
        console.log("내가선택한 커리큘럼 아이디", curriculumId);
    };

    useEffect(() => {
        console.log("선택된 스터디 ID:", studyId);
    }, [studyId]);

    return (
        <items.Container>
            <items.Title>커리큘럼
                <items.BtnMakeCurri onClick={handleMakeCurri}>+ 커리큘럼 생성하기</items.BtnMakeCurri>
            </items.Title>
            <div onClick={e => e.stopPropagation()}>
                <items.StudySelectContainer
                    options={options}
                    value={options.find(option => option.value === studyId)}
                    onChange={handleStudyChange}
                    placeholder="스터디 선택"
                    isSearchable={false}
                    components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
                    formatOptionLabel={formatOptionLabel}
                    disabled={isConfirm}
                />
            </div>
            {curriculumList.map(curriculum => (
                <items.CurriculumContainer key={curriculum.curriculumId} onClick={() => handleCurriculumClick(curriculum.curriculumId)}>
                    <items.CurriculumTextAndDate>
                        <items.CurriculumText>{curriculum.title}</items.CurriculumText>
                        <items.CurriculumDate>{curriculum.updatedTime}</items.CurriculumDate>
                    </items.CurriculumTextAndDate>
                    <items.KeyIcon />
                </items.CurriculumContainer>
            ))}
        </items.Container>
    );
}
