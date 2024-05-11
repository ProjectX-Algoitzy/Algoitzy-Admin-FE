import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const Head = styled.div`
  ${tokens.typography.T1_SB_32};
  margin-bottom: 24px;
  width: 1220px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px;
  
`;