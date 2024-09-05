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
  width: 33.042rem;
  height: 2.292rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_4};
`;

export const CategoryNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 8.75rem;
  margin-left: 0.958rem;
`;

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 17.5rem;
`;

export const CategoryLevel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 5.833rem;
`;
// 카테고리 파트 끝

// 튜플 파트 
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5.833rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari, Opera용 */
  }
  scrollbar-width: none; /* Firefox용 */
`;
