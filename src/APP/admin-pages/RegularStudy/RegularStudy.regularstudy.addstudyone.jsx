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
  const [searchTerm, setSearchTerm] = useState("");  

  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);

  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  useEffect(() => {
    fetchNonStudyMember();
  }, [currentPage, searchTerm]);

  // const fetchNonStudyMember = async () => {
  //   try { 
  //     const response = await request.get(`/study/${id}/non-study-member`, {
  //       params: {
  //         searchKeyword: searchTerm,
  //         page: currentPage,
  //         size: itemsPerPage
  //       }
  //     });
  //     console.log("사람 목록 조회 : ", response);
  //     if (response.isSuccess) {
  //       setMembers(response.result.memberList);
  //       setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
  //     }
  //   } catch (error) {
  //     console.error('정규 스터디 스터디원 추가 대상 목록 조회 오류:', error);
  //   }
  // };

  const fetchNonStudyMember = async () => {  // api 사라짐으로 인한 더미데이터 적용
    try { 
      const dummyData = {
        "code": "COMMON200",
        "message": "Your request has been successfully performed.",
        "result": {
          "memberList": [
            { "memberId": 20, "name": "김철수", "handle": "kim20@example.com", "major": "컴퓨터공학과", "role": "ROLE_USER" },
            { "memberId": 21, "name": "이영희", "handle": "lee21@example.com", "major": "정보통신공학과", "role": "ROLE_USER" },
            { "memberId": 22, "name": "박민수", "handle": "park22@example.com", "major": "전자공학과", "role": "ROLE_USER" },
            { "memberId": 23, "name": "정다현", "handle": "jung23@example.com", "major": "소프트웨어학과", "role": "ROLE_USER" },
            { "memberId": 24, "name": "최지훈", "handle": "choi24@example.com", "major": "경영학과", "role": "ROLE_USER" },
            { "memberId": 25, "name": "송유리", "handle": "song25@example.com", "major": "심리학과", "role": "ROLE_USER" },
            { "memberId": 26, "name": "유승민", "handle": "yoo26@example.com", "major": "건축학과", "role": "ROLE_USER" },
            { "memberId": 27, "name": "임가영", "handle": "im27@example.com", "major": "화학공학과", "role": "ROLE_USER" },
            { "memberId": 28, "name": "강소현", "handle": "kang28@example.com", "major": "교육학과", "role": "ROLE_USER" },
            { "memberId": 29, "name": "황지훈", "handle": "hwang29@example.com", "major": "의학과", "role": "ROLE_USER" },
            { "memberId": 30, "name": "최민아", "handle": "choi30@example.com", "major": "법학과", "role": "ROLE_USER" },
            { "memberId": 31, "name": "박소영", "handle": "park31@example.com", "major": "물리학과", "role": "ROLE_USER" },
            { "memberId": 32, "name": "조현우", "handle": "jo32@example.com", "major": "기계공학과", "role": "ROLE_USER" },
            { "memberId": 33, "name": "한나래", "handle": "han33@example.com", "major": "수학과", "role": "ROLE_USER" },
            { "memberId": 34, "name": "정성훈", "handle": "jung34@example.com", "major": "화학과", "role": "ROLE_USER" },
            { "memberId": 35, "name": "김하늘", "handle": "kim35@example.com", "major": "간호학과", "role": "ROLE_USER" },
            { "memberId": 36, "name": "윤지혜", "handle": "yoon36@example.com", "major": "철학과", "role": "ROLE_USER" },
            { "memberId": 37, "name": "권다희", "handle": "kwon37@example.com", "major": "사회복지학과", "role": "ROLE_USER" },
            { "memberId": 38, "name": "이준영", "handle": "lee38@example.com", "major": "미디어학과", "role": "ROLE_USER" },
            { "memberId": 39, "name": "조하준", "handle": "cho39@example.com", "major": "경제학과", "role": "ROLE_USER" }
          ],
          "totalCount": 20
        },
        "isSuccess": true
      };      
      console.log("사람 목록 조회 : ", dummyData);
      if (dummyData.isSuccess) { // 이 페이지네이션은 api 제대로 동작하는지도 같이 고려해야 할 듯
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedMembers = dummyData.result.memberList.slice(startIndex, endIndex);

        setMembers(paginatedMembers);
        setTotalPages(Math.ceil(dummyData.result.totalCount / itemsPerPage));
      }
    } catch (error) {
      console.error('정규 스터디 스터디원 추가 대상 목록 조회 오류:', error);
    }
  };
  
  // 멤버 추가하는 함수
  // const handleAddMember = async (memberId) => {
  //   const confirmation = await confirm("해당 학생을 추가하시겠습니까?");
  //   if(confirmation) {
  //     try {
  //       const response = await request.post(`/study/${id}/study-member`, {memberId});
  //       if(response.isSuccess) {
  //         await alert("추가되었습니다.");
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       console.error("정규 스터디 스터디원 추가 에러: ", error);
  //     }
  //   }
  // };

  // 멤버 추가 요청 함수
  const addMember = async () => {
    try {
      const response = await request.post(`/study/${id}/study-member`, { memberId: selectedMemberId });
      if (response.isSuccess) {
        await alert("추가되었습니다.");
        setShowModal(false); // 모달 닫기
        fetchNonStudyMember(); // 리스트 갱신
      }
    } catch (error) {
      console.error("정규 스터디 스터디원 추가 에러: ", error);
    }
  };

  // 모달 열기 함수
  const openModal = (memberId) => {
    setSelectedMemberId(memberId);
    setShowModal(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setShowModal(false);
    setSelectedMemberId(null);
  };

  //검색 함수
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  // 페이지네이션 함수
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }

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
                  <itemS.StyledTd rowIndex={index + 1} colIndex={3}>
                    {/* <itemS.AcceptanceBtn onClick={() => handleAddMember(member.memberId)}>추가</itemS.AcceptanceBtn> */}
                    <itemS.AcceptanceBtn onClick={() => openModal(member.memberId)}>추가</itemS.AcceptanceBtn>
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

      {showModal && (
        <itemS.ModalBackdrop>
          <itemS.ModalContainer>
            <img src="/img/close.png" onClick={closeModal} style={{ position: "absolute", top: "24px", right: "24px", cursor: "pointer" }} alt="x" />
            <itemS.ModalContent>스터디원으로 추가하시겠습니까?</itemS.ModalContent>
            <itemS.ModalActions>
              <itemS.CancelButton onClick={closeModal}>취소</itemS.CancelButton>
              <itemS.ConfirmButton onClick={addMember}>확인</itemS.ConfirmButton>
            </itemS.ModalActions>
          </itemS.ModalContainer>
        </itemS.ModalBackdrop>
      )}
    </itemS.Container>
  )
}
