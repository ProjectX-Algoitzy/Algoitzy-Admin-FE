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
`

export const CategoryDrop = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 180px;
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


