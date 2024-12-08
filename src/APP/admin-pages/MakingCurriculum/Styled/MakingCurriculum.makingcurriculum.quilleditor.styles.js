import styled from 'styled-components';

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.667rem;
`;

export const EditorWrapper = styled.div`
  width: 100%;

  .ql-editor {
      height: 10.792rem;
      overflow-y: auto;
  }

  .ql-toolbar.ql-snow {
      border: 0.042rem solid #ccc;
      font-size: 0.667rem; 
  }

  .ql-container.ql-snow {
      border: 0.042rem solid #ccc;
      border-top: none;
      height: auto;
  }

  .ql-picker {
      font-size: 0.667rem; 
    }

  .ql-editor a {
      cursor: pointer;
      color: blue; /* Optional: link color */
      text-decoration: underline; /* Optional: link underline */
  }
  .ql-toolbar button svg, .ql-toolbar .ql-picker svg {
    width: 0.667rem; /* Adjust icon width */
    height: 0.667rem; /* Adjust icon height */
  }

  .ql-toolbar button {
    padding: 0.25rem;
  }

  .ql-toolbar .ql-formats {
    margin-right: 0;
  }
    .ql-syntax {
  background-color: #ffffff;  /* 검정색 배경 */
  color: #abb2bf;  /* 밝은 텍스트 색 */
  padding: 10px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}
`;