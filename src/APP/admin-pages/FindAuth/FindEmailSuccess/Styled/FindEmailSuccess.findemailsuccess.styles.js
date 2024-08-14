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
  border: 0.042rem solid ${tokens.colors.Grey_4};
  border-radius: 0.83rem;
  padding: 5.33rem 12.71rem;
  margin-top: 2.5rem;
`;

// 아이디 찾기 head
export const Head3 = styled.div`
	${tokens.typography.H3_SB_40}
	margin-bottom: 4.5rem;
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
	width: 24.58rem;
	margin-bottom: 0.42rem;
`;

// text
export const Text = styled.div`
	${tokens.typography.B3_M_14};
	color: ${tokens.colors.Grey_6};
	width: 24.58rem;
	margin-bottom: 0.67rem;
`;

// 이메일 박스
export const EmailBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 0.042rem solid ${tokens.colors.B_Grey_6};
	border-radius: 0.17rem;
	width: 24.58rem;
	margin-bottom: 10.67rem;
`;

// 이메일 아이콘
export const EmailIcon = styled.div`
	border: 0.042rem solid ${tokens.colors.B_Grey_6};
	border-radius: 0.17rem;
	width: 1rem;
	height: 1rem;
	margin: 0.67rem;
`;

// 이메일 계정
export const Email = styled.div`
	${tokens.typography.B3_M_14};
	height: 0.75rem;
`;

// 버튼 컨테이너
export const BtnContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

// 로그인 버튼
export const BtnLogin = styled.button`
	${tokens.Btns.Btn_fill_default};
	width: 11.96rem;
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20};
	margin-right: 0.33rem;
`;

// 비밀번호 찾기 버튼
export const BtnFindPassword = styled.button`
	${tokens.Btns.Btn_fill_default};
	background-color: ${tokens.colors.B_Grey_6};
	width: 11.96rem;
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20};
	margin-left: 0.33rem;
`;