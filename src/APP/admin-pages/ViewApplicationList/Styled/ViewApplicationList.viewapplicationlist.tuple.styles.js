import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  
`;

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

export const CheckBox = styled.input`
  appearance: none;
  border: none;
  width: 20px;
  height: 20px;
  margin-right: 60px;
  margin-left: 24px;
  cursor: pointer;
  background-image: url('/img/checkboxicon.png');
  &:checked {
    background-image: url('/img/checkedicon.png');
    width: 24px;
    height: 24px;
    margin-right: 58px;
    margin-left: 22px;
  }
`;

export const Tuple = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 180px;
  height: 56px;
  cursor: pointer;
`;
export const TupleShort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 165px;
  height: 56px;
  cursor: pointer;
`;
export const TupleLong = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 210px;
  height: 56px;
  cursor: pointer;
`;

export const TupleInterviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
`;

export const TupleInterview = styled.div`
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
// 튜플 파트 끝


