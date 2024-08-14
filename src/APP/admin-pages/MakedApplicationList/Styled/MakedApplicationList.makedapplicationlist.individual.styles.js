import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 11.875rem;
  height: 15rem;
  background-color: ${tokens.colors.White};
  border-radius: 0.333rem;
  margin: 0rem 0.417rem 0.833rem 0.417rem;
	box-shadow: rgba(58, 107, 135, 0.08) 0rem 0.167rem 0.417rem 0.167rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column; 
	position: relative;
	width: 11.875rem;
  height: 8.75rem;
	border-radius: 0.333rem 0.333rem 0rem 0rem;
	background-image: url(${props => props.backgroundImage});
	background-size: cover;
  background-position: center;
`;

export const Top = styled.div`
	display: flex;
	flex-direction: row; 
	justify-content: space-between;
	width: 10.542rem;
	margin: 0.667rem 0.667rem 0.333rem 0.667rem;
`;

export const TopInner = styled.div`
	
`;

export const KeyIcon = styled.img`
	width: 1rem;
	height: 1rem;
	cursor: pointer;
`;

export const createdContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.img`
	width: 0.75rem;
	height: 0.75rem;
	margin-right: 0.333rem;
	border-radius: 0.75rem;
`;

export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column; 
	width: 11.875rem;
	height: 6.25rem;
	border-radius: 0rem 0rem 0.333rem 0.333rem;
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 10.542rem;
	margin: 0rem 0.667rem;
`;

export const BottomInner = styled.div`
	display: flex;
	flex-direction: row; 
`;

export const TopText = styled.div`
	${tokens.typography.Sub_M_12};
	color: ${tokens.colors.B_Grey_8};
	margin-bottom: 0.167rem;
`;

export const BottomText = styled.div`
	${tokens.typography.Sub_M_12};
	align-self: center;
	color: #828282;
	margin-right: 0.333rem;
`;

export const CreatedText = styled.div`
	${tokens.typography.B3_M_14};
	color: ${tokens.colors.B_Grey_8};
`;

export const UpdatedText = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 0.583rem;
	line-height: 0.75rem;
	color: #282828;
`;

export const Title = styled.div`
	${tokens.typography.T3_B_24};
	font-size: 0.875rem;
	margin-top: 0.417rem;
	color: black;
	cursor: pointer;
`;

export const StudyName = styled.div`
	${tokens.typography.T5_SB_16};
	margin-top: 0.333rem;
	margin-bottom: 1.833rem;
	color: ${tokens.colors.Grey_6};
`;
