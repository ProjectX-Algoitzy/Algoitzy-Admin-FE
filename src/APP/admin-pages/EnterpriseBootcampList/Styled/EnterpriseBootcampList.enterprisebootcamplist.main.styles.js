import styled from 'styled-components';
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

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 360px;
  margin-bottom: 20px;
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
  
`;

export const AddBtn = styled.button`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Blue_0_Main};
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.Blue_0_Main};
  width: 72px;
  height: 32px;
  border-radius: 4px;
  margin-left: 14px;
`;

export const DeleteBtn = styled.button`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Red};
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.Red};
  width: 72px;
  height: 32px;
  border-radius: 4px;
  margin-left: 8px;
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


// export const DropBox = styled.div`
  
//   ${tokens.typography.B3_M_14};
//   color: ${tokens.colors.Grey_8};
//   // border: 1px solid ${tokens.colors.B_Grey_3};
//   border-radius: 4px;
//   width: 142px;
//   height: 36px;
//   margin-bottom: 16px;
//   margin-right: 16px;
// `;

export const TabSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  
`;
// 탭 컨테이너
export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: flex-start;
  
`;

// 탭 메뉴
export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 41px;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16};
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 4px;
  margin: 20px 8px 40px 0px;
  cursor: pointer;
  
`;
// 선택된 탭 메뉴
export const TabSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 41px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T5_SB_16};
  border: 2px solid ${tokens.colors.B_Grey_7};
  border-radius: 4px;
  margin: 20px 8px 40px 0px;
  cursor: pointer;
`;

// 조회수/이름순
export const CategoryInterviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  margin-top: 20px;
  position: relative;
`;

export const CategoryDrop = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  text-align: center;
`;

export const SortIcon = styled.img`
	width: 24px;
	height: 24px;
  self-items: center;
  cursor: pointer;
`;

export const SortDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  width: 142px;
  height: 72px;
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 2px 10px 2px rgba(58, 107, 135, 0.10);
  z-index: 99;
  top: -4px;
`;

export const SortText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_6};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  
`;


//
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`;

// 일반 텍스트
export const NormText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
`;

// 지원서 개수 텍스트
export const CntText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
  margin-left: 4px;
`;

// 아래 버튼 컨테이너
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 96px;
  box-shadow: rgba(58, 107, 135, 0.08) 0px -4px 10px 4px;

  position: fixed; /* Changed to fixed for better overlay */
  bottom: 0; /* To ensure it's at the bottom */
  z-index: 100; /* High value to ensure it's on top */

  background-color: ${tokens.colors.White};
`;

// 버튼들
// 서류 불합격 메일 발송
export const BtnDocNonpass = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Red};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Red};
  cursor: pointer;
  margin: 24px 8px;
`;
// 서류 합격 메일 발송
export const BtnDocPass = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Blue_0_Main};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 24px 8px;
`;
// 면접 일정 메일 발송
export const BtnMail = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.B_Grey_7};
  color: ${tokens.colors.White};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_7};
  cursor: pointer;
  margin: 24px 8px;
`;
// 최종 합격 메일 발송
export const BtnFinalPass = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 24px 8px;
`;

// 최종 불합격 메일 발송
export const BtnFinalNonPass = styled.button`
  width: 239px;
  height: 48px;
  background: ${tokens.colors.Red};
  color: ${tokens.colors.White};
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Red};
  cursor: pointer;
  margin: 24px 8px;
`;


// 페이지
// export const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

// export const PageButton = styled.button`
//   ${tokens.typography.B2_M_16};
//   color: ${tokens.colors.Blue_0_Main};
//   background-color: ${tokens.colors.White};
//   border: 1px solid ${tokens.colors.Blue_0_Main};
//   border-radius: 4px;
//   width: 36px;
//   height: 36px;
//   margin: 0 5px;
//   cursor: pointer;
//   &:disabled {
//     color: ${tokens.colors.Grey_4};
//     border-color: ${tokens.colors.Grey_4};
//     cursor: not-allowed;
//   }
// `;

// export const PageNumber = styled.button`
//   ${tokens.typography.B2_M_16};
//   color: ${props => props.isSelected ? tokens.colors.White : tokens.colors.Blue_0_Main};
//   background-color: ${props => props.isSelected ? tokens.colors.Blue_0_Main : tokens.colors.White};
//   border: 1px solid ${tokens.colors.Blue_0_Main};
//   border-radius: 4px;
//   width: 36px;
//   height: 36px;
//   margin: 0 5px;
//   cursor: pointer;
// `;


export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  // 추가
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
