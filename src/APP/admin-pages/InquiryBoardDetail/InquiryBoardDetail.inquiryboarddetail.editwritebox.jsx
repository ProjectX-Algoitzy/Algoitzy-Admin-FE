import React, { useState, useContext, useRef } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/InquiryBoardDetail.inquiryboarddetail.editwritebox.styles";
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function InquiryEditWritebox({ replyId, fetchComment, handleLoad, editContent = '', handleCancel, isComment }) {
  const { alert } = useContext(AlertContext);
  const [comment, setComment] = useState(editContent);
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

  const handleEdit = async () => {
      if (!comment.trim()) {
          alert('댓글 내용을 입력해주세요.');
          return;
      }

      const requestBody = {
          content: comment,
      };

      try {
          const response = await request.patch(`/inquiry-reply/${replyId}`, requestBody);

          if (response.isSuccess) {
              console.log("댓글 수정 성공", response);
              fetchComment();
              if (handleLoad) handleLoad();
          } else {
              console.error("댓글 수정 실패:", response.message);
          }
      } catch (error) {
          console.error("댓글 수정 오류:", error);
      }
  };
  
  return (
    <itemS.Container>
      <itemS.WriteBox iscomment={isComment}>
        <itemS.InputContainer iscomment={isComment}>
          <itemS.TextArea
            iscomment={isComment}
            ref={textareaRef}
            placeholder="댓글을 남겨보세요."
            value={comment}
            onChange={handleChange}
          />
          <itemS.TextCount>{`${comment.length}/500`}</itemS.TextCount>
        </itemS.InputContainer>

        <itemS.ButtonBox iscomment={isComment}>
          <itemS.CancelBtn onClick={handleCancel}>취소</itemS.CancelBtn>
          <itemS.SubmitBtn onClick={handleEdit} isActive={comment.length > 0 && comment.length}>올리기</itemS.SubmitBtn>
        </itemS.ButtonBox>

      </itemS.WriteBox>
    </itemS.Container>
  )
}
