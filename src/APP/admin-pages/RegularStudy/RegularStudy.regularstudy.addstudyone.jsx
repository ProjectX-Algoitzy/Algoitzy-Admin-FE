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
  const itemsPerPage = 5;

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
    const confirmation = await confirm("해당 학생을 추가하시겠습니까?");
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

  // 페이지네이션 함수
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setCurrentPageGroup(Math.floor((newPage - 1) / 5));
    }
  }

  return (
    <itemS.Container>
        <itemS.Title>스터디원 추가
            <itemS.SearchContainer>
              <itemS.Search 
                type="text" 
                placeholder="문제 제목 검색" 
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
                  <itemS.StyledTd rowIndex={index + 1} colIndex={3}>
                    <itemS.AcceptanceBtn onClick={() => handleAddMember(member.memberId)}>추가</itemS.AcceptanceBtn>
                  </itemS.StyledTd>
                </tr>
              ))}
            </tbody>
        </itemS.StyledTable>

        <itemS.Pagination>
          <itemS.PaginationArrow
            left
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, i) => (
            <itemS.PaginationNumber
              key = {i}
              onClick={() => handlePageChange(i + 1)}
              active={ i+1 === currentPage}
            >
              {i + 1}
            </itemS.PaginationNumber>
          ))}
          <itemS.PaginationArrow
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
      </itemS.Pagination>
    </itemS.Container>
  )
}
