import styled from 'styled-components';
import * as tokens from "../../../../tokens"

// 튜플 파트 시작
export const TupleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  &:hover {
    background-color: ${tokens.colors.B_Grey_1};
  }
`;

export const TupleWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 3rem;
  height: 2.333rem;
`;

export const TupleStartDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 38.667rem;
  height: 2.333rem;
`;

export const TupleStartDate = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
`;

export const EditIcon = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  self-items: center;
  margin-left: 0.208rem;
  cursor: pointer;
`;

export const TupleEndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 8.333rem;
  height: 2.333rem;
`;
