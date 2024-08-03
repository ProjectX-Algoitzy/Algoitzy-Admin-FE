import React, { useEffect, useState } from 'react';
import * as itemS from "./Styled/Header.headr";
import request from '../../Api/request';
import ProfileModal from './Header.profile.modal'; 

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(''); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await request.get('/member/info');
        console.log("로그인 멤버 정보 조회", response);
        if(response["isSuccess"]) {
          setUserName(response.result.name);
          setProfileUrl(response.result.profileUrl);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("로그인 멤버 정보 조회 실패", error);
      }
    };
    checkLoginStatus();
  }, []);

  const toggleProfileModal = () => {
    setShowProfileModal(prev => !prev);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? '' : menu));
  };

  const handleNav = () => { // 하위 메뉴 이동 후 메뉴창 닫기
    setActiveMenu('');
  };

  return (
    <>
      <itemS.HeaderContainer>
        <itemS.HeaderWrap>
          <itemS.HeaderLeftWrap>
            <itemS.StyledLink to={isLoggedIn ? "/regularstudylist" : "/login"} style={{textDecoration: 'none'}}><itemS.Rabel src='/img/koalalogo.png' alt='코알라로고'/></itemS.StyledLink>
          </itemS.HeaderLeftWrap>
          <itemS.HeaderRightWrap>
            <itemS.StyledLink onClick={() => handleMenuClick('study')}>
              <itemS.PageLink>스터디 관리</itemS.PageLink>
            </itemS.StyledLink>
            <itemS.StyledLink onClick={() => handleMenuClick('application')}>
              <itemS.PageLink>지원자 관리</itemS.PageLink>
            </itemS.StyledLink> 
            <itemS.StyledLink onClick={() => handleMenuClick('coding')}>
              <itemS.PageLink>코딩테스트 분석</itemS.PageLink>
            </itemS.StyledLink>
            {isLoggedIn ? (
              <div style={{ position: 'relative' }}>
                <itemS.AdminName onClick={toggleProfileModal}>안녕하세요, {userName} 님</itemS.AdminName>
                {showProfileModal && <ProfileModal userName={userName} profileUrl={profileUrl} setIsLoggedIn={setIsLoggedIn}/>}
              </div>
            ) : (
              <itemS.StyledLink to="/login">
                <itemS.Btn>로그인/회원가입</itemS.Btn>
              </itemS.StyledLink>
            )}
          </itemS.HeaderRightWrap>
        </itemS.HeaderWrap>
      </itemS.HeaderContainer>
      
      {activeMenu === 'study' && (
        <itemS.SubStudyMenu>
          <itemS.StyledLink to={isLoggedIn ? "/regularstudylist" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>정규 스터디</itemS.SubMenuItem>
          </itemS.StyledLink>
          <itemS.StyledLink to={isLoggedIn ? "/application" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>지원서 관리</itemS.SubMenuItem>
          </itemS.StyledLink>
          <itemS.StyledLink to={isLoggedIn ? "/makingcurriculumhome" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>커리큘럼</itemS.SubMenuItem>
          </itemS.StyledLink>
          <itemS.StyledLink to={isLoggedIn ? "#" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>모의 테스트</itemS.SubMenuItem>
          </itemS.StyledLink>
          <itemS.StyledLink to={isLoggedIn ? "#" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>출석부 확인</itemS.SubMenuItem>
          </itemS.StyledLink>
        </itemS.SubStudyMenu>
      )}
      {activeMenu === 'application' && (
        <itemS.SubApplicationMenu>
          <itemS.StyledLink to={isLoggedIn ? "/manageauth" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>권한 관리</itemS.SubMenuItem>
          </itemS.StyledLink>
          <itemS.StyledLink to={isLoggedIn ? "/answer" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>지원자 관리</itemS.SubMenuItem>
          </itemS.StyledLink>
        </itemS.SubApplicationMenu>
      )}
      {activeMenu === 'coding' && (
        <itemS.SubCodingMenu>
          <itemS.StyledLink to={isLoggedIn ? "/enterbootlist" : "/login"} onClick={handleNav}>
            <itemS.SubMenuItem>기업/부트캠프</itemS.SubMenuItem>
          </itemS.StyledLink>
        </itemS.SubCodingMenu>
      )}
    </>
  );
}