import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const ModalContainer = styled.div`
  position: absolute;
  top: -2.333rem;
  left: 9.125rem;
  width: 5.042rem;
  height: 4.667rem;
  background-color: white;
  border-radius: 0.167rem;
  z-index: 999; 
  box-shadow: rgba(58, 107, 135, 0.2) 0px 0.167rem 0.417rem 0.167rem;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.0); 
  z-index: 998; 
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.667rem 1.333rem;
  cursor: pointer;
`;

export const Hr = styled.hr`
  border-width: 0.042rem 0 0 0; 
  border-color: ${tokens.colors.B_Grey_2};
  margin: 0;
`;

export const TrashImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/img/trashcan.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
	width: 0.9rem;
	height: 1rem;
  margin-right: 0.208rem;
`;

export const CopyImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/img/copy.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
	width: 0.9rem;
	height: 1rem;
  margin-right: 0.208rem;
`;

export const Text = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;
