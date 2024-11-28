import React from 'react';
import * as Styled from './Styled/WritePost.writepost.filetable.styles';

export default function FileTable({ uploadedFiles, deleteFile }) {
  return (
    <Styled.FileTableContainer>
      {/* 라벨 영역 */}
      <Styled.FileTableHeader>
        <Styled.TableColumn style={{ flex: '0 0 3rem', textAlign: 'center' }}>
        <Styled.HeaderIcon src='/img/deleteX2.svg' alt="삭제" style={{ width: '0.833rem', height: '0.833rem' }}/>
        </Styled.TableColumn>
        <Styled.TableColumn style={{ flex: '0 0 16rem', textAlign: 'left' }}>
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
              <Styled.TableCell style={{ flex: '0 16rem', textAlign: 'left' }}>
                {file.originalName}
              </Styled.TableCell>
              <Styled.TableCell style={{ textAlign: 'center' }}>
                {formatFileSize(file.size)}
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
