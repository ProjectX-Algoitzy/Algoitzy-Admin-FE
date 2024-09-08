import styled from 'styled-components'
import * as tokens from "../../../../tokens";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 10000; /* 모달이 다른 요소들 위에 나타나게 */
`;

// 모달 외부 클릭을 차단하는 투명한 배경
export const DisableBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 9998;
  pointer-events: none;
`;

export const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  background: ${tokens.colors.Blue_0_Main};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;