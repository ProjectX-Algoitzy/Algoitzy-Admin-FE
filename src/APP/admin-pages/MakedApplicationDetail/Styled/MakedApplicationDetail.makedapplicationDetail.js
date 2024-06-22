import styled, { css } from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 161px;
  overflow: auto;
  /* align-items : center; */
  /* background-image: url('/img/makingapplication.png'); */
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 100px;
  margin-left: 500px;
`;

export const SecondInnerContainer = styled.div` /*문항들 하나하나를 감싸주는 컨테이너*/
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  margin-left: 453px;
  margin-right: 480px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 37px;
  /* width: 99px;
  height: 40px; */
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
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.White};
  border-top: 8px solid ${tokens.colors.Blue_0_Main};
  border-radius: 4px;
  padding: 44px 16px 60px 32px;
  width: 793px;
`;

export const ApplicationName = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.typography.H2_SB_48};
  /*align-items: center;*/ 
  /* margin-left: 32px; */
  justify-content: center; 
  background-color: ${tokens.colors.White};
  /* margin-top: 44px; */
  width: 745px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${tokens.colors.Black};
`;

export const StudySelectContainer = styled(Select).attrs({
    classNamePrefix: 'react-select',
})`
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}

  .react-select__control { /*선택 상자의 컨트롤 부분 스타일링*/
    margin-top: 32px;
    width: 210px;
    height: 48px;
    border: 1px solid ${tokens.colors.B_Grey_5};
    border-radius: 4px;
    color: ${tokens.colors.Grey_8};
  }

  .react-select__single-value { /*선택된 텍스트를 스타일링*/
    border: none;
    display: flex;
    padding-left: 10px; /* 임시로 놓은 글자를 위한 패딩픽셀입니다 */
    justify-content: center;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.T5_SB_16};
  }

  .react-select__placeholder {
    border: none;
    display: flex;
    padding-left: 48px; /* 임시로 놓은 글자를 위한 패딩픽셀입니다 */
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.T5_SB_16};
  } 

  .react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
    position: absolute;
    top: -10px;  
    left: -1px;
    width: 212px;
    height: 96px; 
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
  }

  .react-select__option:not(:last-child) { /* 각 옵션 사이에 회색 줄 추가 */
    border-bottom: 1px solid ${tokens.colors.B_Grey_2}; 
  }

  .react-select__option { /*옵션 한칸 한칸의 스타일*/
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
    height: 48px;
    padding-top: 15px;
  }

  .react-select__option--is-selected:first-of-type { /* 첫 번째 옵션의 스타일을 지정 */
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-top-left-radius: 4px; /* 상단 왼쪽 모서리를 둥글게 만듭니다. */
    border-top-right-radius: 4px; /* 상단 오른쪽 모서리를 둥글게 만듭니다. */
    border: none;
    ${tokens.typography.B3_M_14};
    position: relative; /* 요소를 상대적인 위치로 설정 */
    top: -4px; /* 원하는 만큼 위로 이동 */
  }

  .react-select__option--is-selected:last-of-type { /* 마지막 옵션의 스타일을 지정 */
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 4px; /* 하단 왼쪽 모서리를 둥글게 만듭니다. */
    border-bottom-right-radius: 4px; /* 하단 오른쪽 모서리를 둥글게 만듭니다. */
    border: none;
    ${tokens.typography.B3_M_14};
  }

  .react-select__option--is-selected:not(:first-of-type):not(:last-of-type) { /* 중간의 옵션 */
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border: none;
    ${tokens.typography.B3_M_14};
  }
  
  .react-select__option--is-focused { /*현재 포커스된 옵션의 스타일을 지정*/
    background-color: transparent;
  }

  .react-select__option:active {
    background-color: transparent;
  }
`;



export const QuestionNumberContainer = styled.div`  /*문항1, 문항2 같은 문항 숫자를 위한 콘테이너*/
  display: flex;
  flex-direction: row;
  background: #3083F7; 
  color: white;
  border-radius: 4px; 
  align-items:center;
  border-top: 1px solid ${tokens.colors.Grey_4};
  justify-content: center;
  ${tokens.typography.T5_SB_16};

   /*조건부 스타일링*/ 
   ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      width: 99px;
      height: 40px;
      /* width: 66px;
      height: 37px; */
    `: css`
      width: 66px;
      height: 37px;
      margin-left: 33px;
    `} 
`;

export const QuestionNumberImg = styled.img`
  ${({ innerContainerClicked }) => innerContainerClicked ? css`
    width: 17.2x;
    height: 17px;
    margin-right: 12px;
  `: css`
    display: none;
  `} 
