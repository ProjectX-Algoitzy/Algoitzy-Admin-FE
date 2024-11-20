import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
  width: 39.042rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 33.042rem; */
  width: 100%;
  justify-content: space-between;
  margin-top: 4.17rem;
  padding-bottom: 0.83rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
`;

// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 15.8rem; /* 312px -> 15.8rem */
  height: 1.85rem; /* 36px -> 1.85rem */
  border: 0.042rem solid ${tokens.colors.Grey_3};
  border-radius: 0.167rem;
  margin-left: 2.167rem;
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 19.5rem;
  height: 1.417rem;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_6};
  margin: 0 0.417rem;
  border: none;
  outline: none; /* Remove the default outline */
  
  &:focus {
    outline: none; /* Ensure no outline on focus */
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const IntroduceContainer = styled.div`
  display: flex;
  margin-top: 0.75rem; /* 12px -> 0.75rem */
  margin-bottom: 0.6875rem; /* 11px -> 0.6875rem */
  width: 100%;
  height: 3.208rem; /* 77px -> 4.8125rem */
  border-radius: 0.417rem;
  align-items: center;
  background-color: ${tokens.colors.B_Grey_1};
`;

export const IntroduceIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 19.2px;
`;

export const IntroduceSentence = styled.p`
  ${tokens.typography.B2_M_16};  // 본래는 B1M20이다. 
  color: ${tokens.colors.B_Grey_8};
  margin-left: 8.08px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  /* width: 33.042rem; */
  width: 100%;
`;

export const StyledTd = styled.td`
  color: ${tokens.colors.Black};
  ${tokens.typography.B2_M_16}; 
  padding: 0.33rem;
  text-align: ${({ colIndex }) => (colIndex === 3 ? 'right' : 'center')}; /* 오른쪽 정렬 */
  background-color: ${({ rowIndex }) => {
    if (rowIndex === 0) return 'rgba(0, 165, 255, 0.03)'; // 첫번째 행에만 적용
    return 'white';
  }};
  border-top: ${({ rowIndex }) => (rowIndex === 0 ? 'none' : '0.042rem solid #B9C4D2')};
  width: ${({ colIndex }) => {
    if (colIndex === 0) return '20%';
    if (colIndex === 3) return '10%';
    return '30%';
  }};
  height: ${({ rowIndex }) => (rowIndex === 0 ? '2.5rem' : '2.88rem')};
`;

export const AcceptanceBtn = styled.button`
  width: 5.188rem;
  height: 1.9rem;
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_4};
  cursor: pointer;
  color: ${tokens.colors.B_Grey_8};
  background-color: ${tokens.colors.B_Grey_1};
`;

export const Pagination = styled.div`
  display: flex;
  width: 33.042rem;
  justify-content: center;
  align-items: center;  
  padding: 2.625rem;
  list-style: none;
`;

export const PaginationArrow = styled.div`
  width: 1rem;
  height: 0.7rem;
  background-image: url('/img/darkarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  margin: 0.717rem;
  width: 0.333rem;
  height: 0.875rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;