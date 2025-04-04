import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"

export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 0.833rem;
  padding: 6.583rem 15rem 0rem 15rem;
  margin-bottom: 4.083rem;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.5rem;
`;

export const CautionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${tokens.colors.B_Grey_1};
  width: 50rem;
  height: 3.208rem;
  border-radius: 0.417rem;
  margin-bottom: 0.667rem;
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
  margin-bottom: 0.833rem;
`;

export const Caution = styled.div`
  ${tokens.typography.B1_M_20};
  color: ${tokens.colors.B_Grey_8};
`;

export const CautionIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 0.833rem;
  margin-right: 0.333rem;
`;

export const UdateButton = styled.button`
  width: 9.708rem;
  height: 2rem;
  background-color: ${tokens.colors.Red};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.White};
  border: none;
  border-radius: 0.167rem;
  margin-top: 2.333rem;
  cursor: pointer;
`;
