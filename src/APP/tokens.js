export const colors = {
	// Primary 5%
    Blue_1: "#66C9FF",
    Blue_2: "#45ABF3",
    Blue_3: "#3083F7",
    Blue_4_Dark: "#65BCF8",
    Blue_5_Dark: "#364B8B",
    Blue_0_Main: "#00A5FF",

	// Secondary 15%
    Sub_1: "#F9D581",
    Sub_2: "#FBAA84",
    Sub_3: "#F88F78",

	// Tertiary 80%
    Black: "#191919",
    White: "#FFFFFF",

	// Gray Scale	
    Grey_8:"#171717",
    Grey_7: "#333333",
    Grey_6: "#555555",
    Grey_5: "#8B8B8B",
    Grey_4: "#CFCFCF",
    Grey_3: "#E3E3E3",
    Grey_2: "#F5F4F3",
    Grey_1: "#FBFBFB",
    B_Grey_8: "#3E495A",
    B_Grey_7: "#5A677A",
    B_Grey_6: "#778393",
    B_Grey_5: "#A6B0BE",
    B_Grey_4: "#B9C4D2",
    B_Grey_3: "#D2D9E5",
    B_Grey_2: "#E7EBF4",
    B_Grey_1: "#F7F8FC",

	// Gradient
	G_Blue_1: "linear-gradient(#65BCF8, #3083F7)",
	G_Blue_2: "linear-gradient(#3083F7, #364B8B)",
	G_Yellow_1: "linear-gradient(#F9D581, #F88F78)",
};

export const typography = {
	title_lg: {
		fontFamily: "Pretendard Variable",
		fontWeight: "semibold",
		fontSize: "48px",
		lineHeight: "120%",
	},
	title_md: {
		fontFamily: "Pretendard Variable",
		fontWeight: "semibold",
		fontSize: "36px",
		lineHeight: "120%",
	},
	title_sm: {
		fontFamily: "Pretendard Variable",
		fontWeight: "semibold",
		fontSize: "24px",
		lineHeight: "130%",
	},
	text_lg: {
		fontFamily: "Pretendard Variable",
		fontWeight: "semibold",
		fontSize: "18px",
		lineHeight: "140%",
	},
	text_md: {
		fontFamily: "Pretendard Variable",
		fontWeight: "regular",
		fontSize: "16px",
		lineHeight: "140%",
	},
	text_sm: {
		fontFamily: "Pretendard Variable",
		fontWeight: "regular",
		fontSize: "14px",
		lineHeight: "140%",
	},
	caption: {
		fontFamily: "Pretendard Variable",
		fontWeight: "regular",
		fontSize: "12px",
		lineHeight: "140%",
	},

	// Pretendard 폰트 - 가독성 높은 폰트
	HEAD_0: {
		fontFamily: "Pretendard",
		fontWeight: "bold",
		fontSize: "60px",
		lineHeight: "80px",
	},
	HEAD_1: {
		fontFamily: "Pretendard",
		fontWeight: "bold",
		fontSize: "60px",
		lineHeight: "80px",
	},
	HEAD_2: {
		fontFamily: "Pretendard",
		fontWeight: "semibold",
		fontSize: "48px",
		lineHeight: "64px",
	},
	HEAD_3: {
		fontFamily: "Pretendard",
		fontWeight: "semibold",
		fontSize: "40px",
		lineHeight: "54px",
	},
	Title_1: {
		fontFamily: "Pretendard",
		fontWeight: "semibold",
		fontSize: "32px",
		lineHeight: "42px",
	},
	Title_2: {
		fontFamily: "Pretendard",
		fontWeight: "medium",
		fontSize: "28px",
		lineHeight: "36px",
	},
	Title_3: {
		fontFamily: "Pretendard",
		fontWeight: "bold",
		fontSize: "24px",
		lineHeight: "32px",
	},
	Title_4: {
		fontFamily: "Pretendard",
		fontWeight: "semibold",
		fontSize: "20px",
		lineHeight: "26px",
	},
	Title_5: {
		fontFamily: "Pretendard",
		fontWeight: "semibold",
		fontSize: "16px",
		lineHeight: "21px",
	},
	Body_1: {
		fontFamily: "Pretendard",
		fontWeight: "medium",
		fontSize: "20px",
		lineHeight: "26px",
	},
	Body_2: {
		fontFamily: "Pretendard",
		fontWeight: "medium",
		fontSize: "16px",
		lineHeight: "21px",
	},
	Body_3: {
		fontFamily: "Pretendard",
		fontWeight: "medium",
		fontSize: "14px",
		lineHeight: "18px",
	},
	SUB: {
		fontFamily: "Pretendard",
		fontWeight: "medium",
		fontSize: "12px",
		lineHeight: "15px",
	},
};
 
/* 예시 사용법
export const Title_4 = styled.div`
  display: flex;
  background-color: ${tokens.colors.Blue_3};
  ${tokens.typography.Title_4}
  
`;
*/