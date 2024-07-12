import styled from 'styled-components';
import * as tokens from "../../../../../tokens"


export const Container = styled.div`
  display: flex;
  justify-content: center; 
  background-image: url('/img/signup.png');
  
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.Grey_4};
  border-radius: 20px;
  padding: 128px 305px;
  margin-top: 60px;
`;

// 아이디 찾기 head
export const Head3 = styled.div`
	${tokens.typography.H3_SB_40}
	margin-bottom: 108px;
`;

// 라벨+입력 컨테이너
export const LIContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

// body
export const Body = styled.div`
	${tokens.typography.T4_SB_20};
	color: ${tokens.colors.Grey_8};
	width: 590px;	
	margin-bottom: 10px;
`;

// text
export const Text = styled.div`
	${tokens.typography.B3_M_14};
	color: ${tokens.colors.Grey_6};
	width: 590px;	
	margin-bottom: 16px;
`;

// 이메일 박스
export const EmailBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px solid ${tokens.colors.B_Grey_6};
	border-radius: 4px;
	width: 590px;	
	margin-bottom: 256px;
`;

// 이메일 아이콘
export const EmailIcon = styled.div`
	border: 1px solid ${tokens.colors.B_Grey_6};
	border-radius: 4px;
	width: 24px;
	height: 24px;	
	margin: 16px;
`;

// 이메일 계정
export const Email = styled.div`
	${tokens.typography.B3_M_14};
	height: 18px;
`;

// 버튼 컨테이너
export const BtnContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

// 로그인 버튼
export const BtnLogin = styled.button`
	${tokens.Btns.Btn_fill_default};
    width: 287px;
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20};
    margin-right: 8px;
	
`;

// 비밀번호 찾기 버튼
export const BtnFindPassword = styled.button`
	${tokens.Btns.Btn_fill_default};
	background-color: ${tokens.colors.B_Grey_6};
	width: 287px;
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20};
	margin-left: 8px;
	
`;
