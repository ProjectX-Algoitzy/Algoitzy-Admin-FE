import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"



export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 0.833rem;
  padding: 6.583rem 0;
  margin-bottom: 4.083rem;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const Head = styled.div`
  ${tokens.typography.T1_SB_32};
  margin-bottom: 0.667rem;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  justify-content: flex-start;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.542rem;
  height: 1.708rem;
  color: ${tokens.colors.B_Grey_6};
  ${tokens.typography.B2_M_16};
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 0.167rem;
  margin: 1.667rem 0.333rem 1.667rem 0;
  cursor: pointer;
`;

export const TabSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.542rem;
  height: 1.708rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T5_SB_16};
  border: 2px solid ${tokens.colors.B_Grey_7};
  border-radius: 0.167rem;
  margin: 1.667rem 0.333rem 1.667rem 0;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
`;

export const NormText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
`;

export const CntText = styled.div`
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Blue_0_Main};
  margin-left: 0.167rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  box-shadow: rgba(58, 107, 135, 0.08) 0px -0.167rem 0.417rem 0.167rem;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: ${tokens.colors.White};
`;

export const BtnDocNonpass = styled.button`
  width: 9.958rem;
  height: 2rem;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Red};
  border-radius: 0.167rem;
  border: 1px solid ${tokens.colors.Red};
  cursor: pointer;
  margin: 1rem 0.333rem;
`;

export const BtnDocPass = styled.button`
  width: 9.958rem;
  height: 2rem;
  background: ${tokens.colors.White};
  color: ${tokens.colors.Blue_0_Main};
  border-radius: 0.167rem;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 1rem 0.333rem;
`;

export const BtnMail = styled.button`
  width: 9.958rem;
  height: 2rem;
  background: ${tokens.colors.B_Grey_7};
  color: ${tokens.colors.White};
  border-radius: 0.167rem;
  border: 1px solid ${tokens.colors.B_Grey_7};
  cursor: pointer;
  margin: 1rem 0.333rem;
`;

export const BtnFinalPass = styled.button`
  width: 9.958rem;
  height: 2rem;
  background: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  border-radius: 0.167rem;
  border: 1px solid ${tokens.colors.Blue_0_Main};
  cursor: pointer;
  margin: 1rem 0.333rem;
`;

export const BtnFinalNonPass = styled.button`
  width: 9.958rem;
  height: 2rem;
  background: ${tokens.colors.Red};
  color: ${tokens.colors.White};
  border-radius: 0.167rem;
  border: 1px solid ${tokens.colors.Red};
  cursor: pointer;
  margin: 1rem 0.333rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  margin-top: 1rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.83rem;
  list-style: none;
  // margin-top: 1.6rem;
`;

export const PaginationArrow = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url('/img/grayarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.21rem;
  width: 0.33rem;
  height: 0.88rem;
  padding: 0.42rem;
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;
