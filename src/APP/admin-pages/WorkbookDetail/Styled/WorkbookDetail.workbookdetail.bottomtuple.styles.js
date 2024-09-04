import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  
`;

export const Tuple = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.292rem; 
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
`;

export const TupleNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 8.75rem; 
  margin-left: 0.958rem; 
  cursor: pointer;
`;

export const TupleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 17.5rem; 
  cursor: pointer;
`;

export const TupleLevel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 4.083rem; 
  cursor: pointer;
`;

export const Level = styled.img`
  width: 0.833rem; 
  height: 1.042rem; 
`;

export const AddButton = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem; 
  height: 1.25rem; 
  margin-right: 0.708rem; 
  cursor: pointer;
`;
