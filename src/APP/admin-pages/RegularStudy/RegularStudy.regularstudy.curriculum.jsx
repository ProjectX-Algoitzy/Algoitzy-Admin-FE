import React, {useCallback, useContext, useEffect, useState} from 'react';
import * as itemS from '../RegularStudy/Styled/RegularStudy.regularstudy.curriculum.styles';
import request from '../../Api/request';
import {AlertContext} from '../../Common/Alert/AlertContext';
import {ConfirmContext} from '../../Common/Confirm/ConfirmContext';
import {useNavigate, useParams} from 'react-router-dom';

export default function RegularStudyCurriculum() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [curriculumList, setCurriculumList] = useState([]); // 커리큘럼 리스트 상태 추가
    const [originalCurriculumList, setOriginalCurriculumList] = useState([]); // 드롭아웃을 위한 초기상태
    const [currentWeek, setCurrentWeek] = useState(null); // 현재 주차 상태 추가
    const [isModified, setIsModified] = useState(false); // 순서 변경 여부 상태 추가

    const {alert} = useContext(AlertContext);
    const {confirm} = useContext(ConfirmContext);

    const [draggedItemIndex, setDraggedItemIndex] = useState(null); // 드래그 시작한 index

    const fetchCurriculumList = useCallback(async () => {
        try {
            const responseCurriculum = await request.get(`/study/${id}/curriculum`);
            // console.log('정규스터디 커리큘럼 목록 조회: ', responseCurriculum);
            if (responseCurriculum['isSuccess']) {
                setCurriculumList(responseCurriculum.result.curriculumList);
                setOriginalCurriculumList(responseCurriculum.result.curriculumList); // 처음 값도 저장
            }
        } catch (error) {
            console.error('커리큘럼 목록 조회 실패:', error);
        }
    }, [id]); // 'id'가 바뀔 때만 함수가 재생성됨

    const fetchCurrentWeek = useCallback(async () => {
        try {
            const responseCurrentWeek = await request.get('/week/current');
            // console.log('현재 주차 정보 조회: ', responseCurrentWeek);
            if (responseCurrentWeek.isSuccess) {
                setCurrentWeek(responseCurrentWeek.result.week); // 현재 주차 상태 업데이트
            }
        } catch (error) {
            console.error('현재 주차 정보 조회 오류: ', error);
        }
    }, []);

    useEffect(() => {
        fetchCurriculumList();
        fetchCurrentWeek();
    }, [fetchCurriculumList, fetchCurrentWeek]);

    // const handleMakeCurri = () => {
    //     navigate(`/makingcurriculum/${id}`);
    // };

    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // 기본 드롭 막기
    };

    const handleDrop = (index) => {
        if (draggedItemIndex === null || draggedItemIndex === index) return;

        const newList = [...curriculumList];

        // 아이템 스왑
        const temp = newList[draggedItemIndex];
        newList[draggedItemIndex] = newList[index];
        newList[index] = temp;

        setCurriculumList(newList);
        setDraggedItemIndex(null);

        // 순서 변경 여부 확인
        const isSameOrder =
            JSON.stringify(newList.map((item) => item.curriculumId)) ===
            JSON.stringify(originalCurriculumList.map((item) => item.curriculumId));
        setIsModified(!isSameOrder);
    };

    const handleCurriculumClick = (curriculumId) => {
        navigate(`/curriculumcheck/${curriculumId}`);
        // console.log('내가선택한 커리큘럼 아이디', curriculumId);
    };

    const deleteCurriculumClick = async (curriculumId) => {
        const confirmation = await confirm('정말로 삭제하시겠습니까?');
        if (confirmation) {
            try {
                const responseDelete = await request.delete(`/curriculum/${curriculumId}`);
                // console.log('커리큘럼 삭제 api응답: ', responseDelete);
                if (responseDelete.isSuccess) {
                    alert('커리큘럼이 삭제되었습니다. ');
                    fetchCurriculumList();
                }
            } catch (error) {
                console.error('커리큘럼 삭제 오류: ', error);
            }
        }
    };

    const handleChangeOrder = async () => {
        if (!isModified) return;
        try {
            const curriculumIdList = curriculumList.map((item) => item.curriculumId);
            const response = await request.patch(`/study/${id}/curriculum/reorder`, {
                curriculumIdList,
            });

            // console.log('순서 변경 응답:', response);

            if (response.isSuccess) {
                alert('커리큘럼 순서가 성공적으로 변경되었습니다.');
                setIsModified(false);
                fetchCurriculumList(); // 최신 데이터 다시 불러오기
            }
        } catch (error) {
            console.error('순서 변경 API 오류:', error);
        }
    };

    const handleWriteClick = () => {
        navigate(`/writecurriculum`, {
            state: {
                studyId: id,
            },
        });
    };

    return (
        <itemS.Container>
            <itemS.Title>
                커리큘럼
                <itemS.BtnContainer>
                    <itemS.BtnChangeOrder isModified={isModified} onClick={handleChangeOrder}>
                        순서 변경하기
                    </itemS.BtnChangeOrder>{' '}
                    <itemS.BtnMakeCurri onClick={handleWriteClick}>+ 커리큘럼 생성하기</itemS.BtnMakeCurri>
                </itemS.BtnContainer>
            </itemS.Title>
            {curriculumList.map((curriculum, index) => (
                <itemS.CurriculumContainer
                    key={curriculum.curriculumId}
                    isCurrentWeek={curriculum.week >= currentWeek} // 현재 주차인지 확인하여 props로 전달
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                >
                    <itemS.TextContainer>
                        <itemS.CurriArrowImg
                            src="/img/curriarrow.png"
                            draggable
                            onDragStart={() => handleDragStart(index)}
                        />
                        <itemS.InnerTextContainer>
                            <itemS.CurriculumText onClick={() => handleCurriculumClick(curriculum.curriculumId)}>
                                {curriculum.title}
                            </itemS.CurriculumText>
                            {curriculum.week === currentWeek || ( // 현재 주차일 경우에만 이미지를 표시
                                <itemS.HighlightBox>진행 중</itemS.HighlightBox>
                            )}
                        </itemS.InnerTextContainer>
                    </itemS.TextContainer>
                    <itemS.MiddleCurriculumContainer>
                        <itemS.SmallCurriculumContainer style={{marginRight: '2.667rem'}}>
                            <itemS.Gray6Text>주차</itemS.Gray6Text>
                            <itemS.Gray7Text>{curriculum.week}주차</itemS.Gray7Text>
                        </itemS.SmallCurriculumContainer>
                        <itemS.SmallCurriculumContainer>
                            <itemS.Gray6Text>최종 수정</itemS.Gray6Text>
                            <itemS.Gray7Text>
                                {curriculum.updatedName}
                                <itemS.Gray5Text>{curriculum.updatedTime}</itemS.Gray5Text>
                            </itemS.Gray7Text>
                        </itemS.SmallCurriculumContainer>
                    </itemS.MiddleCurriculumContainer>
                    <itemS.DeleteIcon
                        key={curriculum.curriculumId}
                        onClick={() => deleteCurriculumClick(curriculum.curriculumId)}
                    >
                        <img
                            src="/img/GrayX.png"
                            alt="x"
                            style={{cursor: 'pointer', width: '0.58rem', height: '0.58rem'}}
                        />
                    </itemS.DeleteIcon>
                </itemS.CurriculumContainer>
            ))}
        </itemS.Container>
    );
}
