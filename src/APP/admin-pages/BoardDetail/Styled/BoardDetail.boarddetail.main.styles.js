import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const OuterContainer = styled.div`
  // background: linear-gradient(to bottom, #EFF1FD, #E8F7FF);
  // position: relative;
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
  // margin-bottom: 4.083rem;
  // box-shadow: 0 0.17rem 1rem 0.17rem rgba(0, 0, 0, 0.04);
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  // border-bottom: 0.04rem solid ${tokens.colors.B_Grey_2};
  // @media (max-width: 600px) {
  //   width: 100%;
  // }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // width: 14.58rem;
  margin-bottom: 0.83rem;
  // @media (max-width: 600px) {
  //   width: 100%;
  // }
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
  margin-bottom: 42px;
`;

export const Title = styled.div`
  width: 28rem;
  ${tokens.typography.H3_SB_40};
  color: ${tokens.colors.Black};
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // width: 22rem;
  
`;

export const EditBtn = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${tokens.colors.Red};
  color: ${tokens.colors.White};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 작성자 정보
export const WriterInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50rem;
  padding-bottom: 12px;
  border-bottom: 0.04rem solid ${tokens.colors.B_Grey_2}; 
  margin-bottom: 12px;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0.04rem solid ${tokens.colors.B_Grey_2}; 
  margin-right: 12px;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const WriterName = styled.div`
  ${tokens.typography.B2_M_16};
  font-weight: bold;
  color: ${tokens.colors.Blue_0_Main};
  margin-bottom: 1.5px;
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
  margin-right: 12px;
`;

export const ViewCnt = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
`;

// 좋아요, 댓글 수
export const CountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 50rem;
  margin: 0 0 1rem 0.625rem;
`;

export const LC_Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

export const CountText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin-right: 1rem;
`;

// 댓글 시작
export const Body = styled.div`
  background-color: rgba(0, 165, 255, 0.1);
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Blue_0_Main};
  width: 50rem;
  padding: 0.25rem 0 0.25rem 1rem;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${tokens.colors.Grey_1};
  padding: 1.25rem 0 1rem 0;
  border: 1px solid ${tokens.colors.B_Grey_2};
  border-radius: 4px;
`;

// 댓글 작성 
export const WriteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: 36px;
`;

export const CommentProfile = styled.img`
  width: 64px;
  height: 64px;
  border: 0.04rem solid ${tokens.colors.B_Grey_2}; 
  border-radius: 32px;
  margin-right: 32px;
`;

// 페이지
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  margin-top: 1rem;
`;

export const BlankBtn = styled.div`
  width: 190px;
`;

export const WriteBtn = styled.button`
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  width: 190px;
  height: 47px;
  border: none;
  border-radius: 0.167rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 0.83rem;
  list-style: none;
  // margin-top: 1.6rem;
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