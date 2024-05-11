import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  //background-image: url('/img/be1950356c5de7b24020c9c388af7e10 1.png');
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 100px;
  //border:5px solid red;  
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 37px;
  background: #00A5FF; 
  color: white;
  border-radius: 4px; 
  align-items:center;
  border-top: 1px solid ${tokens.colors.Grey_4};
  justify-content: center;
  ${tokens.typography.T5_SB_16};
`;

export const ContentForTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center; 
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.White};
  border-top: 8px solid ${tokens.colors.Blue_0_Main};
  border-radius: 4px;
  //padding: 132px 16px 140px 32px;
  height: 272px;
  width: 793px;
  //width: 92%;
`;

export const ApplicationName = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.typography.H2_SB_48};
  //align-items: center; 
  margin-left: 32px;
  justify-content: center; 
  background-color: ${tokens.colors.White};
  margin-top: 44px;
  width: 745px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${tokens.colors.Black};
`;

export const StudySelectContainer = styled(Select).attrs({
    classNamePrefix: 'react-select',
})`
  .react-select__control {
    margin-top: 32px;
    margin-left: 32px;
    width: 210px;
    height: 48px;
    border: none;
    border-radius: 4px;
    //background-color: #66C9FF;
    background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
    backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
    backdrop-filter: 20%;
    text-align: center;
  }
  .react-select__single-value {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
  }
  .react-select__menu {
    margin-left: 32px;
    width: 210px;
    height: 48px;
    border-radius: 4px;
    border: none; /* 드롭다운 메뉴 경계선 제거 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
    border: none;
  }
  .react-select__option {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
  }
  .react-select__option--is-selected {
    background-color: #66C9FF;
    background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
    backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
    color: ${tokens.colors.Grey_8};
    border: none;
  }
  
  .react-select__option--is-focused {
    color: black; /* hover 상태의 option 텍스트 색상 */
    border: none;
  }
  .react-select__placeholder {
    color: black;
    font-weight: 600;
    border: none;
  }  
  .react-select__indicator {
    display: none; /* 드롭다운 화살표 숨기기 */
  }
`;

export const QuestionNumberContainer = styled.div`  //문항1, 문항2 같은 문항 숫자를 위한 콘테이너
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 37px;
  background: #3083F7; 
  color: white;
  border-radius: 4px; 
  align-items:center;
  border-top: 1px solid ${tokens.colors.Grey_4};
  justify-content: center;
  ${tokens.typography.T5_SB_16};
`;

export const ContentContainer = styled.div` //하나의 질문 전체를 담아주는 컨테이너
  display: flex;
  flex-direction: column;
  //align-items: center; 
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.White};
  border-top: 8px solid #3083F7;
  border-radius: 4px;
  padding: 40px 31px 8px 24px;
  height: auto;
  width: 793px;
  //width: 92%;
`;

export const TypeAndQuestionContainer = styled.div` //주관식인지 객관식인지 판별하는 부분과 질문작성을 모두 감싸주는 콘테이너
  display: flex;
  flex-direction: row-reverse;
  /* border: 2px solid red; */
  justify-content: space-between;
`;

export const TypeSelectContainer = styled(Select).attrs({  //주관식인지 객관식인지 판별하는 부분
  classNamePrefix: 'react-select',
})`
.react-select__control {
  width: 246px;
  height: 56px;
  border: none;
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_5};
  text-align: center;
}
.react-select__single-value {
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: none;
}
.react-select__menu {
  width: 246px;
  height: 56px;
  border-radius: 4px;
  border: none; /* 드롭다운 메뉴 경계선 제거 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  border: none;
}
.react-select__option {
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: none;
}
.react-select__option--is-selected {
  color: ${tokens.colors.Grey_8};
  border: none;
}

.react-select__option--is-focused {
  color: black; /* hover 상태의 option 텍스트 색상 */
  border: none;
}
.react-select__placeholder {
  color: black;
  font-weight: 600;
  border: none;
}  
`;

export const TextQuestionContainer = styled.div` // 주관식 문항을 위한 컨테이너
  display: flex;
  flex-direction: column; 
  border: none;
`;

export const SelectionQuestionContainer = styled.div` //객관식 문항을 위한 컨테이너
  display: flex;
  flex-direction: column; 
  border: none;
`;

export const QuestionContainer = styled.input`  // 어떤 질문을 할지 적기위한 input을 감싸주는 컨테이너
  padding-left: 12px;
  width: 460px;
  height: 56px;
  background-color: rgba(102, 201, 255, 0.1); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
  border: none;
  border-bottom: 1px solid ${tokens.colors.B_Grey_6};
  ${tokens.typography.T5_SB_16};

  &::placeholder {
    color: ${tokens.colors.Grey_8};
  }

  &:focus {
    outline: none; /* 클릭 시 테두리 제거 */
    border-bottom: 2px solid ${tokens.colors.Black};
  }
`;

export const ChoiceForSelectQuestionContainer = styled.input` // 객관식 문항의 보기input들을 감싸주는 컨테이너
  margin-top: 16px;
  padding-left: 12px;
  width: 460px;
  height: 44px;
  border: none;
  ${tokens.typography.B3_M_14};

  &::placeholder {
    color: ${tokens.colors.Grey_8};
  }

  &:focus {
    outline: none; /* 클릭 시 테두리 제거 */
    background-color: rgba(102, 201, 255, 0.1); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
    backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
    border-bottom: 2px solid ${tokens.colors.Black};
  }
`;

export const RequiredAndDeleteContainer = styled.div` //필수설정과 문항삭제를 감싸주는 컨테이너
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 150px;
`;

export const RequiredContainer = styled.div` //필수설정을 감싸주는 컨테이너
  display: flex;
  flex-direction: row;
  ${tokens.typography.T5_SB_16}
  color: ${tokens.colors.Grey_7};
`;

export const SwitchContainer = styled.div` // 스위치 컨테이너
  display: inline-block;
  cursor: pointer;
`;

export const Switch = styled.div` // 스위치 스타일
  width: 42px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? '#BCE7FF' : '#ccc')};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s ease;
`;

export const Handle = styled.div` // 스위치 핸들 스타일
  width: 16px;
  height: 16px;
  /* background-color: #3083F7; */
  background-color: ${({ isActive }) => (isActive ? '#3083F7' : '#BCE7FF')};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isActive }) => (isActive ? '24px' : '4px')};
  transition: left 0.2s ease;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 96px;
  border: 1px solid red;

  position: fixed;
    bottom: 0; /* 아래쪽으로 고정 */
    left: 0; /* 왼쪽으로 고정 */
    width: 100%; /* 가로폭을 화면 전체로 확장 */
    background-color: white; /* 배경색을 설정 */
    z-index: 1000; /* 다른 요소 위에 표시되도록 z-index 설정 */
    /* 필요에 따라 추가적인 스타일을 지정할 수 있습니다. */
`;

export const Btn = styled.button` // 저장하기 버튼
	/* width: "388px";
	height: "48px";
	background: ${tokens.colors.Blue_0_Main};
	color: ${tokens.colors.White};
	border-radius: "4px";
	border: "none";
	cursor: "pointer";
  ${tokens.typography.T5_SB_16}; */
  ${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
`;

export const ArbitaryBtn = styled.button` // 임시 저장하기 버튼
  ${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
  background-color: ${tokens.colors.B_Grey_7};
`;