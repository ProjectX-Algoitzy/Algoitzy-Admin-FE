import React, { useState, useEffect, useContext } from 'react';
import * as itemS from "./Styled/BoardDetail.boarddetail.content.styles";
import MarkdownContent from './BoardDetail.boarddetail.markdowncontent';
// import FileTable from "./BoardDetail.boarddetail.filetable"

// 확장자별 아이콘 매핑
const fileIcons = {
  hwp: '/img/file_hwp.png',
  zip: '/img/file_zip.png',
  pdf: '/img/file_pdf.png',
  doc: '/img/file_doc.png',
  xls: '/img/file_xls.png',
  ppt: '/img/file_ppt.png',
  txt: '/img/file_txt.png',
  img: '/img/file_img.png',
};
// 기본 아이콘
const defaultIcon = '/img/file_default.png';

// 확장자 추출 및 아이콘 선택 함수
const getFileIcon = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();

  // 이미지 확장자 처리
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
  if (imageExtensions.includes(extension)) {
    return fileIcons.img; // 이미지 아이콘 반환
  }

  const normalizedExtension = extension.endsWith('x') ? extension.slice(0, -1) : extension;
  
  return fileIcons[normalizedExtension] || defaultIcon; // 확장자 매칭되지 않으면 기본 아이콘 반환
};

export default function Content({ content, files }) {
  return (
    <itemS.Container>
      <itemS.ContentContainer>
        <MarkdownContent markdownContent={content || ''} /> {/* content 전달 */}
        {files && files.length > 0 && (
          <itemS.FileContainer>
            <itemS.FileText>첨부파일</itemS.FileText>
            <itemS.FileList>
            {files.map((file, index) => (
              <itemS.FileTupleContainer
                key={file.fileUrl || index}
                as="a" 
                href={file.fileUrl}
                download={file.originalName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <itemS.FileNameBox>
                  <itemS.FileIcon src={getFileIcon(file.originalName)} alt="파일 아이콘" />
                  <itemS.File>
                    {file.originalName}
                  </itemS.File>
                </itemS.FileNameBox>
                <itemS.FileSizeBox>
                  <itemS.FileSize>{file.fileSize}</itemS.FileSize>
                  <itemS.DownloadIcon src="/img/download.svg" alt="다운로드" />
                </itemS.FileSizeBox>
              </itemS.FileTupleContainer>
            ))}

            </itemS.FileList>
          </itemS.FileContainer>
        )}
      </itemS.ContentContainer>
    </itemS.Container>
  );
}