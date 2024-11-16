import React, { useState, useEffect, useContext } from 'react';
import * as itemS from "./Styled/BoardDetail.boarddetail.comment.styles";
import WriteBox from './WriteBox';
import Reply from './BoardDetail.boarddetail.reply';

export default function Comment({ item, formatDate }) {
	const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);
  const [isUtilBoxVisible, setIsUtilBoxVisible] = useState(false);

  const handleReplyClick = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

  const handleDotClick = () => {
    setIsUtilBoxVisible(!isUtilBoxVisible); // DotBox 클릭 시 토글
  };
  // useEffect(() => {
	// 	console.log('item',item);
	// }, []);

	return (
    <itemS.Container>
      <itemS.WriteContainer>
        <itemS.CommentContainer>
          <itemS.CommentProfile src={item.profileUrl} alt='프로필' />
          <itemS.CommentBox>
            <itemS.WriterBox>
              <itemS.WriterName>{item.createdName}</itemS.WriterName>
              <itemS.DotBox onClick={handleDotClick}>
                <itemS.DotButton src='/img/hamberg.svg' alt='...' />
                {isUtilBoxVisible && ( // isUtilBoxVisible 상태에 따라 표시
                  <itemS.UtilButtonBox>
                    <itemS.UtilIcon src='/img/trash.svg' alt='쓰레기통' />
                    <itemS.UtilText>삭제하기</itemS.UtilText>
                  </itemS.UtilButtonBox>
                )}
              </itemS.DotBox>
            </itemS.WriterBox>
            <itemS.Content>{item.content}</itemS.Content>
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

        {item.childrenReplyList.map(reply => (
							<Reply
								key={reply.replyId}
								item={reply}
                parentName={item.createdName}
								formatDate={formatDate}
							/>
						))}
      </itemS.WriteContainer>
    </itemS.Container>
  );
}
