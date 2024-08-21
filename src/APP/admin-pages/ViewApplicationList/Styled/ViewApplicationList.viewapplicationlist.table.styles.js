import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const Container = styled.div`
  
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

// 카테고리 파트 시작
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 165, 255, 0.05);
  width: 50rem;
  height: 2.292rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_4};
  margin-top: 1.667rem;
  margin-bottom: 0.833rem;
`;

export const Category = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 7.5rem;
`;
export const CategoryShort = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 6.875rem;
`;
export const CategoryLong = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 8.75rem;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: none;
  width: 4.333rem;
  // width: 20px;
  // height: 20px;
  // margin-right: 60px;
  // margin-left: 24px;
  // cursor: pointer;
	// background-image: url('/img/checkboxicon.png');
  // &:checked {
  //   background-image: url('/img/checkedicon.png');
  //   width: 24px;
  //   height: 24px;
  //   margin-right: 58px;
  //   margin-left: 22px;
  // }
`;

export const BlankBox = styled.div`
  width: 4.333rem;
`;

export const CategoryInterviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  position: relative;
`;

export const CategoryDrop = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
`;

export const SortIcon = styled.img`
	width: 1rem;
	height: 1rem;
  self-items: center;
  cursor: pointer;
`;
// 카테고리 파트 끝

// 튜플 파트 
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25.458rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari, Opera용 */
  }
  scrollbar-width: none; /* Firefox용 */
`;

// 면접 일정 정렬 드롭 박스
export const SortDrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  width: 6.833rem;
  height: 6.083rem;
  border-radius: 0.167rem;
  position: absolute;
  box-shadow: 0 0.167rem 0.417rem 0.167rem rgba(58, 107, 135, 0.20);
  z-index: 99;
  top: 1.25rem;
`;

export const SortText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.833rem;
  height: 2rem;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_8};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  
`;

export const SortCenterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.833rem;
  height: 2rem;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_8};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  border-top : 0.042rem solid ${tokens.colors.B_Grey_2};
  border-bottom : 0.042rem solid ${tokens.colors.B_Grey_2};
`;

