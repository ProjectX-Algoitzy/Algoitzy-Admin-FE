import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"



export const OuterContainer = styled.div`
  // background: linear-gradient(to bottom, #EFF1FD, #E8F7FF);
  // position: relative;
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
  background-color: ${tokens.colors.White};
  border-radius: 0.25rem;
  padding: 1.4rem 15rem 4rem 15rem;
  margin-top: 5.583rem;
  margin-bottom: 4.083rem;
  // box-shadow: 0 0.17rem 1rem 0.17rem rgba(0, 0, 0, 0.04);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  border-bottom: 0.04rem solid ${tokens.colors.B_Grey_2};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // width: 14.58rem;
  margin-bottom: 0.83rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
`;

export const SemiHead = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.B_Grey_6};
  margin-left: 1rem;
  line-height: 1.333rem;
`;

// 검색 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 13.5rem;
  height: 1.42rem;
  border: 0.04rem solid ${tokens.colors.Grey_3};
  border-radius: 0.17rem;
  margin-bottom: 0.75rem;
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 11.42rem;
  height: 1.25rem;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_6};
  margin: 0 0.42rem;
  border: none;
  outline: none;
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${tokens.colors.B_Grey_4};
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
  @media (max-width: 600px) {
    width: 100%;
  }
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
  width: 6.54rem;
  height: 1.71rem;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16};
  border: 0.04rem solid ${tokens.colors.B_Grey_4};
  border-radius: 0.17rem;
  margin: 0.83rem 0.33rem 1.67rem 0;
  cursor: pointer;
`;

// 선택된 탭 메뉴
export const TabSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.54rem;
  height: 1.71rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T5_SB_16};
  border: 0.08rem solid ${tokens.colors.B_Grey_7};
  border-radius: 0.17rem;
  margin: 0.83rem 0.33rem 1.67rem 0;
  cursor: pointer;
`;

// 조회수/이름순
export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 5.92rem;
  height: 1.5rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0.17rem;
  margin-top: 0.83rem;
  position: relative;
`;

export const CategoryDrop = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  text-align: center;
  cursor: pointer;
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
  width: 5.92rem;
  height: 4.5rem;
  border-radius: 0.17rem;
  position: absolute;
  box-shadow: 0 0.08rem 0.42rem 0.08rem rgba(58, 107, 135, 0.10);
  z-index: 99;
  top: -0.17rem;
`;

export const SortText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.92rem;
  height: 1.5rem;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_6};
  
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  
  cursor: pointer;
`;


// 페이지
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  margin-top: 1rem;
`;

export const BlankBtn = styled.div`
  width: 190px;
`;

export const WriteBtn = styled.button`
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  width: 190px;
  height: 47px;
  border: none;
  border-radius: 0.167rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 0.83rem;
  list-style: none;
  // margin-top: 1.6rem;
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
  margin: 0 0.21rem;
  width: 0.33rem;
  height: 0.88rem;
  padding: 0.42rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;