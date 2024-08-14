import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const Head = styled.div`
  display: flex;
  width: 50.833rem;
  justify-content: space-between; 
  align-items: flex-end;
  ${tokens.typography.T1_SB_32};
  margin-bottom: 1rem;
`;

export const Hr = styled.div`
  width: 50.833rem;
  height: 0;
  border: 0.042rem solid ${tokens.colors.B_Grey_4};
  margin-bottom: 1.417rem;
`;

export const Blank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.B_Grey_5};
  width: 50.833rem;
  height: 15rem;
  background-color: ${tokens.colors.B_Grey_1};
  margin-bottom: 1.417rem;
  border-radius: 0.417rem;
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

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 0.833rem;
  padding: 6.583rem 15rem;
`;
