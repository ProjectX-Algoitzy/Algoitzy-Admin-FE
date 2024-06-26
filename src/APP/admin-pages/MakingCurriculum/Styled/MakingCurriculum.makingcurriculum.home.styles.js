import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1201px;
  margin-left: 360px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 173px;
  margin-bottom: 36px;
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 20px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const BtnMakeCurri = styled.button`
  width: 190px;
  height: 47px;
  background: #00A5FF; 
  color: white;
  border-radius: 5px; 
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
    margin-top: 20px;
    margin-bottom: 40px;
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

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  background-color: ${tokens.colors.Grey_1};
`;

export const CurriculumTextAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 40px;
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
  width: 24px;
  height: 24px;
  margin-top: 38px;
  margin-right: 38px;
  cursor: pointer;
`;