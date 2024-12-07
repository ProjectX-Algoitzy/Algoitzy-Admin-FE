import React, { useState, useEffect, useContext } from 'react';
import * as itemS from "./Styled/BoardDetail.boarddetail.content.styles";
import MarkdownContent from './BoardDetail.boarddetail.markdowncontent';

export default function Content({ content, files }) {
  return (
    <itemS.Container>
      <itemS.ContentContainer>
        <MarkdownContent markdownContent={content || ''} /> {/* content 전달 */}
        {files && files.length > 0 && (
          <itemS.FileContainer>
            <itemS.FileText>첨부파일 : </itemS.FileText>
            <itemS.FileList>
              {files.map((file, index) => (
                <itemS.File key={index}>
                  <a
                    href={file.fileUrl}
                    download={file.originalName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.originalName}
                  </a>
                </itemS.File>
              ))}
            </itemS.FileList>
          </itemS.FileContainer>
        )}
      </itemS.ContentContainer>
    </itemS.Container>
  );
}