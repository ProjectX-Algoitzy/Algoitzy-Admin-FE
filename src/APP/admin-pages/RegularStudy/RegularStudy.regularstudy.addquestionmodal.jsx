import React, { useContext, useEffect, useState } from 'react'
import * as itemS from "./Styled/RegularStudy.regularstudy.addquestionmodal.styles"
import request from '../../Api/request';
import { useParams } from 'react-router-dom';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function RegularStudyAddQuestionModal({ week, onClose, onAddQuestion, workbookId  }) {
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [questions, setQuestions] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPageGroup, setCurrentPageGroup] = useState(0);
    const { confirm } = useContext(ConfirmContext);

    const fetchQuestions = async (page, searchTerm) => {
        try {
            const response = await request.get(`/problem?page=${page + 1}&size=${itemsPerPage}&searchKeyword=${encodeURIComponent(searchTerm)}`);
            console.log("백준 문제 목록 조회: ", response);
            if (response.isSuccess) {
                const { problemList, totalCount } = response.result;
                const newQuestions = problemList.map(problem => ({
                    id: problem.number.toString(),
                    title: problem.name,
                    levelImg: problem.levelUrl,
                    plusImg: '/img/PlusBtn.png',
                    baekjoonUrl: problem.baekjoonUrl
                }));
                setQuestions(newQuestions);
                setTotalPages(Math.ceil(totalCount / itemsPerPage));
            } else {
                console.error('API call failed:', response.message);
            }
        } catch (error) {
            console.error('API error:', error);
        }
    };

    useEffect(() => {
        fetchQuestions(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(0);
        setCurrentPageGroup(0);
    };

    const pageNumbers = Array.from(
        { length: Math.min(5, totalPages - currentPageGroup * 5) },
        (_, i) => currentPageGroup * 5 + i
    );

    const handleAddQuestion = async (question) => {
        const confirmation = await confirm("해당 문제를 추가하시겠습니까?");
        if(confirmation){
            try {
                const response = await request.post(`/workbook/${workbookId}/problem`, {
                    number: question.id
                });
                if(response.isSuccess){
                    onAddQuestion(question.id, question.title, question.levelImg);
                    console.log("문제 추가 성공: ", response);
                }
            } catch (error) {
                console.error('문제 추가 실패: ', error);
            }
        }
    };

    return (
        <itemS.ModalOverlay>
            <itemS.ModalContent>
                <itemS.ModalHeader>
                    <itemS.ModalTitle>{week}주차 모의테스트 문제 추가</itemS.ModalTitle>
                    <img src="/img/close.png" onClick={onClose} style={{ marginTop: "16px", marginRight: "24px", cursor: "pointer" }} alt="x" />
                </itemS.ModalHeader>
                <itemS.SearchContainer>
                    <itemS.Search
                        type="text"
                        placeholder="문제 제목 검색"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
                </itemS.SearchContainer>
                <itemS.TableContainer>
                    <itemS.Table>
                        <itemS.TableHead>백준번호</itemS.TableHead>
                        <itemS.TableHead>제목</itemS.TableHead>
                        <itemS.TableHead></itemS.TableHead>
                        <itemS.TableHead>레벨</itemS.TableHead>
                        {questions.length > 0 ? (
                            questions.map((question, index) => (
                                <itemS.TableRow key={index}>
                                    <itemS.TableCell>{question.id}</itemS.TableCell>
                                    <itemS.TableCell>
                                        <a href={question.baekjoonUrl} target="_blank" rel="noopener noreferrer">
                                            {question.title}
                                        </a>
                                    </itemS.TableCell>
                                    <itemS.TableCell><img src={question.levelImg} alt="level" style={{ width: "19.5px", height: "25px"}} /></itemS.TableCell>
                                    <itemS.TableCell>
                                        <img
                                            src={question.plusImg}
                                            alt="plus"
                                            style={{ cursor: "pointer", width: "25px", height: "25px" }}
                                            onClick={() => handleAddQuestion(question)}
                                        />
                                    </itemS.TableCell>
                                </itemS.TableRow>
                            ))
                        ) : (
                            <itemS.TableRow>
                                <itemS.TableCell colSpan="4" style={{ textAlign: 'center' }}>준비 중입니다.</itemS.TableCell>
                            </itemS.TableRow>
                        )}
                    </itemS.Table>
                </itemS.TableContainer>
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
            </itemS.ModalContent>
        </itemS.ModalOverlay>
    )
}