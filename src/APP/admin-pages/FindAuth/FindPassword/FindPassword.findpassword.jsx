import React, { useState, useEffect, useContext  } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../../admin-pages/FindAuth/FindEmail/Styled/FindEmail.findemail.styles"
import { AlertContext } from '../../../Common/Alert/AlertContext';


export default function FindPassword() {

  const navigate = useNavigate();

  const { alert } = useContext(AlertContext);

	const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');


	// 이메일 및 인증코드 색상 및 메시지
  const [emailBorderColor, setEmailBorderColor] = useState('#CFCFCF'); // Grey_4 border 색상
  const [emailMessageColor, setEmailMessageColor] = useState('#171717'); // Grey_8 메시지 색상
  const [emailMessage, setEmailMessage] = useState('인증받을 유효한 이메일을 입력해주세요.'); // 메시지
  const [emailCodeColor, setEmailCodeColor] = useState('#CFCFCF'); // Grey_4 border 및 메시지 색상
  const [emailCodeMessage, setEmailCodeMessage] = useState(''); // 메시지

	// 이메일 및 인증 코드 유효성 확인
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailCodeValid, setIsEmailCodeValid] = useState(false);

  // 이메일 '인증하기' text
  const [emailConfirmBtnText, setemailConfirmBtnText] = useState("인증하기"); 

  // 확인 버튼 색상 및 활성화/비활성화
  const [btnSubmitColor, setBtnSubmitColor] = useState(); // B_Grey_3
  const [isAbled, setIsAbled] = useState(false); 

  useEffect(() => {
    const isAllValid = isEmailValid && isEmailCodeValid;
    setBtnSubmitColor(isAllValid ? '#00A5FF' : '#D2D9E5');
    setIsAbled(isAllValid);
  }, [isEmailValid, isEmailCodeValid]);
  
  // 이메일 입력 change event
  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailBorderColor('#555555'); // Grey_6
  }

  // 이메일 인증 코드 입력 change event
  const handleEmailCodeChange = (value) => {
    setEmailCode(value);
    setEmailCodeColor('#555555'); // Grey_6
  }

	
  // 이메일 인증번호 확인 버튼
  const handleConfirmEmail = async () => {
   
    const requestData = {
      email: email,
      code: emailCode
    };
    try {
      const response = await axios.post('https://admin-api.kau-koala.com/email/certification', requestData);
      console.log("response",response.data);
      if (response.data["isSuccess"]) {
        console.log("이메일 인증 성공!");
        setIsEmailCodeValid(true);
        setEmailBorderColor('#3083F7'); // Blue_3
        setEmailMessageColor('#3083F7'); // Blue_3
        setEmailMessage('인증이 완료되었습니다.');
        setEmailCodeMessage('');
        setEmailCodeColor('#555555'); // grey_6
      } else {
        console.error("이메일 인증 실패:", response.data);
        setEmailCodeColor('#DC4A41'); // REd
        setEmailCodeMessage('인증번호가 일치하지 않습니다. 다시 인증을 진행해주세요.');
      }
    } catch (error) {
      console.error("이메일 인증 오류:", error);
      setIsEmailCodeValid(false);
      setEmailCodeColor('#DC4A41'); // REd
      setEmailCodeMessage('인증번호가 일치하지 않습니다. 다시 인증을 진행해주세요.');
      setemailConfirmBtnText("다시 인증하기");
    }
  };

  // 이메일 인증 코드 전송 버튼 {인증하기 버튼}
  const handleSubmitEmail = async () => {
   
    const requestData = {
      type: "CERTIFICATION",
      emailList: [email],
    };
    try {
      const response = await axios.post('https://admin-api.kau-koala.com/email', requestData);
      console.log("response",response.data);
      if (response.data["isSuccess"]) {
        console.log("이메일 인증 코드 전송 성공!");
        setIsEmailValid(true);
        setEmailBorderColor('#00A5FF'); // Blue_0_Main
        setEmailMessageColor('#00A5FF'); // Blue_0_Main
        setEmailMessage('인증번호가 발송되었습니다.');
      } else {
        console.error("이메일 인증 코드 전송 실패:", response.data);
      }
    } catch (error) {
      console.error("이메일 인증 코드 전송 오류:", error);
      setIsEmailValid(false);
      setEmailBorderColor('#DC4A41'); // Red
      setEmailMessageColor('#DC4A41'); // Red
      setEmailMessage('사용할 수 없는 이메일입니다.');
      
    }
  };
  

  const handleFindPassword = async () => {
    const requestData = {
      type: "FIND_PASSWORD",
      emailList: [email],
    };
    try {
      const response = await axios.post('https://admin-api.kau-koala.com/email', requestData);
      console.log("response",response.data);
      if (response.data["isSuccess"]) {
        alert("새로운 비밀번호가 이메일로 발송되었습니다.")
        .then(() => {
          navigate('/login');
        }); 
      } else {
        console.error("새로운 비밀번호 이메일 전송 실패:", response.data);
      }
    } catch (error) {
      console.error("새로운 비밀번호 이메일 전송 오류:", error);
      
      
    }
  };


  return (
		<itemS.Container>
			<itemS.InnerContainer>
				<itemS.Head3>비밀번호 찾기</itemS.Head3>

        <itemS.LIContainer>
          <itemS.Label>이메일</itemS.Label>
          <itemS.InputConfirmBoxWrapper>
            <itemS.InputConfirmBox
              type="text"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              style={{ border: `0.042rem solid ${emailBorderColor}` }}
              disabled={isEmailCodeValid}
            />
            <itemS.BtnConfirm onClick={handleSubmitEmail} disabled={isEmailCodeValid}>
              {emailConfirmBtnText}
            </itemS.BtnConfirm>
          </itemS.InputConfirmBoxWrapper>
          <itemS.CodeMessage
            style={{ color: `${emailMessageColor}` }}
          >
            {emailMessage}
          </itemS.CodeMessage>
          
          <itemS.InputConfirmBoxWrapper>
            <itemS.InputConfirmBox
              type="text"
              placeholder="인증코드"
              value={emailCode}
              onChange={(e) => handleEmailCodeChange(e.target.value)}
              style={{ border: `0.042rem solid ${emailCodeColor}` }}
              disabled={isEmailCodeValid}
            />
            <itemS.BtnConfirm onClick={handleConfirmEmail} disabled={isEmailCodeValid}>
              인증번호 확인
            </itemS.BtnConfirm>
          </itemS.InputConfirmBoxWrapper>
        </itemS.LIContainer>
        <itemS.Message
          style={{ color: `${emailCodeColor}` }}
        >
          {emailCodeMessage}
        </itemS.Message>
      
				<itemS.Btn 
        onClick={handleFindPassword}
        style={{ backgroundColor: `${btnSubmitColor}` }}
        disabled={!isAbled}
        >
					확인
				</itemS.Btn>
				
			</itemS.InnerContainer>
		</itemS.Container>
  )
}
