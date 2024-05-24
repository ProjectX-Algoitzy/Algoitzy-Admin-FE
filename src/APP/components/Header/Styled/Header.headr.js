import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`  /* 헤더 전체의 컨테이너 */
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1000; 
  /* background-color: yellow; */
`;

export const HeaderWrap = styled.div` /*헤더 안을 깜싸주는 wrap*/
  background-color: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(200px); /* 필터를 원하는 것으로 설정 */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)` /*링크를 꾸며주는 컴포넌트*/
  text-decoration: none;
`;

export const HeaderLeftWrap = styled.div` /*헤더의 왼쪽 Wrap...코알라 로고를 감싸주는 용도*/
  display: flex;
  margin-left: 360px;
`;

export const Rabel = styled.img` /* 코알로 로고를 꾸며주는 이미지 스타일드 컴포넌트 */
  margin-top: 10px;
  width: 179px;
  height: 40px;
`;

export const HeaderRightWrap = styled.div` /*헤더의 오른쪽 Wrap...페이지 링크들을 감싸주는 용도*/
  display: flex;
  align-items: center;
  margin-right: 361px;
`;

export const PageLink = styled.div` /*페이지 이동 버튼*/
  color: ${(props) => (props.isActive ? tokens.colors.B_Grey_8 : tokens.colors.B_Grey_6)};
  height: 21px;
  margin-top: 10px;
  margin-right: 66px;
  ${tokens.typography.T5_SB_16};
  
`;

export const AdminName = styled.div` /* 로그인한 계정의 이름을 보여주는 스타일드 컴포넌트 */
  color: ${tokens.colors.Blue_0_Main};
  height: 21px;
  margin-top: 10px;
  ${tokens.typography.T5_SB_16};
`;

export const Btn = styled.button`
  ${tokens.Btns.Btn_ghost_default}
`;