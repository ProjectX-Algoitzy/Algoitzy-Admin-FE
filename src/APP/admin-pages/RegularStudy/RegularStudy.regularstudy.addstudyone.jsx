import React, { useEffect, useState } from 'react'
import * as itemS from "./Styled/RegularStudy.regularstudy.addstudyone.styles"
import request from '../../Api/request';
import { useParams } from 'react-router-dom';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';
import { useContext } from 'react';

export default function RegularStudyAddStudyone() {
  const {id} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [members, setMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageGroup, setCurrentPageGroup] = useState(0); 
  const [searchTerm, setSearchTerm] = useState("");  

  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);

  useEffect(() => {
    fetchNonStudyMember();
  }, [currentPage, searchTerm]);

  const fetchNonStudyMember = async () => {
    try { 
      const response = await request.get(`/study/${id}/non-study-member`, {
        params: {
          searchKeyword: searchTerm,
          page: currentPage,
          size: itemsPerPage
        }
      });
      console.log("사람 목록 조회 : ", response);
      if (response.isSuccess) {
        setMembers(response.result.memberList);
        setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
      }
    } catch (error) {
      console.error('정규 스터디 스터디원 추가 대상 목록 조회 오류:', error);
    }
  };
  
  // 멤버 추가하는 함수
  const handleAddMember = async (memberId) => {
    const confirmation = await confirm("스터디원으로 추가하시겠습니까?");
    if(confirmation) {
      try {
        const response = await request.post(`/study/${id}/study-member`, {memberId});
        if(response.isSuccess) {
          await alert("추가되었습니다.");
          window.location.reload();
        }
      } catch (error) {
        console.error("정규 스터디 스터디원 추가 에러: ", error);
      }
    }
  };

  //검색 함수
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  // 페이지 변경 함수
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setCurrentPageGroup(Math.floor((newPage - 1) / 5)); // 페이지 그룹 업데이트
    }
  };

  // 페이지 그룹 변경 함수
  const handlePageGroupChange = (direction) => {
    if (direction === 'next' && (currentPageGroup + 1) * 5 < totalPages) {
      setCurrentPageGroup(currentPageGroup + 1);
      setCurrentPage(currentPageGroup * 5 + 6); // 다음 그룹의 첫 페이지로 이동
    } else if (direction === 'prev' && currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      setCurrentPage(currentPageGroup * 5 - 4); // 이전 그룹의 첫 페이지로 이동
    }
  };

  // 페이지 번호 리스트 생성
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages - currentPageGroup * 5) },
    (_, i) => currentPageGroup * 5 + i + 1
  );

  return (
    <itemS.Container>
        <itemS.Title>스터디원 추가
            <itemS.SearchContainer>
              <itemS.Search 
                type="text" 
                placeholder="이름 및 백준 닉네임 검색" 
                value={searchTerm} 
                onChange={handleSearchInput}
              />
              <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
            </itemS.SearchContainer>
        </itemS.Title>

        <itemS.IntroduceContainer>
            <itemS.IntroduceIcon src='/img/trianglegray.svg' alt='회색삼각형' />
            <itemS.IntroduceSentence>정규 스터디를 진행 중이거나, 정규 스터디를 수료한 이력이 있는 회원만 노출됩니다.</itemS.IntroduceSentence>
        </itemS.IntroduceContainer>

        <itemS.StyledTable>
            <thead>
              <tr>
                <itemS.StyledTd rowIndex={0} colIndex={0}>이름</itemS.StyledTd>
                <itemS.StyledTd rowIndex={0} colIndex={1}>백준 닉네임</itemS.StyledTd>
                <itemS.StyledTd rowIndex={0} colIndex={2}>학과</itemS.StyledTd>
                <itemS.StyledTd rowIndex={0} colIndex={3}></itemS.StyledTd>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.memberId}>
                  <itemS.StyledTd rowIndex={index + 1} colIndex={0}>{member.name}</itemS.StyledTd>
                  <itemS.StyledTd rowIndex={index + 1} colIndex={1}>{member.handle}</itemS.StyledTd>
                  <itemS.StyledTd rowIndex={index + 1} colIndex={2}>{member.major}</itemS.StyledTd>
                  <itemS.StyledTd rowIndex={index + 1} colIndex={3} style={{ textAlign: 'right' }}>
                    <itemS.AcceptanceBtn onClick={() => handleAddMember(member.memberId)}>추가</itemS.AcceptanceBtn>
                  </itemS.StyledTd>
                </tr>
              ))}
            </tbody>
        </itemS.StyledTable>

        <itemS.Pagination>
          <itemS.PaginationArrow
            left
            onClick={() => handlePageGroupChange('prev')}
            style={{marginRight:"30px"}}
            disabled={currentPageGroup === 0}
          />
          {pageNumbers.map((pageNumber) => (
            <itemS.PaginationNumber
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              active={pageNumber === currentPage}
            >
              {pageNumber}
            </itemS.PaginationNumber>
          ))}
          <itemS.PaginationArrow
            onClick={() => handlePageGroupChange('next')}
            style={{marginLeft:"30px"}}
            disabled={(currentPageGroup + 1) * 5 >= totalPages}
          />
        </itemS.Pagination>
    </itemS.Container>
  )
}
