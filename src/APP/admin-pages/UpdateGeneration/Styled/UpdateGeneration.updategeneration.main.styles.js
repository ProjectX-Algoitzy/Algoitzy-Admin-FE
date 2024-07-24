import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"



export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px 0px 360px;
  margin-bottom: 98px;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 12px;
`;

export const CautionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${tokens.colors.B_Grey_1};
  width: 1200px;
  height: 77px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
  margin-bottom: 20px;
`;

export const Caution = styled.div`
  ${tokens.typography.B1_M_20};
  color: ${tokens.colors.B_Grey_8};
`;

export const CautionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-right: 8px;
`;

export const UdateButton = styled.button`
  width: 233px;
  height: 48px;
  background-color: ${tokens.colors.Red};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.White};
  border: none;
  border-radius: 4px;
  margin-top: 56px;
`;

