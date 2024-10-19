import React, { useState, useEffect, useContext } from 'react';
import * as itemS from "./Styled/BoardDetail.boarddetail.reply.styles";
import WriteBox from './WriteBox';

export default function Reply({ item, parentName, formatDate }) {

	const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);

  const handleReplyClick = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

  // useEffect(() => {
	// 	console.log('parentName',parentName);
	// }, []);

	return (
    <itemS.Container>
      <itemS.WriteContainer>
        <itemS.CommentContainer>
          <itemS.CommentProfile src={item.profileUrl} alt='프로필' />
          <itemS.CommentBox>
            <itemS.WriterBox>
              <itemS.WriterName>{item.createdName}</itemS.WriterName>
            </itemS.WriterBox>
            {/* <itemS.ContentBox> */}
              
            <itemS.Content><itemS.Mention>@{parentName} </itemS.Mention>{item.content}</itemS.Content>
            {/* </itemS.ContentBox> */}
            <itemS.InfoBottomBox>
              <itemS.CreatedTime>{formatDate(item.createdTime)}</itemS.CreatedTime>
              {/* <itemS.Reply onClick={handleReplyClick}>답글 달기</itemS.Reply> */}
              {/* <itemS.CommentLike
                src={item.myLikeYn ? '/img/like-s-fill.svg' : '/img/like-s.svg'}
                alt='하뚜'
              /> */}
            </itemS.InfoBottomBox>
          </itemS.CommentBox>
        </itemS.CommentContainer>

        {isReplyBoxVisible && (
          <itemS.WriteBox>
            <itemS.Blank></itemS.Blank>
            <WriteBox />
          </itemS.WriteBox>
        )}

        {item.childrenReplyList.length > 0 &&
          item.childrenReplyList.map((reply) => (
            <Reply
              key={reply.replyId}
              item={reply}
              parentName={item.createdName} // Pass the current reply's profile as parentProfile for child replies
              formatDate={formatDate}
            />
          ))}
      </itemS.WriteContainer>
    </itemS.Container>
  );
}
