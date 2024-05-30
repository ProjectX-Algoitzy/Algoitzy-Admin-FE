import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"
import Select, { components } from 'react-select';


export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px 0px 360px;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2}
`;

export const Head = styled.div`
  ${tokens.typography.T1_SB_32};
`;

export const DropBox = styled.div`
  
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  width: 142px;
  height: 36px;
  margin-bottom: 16px;
  margin-right: 16px;
`;

// 탭 컨테이너
export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: flex-start;
  
`;

// 탭 메뉴
export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 41px;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16};
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 4px;
  margin: 40px 8px 40px 0px;
  
`;
// 선택된 탭 메뉴
export const TabSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 41px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T5_SB_16};
  border: 2px solid ${tokens.colors.B_Grey_7};
  border-radius: 4px;
  margin: 40px 8px 40px 0px;
  
`;

//
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`;

// 일반 텍스트
export const NormText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
`;

// 지원서 개수 텍스트
export const CntText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
  margin-left: 4px;
`;

// 아래 버튼 컨테이너
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 96px;
  box-shadow: rgba(58, 107, 135, 0.08) 0px -4px 10px 4px;
`;

// 버튼들
// 지원서 삭제
export const BtnDelete = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Red};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Red};
  cursor: pointer;
  margin: 24px 8px;
`;
// 서류 합격 메일 발송
export const BtnPass = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Blue_0_Main};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 24px 8px;
`;
// 면접 일정 메일 발송
export const BtnMail = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.B_Grey_7};
  color: ${tokens.colors.White};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_7};
  cursor: pointer;
  margin: 24px 8px;
`;
// 최종 합격 메일 발송
export const BtnFinal = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 24px 8px;
`;


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
