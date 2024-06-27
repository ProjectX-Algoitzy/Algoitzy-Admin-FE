import React, { useState, useEffect, useContext  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../admin-pages/Auth/Styled/Auth.login.styles"
import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';


export default function Login() {

  const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  // 로그인 버튼
  const handleSubmit = async () => {
   
    const requestData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('https://admin-dev.kau-koala.com/member/login', requestData);
      console.log("response",response.data);
      localStorage.setItem(ACCESS_TOKEN, response.data.result.accessToken);
      if (response.data["isSuccess"]) {
        console.log("로그인 성공!");
        // localStorage.setItem("isLoggedIn", "true");  //로그인 유무를 확인하고자 
        navigate("/regularstudylist");
        window.location.reload(); // 페이지 새로고침 추가
      } else {
        console.error("로그인 실패:", response.data);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };


  return (
      <itemS.Container>
        <itemS.InnerContainer>
          <itemS.Head3>로그인</itemS.Head3>
            <itemS.Img src="/img/login.svg" alt="Icon"/>
            <itemS.LoginIContainer>
              <itemS.IIContainer>
                <itemS.InputBox
                  type="text"
                  placeholder="아이디(이메일)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <itemS.Icon src="/img/uil_user.svg" alt="Icon"/>
              </itemS.IIContainer>
              <itemS.IIContainer>
                <itemS.InputBox
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // style={{ border: pwdborderColor }}
                />
                <itemS.Icon src="/img/uil_lock.svg" alt="Icon"/>
              </itemS.IIContainer>
							{/* <itemS.UtilBox>
								<itemS.CheckBox type="checkbox" />
								<itemS.NormText>자동 로그인</itemS.NormText>
							</itemS.UtilBox> */}
            </itemS.LoginIContainer>
						
          <itemS.Btn onClick={handleSubmit}>
            로그인
          </itemS.Btn>
          <itemS.UtilBox>
            <itemS.RouteSignup onClick={() => navigate("/signup")}>
              회원가입
            </itemS.RouteSignup>
            <itemS.UtilText>아이디</itemS.UtilText>
            <itemS.UtilText>/</itemS.UtilText>
            <itemS.UtilText>
              비밀번호 찾기
            </itemS.UtilText>
          </itemS.UtilBox>
        </itemS.InnerContainer>
      </itemS.Container>
  )
}
