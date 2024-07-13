import React, { useEffect, useState } from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.sidebar.styles"
import request from '../../Api/request';
import { useParams } from 'react-router-dom';

export default function RegularStudySideBar({setActiveComponent, activeComponent  }) {
  const { id } = useParams(); //파라미터로 각 학생별로 부여된 id를 받아옵니다
  const [regularStudyInfo, SetRegularStudyInfo] = useState(null);

  useEffect(() => {
    const fetchRegularStudyInfo = async () => {
      try {
        const response = await request.get(`study/${id}/info`);
        console.log("response", response);
        SetRegularStudyInfo(response.result);
        if (response["isSuccess"]) {
          console.log("정규 스터디 조회 성공");
      } else {
          console.error("정규 스터디 조회 실패:", response);
      }
      } catch (err) {
        console.error("정규스터디 정보 조회 오류", err);
      }
    }
    fetchRegularStudyInfo();
  }, []);

  return (
    <itemS.Container>
      <itemS.InnerContainer>
      {regularStudyInfo && (
          <>
            <itemS.StudyImgContainer>
              <img src={regularStudyInfo.profileUrl} alt="스터디 이미지" style={{width:"100%", height:"100%"}} />
            </itemS.StudyImgContainer>
            <itemS.TitleContainer>
              {regularStudyInfo.studyName} <img src="/img/iconregularstudy.png" alt="정규스터디 아이콘" style={{marginLeft:"8px", width:"44px", height:"21px"}} />
            </itemS.TitleContainer>
            <itemS.CountAndOnlineContainer>
              <itemS.CountContainer>
                <img src="/img/iconpeople.png" alt="사람아이콘" style={{width:"24px", height:"24px", marginRight:"8px"}} />
                 {regularStudyInfo.memberCount}명
              </itemS.CountContainer>
              <itemS.OnlineContainer>
                <img src="/img/icononline.png" alt="사람아이콘" style={{width:"24px", height:"24px", marginRight:"8px"}} />
                온라인
              </itemS.OnlineContainer>
            </itemS.CountAndOnlineContainer>
            {/* <itemS.ManagerNameContainer>
              <img src={regularStudyInfo.leaderProfileUrl} alt="회색동그라미" style={{width:"18px", height:"18px", marginRight:"8px"}} />
              {regularStudyInfo.leaderName}
              <img src="/img/iconstudymanager.png" alt="스터디장" style={{width:"58px", height:"19px", marginLeft:"8px"}} />
            </itemS.ManagerNameContainer> */}
          </>
        )}
        <itemS.LinkContainer>
          <itemS.styledLink 
            onClick={() => setActiveComponent('home')}
            isActive={activeComponent === 'home'}
          >
            홈 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>
          <itemS.styledLink 
            onClick={() => setActiveComponent('curriculum')}
            isActive={activeComponent === 'curriculum'}
          >
            커리큘럼 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>
          <itemS.ThirdstyledLink 
            onClick={() => setActiveComponent('attendance')}
            isActive={activeComponent === 'attendance'}
          >
            출석부 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.ThirdstyledLink>
        </itemS.LinkContainer>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
