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
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
`;

export const CategoryWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 3rem;
`;

export const CategoryStartDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 38.667rem;
`;

export const CategoryEndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Black};
  text-align: center;
  width: 8.333rem;
`;
// 카테고리 파트 끝

// 튜플 파트 
export const TupleContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 19.167rem;
`;

