import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 11.875rem;
  height: 15rem;
  background-color: ${tokens.colors.White};
  // border: 0.042rem solid ${tokens.colors.Grey_4};
  border-radius: 0.333rem;
  margin: 0rem 0.417rem 0.833rem 0.417rem;
	box-shadow: rgba(58, 107, 135, 0.08) 0rem 0.167rem 0.417rem 0.167rem;
	
`;

// 상단 스타일들
export const TopContainer = styled.div`
  display: flex;
	width: 11.875rem;
  height: 8.75rem;
	border-radius: 0.333rem 0.333rem 0rem 0rem;
`;

export const TopImg = styled.img`
	width: 10.542rem;
	height: 7.583rem;
	border-radius: 0.333rem;
	margin: 0.667rem 0.667rem 0.417rem 0.667rem;
`;

export const TopInner = styled.div`
	
`;


// icon들
export const ProfileIcon = styled.div`
  background-image: url('/img/test.png');
	width: 0.75rem;
	height: 0.75rem;
	margin-right: 0.333rem;
	border-radius: 0.75rem;
`;

export const PeopleIcon = styled.div`
  background-image: url('/img/people.png');
	width: 1rem;
	height: 1rem;
	margin-right: 0.333rem;
`;


// 하단 스타일들
export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column; 
	width: 11.875rem;
	height: 6.25rem;
	border-radius: 0rem 0rem 0.333rem 0.333rem;
`;

export const Bottom = styled.div`
	display: flex;
  flex-direction: column;
	width: 10.542rem;
	margin: 0rem 0.667rem;
`;

export const BottomHeadCount = styled.div`
	display: flex;
  flex-direction: row;
	margin-bottom: 1.958rem;
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
	font-size: 0.875rem;
	margin-top: 0.417rem;
	margin-bottom: 0.333rem;
	color: black;
	cursor: pointer;
`;

// 현재 인원수 글자
export const HeadCount = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.667rem;
	line-height: 0.875rem;
	color: ${tokens.colors.Grey_6};
`;

// 전체 인원수 글자
export const CountText = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.667rem;
	line-height: 0.875rem;
	color: ${tokens.colors.Grey_4};
	margin-left: 0.125rem;
`;

// 제작일 글자
export const LocationText = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.667rem;
	line-height: 0.875rem;
	color: ${tokens.colors.Grey_6};
`;

// 제작자 글자
export const CreatedName = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.583rem;
	line-height: 0.75rem;
	color: ${tokens.colors.Grey_7};
`;

// 제작일 글자
export const CreatedDate = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.583rem;
	line-height: 0.75rem;
	color: ${tokens.colors.Grey_6};
`;
