import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const Container = styled.div`
`;

export const WriteBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: ${tokens.colors.White};
  width: 42.33rem; /* 1016px */
  padding: 1.25rem 1.25rem 1.25rem 1rem; /* 20px 20px 20px 16px */
  border: 0.06rem solid ${tokens.colors.B_Grey_2}; /* 1px */
`;

export const InputBox = styled.input`
  width: 33.33rem; /* 800px */
  height: 1.17rem; /* 28px */
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin-right: 4.17rem; /* 100px */
  border: none;

  &::placeholder {
    color: ${tokens.colors.Grey_3};
  }

  &:focus {
    outline: none; /* Remove outline when focused */
    border: none; /* Remove border when focused */
  }
`;

export const SubmitBtn = styled.button`
  ${tokens.typography.B2_M_16};
  background-color: ${tokens.colors.B_Grey_3};
  color: ${tokens.colors.White};
  width: 3.33rem; /* 80px */
  height: 1.25rem; /* 30px */
  border: none;
  border-radius: 0.17rem; /* 4px */
  cursor: pointer;
`;
