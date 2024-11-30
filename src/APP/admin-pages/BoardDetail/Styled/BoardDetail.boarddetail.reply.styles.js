import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  // width: 50rem;
  // padding-bottom: 18px;
  // border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  margin-top: 18px;
  // margin-left: 50px;
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
  margin-left: 104px;
  // margin-left: 54px;
`;

export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
  border: 0.04rem solid ${tokens.colors.B_Grey_2}; 
  border-radius: 20px;
  margin-right: 17px;
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
  width: 960px;
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-size: 15px;
  font-weight: semibold;
  color: ${tokens.colors.Black};
  margin: 0 10px 6px 0;
`;

export const DotBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  position: relative;
  cursor: pointer;
`;

export const DotButton = styled.img`
  width: 3px;
  height: 15px;
`;

export const UtilButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${tokens.colors.White};
  position: absolute;
  left: 10px;
  top: 27px;
  width: 142px;
  height: 36px;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 5px rgba(58, 107, 135, 0.08);
  cursor: pointer;
`;

export const UtilIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 6px;
`;

export const UtilText = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;


export const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 957px;
  margin-bottom: 6px;
`;

export const DeletedIcon = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 0.16rem;
`;

export const Mention = styled.span`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Blue_0_Main};
  margin-right: 4px;
`;

export const Content = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${({ deleteYn }) => (deleteYn ? '#888888' : tokens.colors.Black)};
`;

export const InfoBottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 957px;
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
