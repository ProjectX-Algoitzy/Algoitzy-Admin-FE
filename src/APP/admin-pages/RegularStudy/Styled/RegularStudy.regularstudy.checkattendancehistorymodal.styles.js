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
  border-radius: 0.167rem;
  width: 41.13rem;
  height: 39.833rem;
  max-width: 90%; /* 화면 크기에 맞춰 모달 크기를 조정 */
  max-height: 90%; /* 화면 크기에 맞춰 모달 크기를 조정 */
  box-shadow: 0 0.083rem 0.42rem rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 내용이 넘칠 때 스크롤 가능하도록 */
`;

export const FirstSentence = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.667rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
`;

export const BigTitle = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  margin-left: 4.875rem;
  margin-bottom: 0.708rem;
`;

export const XBtn = styled.img`
  width: 1.333rem;
  height: 1.333rem;
  margin-right: 1rem;
  margin-bottom: 0.708rem;
  cursor: pointer;
`;

export const WeeksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22.958rem;
  height: 1.333rem;
  margin-top: 0.958rem;
  margin-bottom: 2.167rem;
  margin-left: 4.875rem;
`;

export const Weeks = styled.div`
  font-weight: 600;
  font-size: 0.833rem;
  line-height: 1.333rem;
  color: ${({ disabled, selected }) => {
    if (disabled) return tokens.colors.B_Grey_4;  // 비활성화된 주차는 회색
    if (selected) return tokens.colors.B_Grey_8;  // 선택된 주차는 어두운 회색
    return tokens.colors.B_Grey_6;  // 기본 주차 색상
  }};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};  // 비활성화된 주차는 클릭 불가
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};  // 비활성화된 주차는 클릭 불가
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.333rem;
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

export const BlueCommentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 4.875rem;
`;

export const BlueComment = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Blue_0_Main};
`;