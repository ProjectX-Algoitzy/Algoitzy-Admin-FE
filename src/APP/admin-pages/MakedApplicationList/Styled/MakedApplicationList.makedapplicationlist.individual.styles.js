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
  border-radius: 8px;;
  margin: 44px 10px;
	box-shadow: rgba(58, 107, 135, 0.08) 0px 4px 10px 4px;
	
`;

// 상단 스타일들
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column; 
	position: relative;
	width: 285px;
  height: 210px;
	border-radius: 8px; 8px; 0px 0px;
	// background: ${tokens.colors.G_Blue_3};
	background-color: #99B8C5;
`;

export const Top = styled.div`
	display: flex;
	flex-direction: row; 
	justify-content: space-between;
	width: 253px;
	margin: 16px 16px 8px 16px;
`;

export const TopInner = styled.div`
	
`;

export const KeyIcon = styled.div`
  background-image: url('/img/Keylineicon.png');
	width: 24px;
	height: 24px;
	cursor: pointer;
`;

export const createdContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Img = styled.div`
  background-image: url('/img/test.png');
	width: 18px;
	height: 18px;
	margin-right: 8px;
	border-radius: 18px;
`;

// 하단 스타일들
export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column; 
	width: 285px;
	height: 150px;
	border-radius: 0px 0px 8px; 8px;;
`;

export const Bottom = styled.div`
	display: flex;
	
  flex-direction: row;
	justify-content: space-between;
	width: 253px;
	margin: 0px 16px;
`;

export const BottomInner = styled.div`
	display: flex;
	// flex-direction: column-reverse;
	flex-direction: row; 

`;

// 텍스트 스타일들

export const TopText = styled.div`
	${tokens.typography.Sub_M_12}
	color: white;
`;

export const BottomText = styled.div`
	${tokens.typography.Sub_M_12}
	align-self: center;
	color: #828282;
	margin-right: 8px;
`;

export const CreatedText = styled.div`
	${tokens.typography.B3_M_14}
	color: white;
`;

export const UpdatedText = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: #282828;
`;

export const Title = styled.div`
	${tokens.typography.T3_B_24};
	font-size: 21px;
	margin-top: 10px;
	color: black;
	cursor: pointer;
`;

export const StudyName = styled.div`
	${tokens.typography.T5_SB_16};
	margin-top: 8px ;
	margin-bottom: 44px;
	color: ${tokens.colors.Grey_6};

`;