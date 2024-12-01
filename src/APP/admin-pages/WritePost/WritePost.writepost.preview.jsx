import React from 'react';
import { marked } from 'marked';
import * as Styled from './Styled/WritePost.writepost.preview.styles';
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

marked.setOptions({
  gfm: true, // GitHub Flavored Markdown 지원
  breaks: true, // 줄바꿈 처리
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(code, { language: validLanguage }).value;
  },
});

const preprocessMarkdownContent = (content) => {
  // 공백이 포함된 텍스트에도 Markdown 문법 적용
  const patterns = [
    { regex: /(\s|^)_([^_]+?)_(\s|$)/g, wrap: "_" }, // 이탈릭 (underscore 사용)
    { regex: /(\s|^)\*\*([^*]+?)\*\*(\s|$)/g, wrap: "**" }, // 볼드 (별표 사용)
    { regex: /(\s|^)~~([^~]+?)~~(\s|$)/g, wrap: "~~" }, // 취소선 (물결표 사용)
  ];

  let processedContent = content;

  patterns.forEach(({ regex }) => {
    processedContent = processedContent.replace(regex, (_, prefix, text, suffix) => {
      return `${prefix}${text.trim()}${suffix}`; // 텍스트 주변의 공백 유지
    });
  });

  return processedContent;
};

export default function Preview({ title, markdownContent }) {
  const renderPreview = () => {
    const previewTitle = title || '';
    const processedContent = preprocessMarkdownContent(markdownContent);

    // `marked`로 HTML 변환
    const renderedContent = marked(`<h1>${previewTitle}</h1>\n\n${processedContent}`);

    return { __html: renderedContent };
  };

  return <Styled.PreviewContainer dangerouslySetInnerHTML={renderPreview()} />;
}