import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import request from '../../Api/request';
import * as itemS from "./Styled/BoardDetail.boarddetail.main.styles";
import Content from './BoardDetail.boarddetail.content';
import Comment from './BoardDetail.boarddetail.comment';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function BoardDetail() {
	const { id } = useParams();  // 게시글 ID 가져오기
	const navigate = useNavigate();
	const { alert } = useContext(AlertContext);
	const { confirm } = useContext(ConfirmContext);

	const [board, setBoard] = useState({});
	const [comment, setComment] = useState([]);
	const [commentCount, setCommentCount] = useState(0);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(5); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
	const itemsPerPage = 10; // 페이지당 항목 수

	const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);

	const formatDate = (createdTime) => {  
    const date = new Date(createdTime);  
    const year = date.getFullYear();  
    const month = String(date.getMonth() + 1).padStart(2, '0');  
    const day = String(date.getDate()).padStart(2, '0');  
    const hours = String(date.getHours()).padStart(2, '0');  
    const minutes = String(date.getMinutes()).padStart(2, '0');  
    const seconds = String(date.getSeconds()).padStart(2, '0');  
    
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;  
};

	const fetchBoard = async () => { // 게시글 조회
    try {
      const response = await request.get(`/board/${id}`);

      if (response.isSuccess) {
        console.log("게시글 상세 조회 성공", response);
        setBoard(response.result);
      } else {
        console.error("게시글 상세 조회 실패:", response);
      }
    } catch (error) {
      console.error('게시글 상세 조회 오류', error);
    }
  };

	const fetchComment = async () => { // 댓글 조회
    try {
      const response = await request.get(`/board/${id}/reply?page=${currentPage + 1}&size=${itemsPerPage}`);

      if (response.isSuccess) {
        console.log("댓글 조회 성공", response.result);
        setComment(response.result.replyList);
				setCommentCount(response.result.replyList.length)
				setTotalPages(Math.ceil(response.result.parentReplyCount / itemsPerPage));
      } else {
        console.error("댓글 조회 실패:", response);
      }
    } catch (error) {
      console.error('댓글 조회 오류', error);
    }
  };
	
	useEffect(() => {
		fetchBoard();
	}, []);

	useEffect(() => {
		fetchComment();
	}, [currentPage]);

	// 게시글 고정
	const handleFix = async () => {

    try {
      const response = await request.patch(`/board/${id}/fix`);
      if (response.isSuccess) {
        console.log("게시글 고정 토글 성공:", response);
				fetchBoard();
      } else {
        console.error("게시글 고정 토글 실패:", response);
      }
    } catch (error) {
      console.error("게시글 고정 토글 에러:", error);
    }
  };

	// 게시글 삭제
	const handleDelete = async () => {
		const confirmed = await confirm("정말 삭제하시겠습니까?");
		if (confirmed) {
			try {
				const response = await request.delete(`/board/${id}`);
				if (response.isSuccess) {
					console.log("게시글 삭제 성공:", response);
					alert('게시글이 삭제되었습니다.')
					navigate('/community');
				} else {
					console.error("게시글 삭제 실패:", response);
				}
			} catch (error) {
				console.error("게시글 삭제 에러:", error);
				
			}
		}
  };

  const handleEdit = () => {
    navigate(`/writepost`, {
		state: {
			boardId: id,
		  },
    });
  };

	const handlePageChange = (newPage) => {
		if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      setCurrentPageGroup(Math.floor(newPage / 5)); // 페이지 그룹을 업데이트
		}
	};

	const handlePageGroupChange = (direction) => {
    if (direction === 'next' && (currentPageGroup + 1) * 5 < totalPages) {
      setCurrentPageGroup(currentPageGroup + 1);
      setCurrentPage((currentPageGroup + 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
    } else if (direction === 'prev' && currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      setCurrentPage((currentPageGroup - 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
    }
	};


	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.TopContainer>
						<itemS.HeadContainer>
							<itemS.Head>커뮤니티 &gt; {board.category}</itemS.Head>
						</itemS.HeadContainer>
					</itemS.TopContainer>
					<itemS.TitleContainer>
						<itemS.Title>{board.title}</itemS.Title>
						<itemS.ButtonBox>
							{board.category === '공지' && (
								<>
									<itemS.EditBtn onClick={handleFix}>{board.fixYn ? '고정 해제' : '고정'}</itemS.EditBtn>
									<itemS.EditBtn onClick={handleEdit}>수정</itemS.EditBtn>
								</>
							)}
							<itemS.DeleteBtn onClick={handleDelete}>삭제</itemS.DeleteBtn>
						</itemS.ButtonBox>
					</itemS.TitleContainer>
					<itemS.WriterInfoContainer>
						<itemS.Profile src={board.profileUrl} alt='프로필'/>
						<itemS.InfoBox>
							<itemS.WriterName>{board.createdName}</itemS.WriterName>
							<itemS.InfoBottomBox>
								<itemS.CreatedTime>{formatDate(board.createdTime)}</itemS.CreatedTime>
								<itemS.ViewCnt>조회수 {board.viewCount}</itemS.ViewCnt>
							</itemS.InfoBottomBox>
						</itemS.InfoBox>
					</itemS.WriterInfoContainer>
					<Content 
						content={board.content} 
						files={board.boardFileList}
					/>
					<itemS.CountContainer>
						<itemS.LC_Icon src='/img/like-md.svg' alt='하뚜' />
						<itemS.CountText>좋아요 {board.likeCount}</itemS.CountText>
						<itemS.LC_Icon src='/img/comment.svg' alt='댓글' />
						<itemS.CountText>댓글 {board.replyCount}</itemS.CountText>
					</itemS.CountContainer>

					<itemS.Body>댓글</itemS.Body>
					<itemS.ContentContainer>
						{/* <itemS.WriteContainer>
							<itemS.CommentProfile src='/img/people.png' alt='프로필' />
							<WriteBox />
						</itemS.WriteContainer> */}
						
						{comment.map(item => (
							<Comment
								key={item.replyId}
								item={item}
								formatDate={formatDate}
								fetchComment={fetchComment}
							/>
						))}
						
						{commentCount > 0 && (
							<itemS.PaginationContainer>
								<itemS.Pagination>
									<itemS.PaginationArrow
										left
										onClick={() => handlePageGroupChange('prev')}
										disabled={currentPageGroup === 0}
									/>
									{pageNumbers.map((pageNumber) => (
										<itemS.PaginationNumber
											key={pageNumber}
											onClick={() => handlePageChange(pageNumber)}
											active={pageNumber === currentPage}
										>
											{pageNumber + 1}
										</itemS.PaginationNumber>
									))}
									<itemS.PaginationArrow
										onClick={() => handlePageGroupChange('next')}
										disabled={(currentPageGroup + 1) * 5 >= totalPages}
									/>
								</itemS.Pagination>

							</itemS.PaginationContainer>
						)}
					</itemS.ContentContainer>

				</itemS.InnerContainer>
			</itemS.Container>

		</itemS.OuterContainer>
	);
}
