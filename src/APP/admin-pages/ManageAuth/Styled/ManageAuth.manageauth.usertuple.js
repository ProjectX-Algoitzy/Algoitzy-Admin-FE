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

export const TupleName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  width: 148px;
  height: 56px;
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
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 4px;
  width: 131px;
  height: 40px;
  margin: 0 120px;
  cursor: pointer;
  position: relative;
`;

export const GrantText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_8};
`;

export const SortIcon = styled.img`
	width: 24px;
	height: 24px;
  self-items: center;
`;


// 권한 부여 드롭 박스
export const SelectDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  width: 135px;
  height: 82px;
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 4px 10px 4px rgba(58, 107, 135, 0.20);
  z-index: 99;
  top: 30px;
`;

export const SelectText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 40px;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_8};
  border: 0.5px solid ${tokens.colors.Grey_2};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  
`;