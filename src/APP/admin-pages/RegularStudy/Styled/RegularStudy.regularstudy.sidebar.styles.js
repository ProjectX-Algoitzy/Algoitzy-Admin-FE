import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.333rem;
  border-right: 0.063rem solid ${tokens.colors.Grey_4};

  @media (max-width: 600px) {
  margin-left: 1.33rem;
  margin-right: 1.33rem;
  padding: 0;
  border-right: 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.17rem;
  margin-bottom: 4.17rem;
`;

export const StudyImgContainer = styled.div` /*해당 스터디의 이미지를 감싸주는 컨테이너*/
  display: flex;
  flex-direction: column;
  width: 14.29rem;
  height: 10.25rem;
  border-radius: 0.333rem;
  background-color: ${tokens.colors.Grey_4};
`;

export const TitleContainer = styled.div` 
  display: flex;
  flex-direction: row;
  color: ${tokens.colors.Black};
  ${tokens.typography.T3_B_24};
  margin-top: 0.67rem;
  align-items: center;
`;

export const CountAndOnlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.25rem;
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_4};
`;

export const OnlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #555555;
  ${tokens.typography.T5_SB_16};
  margin-left: 0.58rem;
`;

export const ManagerNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.88rem;
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.42rem;
`;

export const styledLink = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.isActive ? tokens.colors.Blue_0_Main : tokens.colors.Grey_7)};
  ${tokens.typography.T5_SB_16};
  padding-top: 0.71rem;
  padding-bottom: 0.75rem;
  border-top: 0.042rem solid ${tokens.colors.B_Grey_2};
  justify-content: space-between;
  cursor: pointer;
`;

export const ThirdstyledLink = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.isActive ? tokens.colors.Blue_0_Main : tokens.colors.Grey_7)};
  ${tokens.typography.T5_SB_16};
  padding-top: 0.71rem;
  padding-bottom: 0.75rem;
  border-top: 0.042rem solid ${tokens.colors.B_Grey_2};
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  justify-content: space-between;
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  width: 1rem;
  height: 1rem;
`;