`;

export const QuestionNumberText = styled.div`
  ${tokens.typography.T5_SB_16};
`;

export const ContentContainer = styled.div` /*하나의 질문 전체를 담아주는 컨테이너*/
  display: flex;
  flex-direction: column;
  /*align-items: center; */
  background-color: ${tokens.colors.White};
  border-radius: 4px;
  padding: 32px 31px 8px 24px;
  width: 793px;
  box-shadow: 0px 2px 3px 2px #D6DaF0;
  /*width: 92%;*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      border-top: 8px solid #3083F7;
    `: css`
      pointer-events: none;
  `} 
`;

export const TypeAndQuestionContainer = styled.div` /*주관식인지 객관식인지 판별하는 부분과 질문작성을 모두 감싸주는 콘테이너*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    `: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
  `} 
`;

export const ContainerForTypeSelectContainer = styled.div` /*주관식인지 객관식인지 판별하는 부분을 한번 더 감싸주는 container*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
    `: css`
        display: none;
  `} 
`;

export const TypeSelectContainer = styled(Select).attrs({  /*주관식인지 객관식인지 판별하는 부분*/
  classNamePrefix: 'react-select'
})`
${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      .react-select__control {
        display: flex; /* 요소들을 수평으로 배치하기 위해 flexbox를 사용합니다. */
        width: 246px;
        height: 56px;
        border: none;
        border-radius: 4px;
        border: 1px solid ${tokens.colors.B_Grey_5};
        padding-right: 8px;
      }
      .react-select__single-value {
        color: ${tokens.colors.Grey_8};
        ${tokens.typography.B3_M_14};
        border: none;
        display: flex;
      }

      .react-select__menu { /*클릭시 나오는 select box틀*/
        display: flex;
        width: 246x;
        /* height: 165px; */
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-weight: 600;
        margin-top: 3px;
        ${tokens.typography.B3_M_14};
      }

      .react-select__option:not(:last-child) { /* 각 옵션 사이에 회색 줄 추가 */
        border-bottom: 1px solid ${tokens.colors.B_Grey_2}; 
      }

      .react-select__option { /*옵션 한칸 한칸의 스타일*/
        color: ${tokens.colors.Grey_8};
        ${tokens.typography.B3_M_14};
        border: none;
        height: 55px;
        padding-left: 8px;
      }

      .react-select__option--is-selected:first-of-type { /* 첫 번째 옵션의 스타일을 지정 */
        background-color: rgba(102, 201, 255, 0.2);
        backdrop-filter: blur(8px);
        color: ${tokens.colors.Grey_8};
        border-top-left-radius: 4px; /* 상단 왼쪽 모서리를 둥글게 만듭니다. */
        border-top-right-radius: 4px; /* 상단 오른쪽 모서리를 둥글게 만듭니다. */
        border: none;
        ${tokens.typography.B3_M_14};
        width: 246px;
        position: relative; /* 요소를 상대적인 위치로 설정 */
        top: -4px; /* 원하는 만큼 위로 이동 */
      }

      .react-select__option--is-selected:last-of-type { /* 마지막 옵션의 스타일을 지정 */
        background-color: rgba(102, 201, 255, 0.2);
        backdrop-filter: blur(8px);
        color: ${tokens.colors.Grey_8};
        border-bottom-left-radius: 4px; /* 하단 왼쪽 모서리를 둥글게 만듭니다. */
        border-bottom-right-radius: 4px; /* 하단 오른쪽 모서리를 둥글게 만듭니다. */
        border: none;
        ${tokens.typography.B3_M_14};
        width: 246px;
        position: relative; /* 요소를 상대적인 위치로 설정 */
        top: 2px;
      }

      .react-select__option--is-selected:not(:first-of-type):not(:last-of-type) { /* 중간의 옵션 */
        background-color: rgba(102, 201, 255, 0.2);
        backdrop-filter: blur(8px);
        color: ${tokens.colors.Grey_8};
        border: none;
        ${tokens.typography.B3_M_14};
        width: 246px;
      }

      .react-select__option--is-focused { /*현재 포커스된 옵션의 스타일을 지정*/
        background-color: transparent;
      }
      .react-select__option:active {
        background-color: transparent;
      }
      .react-select__placeholder {
        color: black;
        font-weight: 600;
        border: none;
      }  
      .custom-option {
        display: flex;
        align-items: center;
      }

      .custom-option-icon {
        width: 24px;
        height: 24px;
        margin-right: 5px; /* 이미지와 라벨 사이의 간격 조정 */
      }

      .custom-option-label {
        flex-grow: 1; /* 라벨이 가능한 최대 공간을 차지하도록 함 */
        align-items: center;
        justify-content: center;
      }
    `: css`
        display: none;
  `} 
