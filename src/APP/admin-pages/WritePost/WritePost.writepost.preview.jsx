import React from 'react';
import { marked } from 'marked';
import * as Styled from './Styled/WritePost.writepost.preview.styles';


marked.setOptions({
  gfm: true,
  breaks: true,
});
export default function Preview({ title, markdownContent }) {
  const renderPreview = () => {
    const previewTitle = title || '';
    return { __html: marked(`<h1>${previewTitle}</h1>\n\n${markdownContent}`) };
  };

  return <Styled.PreviewContainer dangerouslySetInnerHTML={renderPreview()} />;
}
