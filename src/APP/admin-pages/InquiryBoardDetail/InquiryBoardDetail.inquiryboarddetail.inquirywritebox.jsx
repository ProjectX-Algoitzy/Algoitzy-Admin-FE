import React, { useState, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as itemS from "./Styled/InquiryBoardDetail.inquiryboarddetail.inquirywritebox.styles";
import request from '../../Api/request';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function InquiryWritebox({ parentId = null, fetchComment, handleLoad, isReply = false }) {
  const { id } = useParams();
  const { alert } = useContext(AlertContext);

  const [comment, setComment] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 500) {
      alert('댓글은 최대 500자까지 입력할 수 있습니다.');
      return;
    }
    setComment(value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = async () => {
    if (!comment.trim()) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    const requestBody = {
      inquiryId: id,
      content: comment,
    };

    if (parentId !== null) {
      requestBody.parentId = parentId;
    }

    try {
      const response = await request.post('/inquiry-reply', requestBody);

      if (response.isSuccess) {
        console.log('댓글 작성 성공', response);
        setComment('');
        fetchComment();
        if (handleLoad) handleLoad();
      } else {
        console.error('댓글 작성 실패:', response.message);
      }
    } catch (error) {
      console.error('댓글 작성 오류:', error);
    }
  };


  return (
    <itemS.Container>
      <itemS.WriteBox isreply={isReply}>
        <itemS.InputContainer isreply={isReply}>
          <itemS.TextArea
            isreply={isReply}
            ref={textareaRef}
            placeholder="댓글을 남겨보세요."
            value={comment}
            onChange={handleChange}
          />
          <itemS.TextCount>{`${comment.length}/500`}</itemS.TextCount>
        </itemS.InputContainer>
        <itemS.ButtonBox isreply={isReply}>
          <itemS.SubmitBtn onClick={handleSubmit} isActive={comment.length > 0}>
            올리기
          </itemS.SubmitBtn>
        </itemS.ButtonBox>
      </itemS.WriteBox>
    </itemS.Container>
  )
}
