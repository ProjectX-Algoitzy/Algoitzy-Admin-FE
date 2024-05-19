import styled from 'styled-components';
import * as tokens from "../../../../tokens"

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

// 지원서 보기 및 닫기
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1124px;
  padding: 21px 23px 21px 53px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-bottom: 80px;
`;

// 지원서 보기
export const TopTitle = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

// 닫기 버튼
export const Close = styled.div`
  background-image: url('/img/close.png');
  width: 32px;
  height: 32px;
`;

// 안쪽 컨테이너 너비
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 920px;
`;

// 스터디 지원 분야
export const StudyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

// Title
export const Title = styled.div`
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  margin-bottom: 24px;
`;

// 스터디 이름
export const StudyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 48px;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
  background-color: rgba(0, 165, 255, 0.1);
`;

// 지원서 컨테이너
export const InnerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 기본 질문 Q&A 컨테이너
export const BaseQAContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 기본 질문 
export const BaseQuestion = styled.div`
  ${tokens.typography.T5_SB_16};
  background-color: #E9EDEF;
  width: 920px;
  padding: 18px 0 18px 16px;
`;

// 기본 답변 
export const BaseAnswer = styled.div`
  ${tokens.typography.T5_SB_16};
  width: 920px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  padding: 24px 0 24px 16px;
  margin-bottom: 16px;
`;

// // 추가 질문 Q&A 컨테이너
// export const ExtraQAContainer = styled.div`
  
// `;

// // 추가 질문 
// export const BaseQuestion = styled.div`
  
// `;

// 시간 텍스트 
export const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Grey_5};
  margin-bottom: 43px;
`;

// 합격 여부 컨테이너
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  padding-bottom: 24px;
`;

// 합격 불합격 버튼 컨테이너
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

// 불합격 버튼
export const NonPassBtn = styled.button`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  width: 448px;
  height: 48px;
  background-color: ${tokens.colors.White};
  color: ${tokens.colors.Red};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Red};
  margin-right: 24px;
`;

// 합격 버튼 
export const PassBtn = styled.button`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  width: 448px;
  height: 48px;
  background-color: ${tokens.colors.White};
  color: ${tokens.colors.Blue_0_Main};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Blue_0_Main};
`;

// 확정하기 버튼 
export const DecisionBtn = styled.button`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: ${tokens.colors.B_Grey_7};
  width: 239px;
  height: 56px;
  color: ${tokens.colors.White};
  border-radius: 4px;
  margin: 80px 0 179px 0;
`;

