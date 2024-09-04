import styled from 'styled-components';
import * as tokens from "../../../../tokens"


// 튜플 파트 시작
export const TupleContainer = styled.div`
  position: relative;
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

export const TupleWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 72px;
  height: 56px;
`;

export const TupleStartDateContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 928px;
  height: 56px;
`;
export const TupleStartDate = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
`;
export const EditIcon = styled.img`
	width: 20px;
	height: 20px;
  self-items: center;
	margin-left: 5px;
  cursor: pointer;
`;

export const TupleEndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 200px;
  height: 56px;
`;
