import styled from 'styled-components';
import * as tokens from "../../../../tokens";
import Select from 'react-select';
import { css } from "styled-components";



export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InnerEditorContainer = styled.div`
  padding: 0 1rem;
  flex: 1;
  border: 1px solid #ffffff;
  font-size: 0.8rem;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.6;
  overflow-y: auto; /* 스크롤 가능 */
  max-height: 100rem; /* 최대 높이 제한 */
  white-space: pre-wrap;
  word-wrap: break-word;

  /* 기본 스크롤바 설정 (투명색) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* 기본적으로 투명 */
    border-radius: 4px; /* 스크롤바 모서리 둥글게 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 트랙 배경 투명 */
  }

  /* 스크롤 상태에 따라 동적 스타일 적용 */
  ${(props) =>
    props.isScrolling &&
    css`
      &::-webkit-scrollbar-thumb {
        background-color: ${tokens.colors.B_Grey_3}; /* 스크롤 시 색상 변경 */
      }
    `}

  /* Firefox 스크롤바 설정 */
  scrollbar-width: thin; /* 얇은 스크롤바 */
  scrollbar-color: transparent transparent; /* 기본적으로 투명 */

  ${(props) =>
    props.isScrolling &&
    css`
      scrollbar-color: ${tokens.colors.B_Grey_2} transparent; /* 스크롤 시 색상 변경 */
    `}

  .cm-editor.cm-focused {
    outline: none;
  }
`;

export const EditorHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.542rem 0;
  gap: 0.5rem;
`

export const TitleInput = styled.textarea`
  width: 100%;
  height: auto;
  overflow-y: hidden; /* 내용이 넘치면 자동으로 높이 조절되도록 설정 */
  color: ${({ hasText }) => hasText ? tokens.colors.B_Grey_8 : tokens.colors.B_Grey_6}; /* hasText에 따라 색상 변경 */
	${tokens.typography.H2_SB_48}
  font-family: 'Pretendard', sans-serif;
  border: 1px solid #ffffff;
  outline: none;
  resize: none;
  overflow: hidden;
`;

export const Divider = styled.div`
  width: 4.3rem;
  height: 0.1rem;
  background-color: ${tokens.colors.B_Grey_4}; /* 구분선 색상 */
`;

// 라벨+입력 컨테이너
export const LIContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 입력값 라벨
export const Label = styled.label`
  height: 1rem;
  ${tokens.typography.T4_SB_20}
  color: ${tokens.colors.Grey_8};
  margin-top: 1.25rem;
  margin-bottom: 0.42rem;
`;

// 토글 에러 메시지 아래 라벨
export const BlankLabel = styled.label`
  height: 1rem;
  ${tokens.typography.T4_SB_20}
  color: ${tokens.colors.Grey_6};
  margin-top: 1.56rem;
  margin-bottom: 0.42rem;
`;

export const CategorySelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
z-index: 20; /* 다른 요소 위에 표시 */

.react-select__control {
  width: 100%;
  height: 2.25rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: ${(props) => (props.isCategorySelected ? `0.042rem solid ${tokens.colors.Grey_6}` : `0.042rem solid ${tokens.colors.B_Grey_3}`)};
  border-radius: 0.17rem;
  text-align: center;
  cursor: pointer;
}

.react-select__menu {
  position: absolute;
  top: -0.43rem;  
  width: 100%;
  border-radius: 0.17rem;
  border: none;
  box-shadow: 0 0.08rem 0.17rem rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
  overflow: hidden; /* Hide scrollbar */
}

.react-select__menu-list {
  // max-height: 220px;
  overflow-y: auto;
  /* Hide scrollbar for WebKit-based browsers (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Hide scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
}

.react-select__option {
  display: flex;
  align-items: center; /* Align text vertically center */
  justify-content: center; /* Align text horizontally center */
  height: 2.25rem;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: none;
  text-align: center; /* Center the text */
}

.react-select__option:not(:last-child) {
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
}

.react-select__option--is-selected {
  background-color: ${tokens.colors.White};
  backdrop-filter: blur(0.33rem);
  color: ${tokens.colors.Grey_8};
  border: none;
  ${tokens.typography.B3_M_14};
}

.react-select__option--is-focused {
  background-color: rgba(102, 201, 255, 0.2);
  cursor: pointer;
}

.react-select__option:active {
  background-color: rgba(102, 201, 255, 0.2);
}

.react-select__option:hover {
  background-color: rgba(102, 201, 255, 0.2);
}
`;

export const Toolbar = styled.div`
  position: sticky; /* 스크롤 시 상단 고정 */
  top: 0; /* 뷰포트 상단에 고정 */
  z-index: 10; /* 다른 요소 위에 표시 */
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: white;
  padding: 0.5rem;
  padding-bottom: 0.25rem;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.2rem;
    color: #666;

    &:hover {
      color: #333;
    }
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  span {
    color: #ccc;
  }
`;

export const EditorContainer = styled.div`
  padding: 0.667rem 1rem;
  flex: 1;
  border: 1px solid #ffffff;
  font-size: 0.8rem;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  .cm-editor.cm-focused {
    outline: none;
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 0.8rem;
  border-radius: 4px;
  width: 12rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-between;
  p{
    margin: 0 0 0.2rem 0 ;
    color: ${tokens.colors.B_Grey_8};
	  ${tokens.typography.B2_M_16}
  }
  input {
    flex: 1;
    width: 100%;
    color: ${tokens.colors.B_Grey_8};
	  ${tokens.typography.B3_M_14}
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 0.2rem 0.4rem;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: ${tokens.colors.Blue_0_Main};
    color: ${tokens.colors.White};
    ${tokens.typography.T5_SB_16};
  }
`;



export const FileContainer = styled.div`
  color: ${tokens.colors.B_Grey_8};
	${tokens.typography.B2_M_16}
  gap: 1rem;
`;


export const BtnContainer = styled.div`
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 1.2rem;
  background-color: rgba(246, 252, 255, 100);
`;

export const ExitButton = styled.button`
  background: none;
  border: none;
  ${tokens.typography.T5_SB_16}
  color: ${tokens.colors.B_Grey_7};
  cursor: pointer;
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

export const ArbitaryBtn = styled.button` /* 임시 저장하기 버튼*/
  width: 6.67rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const Btn = styled.button` /*저장하기 버튼*/
  width: 6.67rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.Blue_0_Main};
`;

export const DraftButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DraftButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 6.67rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const DraftSaveArea = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;

export const DraftCountArea = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;

export const DraftModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1000;
  border-radius: 8px;
`;

export const DraftText = styled.span`
  cursor: pointer;
  margin-right: 4px;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

export const DraftCount = styled.span`
  cursor: pointer;
  color: #555;
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const DraftItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 0;
  }
`;