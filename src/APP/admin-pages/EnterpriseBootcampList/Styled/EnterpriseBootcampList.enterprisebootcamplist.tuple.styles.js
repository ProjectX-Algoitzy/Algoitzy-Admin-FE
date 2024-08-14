import styled from 'styled-components';
import * as tokens from "../../../../tokens"

// 튜플 파트 시작
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
  
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
  &:hover {
    background-color: ${tokens.colors.B_Grey_1};
  }
  cursor: pointer;
`;

export const TupleNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 3rem;
  height: 2.333rem;
`;

export const TupleName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 44rem;
  height: 2.333rem;
`;

export const TupleView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 3rem;
  height: 2.333rem;
`;