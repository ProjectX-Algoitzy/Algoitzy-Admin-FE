import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 36px;
  width: 793px;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 16px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 95px;
  margin-bottom: 101px;
`;

export const BlueContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${tokens.colors.B_Grey_1};
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
  padding-left: 16px;
`; 

export const InputContainer = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  color: ${tokens.colors.Grey_6};
  ${tokens.typography.B2_M_16};
  padding-left: 16px;
  margin-top: 24px;
  border: none;

  &::placeholder {
    color: ${tokens.colors.Grey_6};
  }
`;