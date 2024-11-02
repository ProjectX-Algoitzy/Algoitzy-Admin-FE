import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/Community.community.main.styles";
import CommunityTable from './Community.community.table';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { dummyData } from './dummy';

export default function Community() {
	const { alert } = useContext(AlertContext);
	
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([{ code: '', name: '전체' }]); // Default '전체' tab

	// api 요청 파라미터
  const [searchKeyword, setSearchKeyword] = useState('');
	const [sortType, setSortType] = useState('LATEST');
	const [selectedTab, setSelectedTab] = useState('');
	
	const [content, setContent] = useState('커뮤니티 내의 모든 글을 볼 수 있습니다.');

	const [sortText, setSortText] = useState('최신순');
	const [isSortDropVisible, setIsSortDropVisible] = useState(false); // 정렬 드롭박스 열기/닫기
	
	// 페이지
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(5); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
	const itemsPerPage = 10; // 페이지당 항목 수
 
	const [isTabClick, setIsTabClick] = useState(false);

	const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);

	const fetchCategories = async () => {
    try {
      const response = await request.get('/board/category');
      if (response.isSuccess) {
        const apiCategories = response.result.categoryList;
        setCategories([{ code: '', name: '전체' }, ...apiCategories]); // Add '전체' as the first tab
      } else {
        console.error('카테고리 목록 조회 실패:', response);
      }
    } catch (error) {
      console.error('카테고리 목록 조회 오류', error);
    }
  };

	const fetchBoard = async () => {
		try {
			const response = await request.get(`/board?searchKeyword=${searchKeyword}&category=${selectedTab}&sort=${sortType}&page=${currentPage + 1}&size=${itemsPerPage}`);
			console.log("response", response);

			if (response.isSuccess) {
				console.log("게시글 목록 조회 성공");
				setPosts(response.result.boardList);
			} else {
				console.error("게시글 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('게시글 목록 조회 오류', error);
		}
	};

	useEffect(() => {
    fetchCategories();
  }, []);

	useEffect(() => {
		fetchBoard();
	},[ selectedTab, sortType, currentPage, searchKeyword]);

	const handleTabClick = (tab) => {
		setSelectedTab(tab.code);
		setIsTabClick(tab.code !== '');
		// 탭에 맞는 내용 설정
		if (tab.name === '전체') {
				setContent('커뮤니티 내의 모든 글을 볼 수 있습니다.');
		} else if (tab.name === '공지') {
				setContent('Koala의 중요한 소식과 공지들을 확인할 수 있습니다.');
		} else if (tab.name === '자유') {
				setContent('자유롭게 소통하는 공간입니다.');
		} else if (tab.name === '질문') {
				setContent('다양한 이벤트, 서비스, 동아리 등을 홍보하는 공간입니다.');
		} else if (tab.name === '정보') {
				setContent('기업 채용, 대회 일정 등 유용한 정보를 공유하는 공간입니다.');
		} else if (tab.name === '홍보') {
				setContent('궁금한 점을 나누며 성장하는 공간입니다.');
		}
	};

	const handleSearch = () => {
    fetchBoard();
		setCurrentPage(0);
		setCurrentPageGroup(0);
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

  const toggleSortDrop = () => {
    setIsSortDropVisible(prevState => !prevState);
  };

  const onSortType = (type) => {
    setIsSortDropVisible(false);
    setSortType(type);
		setSortText(type === 'LATEST' ? '최신순' : type === 'VIEW_COUNT' ? '조회수' : '좋아요');
  };


	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.TopContainer>
						<itemS.HeadContainer>
							<itemS.Head>커뮤니티 &gt; {selectedTab ? categories.find(tab => tab.code === selectedTab)?.name : '전체'}</itemS.Head>
							<itemS.SemiHead>{content}</itemS.SemiHead>
						</itemS.HeadContainer>
						<itemS.SearchContainer>
								<itemS.Search 
									type="text"
									value={searchKeyword}
									onChange={(e) => setSearchKeyword(e.target.value)}
									placeholder='제목, 내용, 작성자 검색'
								/>
								<itemS.SearchIcon onClick={() => handleSearch()} src='/img/search.svg' alt='돋보기' />
								{/* <itemS.SearchIcon onClick={() => fetchInstitutionList()} src='/img/search.svg' alt='돋보기' /> */}
							</itemS.SearchContainer>
					</itemS.TopContainer>
					<itemS.TabSortContainer>
						<itemS.TabContainer>
							{categories.map(tab => (
                tab.code === selectedTab ? (
                  <itemS.TabSelected key={tab.code} onClick={() => handleTabClick(tab)}>
                    {tab.name}
                  </itemS.TabSelected>
                ) : (
                  <itemS.Tab key={tab.code} onClick={() => handleTabClick(tab)}>
                    {tab.name}
                  </itemS.Tab>
                )
              ))}
						</itemS.TabContainer>
						{/* {isTabClick && ( */}
							<itemS.SortContainer>
								<itemS.CategoryDrop onClick={toggleSortDrop}>{sortText}</itemS.CategoryDrop>
								<itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
								{isSortDropVisible && (
									<itemS.SortDrop>
										<itemS.SortText onClick={() => onSortType('LATEST')}>최신순</itemS.SortText>
										<itemS.SortText onClick={() => onSortType('VIEW_COUNT')}>조회수</itemS.SortText>
										<itemS.SortText onClick={() => onSortType('LIKE')}>좋아요</itemS.SortText>
									</itemS.SortDrop>
								)}
							</itemS.SortContainer>
						{/* )} */}
					</itemS.TabSortContainer>
					<CommunityTable 
						items={posts} 
						isTabClick={isTabClick}
						searchKeyword={searchKeyword}
					/>
					<itemS.PaginationContainer>
						<itemS.BlankBtn></itemS.BlankBtn>

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

						<itemS.WriteBtn>+ 글쓰기</itemS.WriteBtn>
					</itemS.PaginationContainer>
				</itemS.InnerContainer>
			</itemS.Container>

		</itemS.OuterContainer>
	);
}
