import React, { useEffect, useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.main.styles";
import request from '../../Api/request';
import TopTable from './WorkbookDetail.workbookdetail.toptable';
import BottomTable from './WorkbookDetail.workbookdetail.bottomtable';

const WorkbookDetail = ({ workbookId, workbookName, isOpen, onClose }) => {
  const [ itemList, setItemList ] = useState([]); // 설정한 문제 목록
  const [ allItemList, setAllItemList ] = useState([]);  // 백준 전체 문제 목록
  const [searchKeyword, setSearchKeyword] = useState('');
  const [size, setSize] = useState(5);

  // 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
  const maxPageNumbers = 5; // 페이지 수
  const itemsPerPage = 5; // 페이지당 항목 수

  const fetchItemList = async () => { // 설정한 문제 목록 조회
		try {
			const response = await request.get(`/workbook/${workbookId}`);
			if (response.isSuccess) {
				console.log("설정한 문제 목록 조회 성공",response);
				setItemList(response.result.problemList);
			} else {
				console.error("설정한 문제 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('설정한 문제 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchItemList();
	}, []);

	const fetchAllItemList = async () => { // 백준 전체 문제 목록 조회
		try {
			const response = await request.get(`/problem/?searchKeyword=${searchKeyword}&page=${currentPage}&size=${size}`);
			if (response.isSuccess) {
				console.log("백준 전체 목록 조회 성공",response);
				setAllItemList(response.result.problemList);
        setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
			} else {
				console.error("백준 전체 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('백준 전체 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchAllItemList();
	}, [currentPage]);


  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  // 페이지
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

  if (!isOpen) return null;

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopBox>
          <itemS.Title>{workbookName}</itemS.Title>
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopBox>
        <itemS.InnerContainer>
          <TopTable 
            items={itemList} 
            fetchItemList={fetchItemList}
            workbookId={workbookId}
          />
  
          <itemS.SearchContainer>
            <itemS.SearchBox>
              <itemS.Search 
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
              <itemS.SearchIcon onClick={() => fetchAllItemList()} src='/img/search.svg' alt='돋보기' />
            </itemS.SearchBox>
          </itemS.SearchContainer>
					<BottomTable 
						allItemList={allItemList}
            fetchItemList={fetchItemList}
            workbookId={workbookId}
					/>
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
          <itemS.ButtonContainer>
            <itemS.EditButton>수정</itemS.EditButton>
            <itemS.DeleteButton>삭제</itemS.DeleteButton>
          </itemS.ButtonContainer>
				
				</itemS.InnerContainer>
      </itemS.ModalContainer>
    </itemS.Backdrop>
  );
};

export default WorkbookDetail;
