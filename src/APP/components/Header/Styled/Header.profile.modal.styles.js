import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const ArrowBubble = styled.div`
  position: absolute;
  width: 10rem;
  height: 4.88rem;
  padding: 0;
  background: #FFFFFF;
  border-radius: 0.17rem;
  box-shadow: 0 0 0.42rem 0 rgba(58, 107, 135, 0.2);
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;

  ::after, ::before {
    content: '';
    position: absolute;
    border-style: solid;
    display: block;
    width: 0;
  }

  ::after {
    border-width: 0 0.63rem 0.63rem;
    border-color: #FFFFFF transparent;
    top: -0.58rem;
    left: 4.58rem;
  }

  ::before {
    border-width: 0 0.63rem 0.63rem;
    border-color: rgba(58, 107, 135, 0.008) transparent;
    top: -0.67rem;
    left: 4.58rem;
    z-index: -1;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Profile = styled.img`
  width: 1.67rem;
  height: 1.67rem;
  border-radius: 0.83rem;
  margin: 0.75rem 0.13rem 0.13rem 0.42rem;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 1.67rem;
  color: ${tokens.colors.B_Grey_7};
  ${tokens.typography.B2_M_16};
  font-weight: 800;
  margin: 0.75rem 0.13rem 0.13rem 0;
`;

export const Logout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.67rem;
  height: 1rem;
  background-color: ${tokens.colors.White};
  color: ${tokens.colors.B_Grey_5};
  ${tokens.typography.Sub_M_12};
  border: 0.04rem solid ${tokens.colors.B_Grey_5};
  border-radius: 0.17rem;
  padding: 0;
  margin: 0.75rem 0.13rem 0.13rem 0;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0.42rem;
`;

export const Button = styled.button`
  width: 4.5rem;
  height: 1.5rem;
  background-color: ${tokens.colors.B_Grey_1};
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  font-weight: 600;
  border: none;
  border-radius: 0.17rem 0.17rem 0 0;
  cursor: pointer;
`;