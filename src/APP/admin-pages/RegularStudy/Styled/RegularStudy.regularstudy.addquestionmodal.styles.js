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
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* padding: 20px; */
  border-radius: 8px;
  width: 987px;
  height: 956px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18.86px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
`;

export const ModalTitle = styled.div`
  ${tokens.typography.T3_B_24};
  columns: ${tokens.colors.Grey_8};
  margin-left: 52px;
  margin-top: 14px;
`;

// export const SearchInput = styled.input`
//   width: 100%;
//   padding: 8px;
//   margin-bottom: 20px;
//   border: 1px solid ${tokens.colors.B_Grey_3};
//   border-radius: 4px;
// `;

// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 468px;
  height: 36px;
  border: 1px solid ${tokens.colors.Grey_3};
  border-radius: 4px;
  margin-top: 32.14px;
  margin-left: 52px;
  margin-bottom: 18px;
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 468px;
  height: 34px;
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
  margin-right: 12px;
  cursor: pointer;
`;

// 테이블 스타일 시작
export const TableContainer = styled.div`
  width: var(--common-width); /* 동일한 CSS 변수 사용 */
  margin-left: 52px;
`;

export const Table = styled.table`
  width: 793px;
  border-collapse: collapse;
  background-color: #fff;
`;

export const TableHead = styled.th`
  background-color: ${tokens.colors.Grey_1};
  color: ${tokens.colors.Black};
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  padding: 17px 113px 17px 22px;
  text-align: left;
  ${tokens.typography.T5_SB_16};
  position: relative;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  /* padding: 16px 15px 15px 22px; */
  padding: 17px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  vertical-align: middle;
  ${tokens.typography.B2_M_16};

  /* 오른쪽 정렬 추가 */
  &:last-child {
    text-align: right;
  }
`;
// 테이블 스타일 끝

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  // 추가
  padding: 20px;
  list-style: none;
`;

// export const PaginationButton = styled.button`
//   margin: 0 5px;
//   padding: 10px;
//   border: 1px solid ${tokens.colors.B_Grey_3};
//   border-radius: 4px;
//   background-color: ${(props) => (props.active ? tokens.colors.Primary : "#fff")};
//   color: ${(props) => (props.active ? "#fff" : "#333")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//   ${tokens.typography.B3_M_14};
// `;

export const PaginationArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/img/grayarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  margin: 0 5px;
  width: 8px;
  height: 21px;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;