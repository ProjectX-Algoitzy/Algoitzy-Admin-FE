import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from './WritePost.writepost.editor';
import Preview from './WritePost.writepost.preview';
import * as Styled from './Styled/WritePost.writepost.main.styles';
import request from '../../Api/request';

export default function WritePost() {
  const location = useLocation();
  const { boardId } = location.state || {}; // 수정 시 전달받은 게시글 ID
  const [markdownContent, setMarkdownContent] = useState('');
  const [title, setTitle] = useState('');
  const [categoryCode, setCategoryCode] = useState(null);

  useEffect(() => {
    // 게시글 ID가 있을 경우 수정 데이터를 불러옵니다.
    if (boardId) {
      const fetchBoardData = async () => {
        try {
          const response = await request.get(`/board/${boardId}`);
          if (response.isSuccess) {
            const { title, content, category } = response.result;
            setTitle(title);
            setMarkdownContent(content);
            setCategoryCode(category); // 카테고리 설정
          } else {
            console.error('게시글 조회 실패:', response.message);
          }
        } catch (error) {
          console.error('게시글 조회 중 오류:', error);
        }
      };

      fetchBoardData();
    }
  }, [boardId]);

  useEffect(() => {
    // 마운트 시 스크롤 비활성화
    document.body.style.overflow = 'hidden';
    
    // 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <Styled.Container>
      <Styled.MarkdownEditorContainer>
        <Editor
          title={title}
          setTitle={setTitle}
          setMarkdownContent={setMarkdownContent}
          boardId={boardId} // 수정 시 boardId 전달
          initialCategoryCode={categoryCode} // 수정 시 카테고리 코드 전달
          initialContent={markdownContent} // Codemirror 초기 값 전달
/>

        <Preview title={title} markdownContent={markdownContent} />

      </Styled.MarkdownEditorContainer>
    </Styled.Container>
  );
}
