import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: flex-end;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.Grey_4};
  padding-bottom:12px;
`;

export const ApplicationText = styled.div`
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

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  align-items: flex-start; 
  background-color: ${tokens.colors.White};
  width: 1220px;
  
  padding-top: 44px;
  
`;
