import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as itemS from "./Styled/Header.headr";
import request from '../../Api/request';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 유무를 확인하고자는 하는 useState
  const [userName, setUserName] = useState(''); // 사용자 이름 상태 추가
  const location = useLocation();

  const isActiveForApplication = location.pathname === '/application' ||  //지원자 관리와 관련된 페이지의 경우, 해당 링크 글씨색을 바꾸기 위함
                                  location.pathname === '/makingapplicationform' ||
                                  /^\/newapplication\/[^\/]+$/.test(location.pathname);
  useEffect(() => {
    const checkLoginStatus = async () => {
      if(window.localStorage.getItem("isLoggedIn") === "true") {
        setIsLoggedIn(true);
        console.log(window.localStorage.getItem("isLoggedIn"));

        try {
          const response = await request.get('/member/info');
          console.log("로그인 멤버 정보 조회", response);
          if(response["isSuccess"]) {
            setUserName(response.result.name);
          }
        } catch (error) {
          console.error("로그인 멤버 정보 조회 실패", error);
        }

      } else {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn"); // 로그인 되어 있지 않다면 키를 삭제합니다.
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
            <itemS.HeaderRightWrap>
                <itemS.StyledLink to={isLoggedIn ? "/application" : "/login"}>
                  <itemS.PageLink isActive={isActiveForApplication}>
                    지원자 관리
                  </itemS.PageLink>
                </itemS.StyledLink>
                <itemS.StyledLink to={isLoggedIn ? "#" : "/login"}> 
                  <itemS.PageLink>스터디 관리</itemS.PageLink>
                </itemS.StyledLink>  
                <itemS.StyledLink to={isLoggedIn ? "#" : "/login"}>
                  <itemS.PageLink>코딩테스트 분석</itemS.PageLink>
                </itemS.StyledLink>
                {isLoggedIn ? (
                  <itemS.AdminName>안녕하세요, {userName} 님</itemS.AdminName>
                ) : (
                  <itemS.StyledLink to="/login">
                    <itemS.Btn>로그인/회원가입</itemS.Btn>
                  </itemS.StyledLink>
                )}
            </itemS.HeaderRightWrap>
        </itemS.HeaderWrap>
    </itemS.HeaderContainer>
  )
}