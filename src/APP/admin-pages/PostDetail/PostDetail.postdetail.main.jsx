import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/PostDetail.postdetail.main.styles";
import Content from './PostDetail.postdetail.content';
import Comment from './PostDetail.postdetail.comment';
import WriteBox from './WriteBox';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { dummyInfo, originData, dummyContent, dummyComment } from './dummy';

export default function PostDetail() {
	const myId = 1;
	
	const { alert } = useContext(AlertContext);

  const [postInfo, setPostInfo] = useState([]);
  const [content, setContent] = useState([]);
  const [commentItem, setCommentItem] = useState([]);

  const [type, setType] = useState(originData[0].type);
  const [title, setTitle] = useState(originData[0].title);

	// api 요청 파라미터
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(20);

	// 페이지
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(5); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
	const itemsPerPage = 10; // 페이지당 항목 수

	const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);
	
	useEffect(() => {
		setPostInfo(dummyInfo);
		setContent(dummyContent);
    setCommentItem(dummyComment);
	}, []);

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
							<itemS.Head>커뮤니티 &gt; {type}</itemS.Head>
							{/* <itemS.SemiHead>{title}</itemS.SemiHead> */}
						</itemS.HeadContainer>
					</itemS.TopContainer>
					<itemS.TitleContainer>
						<itemS.Title>{title}</itemS.Title>
						<itemS.ButtonBox>
							<itemS.EditBtn>고정</itemS.EditBtn>
							<itemS.EditBtn>수정</itemS.EditBtn>
							<itemS.DeleteBtn>삭제</itemS.DeleteBtn>
						</itemS.ButtonBox>
					</itemS.TitleContainer>
					<itemS.WriterInfoContainer>
						<itemS.Profile src={dummyInfo[0].profileUrl} alt='프로필'/>
						<itemS.InfoBox>
							<itemS.WriterName>{dummyInfo[0].name}</itemS.WriterName>
							<itemS.InfoBottomBox>
								<itemS.CreatedTime>{dummyInfo[0].createdTime}</itemS.CreatedTime>
								<itemS.ViewCnt>조회수 {dummyInfo[0].view}</itemS.ViewCnt>
							</itemS.InfoBottomBox>
						</itemS.InfoBox>
					</itemS.WriterInfoContainer>
					<Content 
						item={dummyContent} 
					/>
					<itemS.CountContainer>
						<itemS.LC_Icon src='img/like-md.svg' alt='하뚜' />
						<itemS.CountText>좋아요 {dummyInfo[0].like}</itemS.CountText>
						<itemS.LC_Icon src='img/comment.svg' alt='댓글' />
						<itemS.CountText>댓글 {dummyInfo[0].commentCnt}</itemS.CountText>
					</itemS.CountContainer>

					<itemS.Body>댓글</itemS.Body>
					<itemS.ContentContainer>
						<itemS.WriteContainer>
							<itemS.CommentProfile src='img/people.png' alt='프로필' />
							<WriteBox />
						</itemS.WriteContainer>
						
						{dummyComment.map(item => (
							<Comment
								key={item.commentId}
								item={item}
							/>
						))}
						
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
					</itemS.ContentContainer>

				</itemS.InnerContainer>
			</itemS.Container>

		</itemS.OuterContainer>
	);
}
