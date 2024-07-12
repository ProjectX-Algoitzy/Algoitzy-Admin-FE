import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RegularStudyListIndividual from './RegularStudyList.regularstudylist.indivisual';
import * as itemS from "../../admin-pages/RegularStudyList/Styled/RegularStudyList.regularstudylist.main.styles";
import request from '../../Api/request';

export default function RegularStudyList() {

  const navigate = useNavigate();
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    const fetchMakedApplicationDetail = async () => {
      try {
        const response = await request.get(`/study`);
        console.log("response", response);
        // console.log("studyList", response.result.studyList);
  
        if (response.isSuccess) {
          console.log("정규 스터디 조회 성공");
          setStudyList(response.result.studyList);
        } else {
          console.error("정규 스터디 조회 실패:", response);
        }
      } catch (error) {
        console.error('정규 스터디 조회 오류', error);
      }
    };
    fetchMakedApplicationDetail();
  }, []);

  const MakeRegularStudy = () => { 
		navigate(`/makingregularstudyinfo`);
	}
    
  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.TitleContainer>
          <itemS.ApplicationText>
            정규 스터디
          </itemS.ApplicationText>
          <itemS.BtnMakeApp onClick={MakeRegularStudy}>
            + 스터디 생성하기
          </itemS.BtnMakeApp>
          
        </itemS.TitleContainer>
        <itemS.Group>
          {studyList.map((item) => (
            <RegularStudyListIndividual 
              key={item.studyId} 
              application={item} 
            />
          ))}
        </itemS.Group>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
