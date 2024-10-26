import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(200px);
  -webkit-backdrop-filter: blur(200px);
  /* height: ${({ activeMenu }) => ['study', 'application', 'coding'].includes(activeMenu) ? '230px' : 'auto'}; */
  height: ${({ activeMenu }) => ['study', 'application', 'coding'].includes(activeMenu) ? '10rem' : 'auto'};
`;

export const HeaderWrap = styled.div`
  height: 3.333rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* 좌우 간격을 자동 조정 */
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};

  padding: 0 5rem;
  @media (max-width: 600px) {
      padding: 0 0.33rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
  @media (max-width: 600px) {
      margin: 0;
  }
`;

export const Rabel = styled.img`
  margin-top: 0.417rem;
  width: 7.458rem;
  height: 1.667rem;
  @media (max-width: 600px) {
      margin: 0.5rem;
  }
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

  @media (max-width: 600px) {
      margin: 0;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 0.88rem;
  margin-left: 2.08rem;
  margin-right: 2.08rem;
  @media (max-width: 600px) {
     margin-left: 1rem;
     margin-right: 0;
  }
  cursor: pointer;
`;

export const AdminName = styled.div`
  color: ${tokens.colors.Blue_0_Main};
  ${tokens.typography.T5_SB_16};
  margin-right: 0.3rem;
  // cursor: pointer;
`;

export const Arrow = styled.img`
  /* width: 0.3rem;
  height: 0.46rem; */
`;

export const Btn = styled.button`
  ${tokens.Btns.Btn_ghost_default}
  ${tokens.typography.T5_SB_16};
  margin-left: 2.083rem;
  @media (max-width: 600px) {
     ${tokens.typography.T6_SB_14};
     margin-left: 1rem;
  }
  @media (max-width: 300px) {
     ${tokens.typography.T7_SB_12};
  }
`;

export const SubMenuContaier = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgba(255, 255, 255, 0.05); */
  height: 6.77777rem;
  position: fixed;
  top: 3.3333333333333333rem; 
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  border-top: 1px solid ${tokens.colors.Blue_3};
  margin-top: -1px;
`;

// export const SubMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;
//   height: 134px;
//   background-color: #EEF1FD;
//   /* background-color: rgba(255, 255, 255, 0.05); 
//   backdrop-filter: blur(200px);
//   -webkit-backdrop-filter: blur(200px); */
//   position: fixed;
//   top: 3.333rem; 
//   z-index: 1000;
// `;

// export const SubApplicationMenuContaier = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   height: 100%;
//   border-top: 1px solid ${tokens.colors.Blue_3};
//   margin-top: -1px;

//   margin-left: ${(props) => (props.isLoggedIn ? '-155px' : '60px')};
//   @media (max-width: 1300px) {
//     margin-left: ${(props) => (props.isLoggedIn ? '-200px' : '35px')};
//   }
// `;

// export const SubStudyMenuContaier = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   height: 100%;
//   margin-top: -1px;
//   border-top: 1px solid ${tokens.colors.Blue_3};

//   margin-left: ${(props) => (props.isLoggedIn ? '148px' : '370px')};
//   @media (max-width: 1300px) {
//     margin-left: ${(props) => (props.isLoggedIn ? '110px' : '340px')};
//   }
// `;

// export const SubCodingMenuContaier = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   height: 100%;
//   margin-top: -1px;
//   border-top: 1px solid ${tokens.colors.Blue_3};

//   margin-left: ${(props) => (props.isLoggedIn ? '443px' : '665px')};
//   @media (max-width: 1300px) {
//     margin-left: ${(props) => (props.isLoggedIn ? '413px' : '643px')};
//   }
// `;

// export const SubApplicationMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 134px;
//   /* padding-left: 32.583rem; */
//   padding-left: 3%;
//   background-color: ${tokens.colors.B_Grey_1};
//   position: fixed;
//   top: 3.333rem; 
//   z-index: 999;
// `;

// export const SubStudyMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 134px;
//   /* padding-left: 45.25rem; */
//   padding-left: 19%;
//   background-color: ${tokens.colors.B_Grey_1};
//   position: fixed;
//   top: 3.333rem; 
//   z-index: 999;
// `;

// export const SubCodingMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   /* height: 2.5rem; */
//   height: 134px;
//   /* padding-left: 58.042rem; */
//   padding-left: 35%;
//   background-color: ${tokens.colors.B_Grey_1};
//   position: fixed;
//   top: 3.333rem; 
//   z-index: 999;
// `;

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