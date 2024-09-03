import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50.042rem; /* 1201px */
  margin-left: 15rem; /* 360px */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7.208rem; /* 173px */
  margin-bottom: 1.5rem; /* 36px */
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 0.833rem; /* 20px */
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2}; /* 1px */
`;

export const BtnMakeCurri = styled.button`
  width: 7.917rem; /* 190px */
  height: 1.958rem; /* 47px */
  background: #00A5FF; 
  color: white;
  border-radius: 0.208rem; /* 5px */
  border: none; 
  cursor: pointer; 
`;

export const StudySelectContainer = styled(Select).attrs({
    classNamePrefix: 'react-select',
})`
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}

  .react-select__control { /*선택 상자의 컨트롤 부분 스타일링*/
    margin-top: 0.833rem; /* 20px */
    margin-bottom: 1.667rem; /* 40px */
    width: 8.75rem; /* 210px */
    height: 2rem; /* 48px */
    border: 0.042rem solid ${tokens.colors.B_Grey_5}; /* 1px */
    border-radius: 0.167rem; /* 4px */
    color: ${tokens.colors.Grey_8};
  }

  .react-select__single-value { /*선택된 텍스트를 스타일링*/
    border: none;
    display: flex;
    padding-left: 0.417rem; /* 10px */
    justify-content: center;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.T5_SB_16};
  }

  .react-select__placeholder {
    border: none;
    display: flex;
    padding-left: 2rem; /* 48px */
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.T5_SB_16};
  } 

  .react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
    position: absolute;
    top: -0.417rem; /* -10px */
    left: -0.042rem; /* -1px */
    width: 8.833rem; /* 212px */
    height: 4rem; /* 96px */
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

  .react-select__option { /*옵션 한칸 한칸의 스타일*/
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
    height: 2rem; /* 48px */
    padding-top: 0.625rem; /* 15px */
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
  }

  .react-select__option:active {
    background-color: transparent;
  }
`;

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.833rem; /* 20px */
  width: 100%;
  height: 4.167rem; /* 100px */
  background-color: ${tokens.colors.Grey_1};
`;

export const CurriculumTextAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem; /* 24px */
  margin-left: 1.667rem; /* 40px */
`;

export const CurriculumText = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

export const CurriculumDate = styled.div`
  ${tokens.typography.B3_M_14};
  color: #A2A2A2;
`;

export const KeyIcon = styled.div`
  background-image: url('/img/Keylineicon.png');
  width: 1rem; /* 24px */
  height: 1rem; /* 24px */
  margin-top: 1.583rem; /* 38px */
  margin-right: 1.583rem; /* 38px */
  cursor: pointer;
`;
