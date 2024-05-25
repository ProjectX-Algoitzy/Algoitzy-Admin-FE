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
  align-items: center;
  width: 1200px;
  ${tokens.typography.T1_SB_32};
  border-bottom: 1px solid ${tokens.colors.Grey_4};
  padding-bottom:20px;
`;

export const ApplicationText = styled.div`
  ${tokens.typography.T1_SB_32};
  `;
  
export const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  border-radius: 4px; 
  border: 1px solid ${tokens.colors.B_Grey_3}; 
  margin-right: 16px;
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
