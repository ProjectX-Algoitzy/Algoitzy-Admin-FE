import React, { useState, useEffect, useContext } from 'react';
import * as itemS from "./Styled/BoardDetail.boarddetail.content.styles";

export default function Content({ content, files }) {
  return (
    <itemS.Container>
      <itemS.ContentContainer>
        <itemS.Content>{content}</itemS.Content>
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