`;

export const TextQuestionContainer = styled.div` /*주관식 문항을 위한 컨테이너*/
  display: flex;
  flex-direction: row; 
  border: none;
  position: relative;
`;

export const SelectionQuestionContainer = styled.div` /*객관식 문항을 위한 컨테이너*/
  display: flex;
  flex-direction: row; 
  border: none;
  position: relative;
`;

export const QuestionContainer = styled.input`  /* 어떤 질문을 할지 적기위한 input을 감싸주는 컨테이너 */
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
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
    `: css`
        width: ${({ value }) => (value ? `${value.length * 14.2}px` : '460px')};
        min-width: 36px; /* 최소 너비 설정 */
        margin-right: 16px;
        height: auto;
        border: none;
        ${tokens.typography.T5_SB_16};
  `}
`;

export const NecessaryImg = styled.img` /*필수질문일 때 넣을 별표이미지를 꾸며주는 스타일드 컴포넌트*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      display: none;
    `: css`
      width: 12px;
      height: 12px;
      position: absolute;
      right: 0; /* 컨테이너의 오른쪽 끝에 배치 */
      top: 22%; /* 세로 중앙 정렬 */
      transform: translateY(-50%); /* 세로 중앙 정렬을 위해 추가 */
    `
  }
`;

export const MultiselectImg = styled.img` /*객관식 복수일 때 넣을 '복수응답' 이미지를 꾸며주는 스타일드 컴포넌트*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      display: none;
    `: css`
      margin-left: 8px;
      width: 76px;
      height: 29px;
    `
  }
`;

export const SelectAndAnswerContainer = styled.div` /*주관식 응답과 객관식 응답(보기)부분을 모두 감싸주는 컨테이너*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerInputContainer = styled.input` /*스터디원이 주관식 질문에 답하기 위한 input콘테이너*/
  padding: 0;
  
  /* margin-top: 36px;
  height: 28px; */
  
  margin-top: 16px;
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  ${tokens.typography.B2_M_16};

  &::placeholder {
    color: ${tokens.colors.Grey_5};
  }

  &:focus {
    outline: none; /* 클릭 시 테두리 제거 */
  }

  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
    `: css`
      margin-bottom: 32px;
    `
  }
`;

export const SelectContainer = styled.div` /*객관식 보기 및 추가버튼을 모두 감싸주는 컨테이너*/
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.div` /*객관식 보기들과 그 보기 지우기 버튼을 모두 감싸주는 컨테이너*/
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
  align-items: center;
`;

export const OptionImg = styled.img` /*객관식 보기들을 하나하나 클릭시 나오는 이미지를 위한 스타일드 컴포넌트*/
  width: 24px;
  height: 24px;
`;

export const ChoiceForSelectQuestionContainer = styled.input` /*객관식 문항의 보기input들을 감싸주는 컨테이너*/
  padding-left: 8px;
  width: 618px;
  height: 48px;
  border: none;
  ${tokens.typography.B3_M_14};

  &::placeholder {
    color: ${tokens.colors.Grey_8};
  }

  &:focus {
    margin-left: 8px;
    outline: none; /* 클릭 시 테두리 제거 */
    background-color: rgba(102, 201, 255, 0.1); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
    backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
    border-bottom: 2px solid ${tokens.colors.Black};
  }
`;

export const ximg = styled.img` /*객관식에서 보기문항 하나하나를 지우기 위해 사용되는 x 이미지를 위한 스타일드 컴포넌트*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    `: css`
        display: none;
  `} 
`;

export const AddOptionContainer = styled.div` /*객관식 문항의 보기를 추가하는 컴포넌트를 감싸는 컨테이너*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        align-items: center;
        margin-top: 15px;
    `: css`
        display: none;
  `}
`;

export const AddOptionParagraphContainer = styled.div` /*객관식 문항의 보기를 추가하는 paragraph가 있는데, 그 paragraph를 3개 놓을 계획이다. 아무튼 그 각각의 paragraph를 감싸는 컨테이너*/
  display: inline;
  ${tokens.typography.B3_M_14};
  justify-content: center;
  margin-left: 8px;
`;

export const paragraph1 = styled.div` /*옵션추가 라는 회색글자*/
  display: inline;
  color: ${tokens.colors.B_Grey_6};
  cursor: pointer;
