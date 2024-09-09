import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "../../admin-pages/Auth/Styled/Auth.login.styles";
import { ACCESS_TOKEN } from '../../Api/request';
import axios from 'axios';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function Login() {
  const navigate = useNavigate();
  const { alert } = useContext(AlertContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);  // Alert 창 열림 여부

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !isAlertOpen) { // Alert 창이 열려있지 않을 때만 실행
        event.preventDefault();
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [email, password, isAlertOpen]);

  // 로그인 버튼
  const handleSubmit = async () => {
    const requestData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('https://admin-api.kau-koala.com/member/login', requestData);
      console.log("response", response.data);
      localStorage.setItem(ACCESS_TOKEN, response.data.result.accessToken);

      if (response.data.isSuccess) {
        console.log("로그인 성공!");
        navigate("/regularstudylist");
        window.location.reload(); // 페이지 새로고침 추가
      } else {
        // console.error("로그인 실패:", response.data);
        setIsAlertOpen(true);
        alert(response.data.message || "로그인 실패")
        .then(() => {
          setIsAlertOpen(false);
        }); // 실패 메시지가 없으면 기본 메시지 표시
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      setIsAlertOpen(true);
      const errorMessage = error.response?.data?.result?.message || error.response?.data?.result?.email || error.response?.data?.result?.password || error.response?.data?.result || error.response?.data?.message || "로그인 오류 발생"; // 객체를 문자열로 변환하거나 기본 메시지 사용
      alert(String(errorMessage))  // 문자열로 변환 보장
      .then(() => {
        setIsAlertOpen(false);
      }); // 실패 메시지가 없으면 기본 메시지 표시
    }
  };

  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.Head3>로그인</itemS.Head3>
        <itemS.Img src="/img/login.svg" alt="Icon" />
        <itemS.LoginIContainer>
          <itemS.IIContainer>
            <itemS.InputBox
              type="text"
              placeholder="아이디(이메일)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <itemS.Icon src="/img/uil_user.svg" alt="Icon" />
          </itemS.IIContainer>
          <itemS.IIContainer>
            <itemS.InputBox
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <itemS.Icon src="/img/uil_lock.svg" alt="Icon" />
          </itemS.IIContainer>
        </itemS.LoginIContainer>
        <itemS.Btn onClick={handleSubmit}>로그인</itemS.Btn>
        <itemS.UtilBox>
          <itemS.UtilText onClick={() => navigate("/findemail")}>아이디 찾기</itemS.UtilText>
          <itemS.UtilText>|</itemS.UtilText>
          <itemS.UtilText onClick={() => navigate("/findpassword")}>비밀번호 찾기</itemS.UtilText>
        </itemS.UtilBox>
      </itemS.InnerContainer>
    </itemS.Container>
  );
}
