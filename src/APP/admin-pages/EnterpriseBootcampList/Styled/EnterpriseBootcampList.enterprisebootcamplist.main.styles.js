import styled from 'styled-components';
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
  border-radius: 1.25rem;
  padding: 6.583rem 15rem 0rem 15rem;
  margin-bottom: 4.083rem;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  border-bottom: 0.083rem solid ${tokens.colors.B_Grey_2};
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 14.583rem;
  margin-bottom: 0.833rem;
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
`;

export const AddBtn = styled.button`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.White};
  background-color: ${tokens.colors.Blue_0_Main};
  border: 0.042rem solid ${tokens.colors.Blue_0_Main};
  width: 5rem;
  height: 1.667rem;
  border-radius: 0.167rem;
  margin-left: 0.875rem;
  cursor: pointer;
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

export const TabSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
`;
// 탭 컨테이너
export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  justify-content: flex-start;
`;

// 탭 메뉴
export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.542rem;
  height: 1.708rem;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16};
  border: 0.042rem solid ${tokens.colors.B_Grey_4};
  border-radius: 0.167rem;
  margin: 0.833rem 0.333rem 1.667rem 0rem;
  cursor: pointer;
`;
// 선택된 탭 메뉴
export const TabSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.542rem;
  height: 1.708rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T5_SB_16};
  border: 0.083rem solid ${tokens.colors.B_Grey_7};
  border-radius: 0.167rem;
  margin: 0.833rem 0.333rem 1.667rem 0rem;
  cursor: pointer;
`;

// 조회수/이름순
export const CategoryInterviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 5.917rem;
  height: 1.5rem;
  border: 0.042rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0.167rem;
  margin-top: 0.833rem;
  position: relative;
`;

export const CategoryDrop = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  text-align: center;
`;

export const SortIcon = styled.img`
  width: 1rem;
  height: 1rem;
  self-items: center;
  cursor: pointer;
`;

export const SortDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  width: 5.917rem;
  height: 3rem;
  border-radius: 0.167rem;
  position: absolute;
  box-shadow: 0 0.083rem 0.417rem 0.083rem rgba(58, 107, 135, 0.10);
  z-index: 99;
  top: -0.167rem;
`;

export const SortText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.917rem;
  height: 1.5rem;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_6};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
`;

// 아래 버튼 컨테이너
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4rem;
  box-shadow: rgba(58, 107, 135, 0.08) 0px -0.167rem 0.417rem 0.167rem;

  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: ${tokens.colors.White};
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