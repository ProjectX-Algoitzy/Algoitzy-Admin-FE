import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-top: 0.75rem;
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
  width: 2.666rem;
  height: 2.666rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_2};
  border-radius: 1.333rem;
  margin-right: 1.333rem;
  cursor: pointer;
`;

export const CommentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const WriterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  width: 42.291rem;
`;

export const WriterNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const WriterIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   ${tokens.typography.B3_M_14};
   background-color: rgba(251, 170, 132, 0.2);
   color: ${tokens.colors.Sub_3};
   width: 2.17rem;
   height: 0.875rem;
   border: none;
   border-radius: 0.17rem;
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-size: 0.625rem;
  font-weight: semibold;
  color: ${tokens.colors.Black};
  margin: 0 0.666rem 0 0;
`;

export const DotBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.875rem;
  position: relative;
  cursor: pointer;
`;

export const DotButton = styled.img`
  width: 0.125rem;
  height: 0.625rem;
`;

export const UtilButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colors.White};
  position: absolute;
  left: 0.416rem;
  top: 1.125rem;
  border-radius: 0.166rem;
  box-shadow: 0.083rem 0.083rem 0.416rem 0.208rem rgba(58, 107, 135, 0.08);
  cursor: pointer;
`;

export const UtilBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 142px;
  height: 36px;
`;

export const Hr = styled.div`
  width: 5.917rem;
  height: 0.2px;
  background-color: #E9EEF6;
`;

export const UtilIcon = styled.img`
  width: 0.708rem;
  height: 0.708rem;
  margin-right: 0.25rem;
`;

export const UtilText = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 42rem;
  margin-bottom: 0.5rem;
`;

export const DeletedIcon = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 0.16rem;
`;

export const Content = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${(props) => (props['data-delete-yn'] ? '#888888' : tokens.colors.Black)};
`;

export const InfoBottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 42.29rem;
`;

export const CreatedTime = styled.div`
  ${tokens.typography.B2_M_16};
  color: #888888;
  margin-right: 0.5rem;
`;

export const Reply = styled.div`
  ${tokens.typography.B2_M_16};
  color: #888888;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const CommentLike = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 0.21rem;
  cursor: pointer;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0.5rem;
`;

export const Blank = styled.div`
  width: 4rem;
`;

export const ReplyProfile = styled.img`
  width: 1.667rem;
  height: 1.667rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_2};
  border-radius: 50%;
  margin-right: 0.708rem;
`;
