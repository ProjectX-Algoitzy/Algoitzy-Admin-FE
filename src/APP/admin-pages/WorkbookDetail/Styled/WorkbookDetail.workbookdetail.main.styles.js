import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 987px;
  // height: 1074px;
  background-color: white;
  border-radius: 4px;
  
`;

// 모달 외부  #121721 49%
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 23, 33, 0.49); 
  padding: 127px 0 357px 0px;
  z-index: 1001; 
  
`;

// 제목 박스
export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 911px;
  // height: 62px;
  padding: 15px 24px 21px 52px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-bottom: 50px;
`;


// 지원서 보기
export const Title = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

// 닫기 버튼
export const Close = styled.div`
  background-image: url('/img/close.png');
  width: 32px;
  height: 32px;
  cursor: pointer;
`;


export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  // padding: 50px 52px 40px 52px;
  // margin-bottom: 98px;
`;

// export const TopTableBox = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 793px;
  
//   margin-bottom: 80px;
// `;

// export const BottomTableBox = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 793px;
  
//   margin-bottom: 12px;
//   margin-top: 40px;
// `;


// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 793px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 468px;
  height: 36px;
  border: 1px solid ${tokens.colors.Grey_3};
  border-radius: 4px;
  margin-bottom: 26px;
  
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 350px;
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

// 페이지
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 20px;
  list-style: none;
`;

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

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 336px;
  margin-bottom: 40px;
  
`;

export const EditButton = styled.button`
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: ${tokens.colors.Red};
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  width: 160px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

