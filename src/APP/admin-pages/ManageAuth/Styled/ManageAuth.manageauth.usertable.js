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
  background-color: #F7F8FC;
  width: 50rem;
  height: 2.292rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_4};
  margin-bottom: 0.833rem;
`;

export const CategoryName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 6.167rem;
`;

export const CategoryHandle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 22.208rem;
`;

export const CategoryMajor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 6.75rem;
`;

export const Blank = styled.div`
  width: 15.458rem;
`;

// 카테고리 파트 끝

// 튜플 파트 
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.667rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari, Opera용 */
  }
  scrollbar-width: none; /* Firefox용 */
`;
