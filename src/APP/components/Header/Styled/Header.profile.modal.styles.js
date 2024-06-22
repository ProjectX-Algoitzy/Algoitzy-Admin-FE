import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const ArrowBubble = styled.div`
  position: absolute;
  width: 240px;
  height: 117px;
  padding: 0px;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(58, 107, 135, 0.2);
  top: 60px;
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
    border-width: 0 15px 15px;
    border-color: #FFFFFF transparent;
    top: -14px;
    left: 110px;
  }

  ::before {
    border-width: 0 15px 15px;
    border-color: rgba(58, 107, 135, 0.008) transparent;
    top: -16px; /* Slightly above to create shadow effect */
    left: 110px;
    z-index: -1; /* Place it behind the white triangle */
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: felx-start;
  align-items: center;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${tokens.colors.B_Grey_4};
  border-radius: 20px;
  margin: 18px 3px 3px 10px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 40px;
  color: ${tokens.colors.B_Grey_7};
  ${tokens.typography.B2_M_16};
  font-weight: 800;
  margin: 18px 3px 3px 0;
`;

export const Logout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 24px;
  background-color: ${tokens.colors.White};
  color: ${tokens.colors.B_Grey_5};
  ${tokens.typography.Sub_M_12};
  border: 1px solid ${tokens.colors.B_Grey_5};
  border-radius: 4px;
  padding: 0;
  margin: 18px 3px 3px 0;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

export const Button = styled.button`
  width: 108px;
  height: 36px;
  background-color: ${tokens.colors.B_Grey_1};
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  font-weight: 600;
  border: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
`;