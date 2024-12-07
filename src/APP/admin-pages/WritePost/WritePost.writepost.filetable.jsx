import React from 'react';
import * as Styled from './Styled/WritePost.writepost.filetable.styles';

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

  // doc 확장자 처리
  const docExtensions = ['doc', 'docx'];
  if (docExtensions.includes(extension)) {
    return fileIcons.doc;
  }

  // xls 확장자 처리
  const xlsExtensions = ['xls', 'xlsx'];
  if (xlsExtensions.includes(extension)) {
    return fileIcons.xls;
  }

  // ppt 확장자 처리
  const pptExtensions = ['ppt', 'pptx'];
  if (pptExtensions.includes(extension)) {
    return fileIcons.ppt;
  }

  // hwp 확장자 처리
  const hwpExtensions = ['hwp', 'hwpx'];
  if (hwpExtensions.includes(extension)) {
    return fileIcons.hwp;
  }

  // img 확장자 처리
  const imgExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
  if (imgExtensions.includes(extension)) {
    return fileIcons.img;
  }

  return fileIcons[extension] || defaultIcon;
};


export default function FileTable({ uploadedFiles, deleteFile }) {
  return (
    <Styled.FileTableContainer>
      {/* 라벨 영역 */}
      <Styled.FileTableHeader>
        <Styled.TableColumn style={{ flex: '0 0 3rem', textAlign: 'center' }}>
        </Styled.TableColumn>
        <Styled.TableColumn style={{ flex: '0 0 18rem', textAlign: 'left' }}>
          파일명
        </Styled.TableColumn>
        <Styled.TableColumn style={{ textAlign: 'center' }}>
          용량
        </Styled.TableColumn>
      </Styled.FileTableHeader>

      {/* 파일 리스트 */}
      <Styled.FileTableBody>
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <Styled.FileRow key={index}>
              <Styled.TableCell style={{ flex: '0 0 3rem', textAlign: 'center' }}>
                <Styled.DeleteButton onClick={() => deleteFile(file)}>
                  <img src='/img/deleteX2.svg' alt="삭제" style={{ width: '0.833rem', height: '0.833rem' }}
                  />
                </Styled.DeleteButton>
              </Styled.TableCell>
              <Styled.TableCell style={{ flex: '0 18rem', textAlign: 'left' }}>
                <Styled.FileIcon src={getFileIcon(file.originalName)} alt="파일 아이콘" />
                <Styled.FileName>{file.originalName}</Styled.FileName> {/* 파일명에 스타일 적용 */}
              </Styled.TableCell>
              <Styled.TableCell style={{ textAlign: 'center' }}>
                {file.size || file.fileSize}
              </Styled.TableCell>
            </Styled.FileRow>
          ))
        ) : (
          <Styled.EmptyMessage>첨부파일이 없습니다.</Styled.EmptyMessage>
        )}
      </Styled.FileTableBody>
    </Styled.FileTableContainer>
  );
}

function formatFileSize(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
