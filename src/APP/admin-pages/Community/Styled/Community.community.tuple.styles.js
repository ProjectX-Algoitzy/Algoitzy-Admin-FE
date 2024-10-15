import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  
`;

// 튜플 파트 시작
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  background-color: ${({ fix }) => (fix ? tokens.colors.B_Grey_1 : 'transparent')};
  &:hover {
    background-color: ${tokens.colors.B_Grey_2};
  }
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

export const TupleTitle = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
`;

export const NewIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   ${tokens.typography.T5_SB_16};
   background-color: rgba(251, 170, 132, 0.2);
   color: ${tokens.colors.Sub_3};
   width: 2.17rem;
   height: 0.88rem;
   border: none;
   border-radius: 0.17rem;
   margin-left: 0.17rem;
  //  text-decoration: underline;
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
// 튜플 파트 끝
