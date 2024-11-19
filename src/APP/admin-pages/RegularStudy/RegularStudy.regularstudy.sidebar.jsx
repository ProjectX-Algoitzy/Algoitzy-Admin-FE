import React, { useEffect, useState } from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.sidebar.styles"
import request from '../../Api/request';
import { useNavigate, useParams } from 'react-router-dom';

export default function RegularStudySideBar({setActiveComponent, activeComponent  }) {
  const { id } = useParams(); //파라미터로 각 스터디별로 부여된 id를 받아옵니다
  const [regularStudyInfo, SetRegularStudyInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegularStudyInfo = async () => {
      try {
        const response = await request.get(`study/${id}/info`);
        console.log("정규스터디 사이드바 정보: ", response);
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
  }, [id]);

  const handleMakeApp = async () => {
    try {
      const responseApplication = await request.post(`/application`, { studyId: id });
      if (responseApplication["isSuccess"]) {
        console.log("지원서 제작 페이지로 이동");
        navigate(`/newapplication/${responseApplication.result.applicationId}`);
      } else {
        console.error("지원서 제작 페이지로 이동 실패", responseApplication);
      }
    } catch (error) {
      console.error("지원서 생성 오류", error);
    }
  };

  return (
    <itemS.Container>
      <itemS.InnerContainer>
      {regularStudyInfo && (
          <>
            <itemS.StudyImgContainer>
              <img src={regularStudyInfo.profileUrl} alt="스터디 이미지" style={{width:"100%", height:"100%"}} />
            </itemS.StudyImgContainer>
            <itemS.TitleContainer>
              {regularStudyInfo.studyName} <img src="/img/iconregularstudy.png" alt="정규스터디 아이콘" style={{marginLeft:"0.333rem", width:"1.833rem", height:"0.875rem"}} />
            </itemS.TitleContainer>
            <itemS.CountAndOnlineContainer>
              <itemS.CountContainer>
                <img src="/img/iconpeople.png" alt="사람아이콘" style={{width:"1rem", height:"1rem", marginRight:"0.333rem"}} />
                 {regularStudyInfo.memberCount}명
              </itemS.CountContainer>
            </itemS.CountAndOnlineContainer>
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
            onClick={() => {
              if (regularStudyInfo.applicationId === 0) {
                handleMakeApp();
              } else {
                navigate(`/newapplication/${regularStudyInfo.applicationId}`);
              }
            }}
          >
            지원서 제작 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표" />
          </itemS.styledLink>
          <itemS.styledLink 
            onClick={() => setActiveComponent('curriculum')} 
            isActive={activeComponent === 'curriculum'}
          >
            커리큘럼 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>
          <itemS.styledLink 
            onClick={() => setActiveComponent('mocktest')}
            isActive={activeComponent === 'mocktest'}
          >
            모의테스트 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>
          <itemS.styledLink 
            onClick={() => setActiveComponent('attendance')}
            isActive={activeComponent === 'attendance'}
          >
            출석부 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>

          <itemS.ThirdstyledLink
            onClick={() => setActiveComponent('addStudyone')}
            isActive={activeComponent === 'addStudyone'}
          >
            스터디원 추가 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.ThirdstyledLink>
        </itemS.LinkContainer>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
