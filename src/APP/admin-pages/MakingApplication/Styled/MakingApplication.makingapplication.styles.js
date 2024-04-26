import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const InputBox = styled.input`
    width: 434px;
    height: 56px;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 4px;
`;

export const Btn = styled.button`
	${tokens.Btns.Btn_fill_disable}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
	margin-top: 100px;
`;