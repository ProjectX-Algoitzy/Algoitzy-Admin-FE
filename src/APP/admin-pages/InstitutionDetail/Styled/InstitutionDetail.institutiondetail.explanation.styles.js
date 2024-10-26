import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  background-color: ${tokens.colors.B_Grey_1};
  width: 50.05rem;
  height: 13.75rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.833rem;
  padding: 0.417rem 0.417rem;
  overflow: auto;

    pre {
    background-color: #282c34;  /* 배경색 검정 */
    color: #abb2bf;  /* 텍스트 색 회색 */
    padding: 10px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    display: block;
    overflow-x: auto;
  }

  code {
    background-color: #282c34;
    color: #abb2bf;
    padding: 10px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }
`;