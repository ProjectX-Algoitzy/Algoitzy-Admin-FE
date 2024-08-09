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

	// 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const itemsPerPage = 5; // 페이지당 항목 수

	const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);
  
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
			const response = await request.get(`/member/user?searchKeyword=${searchKeyword}&page=${currentPage + 1}&size=${itemsPerPage}`);
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
	}, [currentPage, searchKeyword]);

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
