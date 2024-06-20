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
  width: 1200px;
  height: 55px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Category = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 180px;
`;
export const CategoryShort = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 165px;
`;
export const CategoryLong = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 210px;
`;

export const CheckBox = styled.input`
  appearance: none;
  border: none;
  width: 104px;
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
  width: 104px;
`;

export const CategoryInterviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 180px;
  position: relative;
`;

export const CategoryDrop = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
`;

export const SortIcon = styled.img`
	width: 24px;
	height: 24px;
  self-items: center;
  cursor: pointer;
`;
// 카테고리 파트 끝

// 튜플 파트 
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 611px;
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
  width: 164px;
  height: 146px;
  border-radius: 4px;
  position: absolute;
  box-shadow: 0 4px 10px 4px rgba(58, 107, 135, 0.20);
  z-index: 99;
  top: 30px;
`;

export const SortText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 48px;
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
  width: 164px;
  height: 48px;
  ${tokens.typography.B3_M_14};
  // font-weight: 600;
  color: ${tokens.colors.Grey_8};
  &:hover {
    background-color: rgba(102, 201, 255, 0.2); 
  }
  cursor: pointer;
  border-top : 1px solid ${tokens.colors.B_Grey_2};
  border-bottom : 1px solid ${tokens.colors.B_Grey_2};
`;




