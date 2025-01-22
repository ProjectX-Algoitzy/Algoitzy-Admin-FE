import React, { useEffect, useState, useContext } from "react";
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.main.styles";
import request from "../../Api/request";
import TopTable from "./WorkbookDetail.workbookdetail.toptable";
import BottomTable from "./WorkbookDetail.workbookdetail.bottomtable";
import { AlertContext } from "../../Common/Alert/AlertContext";
import { ConfirmContext } from "../../Common/Confirm/ConfirmContext";
import useDebounce from "../../Common/useDebounce";

const WorkbookDetail = ({
  workbookId,
  workbookName,
  isOpen,
  onClose,
  fetchWorkbook,
}) => {
  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);

  const [name, setName] = useState(workbookName);

  const [itemList, setItemList] = useState([]); // 설정한 문제 목록
  const [allItemList, setAllItemList] = useState([]); // 백준 전체 문제 목록
  const [searchKeyword, setSearchKeyword] = useState("");

  const debouncedQuery = useDebounce(searchKeyword, 500);

  // 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
  const [currentPageGroup, setCurrentPageGroup] = useState(0);
  const itemsPerPage = 5; // 페이지당 항목 수
  const pageNumbers = Array.from(
    { length: Math.min(5, totalPages - currentPageGroup * 5) },
    (_, i) => currentPageGroup * 5 + i
  );

  const fetchItemList = async () => {
    // 설정한 문제 목록 조회
    try {
      const response = await request.get(`/workbook/${workbookId}`);
      if (response.isSuccess) {
        console.log("설정한 문제 목록 조회 성공", response);
        setItemList(response.result.problemList);
      } else {
        console.error("설정한 문제 목록 조회 실패:", response);
      }
    } catch (error) {
      console.error("설정한 문제 목록 조회 오류", error);
    }
  };

  useEffect(() => {
    fetchItemList();
  }, []);

  // useEffect(() => {
  // 	console.log("IsOpenModal",IsOpenModal);
  // }, [isModalOpen]);

  const fetchAllItemList = async () => {
    // 백준 전체 문제 목록 조회
    try {
      const response = await request.get(
        `/problem?searchKeyword=${searchKeyword}&page=${
          currentPage + 1
        }&size=${itemsPerPage}`
      );
      if (response.isSuccess) {
        console.log("백준 전체 목록 조회 성공", response);
        setAllItemList(response.result.problemList);
        setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
      } else {
        console.error("백준 전체 목록 조회 실패:", response);
      }
    } catch (error) {
      console.error("백준 전체 목록 조회 오류", error);
    }
  };

  useEffect(() => {
    fetchAllItemList();
  }, [currentPage, debouncedQuery]);

  const handleDelete = async () => {
    const confirmed = await confirm(
      "삭제된 정보는 복구할 수 없습니다.\n정말로 삭제하시겠습니까?"
    );
    if (confirmed) {
      try {
        const response = await request.delete(`/workbook/${workbookId}`);
        if (response.isSuccess) {
          console.log("문제집 삭제 성공", response);
          fetchWorkbook();
          onClose();
        } else {
          console.error("문제집 삭제 실패:", response);
        }
      } catch (error) {
        console.error("문제집 삭제 오류", error);
      }
    }
  };

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
    if (direction === "next" && (currentPageGroup + 1) * 5 < totalPages) {
      setCurrentPageGroup(currentPageGroup + 1);
      setCurrentPage((currentPageGroup + 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
    } else if (direction === "prev" && currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      setCurrentPage((currentPageGroup - 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
    }
  };

  // const onClose = () => {
  //   setIsModalOpen(false);
  //   setIsOpen(false);
  // };
  const handleConfirm = async () => {
    const requestData = {
      name: name,
    };

    try {
      const response = await request.patch(
        `/workbook/${workbookId}`,
        requestData
      );
      if (response.isSuccess) {
        alert("수정사항이 저장되었습니다.").then(() => {
          console.log("문제집 이름 수정 성공", response);
          fetchWorkbook();
          onClose();
        });
      } else {
        console.error("문제집 이름 수정 실패:", response);
      }
    } catch (error) {
      console.error("문제집 이름 수정 오류", error);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopBox>
          <itemS.Title type="text" value={name} onChange={onChangeName} />
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopBox>
        <itemS.InnerContainer>
          <TopTable
            itemList={itemList}
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
              <itemS.SearchIcon
                onClick={() => fetchAllItemList()}
                src="/img/search.svg"
                alt="돋보기"
              />
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
              onClick={() => handlePageGroupChange("prev")}
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
              onClick={() => handlePageGroupChange("next")}
              disabled={(currentPageGroup + 1) * 5 >= totalPages}
            />
          </itemS.Pagination>
          <itemS.ButtonContainer>
            <itemS.EditButton onClick={handleConfirm}>수정</itemS.EditButton>
            <itemS.DeleteButton onClick={handleDelete}>삭제</itemS.DeleteButton>
          </itemS.ButtonContainer>
        </itemS.InnerContainer>
      </itemS.ModalContainer>
    </itemS.Backdrop>
  );
};

export default WorkbookDetail;
