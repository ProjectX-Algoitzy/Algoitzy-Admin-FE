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
  border-radius: 1.667rem;
  padding: 6.583rem 15rem 0rem 15rem;
  margin-bottom: 4.083rem;
`;

export const ManagerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.5rem;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.5rem;
  margin-top: 1.667rem;
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

// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 13.5rem;
  height: 1.417rem;
  border: 0.042rem solid ${tokens.colors.Grey_3};
  border-radius: 0.167rem;
  margin-bottom: 0.75rem;
  margin-left: 31.875rem;
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 11.417rem;
  height: 1.25rem;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_6};
  margin: 0 0.417rem;
  border: none;
  outline: none;
  
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  cursor: pointer;
`;

// 페이지
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 0.833rem;
  list-style: none;
`;

export const PaginationArrow = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url('/img/grayarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  margin: 0 0.208rem;
  width: 0.333rem;
  height: 0.875rem;
  padding: 0.417rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;
