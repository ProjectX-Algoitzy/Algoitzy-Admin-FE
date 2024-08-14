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
  border-radius: 0.833rem;
  padding: 6.583rem 15rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: flex-end;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.Grey_4};
  padding-bottom: 0.5rem;
`;

export const ApplicationText = styled.div`
  ${tokens.typography.T3_B_24};
`;
  
export const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.917rem;
  height: 1.5rem;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  border-radius: 0.167rem; 
  border: 1px solid ${tokens.colors.B_Grey_3}; 
  margin-right: 0.667rem;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; 
  background-color: ${tokens.colors.White};
  width: 50.833rem;
  padding-top: 1.833rem;
`;
