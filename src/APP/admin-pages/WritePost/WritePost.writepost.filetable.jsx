import React from 'react';
import * as Styled from './Styled/WritePost.writepost.filetable.styles';
import request from '../../Api/request';

export default function FileTable({ boardFileList, setBoardFileList }) {

  const defaultIcon = '/img/file_default.png';

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

  const getFileIcon = (fileName) => {
    if (!fileName) return defaultIcon; // 파일명이 없는 경우 기본 아이콘 반환

    const extension = fileName.split('.').pop().toLowerCase();

    const docExtensions = ['doc', 'docx'];
    if (docExtensions.includes(extension)) return fileIcons.doc;

    const xlsExtensions = ['xls', 'xlsx'];
    if (xlsExtensions.includes(extension)) return fileIcons.xls;

    const pptExtensions = ['ppt', 'pptx'];
    if (pptExtensions.includes(extension)) return fileIcons.ppt;

    const hwpExtensions = ['hwp', 'hwpx'];
    if (hwpExtensions.includes(extension)) return fileIcons.hwp;

    const imgExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
    if (imgExtensions.includes(extension)) return fileIcons.img;

    return fileIcons[extension] || defaultIcon;
  };


  const deleteFile = async (file) => {
    try {
      if (file.onlyS3 === true) {
        const response = await request.delete('/s3', { params: { fileUrl: file.fileUrl } });
  
        if (response.isSuccess) {
          setBoardFileList((prevFiles) =>
            prevFiles.filter((f) => f.fileUrl !== file.fileUrl)
          );
        } else {
          throw new Error('파일 삭제 실패');
        }
      } else {
        setBoardFileList((prevFiles) =>
          prevFiles.map((f) =>
            f.fileUrl === file.fileUrl ? { ...f, deleted: true } : f
          )
        );
      }
    } catch (error) {
      console.error('파일 삭제 실패:', error);
      alert('파일 삭제 중 오류가 발생했습니다.');
    }
  };
  

  return (
    <Styled.FileTableContainer>
      
      <Styled.FileTableHeader>
        <Styled.TableColumn style={{ flex: '0 0 3rem', textAlign: 'center' }}></Styled.TableColumn>
        <Styled.TableColumn style={{ flex: '0 0 17rem', textAlign: 'left' }}>
          파일명
        </Styled.TableColumn>
        <Styled.TableColumn style={{ textAlign: 'center' }}>
          용량
        </Styled.TableColumn>
      </Styled.FileTableHeader>

      <Styled.FileTableBody>
        {boardFileList.filter(file => !file.deleted).length > 0 ? (
          boardFileList
            .filter(file => !file.deleted)
            .map((file, index) => (
              <Styled.FileRow key={index}>
                <Styled.TableCell style={{ flex: '0 0 3rem', textAlign: 'center' }}>
                  <Styled.DeleteButton onClick={() => deleteFile(file)}>
                    <img src='/img/deleteX2.svg' alt="삭제" style={{ width: '0.833rem', height: '0.833rem' }} />
                  </Styled.DeleteButton>
                </Styled.TableCell>
                <Styled.TableCell style={{ flex: '0 17rem', textAlign: 'left' }}>
                  <Styled.FileIcon src={getFileIcon(file.originalName)} alt="파일 아이콘" />
                  <Styled.FileName>{file.originalName}</Styled.FileName>
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