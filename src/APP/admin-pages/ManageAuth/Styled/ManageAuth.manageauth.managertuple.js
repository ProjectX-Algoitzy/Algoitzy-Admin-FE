import styled from 'styled-components';
import * as tokens from "../../../../tokens"


// 튜플 파트 시작
export const TupleContainer = styled.div`
  display: flex;
  // position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  // height: 55px;
  
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  &:hover {
    background-color: ${tokens.colors.B_Grey_1};
  }
`;

export const Crown = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0 14px;
`;

export const Blank = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 14px;
`;

export const TupleNameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 148px;
  height: 56px;
`;

export const TupleName = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // ${tokens.typography.T5_SB_16};
  // color: ${tokens.colors.Black};
  // width: 148px;
  // height: 56px;
`;

export const TupleHandle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 533px;
  height: 56px;
`;

export const TupleMajor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 148px;
  height: 56px;
`;

export const RevokeButton = styled.button`
  background-color: ${tokens.colors.B_Grey_1};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_8};
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 4px;
  width: 131px;
  height: 40px;
  margin: 0 120px;
  cursor: pointer;
`;