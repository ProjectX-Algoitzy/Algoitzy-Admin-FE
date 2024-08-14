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
	margin-bottom: 3.25rem;
`;

// 라벨+입력 컨테이너
export const LIContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

// 입력값 라벨
export const Label = styled.label`
	height: 1rem;
	${tokens.typography.T4_SB_20}
	color: ${tokens.colors.Grey_8};
	margin-top: 1.25rem;
	margin-bottom: 0.42rem;
`;

// 입력 박스
export const InputBox = styled.input`
	width: 23.75rem;
	height: 2.27rem;
	border: 0.042rem solid ${tokens.colors.Grey_4};
	border-radius: 0.17rem;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 0.42rem;
	margin-bottom: 0.17rem;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 0.042rem solid ${tokens.colors.Grey_6};
	}
`;

// 입력+인증 컨테이너
export const InputConfirmBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// 입력+인증 박스
export const InputConfirmBox = styled.input`
	width: 17.25rem;
	height: 2.27rem;
	border: 0.042rem solid ${tokens.colors.Grey_4};
	border-radius: 0.17rem;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 0.42rem;
	margin-bottom: 0.17rem;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 0.042rem solid ${tokens.colors.Grey_6};
	}

	// 텍스트 입력되어 있을 경우 해당 InputConfirmBox 구성 요소 바로 뒤에 오는 버튼 색상 변경
	&:not(:placeholder-shown) + button {
		background-color: ${tokens.colors.B_Grey_7};
	}
`;

// 확인 버튼
export const Btn = styled.button`
	${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
	margin-top: 3rem;
	margin-bottom: 1.88rem;
`;

// 인증하기 버튼
export const BtnConfirm = styled.button`
	${tokens.Btns.Btn_fill_certi_disable}
	color: ${tokens.colors.White};
	${tokens.typography.B2_M_16}
	margin-left: 0.67rem;
	margin-bottom: 0.17rem;
`;

// 입력값 설명
export const CodeMessage = styled.div`
	color: ${tokens.colors.Grey_6};
	${tokens.typography.B3_M_14}
	margin-bottom: 0.58rem;
`;

// 에러 메시지
export const ErrorMessage = styled.div`
	color: ${tokens.colors.Red};
	${tokens.typography.B3_M_14}
	margin-bottom: 0.58rem;
`;

// 백준 계정 인증 확인 메시지
export const Message = styled.div`
	${tokens.typography.B3_M_14}
`;