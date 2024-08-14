import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  background-image: url('/img/imgbackground.jpg');
  min-height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.167rem; 
  margin-bottom: 4.708rem; 
  width: 50rem; 
  height: auto;
  background-color: white;
  border-radius: 0.333rem; 
  box-shadow: 0rem 0.167rem 0.417rem 0.167rem rgba(58, 107, 135, 0.2); 
`;

export const StyledPageName = styled.div`
  margin-top: 5rem; 
  margin-bottom: 3.333rem; 
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.H3_SB_40};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.583rem;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.333rem; 
`;

export const StyledTitle = styled.div`
  margin-bottom: 0.417rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
`;

export const FileUploadContainer = styled.div`
  width: 100%;
  height: 9.333rem; 
  border: 0.042rem dashed ${tokens.colors.B_Grey_4}; 
  background-color: #f7f8fc;
  border-radius: 0.333rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${tokens.colors.B_Grey_7};
  ${tokens.typography.B2_M_16};
  transition: border-color 0.3s;
  position: relative;

  &:hover {
    border-color: #aaaaaa;
  }

  &.dragActive {
    border-color: #000000;
  }
`;

export const HighlightText = styled.span`
  color: ${tokens.colors.Blue_0_Main};
`;

export const ImagePreview = styled.div` /* 이미지 미리보기를 위한 스타일 */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.208rem; 
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 0.167rem;
  border: none;
  border: 0.042rem solid ${tokens.colors.Grey_4}; 
  width: 24.583rem;
  height: 2.333rem; 
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
  padding-left: 0.667rem;
  &::placeholder {
    color: ${tokens.colors.Grey_4};
  }

  &:focus {
    outline: none;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;

  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8.333rem); 
  z-index: 1000;
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ArbitaryBtn = styled.button` /* 임시 저장하기 버튼*/
  width: 16.167rem; 
  height: 2rem; 
  border-radius: 0.167rem; 
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.B_Grey_7};
`;

export const Btn = styled.button` /*다음 버튼*/
  margin-left: 0.667rem; 
  width: 16.167rem; 
  height: 2rem; 
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.Blue_0_Main};
`;
