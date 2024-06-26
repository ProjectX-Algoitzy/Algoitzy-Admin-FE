import styled from 'styled-components';
import * as tokens from "../../../../tokens"

export const ModalContainer = styled.div`
  position: absolute;
  top: -56px;
  left: 219px;
  // transform: translate(-50%, -50%);
  width: 121px;
  height: 112px;
  background-color: white;
  border-radius: 4px;
  z-index: 999; 
  box-shadow: rgba(58, 107, 135, 0.2) 0px 4px 10px 4px;
`;

// 모달 외부 배경 클릭 시 모달 닫기 위한 투명한 배경
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
  padding: 16px 32px;
  // height: 56px;
  cursor: pointer;

`;

export const Hr = styled.hr`
  border-width:1px 0 0 0; 
  border-color:${tokens.colors.B_Grey_2};
  margin: 0;
`;

export const Img = styled.div`
  background-image: url('/img/uil_lock.svg');
	width: 24px;
	height: 24px;
  margin-right: 5px;
`;

export const Text = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;