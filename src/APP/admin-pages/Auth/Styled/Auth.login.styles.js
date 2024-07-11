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
  border: 1px solid ${tokens.colors.Grey_4};
  border-radius: 20px;
  padding: 127px 407px;
  margin: 120px 0;
`;

// 회원가입 head
export const Head3 = styled.div`
	${tokens.typography.H3_SB_40}
	margin-top: 20px;
  margin-bottom: 27px;
`;

// 이미지 자리
export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 386px;
  height: 204px;
    
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
	width: 24px;
	height: 24px;
	margin-right: 4px;
  position: absolute;
  left: 16px;
  top: 32px;
`;
// 입력 박스
export const InputBox = styled.input`
	width: 324px;
	height: 56px;
	border: 1px solid ${tokens.colors.Grey_4};
	border-radius: 4px;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 10px 0 52px;
	margin-top: 16px;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 1px solid ${tokens.colors.Grey_6};
	  }
`;

// 자동 로그인 + 체크박스
export const UtilBox = styled.div`
  display: flex;
  align-items: center;
`;

// // 체크박스
// export const CheckBox = styled.input`
//   appearance: none;
// 	background-color: ${tokens.colors.B_Grey_3};
//   border: 1px solid #b4b4b4;
//   width: 20px;
//   height: 20px;
//   margin: 24px 0;
//   cursor: pointer;
// 	background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
//   &:checked {
//     background-color: ${tokens.colors.Blue_3};
//   }
// `;

// // 자동 로그인 텍스트
// export const NormText = styled.span`
//     ${tokens.typography.B3_M_14}
//     color: ${tokens.colors.Grey_7};
//     margin-left: 8px;
// `;

// 회원가입 
export const RouteSignup = styled.span`
  color: ${tokens.colors.Blue_3};
  ${tokens.typography.B3_M_14}
  cursor: pointer;
  margin-right: 40px;
`;

// 아이디/비밀번호 찾기
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
  margin: 28px 0;
`;


