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
  padding: 0 2.833rem;
  flex: 1;
  border: 0;
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
  padding : 2.833rem 0 1.042rem 0;
  display: flex;
  flex-direction: column;
`

export const PageLabel = styled.div`
  color: ${tokens.colors.B_Grey_6};
	${tokens.typography.T8_B_35}
  font-family: 'Pretendard', sans-serif;
  outline: none;
  resize: none;
  overflow: hidden;
`;

export const Divider = styled.div`
  width: 4.375rem;
  height: 0.125rem;
  background-color: ${tokens.colors.B_Grey_4};
  margin: 0.5rem 0;
`;

export const OptionLabel = styled.label`
  ${tokens.typography.T4_SB_20}
  color: ${tokens.colors.Grey_6};
  margin-top: 1.56rem;
  margin-bottom: 0.42rem;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 2.27rem;
  padding: 0 0.42rem;
  margin-bottom: 0.17rem;

  color: ${tokens.colors.Grey_8}; 
  ${tokens.typography.B2_M_16}

  border: 0.042rem solid ${tokens.colors.Grey_4};
  border-radius: 0.17rem;

  &::placeholder {
    color: ${tokens.colors.Grey_4}; 
  }

  &:not(:placeholder-shown) { 
    border: 0.042rem solid ${tokens.colors.Grey_6};
  }
`;

export const CategorySelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`

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
  left: -0.1rem;
  width: 102%;
  border-radius: 0.17rem;
  border: none;
  box-shadow: 0 0.08rem 0.17rem rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
  overflow: hidden; /* Hide scrollbar */
  z-index: 20;
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