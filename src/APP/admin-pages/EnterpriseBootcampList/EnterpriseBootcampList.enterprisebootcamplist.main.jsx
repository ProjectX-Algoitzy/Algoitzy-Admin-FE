import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/EnterpriseBootcampList/Styled/EnterpriseBootcampList.enterprisebootcamplist.main.styles";
import EnterBootListTable from './EnterpriseBootcampList.enterprisebootcamplist.table';
import { dummyCompanyList, dummyBootList } from './dummy';

export default function EnterBootList() {
  const [companyLists, setCompanyLists] = useState([]);
  const [bootLists, setBootLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [selectedTab, setSelectedTab] = useState('기업');
  const [isSortDropVisible, setIsSortDropVisible] = useState(false); // 정렬 드롭박스 열기/닫기

  // 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // 페이지당 목록 개수
  const maxPageNumbers = 5; // 페이지 수

  const tabs = ['기업', '부트캠프'];

  useEffect(() => {
    setCompanyLists(dummyCompanyList);
    setBootLists(dummyBootList);
    setFilteredLists(dummyCompanyList);

    setTotalPages(Math.ceil(dummyCompanyList.length / itemsPerPage)); // 페이지

  },[])

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === '기업') {
      setFilteredLists(companyLists);
      setTotalPages(Math.ceil(companyLists.length / itemsPerPage)); // 페이지
    } else if (tab === '부트캠프') {
      setFilteredLists(bootLists);
      setTotalPages(Math.ceil(bootLists.length / itemsPerPage)); // 페이지
    }
    setCurrentPage(1); // 페이지
  };

  const toggleSortDrop = () => {
    setIsSortDropVisible(prevState => !prevState);
  };

  const onSortNothing = () => {
    setIsSortDropVisible(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getDisplayedPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(maxPageNumbers / 2), totalPages - maxPageNumbers + 1));
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageItems = filteredLists.slice(startIndex, startIndex + itemsPerPage);

  return (
    <itemS.OuterContainer>
      <itemS.Container>
        <itemS.InnerContainer>
          <itemS.TopContainer>
            <itemS.HeadContainer>
              <itemS.Head>문제 추천 서비스</itemS.Head>
              <itemS.AddBtn>추가</itemS.AddBtn>
              <itemS.DeleteBtn>삭제</itemS.DeleteBtn>
            </itemS.HeadContainer>
            <itemS.SearchContainer>
              <itemS.Search />
              <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
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
              <itemS.CategoryDrop>조회수</itemS.CategoryDrop>
              <itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
              {isSortDropVisible && (
                <itemS.SortDrop>
                  <itemS.SortText onClick={onSortNothing}>조회수</itemS.SortText>
                  <itemS.SortText onClick={onSortNothing}>이름순</itemS.SortText>
                </itemS.SortDrop>
              )}
            </itemS.CategoryInterviewContainer>
          </itemS.TabSortContainer>
          <EnterBootListTable filteredLists={currentPageItems} />
          <itemS.Pagination>
            <itemS.PaginationArrow
              left
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {getDisplayedPageNumbers().map(page => (
              <itemS.PaginationNumber
                key={page}
                onClick={() => handlePageChange(page)}
                active={page === currentPage}
              >
                {page}
              </itemS.PaginationNumber>
            ))}
            <itemS.PaginationArrow
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </itemS.Pagination>
        </itemS.InnerContainer>
      </itemS.Container>
    </itemS.OuterContainer>
  );
}
