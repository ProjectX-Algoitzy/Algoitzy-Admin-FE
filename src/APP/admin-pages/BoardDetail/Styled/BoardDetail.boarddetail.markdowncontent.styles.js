import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const MarkdownContentContainer = styled.div`
  width: 100%;
  padding: 1.25rem;
  border: 0.0417rem solid #ffffff;
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
    font-size: 0.9rem;
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
    color: ${tokens.colors.Blue_0_Main};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  ul, ol {
    margin: 0;
    padding-left: 2rem;
  }
  li {
    line-height: 1; /* 리스트 항목의 라인 높이 조정 */
    margin: 0.3rem 0; /* 리스트 항목 간격 조정 */
    font-size: 0.9rem;
  }
  blockquote {
    padding-left: 1rem;
    border-left: 0.2rem solid ${tokens.colors.Blue_0_Main};
    background-color: ${tokens.colors.B_Grey_2}; /* 배경색 추가 */
    color: ${tokens.colors.B_Grey_6};
    margin: 1rem 0;
  }
  strong {
    font-weight: 900;
    -webkit-text-stroke: 0.02rem currentColor;
  }
  table {
    width: 100%;
    border-spacing: 0; /* 셀 간격 초기화 */
    border-collapse: separate; /* 테두리 분리 */
    border: 0.05rem solid ${tokens.colors.B_Grey_4}; /* 바깥 테두리 굵게 */
    font-size: 0.9rem;
  }
  th, td {
    padding: 0.2rem;
    border: 0.02rem solid ${tokens.colors.B_Grey_4}; /* 셀 사이 테두리 추가 */
  }
  th:first-child, td:first-child {
    border-left: 0.02rem solid ${tokens.colors.B_Grey_4}; /* 첫 번째 셀 왼쪽 테두리 유지 */
  }
  tr:first-child th {
    border-top: 0.02rem solid ${tokens.colors.B_Grey_4}; /* 첫 번째 행 위쪽 테두리 유지 */
  }
  summary {
    cursor: pointer;
    font-weight: bold;
  }
  details {
    font-size: 0.9rem; /* details 글자 크기 조정 */
  }
  details > *:not(summary) {
    margin-top: 0.5rem; /* 불필요한 공백 제거 */
  }
`;