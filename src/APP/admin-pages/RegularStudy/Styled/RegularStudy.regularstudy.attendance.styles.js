import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 4.167rem;
  margin-bottom: 1.5rem;
  /* width: 33.042rem; */
  width: 39.042rem;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 0.667rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
`;

export const StyledTable = styled.table`
  /* width: 33.042rem; */
  width: 39.042rem;
  border-collapse: collapse;
`;

export const StyledTd = styled.td`
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.T5_SB_16};
  border: 0.042rem solid #B9C4D2;
  padding: 0.333rem;
  text-align: center;
  background-color: ${({ rowIndex, colIndex }) => {
    if (rowIndex === 0 && colIndex === 0) return 'rgba(0, 165, 255, 0.05)';
    if (rowIndex === 0) return 'rgba(0, 165, 255, 0.05)';
    if (colIndex === 0) return 'rgba(216, 216, 216, 0.05)';
    return 'white';
  }};
  border-top: ${({ rowIndex }) => (rowIndex === 0 ? 'none' : '0.042rem solid #B9C4D2')};
  border-left: ${({ colIndex }) => (colIndex === 0 ? 'none' : '0.042rem solid #B9C4D2')};
  border-right: ${({ colIndex }) => (colIndex === 8 ? 'none' : '0.042rem solid #B9C4D2')};
  width: ${({ colIndex }) => (colIndex === 0 ? '7.333rem' : 'auto')};
  height: ${({ rowIndex }) => (rowIndex === 0 ? '1.875rem' : '2.5rem')};
`;

export const StyledSpanBaekjoon = styled.span`
  font-size: 0.5rem;
  color: ${tokens.colors.Grey_6};
`;

export const ImgIcon = styled.img`
  width: 1.958rem;
  height: 1.958rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33.042rem;
  margin-top: 1.5rem;
`;

export const CertificationBtn = styled.button`
  width: 7.333rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;
