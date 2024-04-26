import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
`;

export const HeaderWrap = styled.div`
    background-color: ${tokens.colors.Black};
    position: sticky;
    top: 0;
    z-index: 1000; 
    height: 100%; 
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLeftWrap = styled.div`
    display: flex;
    margin-left: 12%;
`;

export const HeaderRightWrap = styled.div`
    align-items: center;
    margin-right: 12%;
`;

export const Rabel = styled.div`
	${tokens.typography.H2_SB_48}
	color: ${tokens.colors.White};
	margin-top: 20px;
    margin-bottom: 20px;
`;

export const Btn = styled.button`
	${tokens.Btns.Btn_ghost_default}
`;