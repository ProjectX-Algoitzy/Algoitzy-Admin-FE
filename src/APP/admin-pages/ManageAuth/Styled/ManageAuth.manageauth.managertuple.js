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
`;

export const Crown = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  margin: 0 0.583rem;
`;

export const Blank = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 0.583rem;
`;

export const TupleNameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 6.167rem;
  height: 2.333rem;
`;

export const TupleName = styled.div`
  // Custom styles for TupleName can be added here
`;

export const TupleHandle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 22.208rem;
  height: 2.333rem;
`;

export const TupleMajor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 6.167rem;
  height: 2.333rem;
`;

export const RevokeButton = styled.button`
  background-color: ${tokens.colors.B_Grey_1};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_8};
  border: 0.167rem solid ${tokens.colors.B_Grey_4};
  border-radius: 0.167rem;
  width: 5.458rem;
  height: 1.667rem;
  margin: 0 5rem;
  cursor: pointer;
`;
