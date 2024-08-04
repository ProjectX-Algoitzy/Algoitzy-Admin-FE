import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  background-color: white;
  border-radius: 4px;
  
`;

// 모달 외부  #121721 49%
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 23, 33, 0.49); 
  padding: 127px 0 357px 0px;
  z-index: 1001; 
  
`;

// 제목 박스
export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1124px;
  padding: 15px 24px 21px 52px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-bottom: 44px;
`;


// 지원서 보기
export const Title = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

// 닫기 버튼
export const Close = styled.div`
  background-image: url('/img/close.png');
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  // padding: 50px 52px 40px 52px;
  // margin-bottom: 98px;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 19px;
`;

export const StyledTitle = styled.div`
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
  margin-bottom: 10px;
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
    height: 112px; 
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    ${tokens.typography.B3_M_14};
    font-weight: 600;
    text-align: center;
  }
  
  .react-select__option:not(:last-child) { /* 각 옵션 사이에 회색 줄 추가 */
    border-bottom: 1px solid ${tokens.colors.B_Grey_2}; 
  }
  
  .react-select__option { /*각각의 선택 옵션을 스타일링*/
    height: 56px; /* 옵션의 높이를 56px로 설정 */
    display: flex; /* Flexbox 사용 */
    justify-content: center;
    align-items: center; /* 수직 정렬 */
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
  
  .react-select__option:hover {
    background-color: rgba(102, 201, 255, 0.2);
  }
`;


export const Btn = styled.button` 
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
  width: 344px;
  height: 48px;
  margin-bottom: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
`;