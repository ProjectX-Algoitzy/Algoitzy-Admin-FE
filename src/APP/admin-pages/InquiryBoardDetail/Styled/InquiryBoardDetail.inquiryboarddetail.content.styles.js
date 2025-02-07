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
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  width: 50rem;
  // height: 4.7rem;
  // border: 0.04rem solid ${tokens.colors.B_Grey_3};
  // border-radius: 0.167rem;
  // padding: 0.85rem;
  margin-top: 1rem;
`;

export const FileText = styled.div`
  background-color: ${tokens.colors.B_Grey_1};
  ${tokens.typography.Sub_M_13};
  color: ${tokens.colors.B_Grey_6};
  width: 50rem;
  height: 1.24rem;
  border-radius: 0.167rem 0.167rem 0 0;
  border: 0.04rem solid ${tokens.colors.B_Grey_3};
  border-bottom: 0 solid ${tokens.colors.B_Grey_3};
  padding: 0.333rem 0 0.333rem 1rem;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  width: 50rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_3};
  border-top: 0 solid ${tokens.colors.B_Grey_3};
  padding: 0.333rem 0 0.333rem 1rem;
`;

export const FileTupleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  width: 48.3rem;
  text-decoration: none;
  color: ${tokens.colors.B_Grey_8};
  a {
    text-decoration: none;
    color: ${tokens.colors.Black};
  }
  &:hover {
    text-decoration: underline; 
  }
`;

export const FileNameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
`;

export const FileIcon = styled.img`
  width: 0.5rem;
  height: 0.5834rem;
  margin-right: 0.208rem;
`;

export const File = styled.div`
  ${tokens.typography.B2_M_16};

  a {
    text-decoration: none;
    color: ${tokens.colors.Black};
  }
`;

export const FileSizeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end; 
  align-items: center;
  width: 3.75rem;
`;

export const FileSize = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.B_Grey_5};
`;

export const DownloadIcon = styled.img`
  width: 0.417rem;
  height: 0.417rem;
  margin-left: 0.667rem;
`;