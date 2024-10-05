import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  background-color: white;
  border-radius: 0.167rem;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 23, 33, 0.49); 
  padding: 5.292rem 0 14.875rem 0;
  z-index: 1001; 
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  padding: 0.875rem 0.958rem 0.875rem 2.208rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-bottom: 3.333rem;
`;

export const TopTitle = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

export const Close = styled.div`
  background-image: url('/img/close.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38.333rem;
`;

export const StudyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.333rem;
`;

export const Title = styled.div`
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  margin-bottom: 1rem;
`;

export const StudyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.75rem;
  height: 2rem;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
  background-color: rgba(0, 165, 255, 0.1);
`;

export const InnerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseQAContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseQuestion = styled.div`
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.B_Grey_2};
  width: 38.333rem;
  padding: 0.75rem 0 0.75rem 0.667rem;
`;

export const BaseAnswer = styled.div`
  ${tokens.typography.T5_SB_16};
  width: 38.333rem;
  word-wrap: break-word; /* 긴 단어나 링크가 다음 줄로 넘어가게 함 */
  overflow-wrap: break-word; /* 긴 단어나 URL이 적절하게 끊기도록 설정 */
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  padding: 1rem 0 1rem 0.667rem;
  margin-bottom: 0.667rem;
`;

export const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Grey_5};
  margin-bottom: ${({ status }) => (status === '서류 전형' ? '1.792rem' : '7.458rem')};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  padding-bottom: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const DecisionBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38.333rem;
`;

export const NonPassBtn = styled.button`
  width: 18.667rem;
  height: 2rem;
  background-color: ${props => (props.isActive ? 'rgba(220, 74, 65, 0.1)' : tokens.colors.White)};
  color: ${tokens.colors.Red};
  border-radius: 0.167rem;
  border: ${props => (props.isActive ? '3px solid' : '1px solid')} ${tokens.colors.Red};
  margin-right: 1rem;

  &:hover {
    background-color: rgba(220, 74, 65, 0.1);
  }
  cursor: pointer;
`;

export const PassBtn = styled.button`
  width: 18.667rem;
  height: 2rem;
  background-color: ${props => (props.isActive ? 'rgba(0, 165, 255, 0.1)' : tokens.colors.White)};
  color: ${tokens.colors.Blue_0_Main};
  border-radius: 0.167rem;
  border: ${props => (props.isActive ? '3px solid' : '1px solid')} ${tokens.colors.Blue_0_Main};

  &:hover {
    background-color: rgba(0, 165, 255, 0.1);
  }
  cursor: pointer;
`;

export const DecisionBtn = styled.button`
  background-color: ${tokens.colors.B_Grey_7};
  width: 9.958rem;
  height: 2.333rem;
  color: ${tokens.colors.White};
  border: none;
  border-radius: 0.167rem;
  margin: 3.333rem 0 7.458rem 0;
  cursor: pointer;
`;
