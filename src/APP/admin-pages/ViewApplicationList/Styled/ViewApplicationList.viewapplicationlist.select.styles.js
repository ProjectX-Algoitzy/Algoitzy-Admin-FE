import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"
import Select, { components } from 'react-select';


export const StudySelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
.react-select__control { /*선택 상자의 컨트롤 부분을 스타일링*/
  width: 5.917rem;
  min-height: 1.5rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: 0.042rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0.167rem;
  text-align: center;
  justify-content: center;
  cursor: pointer;
}
.react-select__menu {  /*클릭 시 나오는 드롭다운 메뉴의 스타일을 지정*/
  position: absolute;
  top: -0.617rem;  
  left: -0.082rem;
  width: 6.542rem;
  height: auto;
  border-radius: 0.167rem;
  border: none;
  box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
}
.react-select__option:not(:last-child) { /* 각 옵션 사이에 회색 줄 추가 */
    border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2}; 
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
  border-top-left-radius: 0.167rem; /* 상단 왼쪽 모서리를 둥글게 만듭니다. */
  border-top-right-radius: 0.167rem; /* 상단 오른쪽 모서리를 둥글게 만듭니다. */
  border: none;
  ${tokens.typography.B3_M_14};
  position: relative; /* 요소를 상대적인 위치로 설정 */
  top: -0.167rem; /* 원하는 만큼 위로 이동 */
}

.react-select__option--is-selected:last-of-type { /* 마지막 옵션의 스타일을 지정 */
  background-color: rgba(102, 201, 255, 0.2);
  backdrop-filter: blur(8px);
  color: ${tokens.colors.Grey_8};
  border-bottom-left-radius: 0.167rem; /* 하단 왼쪽 모서리를 둥글게 만듭니다. */
  border-bottom-right-radius: 0.167rem; /* 하단 오른쪽 모서리를 둥글게 만듭니다. */
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
.react-select__input input {
  &::placeholder {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
  }
}
`;
