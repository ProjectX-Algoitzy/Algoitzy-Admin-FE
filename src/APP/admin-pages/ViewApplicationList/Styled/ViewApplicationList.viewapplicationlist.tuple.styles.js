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
  width: 50rem;
  // height: 2.292rem;
  
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  &:hover {
    background-color: ${tokens.colors.B_Grey_1};
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  border: none;
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 2.5rem;
  margin-left: 1rem;
  cursor: pointer;
  background-image: url('/img/checkboxicon.png');
  background-repeat: no-repeat;
  &:checked {
    background-image: url('/img/checkedicon.png');
    background-repeat: no-repeat;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2.417rem;
    margin-left: 0.917rem;
  }
`;

export const Tuple = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 7.5rem;
  height: 2.333rem;
  cursor: pointer;
`;
export const TupleShort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 6.875rem;
  height: 2.333rem;
  cursor: pointer;
`;
export const TupleLong = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 8.75rem;
  height: 2.333rem;
  cursor: pointer;
`;

export const TupleInterviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
`;

export const TupleInterview = styled.div`
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
// 튜플 파트 끝
