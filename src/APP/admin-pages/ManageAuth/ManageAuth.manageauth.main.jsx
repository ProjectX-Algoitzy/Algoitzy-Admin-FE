import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/ManageAuth.manageauth.main";
import ManageAuthManagerTable from './ManageAuth.manageauth.managertable';
import ManageAuthUserTable from './ManageAuth.manageauth.usertable';
import { dummydata } from './dummy';
// import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function ManageAuth() {

	// const { confirm } = useContext(ConfirmContext);

  const [dataList, setDataList] = useState([]); // 더미
	const [adminList, setAdminList] = useState([]); // 관리자
	const [userList, setUserList] = useState([]); // 스터디원
	const [searchKeyword, setSearchKeyword] = useState(''); 
	const [page, setPage] = useState(1);  
	const [size, setSize] = useState(50); 
  
  useEffect(() => {
    setDataList(dummydata);
  },[])

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
			const response = await request.get(`/member/user?searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
			if (response.isSuccess) {
				console.log("스터디원 목록 조회 성공",response);
				setUserList(response.result.memberList);
			} else {
				console.error("스터디원 목록 조회 실패:", response);
			}
		} catch (error) {
			console.error('스터디원 목록 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchUserList();
	}, []);

	const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
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
				
				</itemS.InnerContainer>
			</itemS.Container>
			
		</itemS.OuterContainer>
	);
}
