import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const BackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items : center;
  background-image: url('/img/imgbackground.jpg');
  min-height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 113px;
  width: 1200px;
  height: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 4px rgba(58, 107, 135, 0.2);
`;

export const StyledPageName = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.H3_SB_40};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 32px;
`;

export const StyledTitle = styled.div`
  margin-bottom: 10px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
`;

export const FileUploadContainer = styled.div`
  width: 100%;
  height: 224px;
  border: 1px dashed ${tokens.colors.B_Grey_4};
  background-color: #f7f8fc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${tokens.colors.B_Grey_7};
  ${tokens.typography.B2_M_16}
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
    border-radius: 5px;
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  border: 1px solid ${tokens.colors.Grey_4};
  width: 590px;
  height: 56px;
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
  padding-left: 16px;

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
  height: 96px;

  position: fixed;
  bottom: 0; /* 아래쪽으로 고정 */
  left: 0; /* 왼쪽으로 고정 */
  background-color: rgba(255, 255, 255, 0.1); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(200px); /* 필터를 원하는 것으로 설정 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ArbitaryBtn = styled.button` /* 임시 저장하기 버튼*/
  width: 388px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const Btn = styled.button` /*다음 버튼*/
  margin-left: 16px;
  width: 388px;
  height: 48px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
`;