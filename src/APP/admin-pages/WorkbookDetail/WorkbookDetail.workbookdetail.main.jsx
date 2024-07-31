import React, { useEffect, useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.main.styles";
import request from '../../Api/request';
import TopTable from './WorkbookDetail.workbookdetail.toptable';
import BottomTable from './WorkbookDetail.workbookdetail.bottomtable';
import { dummydata } from './dummy';

const WorkbookDetail = ({ isOpen, onClose }) => {
  const [ itemList, setItemList ] = useState([]);
  const [ title, setTitle ] = useState('2023년도 상반기 유형');
  const [searchKeyword, setSearchKeyword] = useState('');

  // 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
  const maxPageNumbers = 5; // 페이지 수

  const fetchitemList = async () => { // 관리자 목록 조회
		setItemList(dummydata);
	};

  useEffect(() => {
		fetchitemList();
	}, []);

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
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

  if (!isOpen) return null;

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopBox>
          <itemS.Title>{title}</itemS.Title>
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopBox>
        <itemS.InnerContainer>
          <TopTable 
            items={itemList} 
            // fetchAdminList={fetchAdminList}
            // fetchUserList={fetchUserList}
          />
  
          <itemS.SearchContainer>
            <itemS.SearchBox>
              <itemS.Search 
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
              <itemS.SearchIcon onClick={() => fetchitemList()} src='/img/search.svg' alt='돋보기' />
            </itemS.SearchBox>
          </itemS.SearchContainer>
					<BottomTable 
						items={itemList}
						// fetchAdminList={fetchAdminList}
						// fetchUserList={fetchUserList} 
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
