import styled from 'styled-components';
import * as tokens from "../../../tokens"

export const Container = styled.div`
  position: fixed;
  top: 2.5rem;
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
  
  border-radius: 0.167rem;
  text-align: center;
  width: 20.833rem;
  height: 6.667rem;
  box-shadow: 0 0.167rem 0.417rem 0 rgba(77, 114, 158, 0.25);
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20.833rem;
  height: 2.333rem;
  // border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 1.333rem;
`;

export const Title = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
  margin: 1rem 0.667rem 0.458rem 0.667rem;
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
  width: 2.917rem;
  height: 1.667rem;
  border: none;
  border-radius: 0.167rem;
  color: ${tokens.colors.White};
  margin: 0.667rem;
  cursor: pointer;
`;
