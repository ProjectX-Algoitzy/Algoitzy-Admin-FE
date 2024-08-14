import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  background-image: url('/img/login.png');
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: ${tokens.colors.White};
  border: 0.042rem solid ${tokens.colors.Grey_4};
  border-radius: 0.83rem;
  padding: 5.29rem 16.96rem;
  margin: 5rem 0;
`;

// 회원가입 head
export const Head3 = styled.div`
	${tokens.typography.H3_SB_40}
	margin-top: 0.83rem;
  margin-bottom: 1.13rem;
`;

// 이미지 자리
export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.08rem;
  height: 8.5rem;
`;

// 라벨+입력 컨테이너
export const LoginIContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const IIContainer = styled.div`
	display: flex;
	flex-direction: column;
  position: relative;
`;

export const Icon = styled.img`
	width: 1rem;
	height: 1rem;
	margin-right: 0.17rem;
  position: absolute;
  left: 0.67rem;
  top: 1.33rem;
`;

// 입력 박스
export const InputBox = styled.input`
	width: 13.5rem;
	height: 2.33rem;
	border: 0.042rem solid ${tokens.colors.Grey_4};
	border-radius: 0.17rem;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 0.42rem 0 2.17rem;
	margin-top: 0.67rem;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 0.042rem solid ${tokens.colors.Grey_6};
	}
`;

// 자동 로그인 + 체크박스
export const UtilBox = styled.div`
  display: flex;
  align-items: center;
`;

export const RouteSignup = styled.span`
  color: ${tokens.colors.Blue_3};
  ${tokens.typography.B3_M_14}
  cursor: pointer;
  margin-right: 1.67rem;
`;

export const UtilText = styled.span`
  color: ${tokens.colors.B_Grey_7};
  ${tokens.typography.B3_M_14}
  cursor: pointer;
`;

// 로그인 버튼
export const Btn = styled.button`
	${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
  margin: 1.17rem 0;
`;