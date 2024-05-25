import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 285px;
  height: 360px;
  background-color: ${tokens.colors.White};
  // border: 1px solid ${tokens.colors.Grey_4};
  border-radius: 8px;
  margin: 0px 10px 20px 10px;
	box-shadow: rgba(58, 107, 135, 0.08) 0px 4px 10px 4px;
	
`;

// 상단 스타일들
export const TopContainer = styled.div`
  display: flex;
	width: 285px;
  height: 210px;
	border-radius: 8px 8px 0px 0px;
`;

export const TopImg = styled.div`
	width: 253px;
	height: 182px;
	background-image: url('/img/selfstudy.png');
	border-radius: 8px;
	margin: 16px 16px 10px 16px;
`;

export const TopInner = styled.div`
	
`;


// icon들
export const ProfileIcon = styled.div`
  background-image: url('/img/test.png');
	width: 18px;
	height: 18px;
	margin-right: 8px;
	border-radius: 18px;
`;

export const PeopleIcon = styled.div`
  background-image: url('/img/people.png');
	width: 24px;
	height: 24px;
	margin-right: 8px;
`;

export const LocationIcon = styled.div`
  background-image: url('/img/location.png');
	width: 24px;
	height: 24px;
	margin-right: 8px;
`;

// 하단 스타일들
export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column; 
	width: 285px;
	height: 150px;
	border-radius: 0px 0px 8px 8px;
`;

export const Bottom = styled.div`
	display: flex;
  flex-direction: column;
	width: 253px;
	margin: 0px 16px;
`;

export const BottomHeadCount = styled.div`
	display: flex;
  flex-direction: row;
	margin-bottom: 4px;
`;

export const BottomLocationIcon = styled.div`
	display: flex;
  flex-direction: row;
	margin-bottom: 19px;
`;

export const BottomInner = styled.div`
	display: flex;
  flex-direction: row;
`;

export const CreatedNameContainer = styled.div`
display: flex;
flex-direction: row; 
`;

export const BottomBottom = styled.div`
	display: flex;
  flex-direction: row;
	justify-content: space-between;
`;
// 텍스트 스타일들

// 스터디 이름 글자
export const Title = styled.div`
	${tokens.typography.T3_B_24};
	font-size: 21px;
	margin-top: 10px;
	margin-bottom: 8px;
	color: black;
	cursor: pointer;
`;

// 현재 인원수 글자
export const HeadCount = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
	color: ${tokens.colors.Grey_6};
`;

// 전체 인원수 글자
export const Total = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
	color: ${tokens.colors.Grey_4};
`;

// 제작일 글자
export const LocationText = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
	color: ${tokens.colors.Grey_6};
`;

// 제작자 글자
export const CreatedName = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: ${tokens.colors.Grey_7};
`;

// 제작일 글자
export const CreatedDate = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: ${tokens.colors.Grey_6};
`;
