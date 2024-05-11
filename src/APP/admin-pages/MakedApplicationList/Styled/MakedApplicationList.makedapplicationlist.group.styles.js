import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`

`;

// export const Head = styled.div`
//   ${tokens.typography.T1_SB_32};
//   margin-bottom: 24px;
// `;

export const TxtBtnBox = styled.div`
  display: flex;
  // flex-direction: column-reverse;
  flex-direction: row;
  justify-content: space-between; 
  ${tokens.typography.T1_SB_32};
`;

export const ApplicationText = styled.div`
  padding-top: 23px;
  ${tokens.typography.T3_B_24};
  `;
  
export const BtnMakeApp = styled.button`
  width: 190px;
  height: 47px;
  background: #00A5FF; 
  color: white;
  border-radius: 5px; 
  border: none; 
  cursor: pointer; 
`;

// export const Group = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center; 
//   justify-content: center; 
//   background-color: ${tokens.colors.White};
//   width: 1200px;
//   border-top: 1px solid ${tokens.colors.Grey_4};
//   margin-top:20px;
// `;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  align-items: flex-start; 
  background-color: ${tokens.colors.White};
  width: 1220px;
  border-top: 1px solid ${tokens.colors.Grey_4};
  margin-top:20px;
`;




