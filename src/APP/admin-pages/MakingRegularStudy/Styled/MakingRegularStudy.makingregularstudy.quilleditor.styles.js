import styled from 'styled-components';

export const Container = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
`;

export const EditorWrapper = styled.div`
width: 590px;

.ql-editor a {
  cursor: pointer;
  color: blue; /* Optional: link color */
  text-decoration: underline; /* Optional: link underline */
}
`;