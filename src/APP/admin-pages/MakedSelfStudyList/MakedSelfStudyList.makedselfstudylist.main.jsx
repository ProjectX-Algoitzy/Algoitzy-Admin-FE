import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MakedSelfStudyListIndividual from './MakedSelfStudyList.makedselfstudylist.indivisual';
import * as itemS from "../../admin-pages/MakedSelfStudyList/Styled/MakedSelfStudyList.makedselfstudylist.main.styles";
import { dummyData } from './dummy';

export default function MakedSelfStudyList() {

  const navigate = useNavigate();
  const [applicationList, setApplicationList] = useState([]);

  useEffect(() => {
    // const fetchMakedApplicationDetail = async () => {
    //   try {
    //     const response = await request.get(`/application`);
    //     console.log("response", response);
    //     console.log("applicationList", response.result.applicationList);
  
    //     if (response.isSuccess) {
    //       console.log("제작된 지원서 조회 성공");
    //       setApplicationList(response.result.applicationList);
    //     } else {
    //       console.error("제작된 지원서 조회 실패:", response);
    //     }
    //   } catch (error) {
    //     console.error('제작된 지원서 조회 오류', error);
    //   }
    // };
    // fetchMakedApplicationDetail();
    setApplicationList(dummyData);
  }, []);
    
  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.TitleContainer>
          <itemS.ApplicationText>
            자율 스터디
          </itemS.ApplicationText>
          <itemS.Select>
            KOALA 4기
          </itemS.Select>
          
        </itemS.TitleContainer>
        <itemS.Group>
          {applicationList.map((item) => (
            <MakedSelfStudyListIndividual 
              key={item.applicationId} 
              application={item} 
            />
          ))}
        </itemS.Group>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
