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
    dddd: "radical-gradient(#00A3FF 100%, #0E0D12)"
};

// semibold : 600
// bold : 700
// medium : 500
export const typography = {
    // title_lg: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "600",
    //  fontSize: "48px",
    //  lineHeight: "120%",
    // },
    // title_md: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "semibold",
    //  fontSize: "36px",
    //  lineHeight: "120%",
    // },
    // title_sm: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "semibold",
    //  fontSize: "24px",
    //  lineHeight: "130%",
    // },
    // text_lg: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "semibold",
    //  fontSize: "18px",
    //  lineHeight: "140%",
    // },
    // text_md: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "regular",
    //  fontSize: "16px",
    //  lineHeight: "140%",
    // },
    // text_sm: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "regular",
    //  fontSize: "14px",
    //  lineHeight: "140%",
    // },
    // caption: {
    //  fontFamily: "Pretendard Variable",
    //  fontWeight: "regular",
    //  fontSize: "12px",
    //  lineHeight: "140%",
    // },

    // Pretendard 폰트 - 가독성 높은 폰트
    // HEAD_0: {
    //  fontFamily: "Pretendard",
    //  fontWeight: "bold",
    //  fontSize: "60px",
    //  lineHeight: "80px",
    // },
    H1_B_60: {
        fontWeight: "700",
        fontSize: "2.5rem",
        lineHeight: "3.333rem",
      },
      H2_SB_48: {
        fontWeight: "600",
        fontSize: "2rem",
        lineHeight: "2.667rem",
      },
      H3_SB_40: {
        fontWeight: "600",
        fontSize: "1.667rem",
        lineHeight: "2.25rem",
      },
      T1_SB_32: {
        fontWeight: "600",
        fontSize: "1.333rem",
        lineHeight: "1.75rem",
      },
      T2_M_28: {
        fontWeight: "500",
        fontSize: "1.167rem",
        lineHeight: "1.5rem",
      },
      T3_B_24: {
        fontWeight: "700",
        fontSize: "1rem",
        lineHeight: "1.333rem",
      },
      T4_SB_20: {
        fontWeight: "600",
        fontSize: "0.833rem",
        lineHeight: "1.083rem",
      },
      T5_SB_16: {
        fontWeight: "600",
        fontSize: "0.667rem",
        lineHeight: "0.875rem",
      },
	  T6_SB_14: {
        fontWeight: "600",
        fontSize: "0.583rem", 
        lineHeight: "0.75rem",
      },
      B1_M_20: {
        fontWeight: "500",
        fontSize: "0.833rem",
        lineHeight: "1.083rem",
      },
      B2_M_16: {
        fontWeight: "500",
        fontSize: "0.667rem",
        lineHeight: "0.875rem",
      },
      B3_M_14: {
        fontWeight: "500",
        fontSize: "0.583rem",
        lineHeight: "0.75rem",
      },
      Sub_M_12: {
        fontWeight: "500",
        fontSize: "0.5rem",
        lineHeight: "0.625rem",
      },
    }
/* 예시 사용법
export const Title_4 = styled.div`
  display: flex;
  background-color: ${tokens.colors.Blue_3};
  ${tokens.typography.Title_4}
  
`;
*/

export const Btns = {
	Btn_fill_certi_disable: {
		width: "5.833rem",
		height: "2.333rem",
		background: "#D2D9E5",
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_disable: {
		width: "16.083rem",
		height: "2.333rem",
		background: "#D2D9E5",
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_normal: {
		width: "13.333rem",
		height: "3rem",
		background: colors.Blue_0_Main,
		color: colors.White,
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_default: {
		width: "16.083rem",
		height: "2.333rem",
		background: colors.Blue_0_Main,
		color: colors.White,
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_hover: {
		width: "16.083rem",
		height: "2.333rem",
		background: colors.Blue_3,
		color: colors.White,
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_press: {
		width: "16.083rem",
		height: "2.333rem",
		background: colors.Blue_5_Dark,
		color: colors.White,
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_fill_certi_enable: {
		width: "5.833rem",
		height: "2.333rem",
		background: colors.B_Grey_7,
		color: colors.White,
		borderRadius: "0.167rem",
		border: "none",
		cursor: "pointer",
	},
	Btn_ghost_default: {
		width: "6.042rem",
		height: "1.667rem",
		background: colors.White,
		color: colors.Blue_0_Main,
		borderRadius: "0.167rem",
		borderColor: colors.Blue_0_Main,
		cursor: "pointer",
    border: "0.083rem solid",
	}
};
