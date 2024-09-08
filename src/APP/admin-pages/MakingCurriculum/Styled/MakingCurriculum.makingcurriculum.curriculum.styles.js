import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  background-image: url('/img/login.png');
  min-height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.167rem; /* 100px */
  margin-bottom: 4.708rem; /* 113px */
  width: 50rem; /* 1200px */
  height: auto;
  background-color: white;
  border-radius: 0.333rem; /* 8px */
  box-shadow: 0px 0.167rem 0.417rem 0.167rem rgba(58, 107, 135, 0.2); /* 0px 4px 10px 4px */
`;

export const StyledPageName = styled.div`
  margin-top: 5rem; /* 120px */
  margin-bottom: 3.333rem; /* 80px */
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.H3_SB_40};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.583rem; /* 590px */
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.333rem; /* 32px */
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.417rem; /* 10px */
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 0.167rem; /* 4px */
  border: none;
  border: 0.042rem solid ${tokens.colors.Grey_4}; /* 1px */
  width: 24.583rem; /* 590px */
  height: 2.333rem; /* 56px */
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
  padding-left: 0.667rem; /* 16px */

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
    width: 24.583rem; /* 590px */
    height: 2.333rem; /* 56px */
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 0.042rem solid ${tokens.colors.B_Grey_3}; /* 1px */
    border-radius: 0.167rem; /* 4px */
    padding-left: 10.417rem; /* 250px */
  }
  .react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
    position: absolute;
    top: -0.417rem;  /* -10px */
    left: -0.042rem; /* -1px */
    width: 24.708rem; /* 593px */
    height: 11.667rem; /* 280px */
    border-radius: 0.167rem; /* 4px */
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1); /* 0 2px 4px */
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
  }
  .react-select__option:not(:last-child) { /* 각 옵션 사이에 회색 줄 추가 */
    border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2}; /* 1px */
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
    border-top-left-radius: 0.167rem; /* 4px */
    border-top-right-radius: 0.167rem; /* 4px */
    border: none;
    ${tokens.typography.B3_M_14};
    position: relative;
    top: -0.167rem; /* -4px */
  }
  
  .react-select__option--is-selected:last-of-type { /* 마지막 옵션의 스타일을 지정 */
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 0.167rem; /* 4px */
    border-bottom-right-radius: 0.167rem; /* 4px */
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
  height: 4rem; /* 96px */
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(200px);
  z-index: 1000;
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Btn = styled.button` /*개설하기 버튼*/
  margin-left: 0.667rem; /* 16px */
  width: 16.167rem; /* 388px */
  height: 2rem; /* 48px */
  border-radius: 0.167rem; /* 4px */
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
`;
