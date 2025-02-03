import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Editor from './WriteInstitution.writeinstitution.editor';
import Preview from './WriteInstitution.writeinstitution.preview';
import * as Styled from './Styled/WriteInstitution.writeinstitution.main.styles';
import request from '../../Api/request';

export default function WritePost() {
  const location = useLocation();
  const [boardId, setBoardId] = useState(location.state?.boardId || null);

  const [title, setTitle] = useState('');

  const [categoryCode, setCategoryCode] = useState(null);
  const [category, setCategory] = useState(null);

  const [boardFileList, setBoardFileList] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const [markdownContent, setMarkdownContent] = useState('');

  const [saveYn, setSaveYn] = useState(location.state?.saveYn);
  const [isLoading, setIsLoading] = useState(true);
  
  // 게시글 상세 조회
  const fetchBoardData = async () => {
  try {
    let response;
    if (boardId !== null) {
      if (saveYn == false){ // 임시저장
        response = await request.get(`/board/draft/${boardId}`);
      }
      else { // 수정
        response = await request.get(`/institution/${boardId}`);
      }

    if (response.isSuccess) {
      const { name, type, content } = response.result;
      setTitle(name);
      setMarkdownContent(content);
      setCategory(type);
      // setCategory(category);
      if (type === '기업') {
        setCategoryCode('COMPANY');
      } else if (type === '부트캠프') {
        setCategoryCode('CAMP');
      } else {
        setCategoryCode(null);
      }
      setIsLoading(false);

      // console.log(type,category,categoryCode);

      // setBoardFileList(boardFileList);
      // setSaveYn(saveYn);
    } else {
      console.error('게시글 상세 조회 실패:', response.message);
    }
  }
  } catch (error) {
    console.error('게시글 상세 조회 중 오류:', error);
  }
  };


  useEffect(() => {
    fetchBoardData();
  }, [boardId]);


  useEffect(() => {
    // 스크롤 비활성화
    document.body.style.overflow = 'hidden';
  }, []);

  const deleteImageFromS3 = async (fileUrl) => {
    try {
      const response = await request.delete('/s3', { params: { fileUrl } });
      if (!response.isSuccess) {
        console.error('이미지 삭제 실패:', response.message);
      }
    } catch (error) {
      console.error('이미지 삭제 중 오류:', error);
    }
  };


  const deleteAllUploadedImages = async () => {
    const promises = uploadedImageUrls.map((url) => deleteImageFromS3(url));
    await Promise.all(promises);
  };
  

  useEffect(() => {
    // 페이지를 떠날 때 처리
    const handleBeforeUnload = (event) => {
      if (uploadedImageUrls.length > 0) {
        deleteAllUploadedImages();
        event.preventDefault();
        event.returnValue = ''; // 브라우저 기본 메시지 표시
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup: 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [uploadedImageUrls]);

  useEffect(() => {
    // 컴포넌트 언마운트 시 이미지 삭제
    return () => {
      deleteAllUploadedImages();
    };
  }, []);
  
  return (
    <Styled.Container>

      <Editor
        boardId={boardId}
        setBoardId={setBoardId}

        fetchBoardData={fetchBoardData}

        title={title}
        setTitle={setTitle}

        categoryCode={categoryCode}
        setCategoryCode={setCategoryCode}

        category={category}
        setCategory={setCategory}

        boardFileList={boardFileList}
        setBoardFileList={setBoardFileList}

        uploadedImageUrls={uploadedImageUrls}
        setUploadedImageUrls={setUploadedImageUrls}

        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}

        saveYn={saveYn}
        setSaveYn={setSaveYn}
      />

      <Preview title={title} markdownContent={markdownContent} />

    </Styled.Container>
  );
}
