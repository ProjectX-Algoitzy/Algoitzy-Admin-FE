import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  // width: 50rem;
  padding-bottom: 18px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-top: 18px;
`;

export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentProfile = styled.img`
  width: 64px;
  height: 64px;
  border: 0.04rem solid ${tokens.colors.B_Grey_2}; 
  border-radius: 32px;
  margin-right: 32px;
`;

export const CommentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const WriterBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-size: 15px;
  font-weight: semibold;
  color: ${tokens.colors.Black};
  margin: 0 16px 12px 0;
`;

export const Content = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  width: 1015px;
  margin-bottom: 12px;
`;

export const InfoBottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 1015px;
`;

export const CreatedTime = styled.div`
  ${tokens.typography.B2_M_16};
  color: #888888;
  margin-right: 12px;
`;

export const Reply = styled.div`
  ${tokens.typography.B2_M_16};
  color: #888888;
  margin-right: 12px;
  cursor: pointer;
`;

export const CommentLike = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 13px;
`;

export const Blank = styled.div`
  width: 96px;
`;
