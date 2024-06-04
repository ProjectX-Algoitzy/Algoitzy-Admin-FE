import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"



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
  margin-bottom: 98px;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2}
`;

export const Head = styled.div`
  ${tokens.typography.T1_SB_32};
  margin-bottom: 16px;
`;

// export const DropBox = styled.div`
  
//   ${tokens.typography.B3_M_14};
//   color: ${tokens.colors.Grey_8};
//   // border: 1px solid ${tokens.colors.B_Grey_3};
//   border-radius: 4px;
//   width: 142px;
//   height: 36px;
//   margin-bottom: 16px;
//   margin-right: 16px;
// `;

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
  cursor: pointer;
  
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
  cursor: pointer;
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

  position: fixed; /* Changed to fixed for better overlay */
  bottom: 0; /* To ensure it's at the bottom */
  z-index: 100; /* High value to ensure it's on top */

  background-color: ${tokens.colors.White};
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

