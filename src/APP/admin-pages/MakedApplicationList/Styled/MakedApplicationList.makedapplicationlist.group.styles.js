import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const Container = styled.div`

`;

export const TxtBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: flex-end;
`;

export const ApplicationText = styled.div`
  padding-top: 2.292rem;
  ${tokens.typography.T3_B_24};
`;

export const BtnMakeApp = styled.button`
  width: 7.917rem;
  height: 1.958rem;
  background: #00A5FF; 
  color: white;
  border-radius: 0.208rem; 
  border: none; 
  cursor: pointer;
  ${tokens.typography.T6_SB_14};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; 
  background-color: ${tokens.colors.White};
  width: 50.843rem;
  border-top: 0.042rem solid ${tokens.colors.Grey_4};
  padding-top: 1.833rem;
  margin-top: 0.833rem;
`;
