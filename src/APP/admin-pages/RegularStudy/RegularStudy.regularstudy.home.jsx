import React, { useEffect, useState } from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.home.styles"
import request from '../../Api/request'
import { useParams } from 'react-router-dom';

export default function RegularStudyHome() {
  const { id } = useParams(); //파라미터로 각 학생별로 부여된 id를 받아옵니다
  const [regularStudyHome, SetRegularStudyHome] = useState(null);

  useEffect(() => {
    const fetchRegularStudyHome = async () => {
      try {
        const response = await request.get(`study/${id}/home`);
        console.log("정규스터디 홈 정보 조회", response);
        SetRegularStudyHome(response.result);
        if (response["isSuccess"]) {
          console.log("정규스터디 홈 정보 조회 성공");
      } else {
          console.error("정규스터디 홈 정보 조회 실패:", response);
      }
      } catch (err) {
        console.error("정규스터디 홈 정보 조회 오류", err);
      }
    }
    fetchRegularStudyHome();
  }, []);
  return (
    <itemS.Container>
      <itemS.Title>홈
        <img src="/img/btnedit.png" alt="편집버튼" style={{width:"60px", height:"41px"}}  />
      </itemS.Title>
      <itemS.ContentContainer dangerouslySetInnerHTML={{ __html: regularStudyHome }} />
    </itemS.Container>
  )
}
