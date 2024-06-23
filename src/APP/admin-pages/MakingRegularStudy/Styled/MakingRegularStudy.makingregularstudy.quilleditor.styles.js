import styled from 'styled-components';

export const Container = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 140px;
`;

export const EditorWrapper = styled.div`
width: 590px;

 .ql-editor {
    height: 458px;
    overflow-y: auto;
  }

  .ql-toolbar.ql-snow {
    border: 1px solid #ccc;
  }

  .ql-container.ql-snow {
    border: 1px solid #ccc;
    border-top: none;
    height: auto; /* Ensure height is auto to allow the editor to fill the wrapper */
  }

  .ql-editor a {
    cursor: pointer;
    color: blue; /* Optional: link color */
    text-decoration: underline; /* Optional: link underline */
  }
`;