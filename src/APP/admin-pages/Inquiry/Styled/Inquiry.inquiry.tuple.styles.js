import styled from 'styled-components';
import * as tokens from "../../../../tokens"

// 튜플 파트 시작
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  background-color: transparent;
  &:hover {
    background-color: ${tokens.colors.B_Grey_2};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  /* opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; */
`;

export const TupleType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 5rem;
  min-height: 2.333rem;
  cursor: pointer;
`;

export const TupleTitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 26.667rem;
  min-height: 2.333rem;
  margin-left: 3.417rem;
  cursor: pointer;
`;

export const TupleTitle = styled.span`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
`;

export const HighlightedText = styled.span`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
`;

export const Lockimg = styled.img`
  width: 0.667rem;
  height: 0.75rem;
  margin-left: 0.458rem;
`;

export const TupleWriter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 4.667rem;
  min-height: 2.333rem;
  cursor: pointer;
`;

export const TupleBlank = styled.div`
  width: 4.667rem;
`;

export const TupleDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 5.75rem;
  min-height: 2.333rem;
  cursor: pointer;
`;

export const TupleProcess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 3.833rem;
  min-height: 2.333rem;
  margin-right: 1.667rem;
  cursor: pointer;
`;

export const TupleView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 3.833rem;
  min-height: 2.333rem;
  margin-right: 1.667rem;
  cursor: pointer;
`;

export const ProcessingYNBox = styled.div`
  background-color: ${({ solvedYn }) => (solvedYn ? tokens.colors.Blue_0_Main : tokens.colors.Grey_4)};
  color: ${tokens.colors.White};
  width: 3.167rem;
  height: 0.875rem;
  border: none;
  border-radius: 0.16rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;