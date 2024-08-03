import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/ManageAuth.manageauth.main";
import ManageAuthManagerTable from './ManageAuth.manageauth.managertable';
import ManageAuthUserTable from './ManageAuth.manageauth.usertable';
// import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function ManageAuth() {

	// const { confirm } = useContext(ConfirmContext);
	const [adminList, setAdminList] = useState([]); // 관리자
	const [userList, setUserList] = useState([]); // 스터디원
	const [searchKeyword, setSearchKeyword] = useState('');  
	const [size, setSize] = useState(5); 

	// 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
  const maxPageNumbers = 5; // 페이지 수
  const itemsPerPage = 5; // 페이지당 항목 수
  
	const fetchAdminList = async () => { // 관리자 목록 조회
		try {
			const response = await request.get(`/member/admin`);
			if (response.isSuccess) {
				console.log("관리자 목록 조회 성공",response);
				setAdminList(response.result.memberList);
			} else {
				console.error("관리자 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('관리자 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchAdminList();
	}, []);

	const fetchUserList = async () => { // 스터디원 목록 조회
		try {
			const response = await request.get(`/member/user?searchKeyword=${searchKeyword}&page=${currentPage}&size=${size}`);
			if (response.isSuccess) {
				console.log("스터디원 목록 조회 성공",response);
				setUserList(response.result.memberList);
				setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
			} else {
				console.error("스터디원 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('스터디원 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchUserList();
	}, [currentPage]);

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
	
	return (
		<itemS.OuterContainer>
				<itemS.Container>
				<itemS.InnerContainer>
					<itemS.ManagerContainer>
						  <itemS.Head>관리자</itemS.Head>
					</itemS.ManagerContainer>
					<ManageAuthManagerTable 
						adminList={adminList} 
						fetchAdminList={fetchAdminList}
						fetchUserList={fetchUserList}
					/>

          <itemS.UserContainer>
						<itemS.Head>스터디원</itemS.Head>
						<itemS.SearchContainer>
							<itemS.Search 
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
              />
							<itemS.SearchIcon onClick={() => fetchUserList()} src='/img/search.svg' alt='돋보기' />
						</itemS.SearchContainer>
					</itemS.UserContainer>
					<ManageAuthUserTable 
						userList={userList}
						fetchAdminList={fetchAdminList}
						fetchUserList={fetchUserList} 
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
				
				</itemS.InnerContainer>
			</itemS.Container>
			
		</itemS.OuterContainer>
	);
}
