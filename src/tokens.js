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

	// Error Messages
	Red: "#DC4A41",

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

// semibold : 600
// bold : 700
// medium : 500
export const typography = {
	// title_lg: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "600",
	// 	fontSize: "48px",
	// 	lineHeight: "120%",
	// },
	// title_md: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "semibold",
	// 	fontSize: "36px",
	// 	lineHeight: "120%",
	// },
	// title_sm: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "semibold",
	// 	fontSize: "24px",
	// 	lineHeight: "130%",
	// },
	// text_lg: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "semibold",
	// 	fontSize: "18px",
	// 	lineHeight: "140%",
	// },
	// text_md: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "regular",
	// 	fontSize: "16px",
	// 	lineHeight: "140%",
	// },
	// text_sm: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "regular",
	// 	fontSize: "14px",
	// 	lineHeight: "140%",
	// },
	// caption: {
	// 	fontFamily: "Pretendard Variable",
	// 	fontWeight: "regular",
	// 	fontSize: "12px",
	// 	lineHeight: "140%",
	// },

	// Pretendard 폰트 - 가독성 높은 폰트
	// HEAD_0: {
	// 	fontFamily: "Pretendard",
	// 	fontWeight: "bold",
	// 	fontSize: "60px",
	// 	lineHeight: "80px",
	// },
	H1_B_60: {
		fontFamily: "Pretendard",
		fontWeight: "700",
		fontSize: "60px",
		lineHeight: "80px",
	},
	H2_SB_48: {
		fontFamily: "Pretendard",
		fontWeight: "600",
		fontSize: "48px",
		lineHeight: "64px",
	},
	H3_SB_40: {
		fontFamily: "Pretendard",
		fontWeight: "600",
		fontSize: "40px",
		lineHeight: "54px",
	},
	T1_SB_32: {
		fontFamily: "Pretendard",
		fontWeight: "600",
		fontSize: "32px",
		lineHeight: "42px",
	},
	T2_M_28: {
		fontFamily: "Pretendard",
		fontWeight: "500",
		fontSize: "28px",
		lineHeight: "36px",
	},
	T3_B_24: {
		fontFamily: "Pretendard",
		fontWeight: "700",
		fontSize: "24px",
		lineHeight: "32px",
	},
	T4_SB_20: {
		fontFamily: "Pretendard",
		fontWeight: "600",
		fontSize: "20px",
		lineHeight: "26px",
	},
	T5_SB_16: {
		fontFamily: "Pretendard",
		fontWeight: "600",
		fontSize: "16px",
		lineHeight: "21px",
	},
	B1_M_20: {
		fontFamily: "Pretendard",
		fontWeight: "500",
		fontSize: "20px",
		lineHeight: "26px",
	},
	B2_M_16: {
		fontFamily: "Pretendard",
		fontWeight: "500",
		fontSize: "16px",
		lineHeight: "21px",
	},
	B3_M_14: {
		fontFamily: "Pretendard",
		fontWeight: "500",
		fontSize: "14px",
		lineHeight: "18px",
	},
	Sub_M_12: {
		fontFamily: "Pretendard",
		fontWeight: "500",
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

export const Btns = {
	Btn_fill_certi_disable: {
		width: "140px",
		height: "56px",
		background: "#D2D9E5",
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_disable: {
		width: "386px",
		height: "56px",
		background: "#D2D9E5",
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_normal: {
		width: "320px",
		height: "72px",
		background: colors.Blue_0_Main,
		color: colors.White,
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_default: {
		width: "386px",
		height: "56px",
		background: colors.Blue_0_Main,
		color: colors.White,
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_hover: {
		width: "386px",
		height: "56px",
		background: colors.Blue_3,
		color: colors.White,
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_press: {
		width: "386px",
		height: "56px",
		background: colors.Blue_5_Dark,
		color: colors.White,
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_certi_enable : {
		width: "140px",
		height: "56px",
		background: colors.B_Grey_7,
		color: colors.White,
		borderRadius: "4px",
		border: "none",
		cursor: "pointer",
	},
	Btn_ghost_default : {
		width: "145px",
		height: "40px",
		background: colors.Black,
		color: colors.Blue_4_Dark,
		borderRadius: "4px",
		borderColor: colors.Blue_4_Dark,
		cursor: "pointer",
	}
};