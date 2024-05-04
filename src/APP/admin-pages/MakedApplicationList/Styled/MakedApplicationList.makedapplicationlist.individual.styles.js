import styled from 'styled-components';
import * as tokens from "../../../../tokens"


export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 285px;
  height: 360px;
  background-color: ${tokens.colors.White};
  border: 1px solid ${tokens.colors.Grey_4};
  border-radius: 20px;
  margin: 44px 10px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column; 
	width: 285px;
  height: 210px;
	border-radius: 20px 20px 0px 0px;
	background: ${tokens.colors.G_Blue_3}
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

export const BottomContainer = styled.div`
	display: flex;
	flex-direction: column; 
	width: 285px;
	height: 150px;
	border-radius: 0px 0px 20px 20px;
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

export const SM12default = styled.div`
	${tokens.typography.Sub_M_12}
	color: white;
`;

export const SM12 = styled.div`
	${tokens.typography.Sub_M_12}
	align-self: center;
	color: #828282;
	margin-right: 8px;
`;

export const B3M14TOP = styled.div`
	${tokens.typography.B3_M_14}
	color: white;
`;

export const B3M14 = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	color: #282828;
`;

export const T3B24 = styled.div`
	${tokens.typography.T3_B_24};
	font-size: 21px;
	margin-top: 10px;
	color: black;
`;

export const T5SB16 = styled.div`
	${tokens.typography.T5_SB_16};
	margin-top: 8px ;
	margin-bottom: 44px;
	color: ${tokens.colors.Grey_6};

`;