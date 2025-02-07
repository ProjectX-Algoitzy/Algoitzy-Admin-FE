import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/InquiryBoardDetail.inquiryboarddetail.reply.styles";
import InquiryWriteBox from './InquiryBoardDetail.inquiryboarddetail.inquirywritebox';
import InquiryEditWritebox from './InquiryBoardDetail.inquiryboarddetail.editwritebox';
import request from '../../Api/request';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function InquiryReply({ item, parentName, formatDate, fetchComment }) {
  const { confirm } = useContext(ConfirmContext);
  const modalRef = useRef(null); 
  const navigate = useNavigate();

	const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);
  const [isUtilBoxVisible, setIsUtilBoxVisible] = useState(false);
	const [likeStatus, setLikeStatus] = useState(item.myLikeYn);
  const [isEditing, setIsEditing] = useState(false); 
  const [editContent, setEditContent] = useState('');


  const handleReplyClick = () => {
    setIsReplyBoxVisible(!isReplyBoxVisible);
  };

  const handleDotClick = () => {
    setIsUtilBoxVisible(!isUtilBoxVisible); // DotBox 클릭 시 토글
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsUtilBoxVisible(false); // 외부 클릭 시 UtilBox 닫기
    }
  };

  const handleEditClick = () => {
    setEditContent(item.content); 
    setIsEditing(true); 
  };

  const handleEditComplete = () => {
    setIsEditing(false); 
    fetchComment(); 
  };

  // 댓글 삭제
  const handleDelete = async () => {
    const confirmed = await confirm("정말 삭제하시겠습니까?");
    
    if (confirmed) { 
      try {
        const response = await request.delete(`/inquiry-reply/${item.replyId}`); 
  
        if (response.isSuccess) {
          console.log("댓글 삭제 성공", response);
          fetchComment();
        } else {
          console.error("댓글 삭제 실패:", response.message);
        }
      } catch (error) {
        console.error("댓글 삭제 오류:", error);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleCancel = () => {
    setIsEditing(false); // 수정 모드 종료
  };

  // 계정 링크 이동
	const handlePage = (handle) => {
    navigate(`/mypage/${handle}`);
  };

  return (
    <itemS.Container>
      <itemS.WriteContainer>
        <itemS.CommentContainer>
          <itemS.CommentProfile onClick={() => handlePage(item.handle)} src={item.profileUrl} alt='프로필' />
          {isEditing ? (
            <InquiryEditWritebox
              replyId={item.replyId} // 수정 대상 댓글 ID 전달
              fetchComment={fetchComment}
              handleLoad={handleEditComplete}
              editContent={editContent} // 수정할 초기 내용 전달
              handleCancel={handleCancel}
              isComment={false}
            />
          ) : (
            <itemS.CommentBox>
              <itemS.WriterBox>
                <itemS.WriterNameBox>
                  <itemS.WriterName onClick={() => handlePage(item.handle)}>{item.createdName}</itemS.WriterName>
                  {item.myBoardYn && <itemS.WriterIcon>작성자</itemS.WriterIcon>}
                </itemS.WriterNameBox>
                {item.myReplyYn && !item.deleteByAdminYn && ( // item.myBoardYn이 true일 때만 DotBox 렌더링
                  <itemS.DotBox ref={modalRef} onClick={handleDotClick}>
                    <itemS.DotButton src='/img/hamberg.svg' alt='...' />
                    {isUtilBoxVisible && ( // isUtilBoxVisible 상태에 따라 표시
                      <itemS.UtilButtonBox>
                        <itemS.UtilBox onClick={handleEditClick}>
                          <itemS.UtilIcon src='/img/edit.svg' alt='수정' />
                          <itemS.UtilText>수정하기</itemS.UtilText>
                        </itemS.UtilBox>
                        <itemS.Hr></itemS.Hr>
                        <itemS.UtilBox onClick={handleDelete}>
                          <itemS.UtilIcon src='/img/trash.svg' alt='쓰레기통' />
                          <itemS.UtilText>삭제하기</itemS.UtilText>
                        </itemS.UtilBox>
                      </itemS.UtilButtonBox>
                    )}
                  </itemS.DotBox>
                )}
              </itemS.WriterBox>
              {item.deleteYn ? (
                <itemS.ContentBox>
                  <itemS.DeletedIcon src='/img/deleted_icon_black.svg' alt='삭제된 글' />
                  <itemS.Content data-delete-yn={item.deleteYn ? true : undefined}>{item.deleteByAdminYn ? '관리자에 의해 삭제된 댓글입니다.' : '작성자에 의해 삭제된 댓글입니다.'}</itemS.Content>
                </itemS.ContentBox>
              ) : (
                <itemS.ContentBox>
                  <itemS.Content data-delete-yn={item.deleteYn ? true : undefined}><itemS.Mention>@{parentName} </itemS.Mention>{item.content}</itemS.Content>
                </itemS.ContentBox>
              )}
              <itemS.InfoBottomBox>
                <itemS.CreatedTime>{formatDate(item.createdTime)}</itemS.CreatedTime>
                <itemS.Reply onClick={handleReplyClick}>답글 달기</itemS.Reply>
                <itemS.LikeCount>{item.likeCount}</itemS.LikeCount>
              </itemS.InfoBottomBox>
            </itemS.CommentBox>
          )}
        </itemS.CommentContainer>

        {isReplyBoxVisible && (
          <itemS.WriteBox>
            <itemS.Blank></itemS.Blank>
            <itemS.ReplyProfile src={item.profileUrl} alt='프로필' />
            <InquiryWriteBox
              parentId={item.replyId}
              fetchComment={fetchComment} 
              handleLoad={handleReplyClick}
              isReply={true}
            />
          </itemS.WriteBox>
        )}

        {item.childrenReplyList.length > 0 &&
          item.childrenReplyList.map((reply) => (
            <InquiryReply
              key={reply.replyId}
              item={reply}
              parentName={item.createdName} 
              formatDate={formatDate}
              fetchComment={fetchComment}
            />
          ))}
      </itemS.WriteContainer>
    </itemS.Container>
  )
}
