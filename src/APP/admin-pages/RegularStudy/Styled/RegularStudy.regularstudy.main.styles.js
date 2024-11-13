import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  /* display: flex;
  margin-top: 3.33rem;
  height: 100vh; 
  position: relative; */

  display: flex;
  margin-top: 3.33rem;
  overflow: auto; 
  padding: 0 5rem;
  justify-content: center; 
  
  @media (max-width: 600px) {
    flex-direction: column; 
    padding: 0 0.33rem;
  }
  
`;

export const Content = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    margin-bottom: 3.33rem;
  }
`;