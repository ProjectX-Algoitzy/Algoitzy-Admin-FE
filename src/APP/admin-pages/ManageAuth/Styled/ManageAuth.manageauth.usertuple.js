import styled from 'styled-components';
import * as tokens from "../../../../tokens"

// 튜플 파트 시작
export const TupleContainer = styled.div`
  display: flex;
  // position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50rem;
  // height: 55px;
  
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
  &:hover {
    background-color: ${tokens.colors.B_Grey_1};
  }
`;

export const TupleName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 6.167rem;
  height: 2.333rem;
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

// export const GrantButton = styled.button`
//   background-color: ${tokens.colors.B_Grey_1};
//   ${tokens.typography.T5_SB_16};
//   color: ${tokens.colors.B_Grey_8};
//   border: 1px solid ${tokens.colors.B_Grey_4};
//   border-radius: 4px;
//   width: 131px;
//   height: 40px;
//   margin: 0 120px;
//   cursor: pointer;
// `;

export const GrantButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.B_Grey_1};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_8};
  border: 0.07rem solid ${tokens.colors.B_Grey_4};
  border-radius: 0.167rem;
  width: 5.458rem;
  height: 1.667rem;
  margin: 0 5rem;
  cursor: pointer;
  position: relative;
`;

export const GrantText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_8};
`;

export const SortIcon = styled.img`
	width: 1rem;
	height: 1rem;
  self-items: center;
`;

// 권한 부여 드롭 박스
export const SelectDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  width: 5.625rem;
  height: 3.417rem;
  border-radius: 0.167rem;
  position: absolute;
  box-shadow: 0 0.167rem 0.417rem 0.167rem rgba(58, 107, 135, 0.20);
  z-index: 99;
  top: 1.25rem;
`;

export const SelectText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.625rem;
  height: 1.667rem;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_8};
  border: 0.021rem solid ${tokens.colors.Grey_2};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  
`;
