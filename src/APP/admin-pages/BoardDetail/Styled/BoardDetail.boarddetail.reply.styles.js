import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  align-items: flex-start;
  margin-left: 4.33rem;
`;

export const CommentProfile = styled.img`
  width: 1.67rem;
  height: 1.67rem;
  border: 0.04rem solid ${tokens.colors.B_Grey_2};
  border-radius: 0.83rem;
  margin-right: 0.71rem;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 40rem;
`;

export const WriterNameBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // width: 26.667rem;
  // min-height: 2.333rem;
  // margin-left: 3.417rem;
  margin-bottom: 6px;
`;

export const WriterIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   ${tokens.typography.B3_M_14};
   background-color: rgba(251, 170, 132, 0.2);
   color: ${tokens.colors.Sub_3};
   width: 2.17rem;
   height: 21px;
   border: none;
   border-radius: 0.17rem;
  //  margin-left: 0.17rem;
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-size: 0.625rem;
  font-weight: semibold;
  color: ${tokens.colors.Black};
  margin: 0 0.42rem 0 0;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${tokens.colors.White};
  position: absolute;
  left: 0.42rem;
  top: 1.125rem;
  width: 5.92rem;
  height: 1.5rem;
  border-radius: 0.17rem;
  box-shadow: 2px 2px 10px 5px rgba(58, 107, 135, 0.08);
  cursor: pointer;
`;

export const UtilIcon = styled.img`
  width: 0.71rem;
  height: 0.71rem;
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
  width: 39.875rem;
  margin-bottom: 0.25rem;
`;

export const DeletedIcon = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 0.16rem;
`;

export const Mention = styled.span`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Blue_0_Main};
  margin-right: 0.17rem;
`;

export const Content = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${({ deleteYn }) => (deleteYn ? '#888888' : tokens.colors.Black)};
`;

export const InfoBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 39.875rem;
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
  width: 0.83rem;
  height: 0.83rem;
  margin-right: 0.5rem;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.54rem;
`;

export const Blank = styled.div`
  width: 4rem;
`;
