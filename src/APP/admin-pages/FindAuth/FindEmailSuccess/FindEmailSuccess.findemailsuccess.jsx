import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../../admin-pages/FindAuth/FindEmailSuccess/Styled/FindEmailSuccess.findemailsuccess.styles";

export default function FindEmailSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

	

  return (
		<itemS.Container>
			<itemS.InnerContainer>
				<itemS.Head3>아이디 찾기</itemS.Head3>
				<itemS.Body>아이디</itemS.Body>
				<itemS.Text>고객님의 정보와 일치하는 아이디는 다음과 같습니다.</itemS.Text>
				<itemS.EmailBox>
					<itemS.EmailIcon>

					</itemS.EmailIcon>
					<itemS.Email>
						{email}
					</itemS.Email>
				</itemS.EmailBox>
				<itemS.BtnContainer>
					<itemS.BtnLogin onClick={() => navigate("/login")}>
						로그인
					</itemS.BtnLogin>
					<itemS.BtnFindPassword onClick={() => navigate("/findpassword")}>
						비밀번호 찾기
					</itemS.BtnFindPassword>
				</itemS.BtnContainer>
				
			</itemS.InnerContainer>
		</itemS.Container>
  )
}
