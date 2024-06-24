import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const HeaderWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(200px);
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
  margin-right: 382px;
`;

export const Rabel = styled.img`
  margin-top: 10px;
  width: 179px;
  height: 40px;
`;

export const HeaderRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PageLink = styled.div`
  color: ${(props) => (props.isActive ? tokens.colors.B_Grey_8 : tokens.colors.B_Grey_6)};
  width: 140px;
  height: 21px;
  margin: 0 6px;
  ${tokens.typography.T5_SB_16};
`;

export const AdminName = styled.div`
  color: ${tokens.colors.Blue_0_Main};
  height: 21px;
  ${tokens.typography.T5_SB_16};
  margin-left: 23px;
  cursor: pointer;
`;

export const Btn = styled.button`
  ${tokens.Btns.Btn_ghost_default}
`;

export const SubStudyMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 934px;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 80px; 
  z-index: 999;
`;

export const SubApplicationMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 1086px;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 80px; 
  z-index: 999;
`;

export const SubCodingMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 1409px;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 80px; 
  z-index: 999;
`;

export const SubMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_5};
  width: 140px;
  margin: 0 20px;
  cursor: pointer;
  margin: 0 6px;

  &:hover {
    color: ${tokens.colors.B_Grey_8};
  }
`;