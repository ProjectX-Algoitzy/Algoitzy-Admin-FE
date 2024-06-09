import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const Head = styled.div`
  display: flex;
  width: 1220px;
  justify-content: space-between; 
  align-items: flex-end;
  ${tokens.typography.T1_SB_32};
  margin-bottom: 24px;
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
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px;
  
`;