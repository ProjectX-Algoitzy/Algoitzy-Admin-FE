import React, { useEffect } from 'react';
import { marked } from 'marked';
import * as Styled from './Styled/WritePost.writepost.preview.styles';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

marked.setOptions({
  gfm: true,
  breaks: true,
});

const removeExtraLineBreaks = (htmlContent) => {
  // 불필요한 줄바꿈 제거: 블록 요소 앞뒤의 줄바꿈 (\n)
  return htmlContent
    .replace(/>\s*\n\s*</g, '><') // 태그 사이의 줄바꿈 제거
    .replace(/\n{2,}/g, '\n') // 두 개 이상의 연속된 줄바꿈 제거
    .replace(/<details>\s*<summary>(.*?)<\/summary>\s*/g, '<details><summary>$1</summary>') 
    .replace(/\s*<\/details>/g, '</details>');
};

const preprocessMarkdownContent = (content) => {
  // 공백이 포함된 텍스트에도 Markdown 문법 적용
  const patterns = [
    { regex: /(^|\s)_\s*([\S](?:.*?[\S])?)\s*_(?=\s|$)/g, wrap: "_" }, // 이탤릭
    { regex: /(^|\s)\*\*\s*([\S](?:.*?[\S])?)\s*\*\*(?=\s|$)/g, wrap: "**" }, // 볼드
    { regex: /(^|\s)~~\s*([\S](?:.*?[\S])?)\s*~~(?=\s|$)/g, wrap: "~~" }, // 취소선
    { regex: /(^|\s)___\s*([\S](?:.*?[\S])?)\s*___(?=\s|$)/g, wrap: "___" }, // 굵은 기울임체
  ];

  let processedContent = content;

  patterns.forEach(({ regex, wrap }) => {
    processedContent = processedContent.replace(regex, (match, prefix, text, suffix) => {
      const trimmedText = text.trim(); // 텍스트 양쪽 공백 제거
      return `${prefix || ""}${wrap}${trimmedText}${wrap}`;
    });
  });

  return processedContent;
};

export default function Preview({ title, markdownContent }) {
  useEffect(() => {
    // 코드블록에 하이라이트 적용
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block); 
    });
  }, [markdownContent]); // markdownContent가 변경될 때마다 하이라이트 적용
  
  const renderPreview = () => {
    const processedContent = preprocessMarkdownContent(markdownContent);

    // `marked`로 HTML 변환
    const renderedContent = marked(processedContent);
    const cleanedContent = removeExtraLineBreaks(renderedContent); // 줄바꿈 제거

    // 제목 추가
    const finalContent = `
      <h1>${title || ''}</h1>
      ${cleanedContent}
    `;
    return { __html: finalContent };
  };

  return <Styled.PreviewContainer dangerouslySetInnerHTML={renderPreview()} />;
}
