import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../Api/request';
import * as itemS from "./Styled/Community.community.main.styles";
import CommunityTable from './Community.community.table';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { dummyData } from './dummy';

export default function Community() {
	const { alert } = useContext(AlertContext);
	const navigate = useNavigate();

	const [posts, setPosts] = useState([]);
	const tabs = ['전체', '공지', '자유', '질문', '정보', '홍보'];
	// api 요청 파라미터
  const [searchKeyword, setSearchKeyword] = useState('');
	const [sortType, setSortType] = useState('');
	// const [page, setPage] = useState(1);
	// const [size, setSize] = useState(20);
	const [filteredPosts, setFilteredPosts] = useState([]);
	// const [tabs, setTabs] = useState(['전체']);
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
	const fetchPost = async () => {
		try {
			const response = await request.get(`/board?searchKeyword=${searchKeyword}&category=${selectedTab}&sort=${sortType}&page=${currentPage + 1}&size=${itemsPerPage}`);
			console.log("response", response);

			if (response.isSuccess) {
				console.log("게시글 목록 조회 성공");
				setPosts(response.result.boardList);
				// setFilteredPosts(response.result.answerList);
			} else {
				console.error("게시글 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('게시글 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchPost();
	},[ searchKeyword, selectedTab, sortType, currentPage]);

	// useEffect(() => {
	// 	const stages = [...new Set(posts.map(post => post.type))];
	// 	const newTabs = ['전체'];
	// 	if (stages.includes('공지사항')) {
	// 		newTabs.push('공지사항');
	// 	}
	// 	if (stages.includes('자유')) {
	// 		newTabs.push('자유');
	// 	}
	// 	if (stages.includes('질문')) {
	// 		newTabs.push('질문');
	// 	}
	// 	if (stages.includes('정보 공유')) {
	// 		newTabs.push('정보 공유');
	// 	}
	// 	if (stages.includes('홍보')) {
	// 		newTabs.push('홍보');
	// 	}
	// 	setTabs(newTabs);

	// 	setFilteredPosts(posts);

	// }, [posts]);

	// const handleSortClick = (order) => {
	// 	setSortOrder(order);
	// };

	const handleTabClick = (tab) => {
		// setSelectedTab(tab);
		if (tab === '전체') {
			setSelectedTab('');
			setIsTabClick(false);
			setFilteredPosts(posts);
			setContent('커뮤니티 내의 모든 글을 볼 수 있습니다.');
		} else if (tab === '공지') {
			setSelectedTab('공지');
			setIsTabClick(true);
			setFilteredPosts(posts.filter(post => post.category === '공지'));
			setContent('Koala의 중요한 소식과 공지들을 확인할 수 있습니다.');
		} else if (tab === '자유') {
			setSelectedTab('자유');
			setIsTabClick(true);
			setFilteredPosts(posts.filter(post => post.category === '자유'));
			setContent('자유롭게 소통하는 공간입니다.');
		} else if (tab === '질문') {
			setSelectedTab('질문');
			setIsTabClick(true);
			setFilteredPosts(posts.filter(post => post.category === '질문'));
			setContent('');
		} else if (tab === '정보') {
			setSelectedTab('정보');
			setIsTabClick(true);
			setFilteredPosts(posts.filter(post => post.category === '정보'));
			setContent('');
		} else if (tab === '홍보') {
			setSelectedTab('홍보');
			setIsTabClick(true);
			setFilteredPosts(posts.filter(post => post.category === '홍보'));
			setContent('');
		}
	};

	const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
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
    if (type === '') {
      setSortText('최신순');
    } else if (type === 'VIEW_COUNT') {
      setSortText('조회수');
    } else if (type === 'LIKE') {
      setSortText('좋아요');
    }
		
  };

  const handleWriteClick = () => {
	navigate('/writepost'); // Navigate to the /writepost route
	window.location.reload(); // 페이지 전환 후 강제 새로고침	
};

	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.TopContainer>
						<itemS.HeadContainer>
							<itemS.Head>커뮤니티 &gt; {selectedTab}</itemS.Head>
							<itemS.SemiHead>{content}</itemS.SemiHead>
						</itemS.HeadContainer>
						<itemS.SearchContainer>
								<itemS.Search 
									type="text"
									value={searchKeyword}
									onChange={handleSearchChange}
								/>
								<itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
								{/* <itemS.SearchIcon onClick={() => fetchInstitutionList()} src='/img/search.svg' alt='돋보기' /> */}
							</itemS.SearchContainer>
					</itemS.TopContainer>
					<itemS.TabSortContainer>
						<itemS.TabContainer>
							{tabs.map(tab => (
								tab === selectedTab ? (
									<itemS.TabSelected key={tab} onClick={() => handleTabClick(tab)}>
										{tab}
									</itemS.TabSelected>
								) : (
									<itemS.Tab key={tab} onClick={() => handleTabClick(tab)}>
										{tab}
									</itemS.Tab>
								)
							))}
						</itemS.TabContainer>
						{isTabClick && (
							<itemS.SortContainer>
								<itemS.CategoryDrop onClick={toggleSortDrop}>{sortText}</itemS.CategoryDrop>
								<itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
								{isSortDropVisible && (
									<itemS.SortDrop>
										<itemS.SortText onClick={() => onSortType('DATE')}>최신순</itemS.SortText>
										<itemS.SortText onClick={() => onSortType('VIEW_COUNT')}>조회수</itemS.SortText>
										<itemS.SortText onClick={() => onSortType('LIKE')}>좋아요</itemS.SortText>
									</itemS.SortDrop>
								)}
							</itemS.SortContainer>
						)}
					</itemS.TabSortContainer>
					<CommunityTable 
						items={filteredPosts} 
						isTabClick={isTabClick}
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

						<itemS.WriteBtn onClick={handleWriteClick}>+ 글쓰기</itemS.WriteBtn>
					</itemS.PaginationContainer>
				</itemS.InnerContainer>
			</itemS.Container>

		</itemS.OuterContainer>
	);
}
