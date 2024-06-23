import React from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.sidebar.styles"
export default function RegularStudySideBar({setActiveComponent, activeComponent  }) {
  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.StudyImgContainer>스터디 이미지 받아올 장소</itemS.StudyImgContainer>
        <itemS.TitleContainer>코딩테스트 준비반 <img src="/img/iconregularstudy.png" alt="정규스터디 아이콘" style={{marginLeft:"8px", width:"44px", height:"21px"}} /> </itemS.TitleContainer>
        <itemS.CountAndOnlineContainer>
          <itemS.CountContainer>
            <img src="/img/iconpeople.png" alt="사람아이콘" style={{width:"24px", height:"24px", marginRight:"8px"}} />
             1 / 10 
          </itemS.CountContainer>
          <itemS.OnlineContainer>
            <img src="/img/icononline.png" alt="사람아이콘" style={{width:"24px", height:"24px", marginRight:"8px"}} />
            온라인
          </itemS.OnlineContainer>
        </itemS.CountAndOnlineContainer>
        <itemS.ManagerNameContainer>
            <img src="/img/graycircle.png" alt="회색동그라미" style={{width:"18px", height:"18px", marginRight:"8px"}} />
            민중원
            <img src="/img/iconstudymanager.png" alt="스터디장" style={{width:"58px", height:"19px", marginLeft:"8px"}} />
          </itemS.ManagerNameContainer>
        <itemS.LinkContainer>
          <itemS.styledLink 
            onClick={() => setActiveComponent('home')}
            isActive={activeComponent === 'home'}
          >
            홈 <itemS.ArrowImg src="/img/grayarrow.png" alt="화살표"/> 
          </itemS.styledLink>
          {/* <itemS.styledLink 
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
          </itemS.ThirdstyledLink> */}
        </itemS.LinkContainer>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
