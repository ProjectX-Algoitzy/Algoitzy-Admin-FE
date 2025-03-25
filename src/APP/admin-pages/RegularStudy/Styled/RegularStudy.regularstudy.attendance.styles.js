import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
  width: 100%;
  max-width: 34rem;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 4.167rem;
  margin-bottom: 0.792rem;
  /* width: 33.042rem; */
  width: 100%;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 0.667rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
`;

export const BlueComment = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Blue_0_Main};
`;

export const StyledTable = styled.table`
  /* width: 33.042rem; */
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTd = styled.td`
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.T5_SB_16};
  border: 0.042rem solid #B9C4D2;
  padding: 0.333rem;
  text-align: center;
  
  cursor: ${({ rowIndex, colIndex }) => (rowIndex !== 0 && colIndex === 0 ? 'pointer' : 'default')};
  transition: ${({ rowIndex, colIndex }) => (rowIndex !== 0 && colIndex === 0 ? 'background-color 0.2s ease-in-out, color 0.2s ease-in-out' : 'none')};

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

  ${({ rowIndex, colIndex }) =>
    rowIndex !== 0 && colIndex === 0 &&
    `
      &:hover {
        background-color: ${tokens.colors.Blue_0_Main};
        color: ${tokens.colors.B_Grey_1};
      }
    `
  }
`;

export const StyledSpanBaekjoon = styled.span`
  font-size: 0.5rem;
  color: ${tokens.colors.Grey_6};

  // 부모 요소가 hover될 때 색상 변경
  td:hover & {
    color: ${tokens.colors.B_Grey_1};
  }
`;

export const ImgIcon = styled.img`
  width: 1.958rem;
  height: 1.958rem;
  cursor: pointer;
`;

export const ModifyBtn = styled.button`
  float: right;
  width: 6.667rem;
  height: 2rem;
  margin-top: 2.25rem;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.White};
  background-color: ${({ isModified }) => isModified ? tokens.colors.B_Grey_7 : tokens.colors.B_Grey_3};
  border-radius: 0.167rem;
	border: none;
	cursor: ${({ isModified }) => (isModified ? 'pointer' : 'default')};
`;