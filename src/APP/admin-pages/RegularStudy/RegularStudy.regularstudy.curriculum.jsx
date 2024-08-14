import React, { useContext, useEffect, useState } from 'react';
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.curriculum.styles";
import request from '../../Api/request';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function RegularStudyCurriculum() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curriculumList, setCurriculumList] = useState([]); // 커리큘럼 리스트 상태 추가
  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);

  useEffect(() => {
    fetchCurriculumList();
  }, [id]); 

  const fetchCurriculumList = async () => {
    try {
        const responseCurriculum = await request.get(`/study/${id}/curriculum`);
        console.log("정규 스터디 커리큘럼 조회: ", responseCurriculum);
        if (responseCurriculum.isSuccess) {
            setCurriculumList(responseCurriculum.result.curriculumList);
        }
    } catch (error) {
        console.error('커리큘럼 목록 조회 오류', error);
    } 
  }

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
  
  return (
    <itemS.Container>
      <itemS.Title>커리큘럼
        <itemS.BtnMakeCurri onClick={handleMakeCurri}>+ 커리큘럼 생성하기</itemS.BtnMakeCurri>
      </itemS.Title>
      {curriculumList.map(curriculum => (
        <itemS.CurriculumContainer>
            <itemS.CurriculumText key={curriculum.curriculumId} onClick={() => handleCurriculumClick(curriculum.curriculumId)}>{curriculum.title}</itemS.CurriculumText>
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
              <itemS.DeleteIcon key={curriculum.curriculumId} onClick={() => deleteCurriculumClick(curriculum.curriculumId)}  />
            </itemS.MiddleCurriculumContainer>
        </itemS.CurriculumContainer>
        ))}
    </itemS.Container>
  )
}