import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem; /* 모달이 화면에 붙지 않도록 여백 추가 */
  overflow-y: auto; /* 내용이 넘칠 때 스크롤 가능하도록 */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.333rem;
  width: 41.125rem;
  overflow-y: auto; /* Enable scrolling if the content exceeds the max height */
  box-shadow: 0 0.083rem 0.417rem rgba(0, 0, 0, 0.1);
  margin: auto; /* Center the content */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.786rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
`;

export const ModalTitle = styled.div`
  ${tokens.typography.T3_B_24};
  columns: ${tokens.colors.Grey_8};
  margin-left: 2.167rem;
  margin-top: 0.583rem;
`;

// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 19.5rem;
  height: 1.5rem;
  border: 0.042rem solid ${tokens.colors.Grey_3};
  border-radius: 0.167rem;
  margin-top: 1.339rem;
  margin-left: 2.167rem;
  margin-bottom: 1.339rem;
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
  cursor: pointer;
`;

// 테이블 스타일 시작
export const TableContainer = styled.div`
  width: var(--common-width); /* 동일한 CSS 변수 사용 */
  margin-left: 2.167rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const Table = styled.table`
  width: 33.042rem;
  border-collapse: collapse;
  background-color: #fff;
  table-layout: fixed; /* 열 너비 고정 */
`;

export const TableHead = styled.th`
  background-color: ${tokens.colors.Grey_1};
  color: ${tokens.colors.Black};
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_4};
  padding-top: 0.708rem; 
  padding-bottom: 0.708rem;
  text-align: left;
  ${tokens.typography.T5_SB_16};
  position: relative;

  /* 첫 번째 열: 백준 번호 */
  &:nth-child(1) {
    padding-left: 0.917rem;
  }

  /* 두 번째 열: 제목 */
  &:nth-child(2) {
    width: 15rem;
    padding-left: 2.083rem;
  }

  /* 세 번째 열은 공백, 네 번째 열은 레벨 */
  &:nth-child(4) {
    padding-left: 2.5rem;
  }
`;

export const TableRow = styled.tr`
`;

export const TableCell = styled.td`
  text-align: left;
  padding-top: 0.708rem; 
  padding-bottom: 0.708rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
  ${tokens.typography.B2_M_16};

  /* 첫 번째 열: 백준 번호 */
  &:nth-child(1) {
    padding-left: 0.917rem;
  }

  /* 두 번째 열: 제목 */
  &:nth-child(2) {
    padding-left: 2.083rem;
  }

  /* 세 번째 열: 레벨 */
  &:nth-child(3) {
    padding-left: 11.042rem;
  }

  /* 오른쪽 정렬 추가 */
  &:nth-child(4) {
    padding-left: 6.667rem;
  }
`;
// 테이블 스타일 끝

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  // 추가
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
  padding-left: 0.417rem;
  padding-right: 0.417rem;
  /* padding: 0.417rem; */
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;
