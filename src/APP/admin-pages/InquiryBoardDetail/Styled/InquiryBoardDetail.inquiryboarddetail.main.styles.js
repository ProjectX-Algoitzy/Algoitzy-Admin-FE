import styled from 'styled-components'; 
import * as tokens from "../../../../tokens";

export const OuterContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${tokens.colors.White};
  border-radius: 0.25rem;
  padding: 1.4rem 15rem 4rem 15rem;
  margin-top: 5.583rem;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.83rem;
`;

export const Head = styled.div`
  ${tokens.typography.T3_B_24};
`;

export const SemiHead = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.B_Grey_6};
  margin-left: 1rem;
  line-height: 1.333rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 50rem;
  margin-bottom: 1.75rem;
`;

export const Title = styled.div`
  // width: 28rem;
  ${tokens.typography.H3_SB_40};
  color: ${tokens.colors.Black};
`;

export const WriterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.002rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 0.5rem;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Profile = styled.img`
  width: 1.667rem;
  height: 1.667rem;
  border-radius: 0.833rem;
  border: 0.002rem solid ${tokens.colors.B_Grey_2};
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ProcessingYNBox = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.167rem;
  width: 3.167rem;
  height: 0.875rem;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_1};
  background-color: ${({ solvedYn }) => (solvedYn ? tokens.colors.Blue_0_Main : tokens.colors.Grey_4)};
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-weight: bold;
  color: ${tokens.colors.Blue_0_Main};
  margin-bottom: 0.063rem;
  cursor: pointer;
`;

export const InfoBottomBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const CreatedTime = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin-right: 0.5rem;
`;

export const ViewCnt = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 50rem;
  margin: 0 0 1rem 0.625rem;
`;

export const CommentIcon = styled.img`
  width: 0.833rem;
  height: 0.833rem;
  margin-right: 0.542rem;
`;

export const CountText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin-right: 1rem;
`;

export const Body = styled.div`
  background-color: rgba(0, 165, 255, 0.1);
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Blue_0_Main};
  width: 50rem;
  padding: 0.25rem 0 0.25rem 1rem;
  border-radius: 0.1667rem;
  margin-bottom: 0.8333rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  background-color: ${tokens.colors.Grey_1};
  padding: 1.25rem 0 1rem 0;
  border: 0.042rem solid ${tokens.colors.B_Grey_2};
  border-radius: 0.167rem;
`;

export const WriteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const CommentProfile = styled.img`
  width: 2.667rem;
  height: 2.667rem;
  border: 0.002rem solid ${tokens.colors.B_Grey_2};
  border-radius: 1.333rem;
  margin-right: 1.333rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  margin-top: 1rem;
`;

export const BlankBtn = styled.div`
  width: 7.917rem;
`;

export const WriteBtn = styled.button`
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  width: 7.917rem;
  height: 1.958rem;
  border: none;
  border-radius: 0.167rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.833rem;
  list-style: none;
`;

export const PaginationArrow = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url('/img/grayarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.21rem;
  width: 0.33rem;
  height: 0.88rem;
  padding: 0.42rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;
