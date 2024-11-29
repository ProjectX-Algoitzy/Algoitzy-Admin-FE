import React from 'react';
import { marked } from 'marked';
import * as Styled from './Styled/WritePost.writepost.preview.styles';
import hljs from "highlight.js";
import "highlight.js/styles/default.css";


marked.setOptions({
  gfm: true,
  breaks: true,
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(code, { language: validLanguage }).value;
  },
});

export default function Preview({ title, markdownContent }) {
  const renderPreview = () => {
    const previewTitle = title || '';
    return { __html: marked(`<h1>${previewTitle}</h1>\n\n${markdownContent}`) };
  };

  return <Styled.PreviewContainer dangerouslySetInnerHTML={renderPreview()} />;
}
