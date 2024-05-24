import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
  margin-top: 100px;
`;

export const Title = styled.div`
  display: flex;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
`;