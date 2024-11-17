import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.042rem;
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
  width: 312px;
  height: 36px;
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
  margin-top: 12px;
  margin-bottom: 11px;
  width: 33.042rem;
  height: 77px;
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
  width: 33.042rem;
`;

export const StyledTd = styled.td`
  color: ${tokens.colors.Black};
  ${tokens.typography.B2_M_16}; 
  padding: 0.33rem;
  text-align: center;
  background-color: ${({ rowIndex, colIndex }) => {
    if (rowIndex === 0) return 'rgba(0, 165, 255, 0.03)'; // 첫번째 행에만 적용
    return 'white';
  }};
  border-top: ${({ rowIndex }) => (rowIndex === 0 ? 'none' : '0.042rem solid #B9C4D2')};
  width: ${({ colIndex }) => {
    if (colIndex === 3) return '20%';
    return 'auto';
  }};
  height: ${({ rowIndex }) => (rowIndex === 0 ? '2.5rem' : '2.88rem')};
`;

export const AcceptanceBtn = styled.button`
  width: 131px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_4};
  cursor: pointer;
  color: ${tokens.colors.B_Grey_8};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_1};
`;

export const Pagination = styled.div`
  display: flex;
  width: 33.042rem;
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
  display: flex;
  justify-content: center;
  align-items: center;  
  margin: 0.417rem;
  width: 0.333rem;
  height: 0.875rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;

// 모달 스타일
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 33rem;
  height: 15rem;
  position: relative;
`;

export const ModalContent = styled.div`
  margin-top: 17%;
  margin-left: 48px;
  ${tokens.typography.B1_M_20};
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14%;
`;

export const ConfirmButton = styled.button`
  background: ${tokens.colors.Blue_0_Main};
  ${tokens.typography.T5_SB_16};
  color: white;
  border: none;
  width: 160px;
  height: 48px;
  margin-left: 16px;
  /* padding: 14px 66px; */
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background: ${tokens.colors.B_Grey_6};
  ${tokens.typography.T5_SB_16};
  color: white;
  border: none;
  width: 160px;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;
`;