`;

export const paragraph2 = styled.div` /* 또는 이라는 검은글자 */
  display: inline;
  color: ${tokens.colors.B_Grey_8};
`;

export const paragraph3 = styled.div` /* '기타'추가 라는 파란 글자 */
  display: inline;
  color: ${tokens.colors.Blue_0_Main};
`;


export const RequiredAndDeleteContainer = styled.div` /*필수설정과 문항삭제를 감싸주는 컨테이너*/
  ${({ innerContainerClicked }) => 
    innerContainerClicked ? css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 32px;
      border: none;
      border-top: 1px solid ${tokens.colors.B_Grey_2};
      padding-top: 14px;
      padding-bottom: 18px;
    `: css`
      display: none;
  `}
`;

export const RequiredContainer = styled.div` /*필수설정을 감싸주는 컨테이너*/
  display: flex;
  flex-direction: row;
  ${tokens.typography.T5_SB_16}
  color: ${tokens.colors.Grey_7};
`;

export const RequiredText = styled.div`
  margin-right: 17px;
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.T5_SB_16};
`

export const SwitchContainer = styled.div` /* 스위치 컨테이너*/
  display: inline-block;
  cursor: pointer;
`;

export const Switch = styled.div` /* 스위치 스타일*/
  width: 42px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? '#BCE7FF' : tokens.colors.B_Grey_2)};
  border: 1px solid ${({ isActive }) => (isActive ? tokens.colors.Blue_0_Main : tokens.colors.B_Grey_3)};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s ease;
`;

export const Handle = styled.div` /* 스위치 핸들 스타일*/
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isActive }) => (isActive ? '24px' : '4px')};
  transition: left 0.2s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          background: linear-gradient(90deg, #3083f7 0%, #01a3ff 100%);
        `
      : css`
          background-color: ${tokens.colors.White};
  `}

  &:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s ease;
    ${({ isActive }) =>
      isActive
        ? css`
            box-shadow: 0px 0px 0px 6px rgba(120, 156, 200, 0.3) inset;  
          `
        : css`
            box-shadow: 0px 0px 0px 6px rgba(166, 176, 190, 0.2) inset;
          `}
  }

  &:hover:before {
    opacity: 1;
  }

  &:active:before {
    ${({ isActive }) =>
      isActive
        ? css`
            box-shadow: 0px 0px 0px 6px rgba(120, 156, 200, 0.7) inset;
          `
        : css`
            box-shadow: 0px 0px 0px 6px rgba(102, 201, 255, 0.4) inset;
    `}
  }

  /* width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isActive }) => (isActive ? '24px' : '4px')};
  transition: left 0.2s ease;

  ${({ isActive }) =>
    isActive
      ? css`
          background: linear-gradient(90deg, #3083F7 0%, #01A3FF 100%);
        `
      : css`
          background-color: ${tokens.colors.White};
        `
  }

  &:hover {
    ${({ isActive }) =>
      isActive
        ? css`
            // 호버 스타일(Active 상태)
            background: linear-gradient(90deg, #789cc8 0%, rgba(120, 156, 200, 0.3) 100%);
          `
        : css`
            // 호버 스타일(Inactive 상태)
            background: linear-gradient(90deg, #a6b0be 0%, rgba(166, 176, 190, 0.2) 100%);
          `}
  }

  &:active {
    ${({ isActive }) =>
      isActive
        ? css`
            // 클릭 스타일(Active 상태)
            background: linear-gradient(90deg, #789cc8 0%, rgba(120, 156, 200, 0.7) 100%);
          `
        : css`
            // 클릭 스타일(Inactive 상태)
            background: linear-gradient(90deg, #66c9ff 0%, rgba(102, 201, 255, 0.4) 100%);
          `}
  } */
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 96px;

  position: fixed;
  bottom: 0; /* 아래쪽으로 고정 */
  left: 0; /* 왼쪽으로 고정 */
  background-color: rgba(255, 255, 255, 0.1); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(200px); /* 필터를 원하는 것으로 설정 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 564px;
`;

export const ArbitaryBtn = styled.button` /* 임시 저장하기 버튼*/
  width: 388px;
	height: 48px;
  border-radius: 4px;
	border: none;
	cursor: pointer;
	color: ${tokens.colors.White};
	${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const Btn = styled.button` /*저장하기 버튼*/
	margin-left: 73px;
  width: 388px;
	height: 48px;
  border-radius: 4px;
	border: none;
	cursor: pointer;
	color: ${tokens.colors.White};
	${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
`;