import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
`;

export const CategoryContainer = styled.div`
  display: flex;
  background-color: ${tokens.colors.B_Grey_1};
  width: 49.167rem;
  height: 13.75rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.833rem;
  padding: 0.417rem 0.417rem;
  overflow: auto;
`;