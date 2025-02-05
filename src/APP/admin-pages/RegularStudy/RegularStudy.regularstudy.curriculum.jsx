import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.curriculum.styles";
import request from '../../Api/request';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function RegularStudyCurriculum() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curriculumList, setCurriculumList] = useState([]); // 커리큘럼 리스트 상태 추가
  const [currentWeek, setCurrentWeek] = useState(null); // 현재 주차 상태 추가
  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);

  const fetchCurriculumList = useCallback(async () => {
    try {
      const responseCurriculum = await request.get(`/study/${id}/curriculum`);
      console.log("정규스터디 커리큘럼 목록 조회: ", responseCurriculum);
      if (responseCurriculum["isSuccess"]) {
        setCurriculumList(responseCurriculum.result.curriculumList);
      }
    } catch (error) {
      console.error("커리큘럼 목록 조회 실패:", error);
    }
  }, [id]); // 'id'가 바뀔 때만 함수가 재생성됨

  const fetchCurrentWeek = useCallback(async () => {
    try {
      const responseCurrentWeek = await request.get('/week/current');
      console.log("현재 주차 정보 조회: ", responseCurrentWeek);
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

  const handleMakeCurri = () => {
    navigate(`/makingcurriculum/${id}`);
  };

  const handleCurriculumClick = (curriculumId) => {
    navigate(`/curriculumcheck/${curriculumId}`);
    console.log("내가선택한 커리큘럼 아이디", curriculumId);
  };

  const deleteCurriculumClick = async(curriculumId) => {
    const confirmation = await confirm("정말로 삭제하시겠습니까?");
    if(confirmation) {
      try {
        const responseDelete = await request.delete(`/curriculum/${curriculumId}`);
        console.log("커리큘럼 삭제 api응답: ", responseDelete);
        if(responseDelete.isSuccess){
          alert("커리큘럼이 삭제되었습니다. ");
          fetchCurriculumList();
        }
      } catch(error) {
        console.error('커리큘럼 삭제 오류: ', error);
      }
    }
  }

  const handleWriteClick = () => {
    navigate(`/writecurriculum`, {
      state: {
        studyId: id,
      },
    });
  };
  

  return (
    <itemS.Container>
      <itemS.Title>커리큘럼
        <itemS.BtnMakeCurri onClick={handleWriteClick}>+ 커리큘럼 생성하기</itemS.BtnMakeCurri>
      </itemS.Title>
      {curriculumList.map(curriculum => (
        <itemS.CurriculumContainer
          key={curriculum.curriculumId}
          isCurrentWeek={curriculum.week >= currentWeek} // 현재 주차인지 확인하여 props로 전달
        >
          <itemS.TextContainer>
            <itemS.CurriculumText onClick={() => handleCurriculumClick(curriculum.curriculumId)}>
              {curriculum.title}
            </itemS.CurriculumText>
            {curriculum.week === currentWeek && ( // 현재 주차일 경우에만 이미지를 표시 
              <itemS.HighlightBox>진행 중</itemS.HighlightBox>
            )}
          </itemS.TextContainer>
          <itemS.MiddleCurriculumContainer>
            <itemS.SmallCurriculumContainer style={{marginRight:"2.667rem"}}>
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
          <itemS.DeleteIcon key={curriculum.curriculumId} onClick={() => deleteCurriculumClick(curriculum.curriculumId)}>
            <img src="/img/GrayX.png" alt="x" style={{cursor:"pointer", width: "0.58rem", height: "0.58rem"}} />
          </itemS.DeleteIcon>
        </itemS.CurriculumContainer>
        ))}
    </itemS.Container>
  )
}