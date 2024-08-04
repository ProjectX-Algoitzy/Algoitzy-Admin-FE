import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  
`;

export const Tuple = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 55px; 
`;

export const TupleNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 210px;
  margin-left: 23px;
`;

export const TupleTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 420px;
`;

export const TupleLevel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98px;
`;

export const Level = styled.img`
  width: 20px;
  height: 25px;
`;

export const DeleteButton = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  margin-right: 28px;
`;




