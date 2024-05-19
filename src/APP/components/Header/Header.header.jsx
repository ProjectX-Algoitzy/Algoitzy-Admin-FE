import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import * as itemS from "./Styled/Header.headr"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 유무를 확인하고자는 하는 useState
  const location = useLocation();

  const isActiveForApplication = location.pathname === '/makedapplicationlist' ||  //지원자 관리와 관련된 페이지의 경우, 해당 링크 글씨색을 바꾸기 위함
                                  location.pathname === '/makingapplicationform' ||
                                  /^\/makedapplicationdetail\/[^\/]+$/.test(location.pathname);
  useEffect(() => {
    const checkLoginStatus = async () => {
      if(window.localStorage.getItem("isLoggedIn") === "true") {
        setIsLoggedIn(true);
        console.log(window.localStorage.getItem("isLoggedIn"));
      } else {
        setIsLoggedIn(false);
        console.log("로그인이 제대로 되지 않았다");
      }
    };
    checkLoginStatus();
  }, []);
  return (
    <itemS.HeaderContainer>
        <itemS.HeaderWrap>
          <itemS.HeaderLeftWrap>
              <itemS.StyledLink to="/" style={{textDecoration: 'none'}}><itemS.Rabel src='/img/koalalogo.png' alt='코알라로고'/></itemS.StyledLink>
          </itemS.HeaderLeftWrap>
          {isLoggedIn ? (
            <itemS.HeaderRightWrap>
                <itemS.StyledLink to="/makedapplicationlist">
                  <itemS.PageLink isActive={isActiveForApplication}>
                    지원자 관리
                  </itemS.PageLink>
                </itemS.StyledLink>
              <itemS.PageLink>스터디 관리</itemS.PageLink>  {/*스터디 관리 페이지 생성시, <itemS.StyledLink>컴포넌트를 통해 감싸주세요*/}
              <itemS.PageLink>코딩테스트 분석</itemS.PageLink>  {/*코딩 테스트 분석 페이지 생성시, <itemS.StyledLink>컴포넌트를 통해 감싸주세요*/}
              <itemS.AdminName>안녕하세요, 구교연 님</itemS.AdminName>
            </itemS.HeaderRightWrap>
            ) : (
            <itemS.HeaderRightWrap>
              <itemS.StyledLink to="/login"><itemS.Btn>로그인/회원가입</itemS.Btn></itemS.StyledLink>
            </itemS.HeaderRightWrap>
          )}
        </itemS.HeaderWrap>
    </itemS.HeaderContainer>
  )
}