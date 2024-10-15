import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/PostDetail.postdetail.comment.styles";
import WriteBox from './WriteBox';

export default function Comment({ item }) {

	const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);

  const handleReplyClick = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

	return (
    <itemS.Container>
      <itemS.WriteContainer>
        <itemS.CommentContainer>
          <itemS.CommentProfile src='img/people.png' alt='프로필' />
          <itemS.CommentBox>
            <itemS.WriterBox>
              <itemS.WriterName>{item.name}</itemS.WriterName>
            </itemS.WriterBox>
            <itemS.Content>{item.content}</itemS.Content>
            <itemS.InfoBottomBox>
              <itemS.CreatedTime>{item.createdTime}</itemS.CreatedTime>
              <itemS.Reply onClick={handleReplyClick}>답글 달기</itemS.Reply>
              <itemS.CommentLike
                src={item.like ? 'img/like-s-fill.svg' : 'img/like-s.svg'}
                alt='하뚜'
              />
            </itemS.InfoBottomBox>
          </itemS.CommentBox>
        </itemS.CommentContainer>

        {isReplyBoxVisible && (
          <itemS.WriteBox>
            <itemS.Blank></itemS.Blank>
            <WriteBox />
          </itemS.WriteBox>
        )}
      </itemS.WriteContainer>
    </itemS.Container>
  );
}
