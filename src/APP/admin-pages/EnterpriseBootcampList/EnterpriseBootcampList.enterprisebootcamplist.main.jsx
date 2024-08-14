import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/EnterpriseBootcampList/Styled/EnterpriseBootcampList.enterprisebootcamplist.main.styles";
import EnterBootListTable from './EnterpriseBootcampList.enterprisebootcamplist.table';
// import { dummyCompanyList, dummyBootList } from './dummy';
import MakingInstitutionModal from './MakingInstitutionModal';

export default function EnterBootList() {
  const [institutionList, setInstitutionList] = useState([]);
  const [selectedTab, setSelectedTab] = useState('기업');
  const [sortText, setSortText] = useState('조회수');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // api 요청 파라미터
  const [searchKeyword, setSearchKeyword] = useState('');
  const [type, setType] = useState('COMPANY');
  const [sortType, setSortType] = useState('');

  const [isSortDropVisible, setIsSortDropVisible] = useState(false); // 정렬 드롭박스 열기/닫기

  // 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const itemsPerPage = 10; // 페이지당 항목 수

  const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);

  // const maxPageNumbers = 5; // 페이지 수

  const tabs = ['기업', '부트캠프'];

  const fetchInstitutionList = async () => { // 기관 목록 조회
		try {
			const response = await request.get(`/institution?searchKeyword=${searchKeyword}&type=${type}&sort=${sortType}&page=${currentPage + 1}&size=${itemsPerPage}`);
			if (response.isSuccess) {
				console.log("기관 목록 조회 성공",response);
				setInstitutionList(response.result.institutionList);
        setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
			} else {
				console.error("기관 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('기관 목록 조회 오류', error);
		}
	};

  useEffect(() => {
    fetchInstitutionList();
  },[ selectedTab, type, sortType, currentPage, searchKeyword])

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

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === '기업') {
      setType('COMPANY');
    } else if (tab === '부트캠프') {
      setType('CAMP');
    }
    setCurrentPage(0); // 페이지
  };

  const toggleSortDrop = () => {
    setIsSortDropVisible(prevState => !prevState);
  };

  const onSortType = (type) => {
    setIsSortDropVisible(false);
    setSortType(type);
    if (type === 'VIEW_COUNT') {
      setSortText('조회수');
    } else if (type === 'NAME') {
      setSortText('이름순');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setSelectedWorkbookId(null); 
  };

  const openModal = () => { 
    setIsModalOpen(true);
    // setSelectedWorkbookId(workbookId);
  };

  return (
    <itemS.OuterContainer>
      <itemS.Container>
        <itemS.InnerContainer>
          <itemS.TopContainer>
            <itemS.HeadContainer>
              <itemS.Head>문제 추천 서비스</itemS.Head>
              <itemS.AddBtn onClick={openModal}>+ 생성하기</itemS.AddBtn>
              {/* {isModalOpen && ( */}
              <MakingInstitutionModal
                isModalOpen={isModalOpen}
                onClose={closeModal}
                fetchInstitutionList={fetchInstitutionList}
              />
              {/* )} */}
              {/* <itemS.AddBtn>추가</itemS.AddBtn>
              <itemS.DeleteBtn>삭제</itemS.DeleteBtn> */}
            </itemS.HeadContainer>
            <itemS.SearchContainer>
							<itemS.Search 
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
							<itemS.SearchIcon onClick={() => fetchInstitutionList()} src='/img/search.svg' alt='돋보기' />
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
            <itemS.CategoryInterviewContainer>
              <itemS.CategoryDrop>{sortText}</itemS.CategoryDrop>
              <itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
              {isSortDropVisible && (
                <itemS.SortDrop>
                  <itemS.SortText onClick={() => onSortType('VIEW_COUNT')}>조회수</itemS.SortText>
                  <itemS.SortText onClick={() => onSortType('NAME')}>이름순</itemS.SortText>
                </itemS.SortDrop>
              )}
            </itemS.CategoryInterviewContainer>
          </itemS.TabSortContainer>
          <EnterBootListTable institutionList={institutionList} />
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
        </itemS.InnerContainer>
      </itemS.Container>
    </itemS.OuterContainer>
  );
}
