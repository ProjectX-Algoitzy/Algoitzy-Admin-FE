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

export const Hr = styled.div`
  width: 1220px;
  height: 0;
  border: 1px solid ${tokens.colors.B_Grey_4};
  margin-bottom: 34px;
`;

export const Blank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.B_Grey_5};
  width: 1220px;
  height: 360px;
  background-color: ${tokens.colors.B_Grey_1};
  margin-bottom: 34px;
  border-radius: 10px;
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