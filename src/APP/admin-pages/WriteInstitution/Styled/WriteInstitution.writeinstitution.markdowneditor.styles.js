import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const Toolbar = styled.div`
  position: sticky; /* 스크롤 시 상단 고정 */
  top: 0; /* 뷰포트 상단에 고정 */
  z-index: 10; /* 다른 요소 위에 표시 */
  display: flex;
  align-items: center;
  gap: 0.458rem;
  background-color: white;
  padding: 0.5rem 0;
  padding-bottom: 0.25rem;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;

    &:hover {
      color: #333;
    }
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
    
  span {
    color: #ccc;
  }
`;

export const ToolbarInnerGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.333rem;
`;

export const EditorContainer = styled.div`
  padding-top: 2.125rem;
  flex: 1;
  border: 0;
  font-size: 0.8rem;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  .cm-editor.cm-focused {
    outline: none;
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 0.8rem;
  border-radius: 4px;
  width: 12rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  p{
    margin: 0 0 0.2rem 0 ;
    color: ${tokens.colors.B_Grey_8};
	  ${tokens.typography.B2_M_16}
  }
  input {
    flex: 1;
    width: 100%;
    color: ${tokens.colors.B_Grey_8};
	  ${tokens.typography.B3_M_14}
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 0.2rem 0.4rem;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: ${tokens.colors.Blue_0_Main};
    color: ${tokens.colors.White};
    ${tokens.typography.T5_SB_16};
  }
`;