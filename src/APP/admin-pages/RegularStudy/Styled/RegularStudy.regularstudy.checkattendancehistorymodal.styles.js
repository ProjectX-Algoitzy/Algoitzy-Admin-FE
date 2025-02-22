import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 중앙 정렬 */
  z-index: 1000;
  padding: 1rem; /* 모달이 화면에 붙지 않도록 여백 추가 */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem; /* 모달 내부에 패딩 추가 */
  border-radius: 0.33rem;
  width: 41.13rem;
  max-width: 90%; /* 화면 크기에 맞춰 모달 크기를 조정 */
  max-height: 90%; /* 화면 크기에 맞춰 모달 크기를 조정 */
  box-shadow: 0 0.083rem 0.42rem rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 내용이 넘칠 때 스크롤 가능하도록 */
`;

export const FirstSentence = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem; /* 내부에 패딩 추가 */
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
`;

export const BigTitle = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  margin-left: 2.17rem;
  margin-top: 0.58rem;
  margin-bottom: 0.78rem;
`;

export const WeeksContainer = styled.div`
  display: flex;
  width: 31.38rem;
  margin-top: 0.958rem;
  margin-bottom: 2.167rem;
  justify-content: space-between;
`;

export const Weeks = styled.div`
  font-weight: 600;
  font-size: 0.833rem;
  line-height: 1.333rem;
  color: ${tokens.colors.B_Grey_6};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.33rem;
`;

export const SmallTitle = styled.div`
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Grey_8};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.167rem;
  border: none;
  border: 0.042rem solid ${tokens.colors.Grey_4};
  width: 31.38rem;
  height: 2.33rem;
  background-color: ${tokens.colors.Grey_1};
  @media (max-width: 600px) {
    width: 26rem;
  }
`;

export const LinkImg = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 0.67rem;
  margin-right: 0.67rem;
`;

export const StyledInput = styled.input`
  border: none;
  border-left: 0.13rem solid ${tokens.colors.B_Grey_5};
  width: 28.38rem;
  height: 0.88rem;
  color: ${tokens.colors.B_Grey_7};
  background-color: ${tokens.colors.Grey_1};
  ${tokens.typography.B3_M_14};
  padding-left: 0.67rem;

  &::placeholder {
    color: ${tokens.colors.Grey_4};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin-top: 1rem; /* 버튼 위에 여백 추가 */
`;

export const Btn = styled.button` /* 개설하기 버튼 */
  margin-bottom: 3.25rem;
  width: 14.33rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.Blue_0_Main};
`;

export const StyledAddButton = styled.img`
  margin-bottom: 1.333rem;
  width: 80%;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 26rem;
  }
`;