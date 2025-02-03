import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const FileTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.042rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0.167rem;
  margin-bottom: 1.042rem;

  color: ${tokens.colors.B_Grey_8};
	${tokens.typography.B2_M_16}
`;

export const FileTableHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${tokens.colors.B_Grey_1};
  padding: 0.333rem 0;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.B_Grey_6};
  height: auto;
`;

export const FileTableBody = styled.div`
  background-color: ${tokens.colors.White};
  color: ${tokens.colors.B_Grey_8};
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center; 
  padding: 0.1rem 0;
`;

export const TableColumn = styled.div`
  flex: 1;
  text-align: center;

  &:nth-child(1) { /* X */
    flex: 0 0 3rem; /* X 컬럼 길이 */
    text-align: center;
  }

  &:nth-child(2) { /* 파일명 */
    flex: 0 0 17rem; /* 파일명 컬럼 길이 */
    text-align: left;
  }

  &:nth-child(3) { /* 용량 */
    text-align: center;
  }
`;

export const TableCell = styled.div`
  flex: 1;
  text-align: center;

 &:nth-child(1) { /* X */
    flex: 0 0 3rem; /* X 컬럼 길이 */
    text-align: center;
  }

  &:nth-child(2) { /* 파일명 */
    flex: 0 0 17rem; /* 파일명 컬럼 길이 */
    text-align: left;
  }

  &:nth-child(3) { /* 용량 */
    text-align: center;
  }
`;

export const HeaderIcon = styled.img`
  background: none;
  border: none;
  padding: 0;
  img {
    width: 0.667rem;
    height: 0.667rem;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  img {
    width: 0.667rem;
    height: 0.667rem;
    vertical-align: middle;
  }
`;

export const FileIcon = styled.img`
  width: auto;
  height: 1rem;
  margin-right: 0.5rem; /* 아이콘과 파일명 사이 여백 */
  vertical-align: middle;
`;

export const FileName = styled.span`
  display: inline-block;
  max-width: 16rem;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  vertical-align: middle;
`;

export const EmptyMessage = styled.div`
  margin: 0.1rem 0;
  height: 1rem;
  text-align: center;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16}
`;