import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  width: 50rem;
  // height: 10rem;
  margin-bottom: 1.84rem;
`;

export const Content = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  align-items: flex-start;
  width: 50rem;
  height: 4.7rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_2};
  padding: 0.85rem;
  margin-top: 1rem;
`;

export const FileText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin-right: 0.5rem;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
`;

export const File = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
`;