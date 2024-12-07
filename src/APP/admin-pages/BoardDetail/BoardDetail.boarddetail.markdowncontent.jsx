import React, { useEffect } from 'react';
import { marked } from 'marked';
import * as itemS from './Styled/BoardDetail.boarddetail.markdowncontent.styles';
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
    { regex: /(\s|^)\s*_(.*?)_\s*(\s|$)/g, wrap: "_" }, // 이탈릭 (underscore 사용)
    { regex: /(\s|^)\s*\*\*(.*?)\*\*\s*(\s|$)/g, wrap: "**" }, // 볼드 (별표 사용)
    { regex: /(\s|^)\s*~~(.*?)~~\s*(\s|$)/g, wrap: "~~" }, // 취소선 (물결표 사용)
    { regex: /(\s|^)___(.*?)___(\s|$)/g, wrap: "___" }, // 굵은 기울임체 (underscore)
  ];

  let processedContent = content;

  patterns.forEach(({ regex, wrap }) => {
    processedContent = processedContent.replace(regex, (match, prefix, text, suffix) => {
      const trimmedText = text.trim(); // 텍스트 양쪽 공백 제거
      return `${prefix || ""}${wrap}${trimmedText}${wrap}${suffix || ""}`; // 공백 보존
    });
  });

  return processedContent;
};

export default function MarkdownContent({ markdownContent }) {
  console.log(markdownContent);
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
    const finalContent = `${cleanedContent}`;

    return { __html: finalContent };
  };

  return <itemS.MarkdownContentContainer dangerouslySetInnerHTML={renderPreview()} />;
}