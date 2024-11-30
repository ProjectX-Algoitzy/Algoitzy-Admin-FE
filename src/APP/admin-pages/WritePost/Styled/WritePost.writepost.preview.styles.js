import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const PreviewContainer = styled.div`
  width: 50%;
  padding: 1.25rem;
  border: 0.0417rem solid #ffffff;
  background-color: #F5FBFF;
  font-family: 'Pretendard', sans-serif;
  font-size: 1rem;
  color: ${tokens.colors.B_Grey_8}; /* 텍스트 기본 색상 설정 */
  line-height: 1.6;
  overflow-y: auto;
  height: 100%;
  word-wrap: break-word; /* 줄바꿈 설정 */
  white-space: pre-wrap; /* 긴 문자열이 줄바꿈되도록 설정 */

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${tokens.colors.B_Grey_8}; /* 스크롤바 색상 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤 트랙 배경색 */
  }

  /* Firefox 스크롤바 스타일 */
  scrollbar-width: thin; /* 얇은 스크롤바 */
  scrollbar-color: ${tokens.colors.B_Grey_4} transparent;

  /* 컨텐츠 스타일 */
  h1 {
    font-size: 2rem;
    margin-top: 0;
  }
  h2 {
    font-size: 1.75rem;
    margin-top: 1rem;
  }
  p {
    margin: 1rem 0;
    font-size: 0.8rem;

  }
  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 90%;
  }
  pre code {
    display: block;
    padding: 1rem;
    background-color: #2d2d2d;
    color: #f8f8f2;
    overflow-x: auto;
    border-radius: 8px;
    font-size: 0.7rem;
  }
  a {
    color: #1e90ff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  blockquote {
    border-left: 0.2rem solid ${tokens.colors.B_Grey_2};
    padding-left: 1rem;
    color: #666;
    font-style: italic;
    margin: 1rem 0;
  }
`;