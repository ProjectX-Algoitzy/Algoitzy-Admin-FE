import React, { useState, useEffect, useContext  } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../../admin-pages/FindAuth/FindEmail/Styled/FindEmail.findemail.styles"


export default function FindEmail() {

  const navigate = useNavigate();

	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
  const [SMSCode, setSMSCode] = useState('');

	// 핸드폰 및 인증코드 색상 및 메시지
  const [phoneBorderColor, setPhoneBorderColor] = useState('#CFCFCF'); // Grey_4 border 색상
  const [phoneMessageColor, setPhoneMessageColor] = useState('#171717'); // Grey_8 메시지 색상
  const [phoneMessage, setPhoneMessage] = useState('인증받을 유효한 휴대폰 번호를 입력해주세요.'); // 메시지
  const [SMSColor, setSMSColor] = useState('#CFCFCF'); // Grey_4 border 및 메시지 색상
  const [SMSMessage, setSMSMessage] = useState(''); // 메시지

	// 핸드폰 번호 및 인증 코드 유효성 확인
  const [isPhoneValid, setIsPhoneValid] = useState(false); // 핸드폰 번호 정규식 만족 여부
  const [isSMSValid, setIsSMSValid] = useState(false);

	// 핸드폰 번호 '인증하기' text
  const [phoneConfirmBtnText, setPhoneConfirmBtnText] = useState("인증하기");

  // 핸드폰 번호 유효성 검사 
  const PhoneRegex = /^01[0-9]-\d{4}-\d{4}$/;

  // 확인 버튼 색상 및 활성화/비활성화
  const [btnSubmitColor, setBtnSubmitColor] = useState(); // B_Grey_3
  const [isAbled, setIsAbled] = useState(false); 

  useEffect(() => {
    const isAllValid = isPhoneValid && isSMSValid;
    setBtnSubmitColor(isAllValid ? '#00A5FF' : '#D2D9E5');
    setIsAbled(isAllValid);
  }, [isPhoneValid, isSMSValid]);
	
  
	// 핸드폰 번호 입력 change event
  const handlePhoneNumberChange = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, ''); // 숫자가 아닌 문자 제거

    let formattedValue = numericValue;

    if (numericValue.length > 3 && numericValue.length <= 7) {
      formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`; // 010-xxxx 로 변경
    } else if (numericValue.length > 7) {
      formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`; // 010-xxxx-xxxx 로 변경
    }

    setPhoneNumber(formattedValue);
    setIsPhoneValid(PhoneRegex.test(formattedValue));

    if (!PhoneRegex.test(formattedValue) && formattedValue.trim().length > 0) {
      setPhoneBorderColor('#DC4A41'); // Red
      setPhoneMessageColor('#DC4A41'); // Red
      setPhoneMessage('010-0000-0000 형식에 맞춰 입력해주세요.');
    } else {
      setPhoneBorderColor('#555555'); // Grey_6
      setPhoneMessage('');
    }
  }

  // 핸드폰 번호 인증 코드 입력 change event
  const handleSMSCodeChange = (value) => {
    setSMSCode(value);
    setSMSColor('#555555'); // Grey_6
  }

	// 핸드폰 번호 인증번호 확인 버튼
  const handleConfirmPhone = async () => {
    const phone = phoneNumber.replace(/-/g, '');
   
    const requestData = {
      phoneNumber: phone,
      code: SMSCode
    };
    try {
      const response = await axios.post('https://admin-dev.kau-koala.com/sign-up/phone-number', requestData);
      console.log("response",response);
      if (response.status === 200) {
        console.log("핸드폰 번호 인증 성공!");
        setIsSMSValid(true);
        setPhoneBorderColor('#3083F7'); // Blue_3
        setPhoneMessageColor('#3083F7'); // Blue_3
        setPhoneMessage('인증이 완료되었습니다.');
        setSMSMessage('');
        setSMSColor('#555555'); // grey_6
      } else {
        console.error("핸드폰 번호 인증 실패:", response.data);
        setSMSColor('#DC4A41'); // REd
        setSMSMessage('인증번호가 일치하지 않습니다. 다시 인증을 진행해주세요.');
      }
    } catch (error) {
      console.error("핸드폰 번호 인증 오류:", error);
      setIsSMSValid(false);
      setSMSColor('#DC4A41'); // REd
      setSMSMessage('인증번호가 일치하지 않습니다. 다시 인증을 진행해주세요.');
      setPhoneConfirmBtnText("다시 인증하기");
    }
  };

	// SMS 인증 코드 전송 버튼 {인증하기 버튼}
  const handleSubmitSMS = async () => {
    const phone = phoneNumber.replace(/-/g, '');
   
    const requestData = {
      phoneNumber: phone,
    };
    try {
      const response = await axios.post('https://admin-dev.kau-koala.com/sms/certification', requestData);
      console.log("response",response);
      if (response.status === 200) {
        console.log("SMS 인증 코드 전송 성공!");
        // setIsPhoneNumberValid(true);
        setPhoneBorderColor('#3083F7'); // Blue_3
        setPhoneMessageColor('#3083F7'); // Blue_3
        setPhoneMessage('인증번호가 발송되었습니다.');
      } else {
        console.error("SMS 인증 코드 전송 실패:", response.data);
      }
    } catch (error) {
      console.error("SMS 인증 코드 전송 오류:", error);
      // setIsPhoneNumberValid(false);
      setPhoneBorderColor('#DC4A41'); // Red
      setPhoneMessageColor('#DC4A41'); // Red
      setPhoneMessage('사용할 수 없는 핸드폰 번호입니다.');
      
    }
  };

  const handleFindEmail = async () => {
    const phone = phoneNumber.replace(/-/g, '');
   
    const requestData = {
      name: name,
      phoneNumber: phone,
    };
    console.log("requestData",requestData);
    try {
      const response = await axios.get('https://admin-dev.kau-koala.com/member/find-email', {
        params: requestData,
      });
      console.log("response",response.data);
      if (response.data["isSuccess"]) {
        console.log("이메일 찾기 성공");
        
        navigate("/findemailsuccess", { state: { email: response.data.result } });
      } else {
        console.error("이메일 찾기 실패:", response.data);
      }
    } catch (error) {
      console.error("이메일 찾기 오류:", error);
    }
  };


  return (
		<itemS.Container>
			<itemS.InnerContainer>
				<itemS.Head3>아이디 찾기</itemS.Head3>
					
					<itemS.LIContainer>
            <itemS.Label>이름</itemS.Label>
						<itemS.InputBox
							type="text"
							placeholder="이름을 입력해주세요."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</itemS.LIContainer>

					<itemS.LIContainer>
              <itemS.Label>핸드폰 번호</itemS.Label>
              <itemS.InputConfirmBoxWrapper>
                <itemS.InputConfirmBox
                  type="text"
                  placeholder="000-0000-0000"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(e.target.value)}
                  style={{ border: `1px solid ${phoneBorderColor}` }}
                  disabled={isSMSValid}
                />
                <itemS.BtnConfirm onClick={handleSubmitSMS}>
                 {phoneConfirmBtnText}
                </itemS.BtnConfirm>
              </itemS.InputConfirmBoxWrapper>
              <itemS.CodeMessage
                style={{ color: `${phoneMessageColor}` }}
              >
                {phoneMessage}
              </itemS.CodeMessage>

              <itemS.InputConfirmBoxWrapper>
                <itemS.InputConfirmBox
                  type="text"
                  placeholder="인증코드"
                  value={SMSCode}
                  onChange={(e) => handleSMSCodeChange(e.target.value)}
                  style={{ border: `1px solid ${SMSColor}` }}
                  disabled={isSMSValid}
                />
                <itemS.BtnConfirm onClick={handleConfirmPhone}>
                 인증번호 확인
                </itemS.BtnConfirm>
              </itemS.InputConfirmBoxWrapper>
            </itemS.LIContainer>
            <itemS.Message
              style={{ color: `${SMSColor}` }}
            >
              {SMSMessage}
            </itemS.Message>
					
				<itemS.Btn 
        onClick={handleFindEmail}
        style={{ backgroundColor: `${btnSubmitColor}` }}
        disabled={!isAbled}
        >
					확인
				</itemS.Btn>
				
			</itemS.InnerContainer>
		</itemS.Container>
  )
}
