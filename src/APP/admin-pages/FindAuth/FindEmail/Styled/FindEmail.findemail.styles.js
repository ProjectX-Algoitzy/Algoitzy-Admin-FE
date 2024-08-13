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
  // margin-top: 60px;
	margin: 120px 0;
`;

// 아이디 찾기 head
export const Head3 = styled.div`
	${tokens.typography.H3_SB_40}
	margin-bottom: 78px;
`;

// 라벨+입력 컨테이너
export const LIContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

// 입력값 라벨
export const Label = styled.label`
	height: 24px;
	${tokens.typography.T4_SB_20}
	color: ${tokens.colors.Grey_8};
	margin-top: 30px;
	margin-bottom: 10px;
`;

// 토글 에러 메시지 아래 라벨
export const BlankLabel = styled.label`
	height: 24px;
	${tokens.typography.T4_SB_20}
	color: ${tokens.colors.Grey_8};
	margin-bottom: 10px;
`;

// 입력 박스
export const InputBox = styled.input`
	width: 570px;
	height: 54.4px;
	border: 1px solid ${tokens.colors.Grey_4};
	border-radius: 4px;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 10px;
	margin-bottom: 4px;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 1px solid ${tokens.colors.Grey_6};
	  }
	
`;


// 입력+인증 컨테이너
export const InputConfirmBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
// 입력+인증 박스
export const InputConfirmBox = styled.input`
	width: 414px;
	height: 54.4px;
	border: 1px solid ${tokens.colors.Grey_4};
	border-radius: 4px;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 10px;
	margin-bottom: 4px;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 1px solid ${tokens.colors.Grey_6};
	  }

	// 텍스트 입력되어 있을 경우 해당 InputConfirmBox 구성 요소 바로 뒤에 오는 버튼 색상 변경
	&:not(:placeholder-shown) + button {
		background-color: ${tokens.colors.B_Grey_7};
	}
`;

// 타이머용 스타일들
// 입력+인증 타이머 컨테이너
export const InputConfirmTimerBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;
// 입력+인증 타이머 박스
export const InputConfirmTimerBox = styled.input`
	width: 414px;
	height: 54.4px;
	border: 1px solid ${tokens.colors.Grey_4};
	border-radius: 4px;
	${tokens.typography.B2_M_16}
	color: ${tokens.colors.Grey_8};
	padding: 0 10px;
	margin-bottom: 4px;

	&::placeholder {
		color: ${tokens.colors.Grey_4}; 
	}

	// 텍스트 입력되어 있을 경우 border 색상변경
	&:not(:placeholder-shown) { 
		border: 1px solid ${tokens.colors.Grey_6};
	  }

	// 텍스트 입력되어 있을 경우 해당 InputConfirmBox 구성 요소 바로 뒤에 오는 버튼 색상 변경
	&:not(:placeholder-shown) + button {
		background-color: ${tokens.colors.B_Grey_7};
	}
	
	// 최대 길이 설정
	&[maxlength] {
		maxlength: ${props => props.maxlength};
	}
`;

export const TimerBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	left: 329px;
	width: 67px;
	height: 18px;
	background-color: rgba(251, 170, 132, 0.2);
	border-radius: 4px;
	padding: 9px 14px; 
`;
export const TimerIcon = styled.img`
	width: 18px;
	height: 18px;
	margin-right: 4px;
`;
export const Timer = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
	width: 45px;
	height: 18px;
	${tokens.typography.B3_M_14};
	color: ${tokens.colors.Sub_3};
	// background-color: rgba(251, 170, 132, 0.2);
	border-radius: 4px;
`;

// 확인 버튼
export const Btn = styled.button`
	${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
	margin-top: 72px;
	margin-bottom: 45px;
	
`;

// 인증하기 버튼
export const BtnConfirm = styled.button`
	${tokens.Btns.Btn_fill_certi_disable}
	color: ${tokens.colors.White};
	${tokens.typography.B2_M_16}
	margin-left: 16px;
	margin-bottom: 4px;
`;

// 입력값 설명
export const CodeMessage = styled.div`
	color: ${tokens.colors.Grey_6};
	${tokens.typography.B3_M_14}
	margin-bottom: 14px;
`;

// 토글(on/ff) 에러 메시지
export const ToggleErrorMessage = styled.div`
	width: 592px;
	color: ${tokens.colors.Red};
	${tokens.typography.B3_M_14}
	margin-bottom: 12px;
`;

export const Blank = styled.div`
	width: 592px;
	height: 30px;
`;

// 백준 계정 인증 확인 메시지
export const Message = styled.div`
	width: 592px;
	${tokens.typography.B3_M_14}
`;