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

export const ManagerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 12px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 12px;
  margin-top: 40px;
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


// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 324px;
  height: 34px;
  border: 1px solid ${tokens.colors.Grey_3};
  border-radius: 4px;
  margin-bottom: 18px;
  margin-left: 765px;
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 274px;
  height: 30px;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_6};
  margin: 0 10px;
  border: none;
  outline: none; /* Remove the default outline */
  
  &:focus {
    outline: none; /* Ensure no outline on focus */
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  cursor: pointer;
`;