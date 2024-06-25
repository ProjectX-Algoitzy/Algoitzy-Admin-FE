import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  align-items: center;
  /* background-image: url('/img/makingapplication.png'); */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 113px;
  width: 1200px;
  height: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 4px rgba(58, 107, 135, 0.2);
`;

export const StyledPageName = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.H3_SB_40};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 32px;
`;

export const StyledTitle = styled.div`
  margin-bottom: 10px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  border: 1px solid ${tokens.colors.Grey_4};
  width: 590px;
  height: 56px;
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
  padding-left: 16px;

  &::placeholder {
    color: ${tokens.colors.Grey_4};
  }

  &:focus {
    outline: none;
  }
`;

export const WeeksSelectContainer = styled(Select).attrs({
    classNamePrefix: 'react-select',
  })`
  .react-select__control { /*선택 상자의 컨트롤 부분을 스타일링*/
    width: 590px;
    height: 56px;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 4px;
    padding-left: 250px;
  }
  .react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
    position: absolute;
    top: -10px;  
    left: -1px;
    width: 593px;
    height: 280px; 
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
  .react-select__option { /*각각의 선택 옵션을 스타일링*/
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
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
    cursor: pointer;
  }
  
  .react-select__option:active {
    background-color: transparent;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
`;

export const Btn = styled.button` /*개설하기 버튼*/
  margin-left: 16px;
  width: 388px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
`;