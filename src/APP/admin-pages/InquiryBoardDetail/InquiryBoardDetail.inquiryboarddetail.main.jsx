import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import request from "../../Api/request";
import * as itemS from "./Styled/InquiryBoardDetail.inquiryboarddetail.main.styles";
import InquiryWriteBox from './InquiryBoardDetail.inquiryboarddetail.inquirywritebox';
import InquiryContent from "./InquiryBoardDetail.inquiryboarddetail.content";
import InquiryComment from "./InquiryBoardDetail.inquiryboarddetail.comment";

export default function InquiryBoardDetail() {
  const navigate = useNavigate();
  const [categoryOptions, setCategoryOptions] = useState([]); // 동적 카테고리 옵
  const { id } = useParams();  // 게시글 ID 가져오기

  const [inquiry, setInquiry] = useState({});
  const [comment, setComment] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  // 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
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

  const fetchInquiry = async () => { // 문의하기 조회
      try {
          const response = await request.get(`/inquiry/${id}`);

          if (response.isSuccess) {
              console.log("문의하기 상세 조회 성공", response);
              setInquiry(response.result);
          } else {
              console.error("문의하기 상세 조회 실패:", response);
          }
      } catch (error) {
          console.error('문의하기 상세 조회 오류', error);
      }
  };

  const fetchComment = async () => { // 댓글 조회
      try {
          const response = await request.get(`/inquiry/${id}/reply?page=${currentPage + 1}&size=${itemsPerPage}`);

          if (response.isSuccess) {
              console.log("댓글 조회 성공", response.result.replyList);
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
      fetchInquiry();
  }, []);

  useEffect(() => {
      fetchComment();
  }, [currentPage]);

  useEffect(() => {
      // 카테고리 옵션을 API에서 가져오기
      const fetchCategoryOptions = async () => {
          try {
              const response = await request.get('/inquiry/category');
              if (response.isSuccess) {
                  console.log("문의하기의 카테고리 종류", response);
                  const options = response.result.categoryList.map((category) => ({
                      value: category.code,
                      label: category.name,
                  }));

                  const filteredOptions = options.filter(
                      (option) => option.label !== '공지'
                  );

                  setCategoryOptions(filteredOptions);
              } else {
                  console.error('카테고리 목록 조회 실패:', response.message);
              }
          } catch (error) {
              console.error('카테고리 목록 조회 중 오류:', error);
          }
      };

      fetchCategoryOptions();
  }, []);

  // 카테고리 변환 함수
  const categoryConverter = (categoryOptions) => {
      const nameToCode = (name) => {
          const found = categoryOptions.find((option) => option.label === name);
          return found ? found.value : null; // name에 해당하는 code 반환
      };

      const codeToName = (code) => {
          const found = categoryOptions.find((option) => option.value === code);
          return found ? found.label : null; // code에 해당하는 name 반환
      };

      return { nameToCode, codeToName };
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

  // 계정 링크 이동
  const handlePage = (handle) => {
      navigate(`/mypage/${handle}`);
  };

  return (
    <itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.TopContainer>
						<itemS.HeadContainer>
							<itemS.Head>문의하기&gt; {inquiry.categoryName}</itemS.Head>
						</itemS.HeadContainer>
					</itemS.TopContainer>
					<itemS.TitleContainer>
						<itemS.Title>{inquiry.title}</itemS.Title>
					</itemS.TitleContainer>
					<itemS.WriterInfoContainer>
                        <itemS.ProfileInfoContainer>
                            <itemS.Profile onClick={() => handlePage(inquiry.handle)} src={inquiry.profileUrl} alt='프로필'/>
                            <itemS.InfoBox>
                                <itemS.WriterName onClick={() => handlePage(inquiry.handle)}>{inquiry.createdName}</itemS.WriterName>
                                <itemS.InfoBottomBox>
                                    <itemS.CreatedTime>{formatDate(inquiry.createdTime)}</itemS.CreatedTime>
                                    {/* <itemS.ViewCnt>조회수 {inquiry.viewCount}</itemS.ViewCnt> */}
                                </itemS.InfoBottomBox>
                            </itemS.InfoBox>
                        </itemS.ProfileInfoContainer>
                        <itemS.ProcessingYNBox solvedYn={inquiry.solvedYn}>
                            {inquiry.solvedYn ? '답변 완료' : '답변 대기'}
                        </itemS.ProcessingYNBox>
					</itemS.WriterInfoContainer>
					<InquiryContent content={inquiry.content} />
					<itemS.Body>답변</itemS.Body>
					<itemS.ContentContainer>
                        <itemS.WriteContainer>
                            <itemS.CommentProfile src={inquiry.profileUrl} alt='프로필' />
                            <InquiryWriteBox fetchComment={fetchComment} />
                        </itemS.WriteContainer>
						
						{comment.map(item => (
							<InquiryComment
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
  )
}
