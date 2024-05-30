import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"
import Select, { components } from 'react-select';


export const StudySelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
.react-select__control { /*선택 상자의 컨트롤 부분을 스타일링*/
  // margin-top: 32px;
  /* margin-left: 32px; */
  width: 142px;
  height: 36px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  // border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  // background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  // backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
  text-align: center;
  justify-content: center;
  // margin-bottom: 16px;
  // margin-right: 16px;
}
// .react-select__single-value { /*선택된 값의 텍스트를 스타일링*/
//   color: ${tokens.colors.Grey_8};
//   ${tokens.typography.B3_M_14};
//   border: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
// }
.react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
  /* margin-left: 32px; */
  width: 142px;
  height: 141px;
  border-radius: 4px;
  // border: none; /* 드롭다운 메뉴 경계선 제거 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  margin: 0;
}
.react-select__option { /*각각의 선택 옵션을 스타일링*/
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
}
.react-select__option--is-selected { /*현재 선택된 옵션의 스타일을 지정*/
  background-color: #66C9FF;
  background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
  color: ${tokens.colors.Grey_8};
  border: none;
}

.react-select__option--is-focused { /*현재 포커스된 옵션의 스타일을 지정*/
  border: none;
  background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
}

.react-select__placeholder { /*선택 상자에 표시되는 기본 플레이스홀더(placeholder) 텍스트의 스타일을 지정*/
  color: black;
  font-weight: 600;
  border: none;
  align-items: center;
  justify-content: center;
}  
.custom-option-label {
  flex-grow: 1; /* 라벨이 가능한 최대 공간을 차지하도록 함 */
  align-items: center;
  justify-content: center;
}
.react-select__dropdown-indicator { /* 화살표 아이콘의 위치 조정 */
  padding-right: 10px; 
}
`;
