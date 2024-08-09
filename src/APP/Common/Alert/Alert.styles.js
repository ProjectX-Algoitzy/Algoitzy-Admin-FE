import styled from 'styled-components';
import * as tokens from "../../../tokens"

export const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1001;
`;

export const Dialog = styled.div`
  background: ${tokens.colors.White};
  
  border-radius: 4px;
  text-align: center;
  width: 500px;
  height: 160px;
  box-shadow: 0 4px 10px 0 rgba(77, 114, 158, 0.25);
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 500px;
  height: 56px;
  // border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 32px;
`;

export const Title = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
  margin: 24px 16px 11px 16px;
`;

// export const TextBox = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 500px;
// `;

// export const Text = styled.div`
//   ${tokens.typography.B3_M_14};
//   color: ${tokens.colors.Grey_8};
//   margin: 12px 0 0 32px;
// `;

export const ButtonContatiner = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  ${tokens.typography.T5_SB_16};
  background: ${tokens.colors.Blue_0_Main};
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: ${tokens.colors.White};
  margin: 16px;
  cursor: pointer;
`;

