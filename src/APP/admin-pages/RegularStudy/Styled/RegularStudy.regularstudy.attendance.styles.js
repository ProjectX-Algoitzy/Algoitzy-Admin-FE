import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 36px;
  width: 793px;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 16px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const StyledTable = styled.table`
  width: 793px;
  height: 277px;
  border-collapse: collapse;
`;

export const StyledTd = styled.td`
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.T5_SB_16};
  border: 1px solid #B9C4D2;
  padding: 8px;
  text-align: center;
  background-color: ${({ rowIndex, colIndex }) => {
    if (rowIndex === 0 && colIndex === 0) return 'rgba(0, 165, 255, 0.05)';
    if (rowIndex === 0) return 'rgba(0, 165, 255, 0.05)';
    if (colIndex === 0) return 'rgba(216, 216, 216, 0.05)';
    return 'white';
  }};
  border-top: ${({ rowIndex }) => (rowIndex === 0 ? 'none' : '1px solid #B9C4D2')};
  border-left: ${({ colIndex }) => (colIndex === 0 ? 'none' : '1px solid #B9C4D2')};
  border-right: ${({ colIndex }) => (colIndex === 8 ? 'none' : '1px solid #B9C4D2')};
  height: ${({ rowIndex }) => (rowIndex === 0 ? '45px' : '55px')};
  width: ${({ colIndex }) => (colIndex === 0 ? '176px' : '55px')};
`;

export const ImgIcon = styled.img`
  width: 47px;
  height: 47px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 793px;
  margin-top: 36px;
`;

export const CertificationBtn = styled.button`
  width: 176px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;