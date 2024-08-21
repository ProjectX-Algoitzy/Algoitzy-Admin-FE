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
  height: 3.333rem;
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
  margin-right: 15.917rem;
`;

export const Rabel = styled.img`
  margin-top: 0.417rem;
  width: 7.458rem;
  height: 1.667rem;
`;

export const HeaderRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PageLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? tokens.colors.B_Grey_8 : tokens.colors.B_Grey_6)};
  width: 5.833rem;
  height: 0.875rem;
  margin: 0 0.25rem;
  ${tokens.typography.T5_SB_16};
`;

export const AdminName = styled.div`
  color: ${tokens.colors.Blue_0_Main};
  height: 0.875rem;
  ${tokens.typography.T5_SB_16};
  margin-left: 2.083rem;
  cursor: pointer;
`;

export const Btn = styled.button`
  ${tokens.Btns.Btn_ghost_default}
  ${tokens.typography.T5_SB_16};
  margin-left: 2.083rem;
`;

export const SubStudyMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding-left: 32.583rem;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 3.333rem; 
  z-index: 999;
`;

export const SubApplicationMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding-left: 45.25rem;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 3.333rem; 
  z-index: 999;
`;

export const SubCodingMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding-left: 58.042rem;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 3.333rem; 
  z-index: 999;
`;

export const SubMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_5};
  width: 5.833rem;
  margin: 0 0.833rem;
  cursor: pointer;
  margin: 0 0.25rem;

  &:hover {
    color: ${tokens.colors.B_Grey_8};
  }
`;
