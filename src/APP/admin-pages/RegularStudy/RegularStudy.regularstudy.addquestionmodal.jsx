// import React, { useState } from 'react'
// import * as itemS from "./Styled/RegularStudy.regularstudy.addquestionmodal.styles"
// import request from '../../Api/request';
// import { useParams } from 'react-router-dom';

// const newQuestions = Array.from({ length: 25 }, (_, i) => ({
//   id: `1212${i + 1}`,
//   title: `문제 제목 ${i + 1}`,
//   levelImg: '/img/level.png',
//   plusImg: '/img/PlusBtn.png',
// }));

// export default function RegularStudyAddQuestionModal({ week, onClose, onAddQuestion }) {
//     const { id } = useParams();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 10;

//     const filteredQuestions = newQuestions.filter(question =>
//         question.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const indexOfLastQuestion = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstQuestion = indexOfLastQuestion - itemsPerPage;
//     const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//     const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);

//     const handlePageChange = (newPage) => {
//       if (newPage >= 0 && newPage < totalPages) {
//         setCurrentPage(newPage);
//       }
//     };

//     const handleAddQuestion = (question) => {
//         onAddQuestion(question.id);
//     };

//   return (
//     <itemS.ModalOverlay>
//       <itemS.ModalContent>
//         <itemS.ModalHeader>
//           <itemS.ModalTitle>{week}주차 모의테스트 문제 추가</itemS.ModalTitle>
//           <img src="/img/close.png" onClick={onClose} style={{marginTop:"16px", marginRight:"24px", cursor:"pointer"}} alt="x" />
//         </itemS.ModalHeader>
//         {/* <itemS.SearchInput
//           type="text"
//           placeholder="문제 제목 검색"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         /> */}
//         <itemS.SearchContainer>
//           <itemS.Search 
//             type="text"
//             placeholder="문제 제목 검색"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
//         </itemS.SearchContainer>
//         <itemS.TableContainer>
//             <itemS.Table>
//                 <itemS.TableHead>백준번호</itemS.TableHead>
//                 <itemS.TableHead>제목</itemS.TableHead>
//                 <itemS.TableHead>레벨</itemS.TableHead>
//                 <itemS.TableHead></itemS.TableHead>
//                 {currentQuestions.map((question, index) => (
//                 <itemS.TableRow key={index}>
//                     <itemS.TableCell>{question.id}</itemS.TableCell>
//                     <itemS.TableCell>{question.title}</itemS.TableCell>
//                     <itemS.TableCell>
//                     <img src={question.levelImg} alt="level" style={{width:"19.5px", height:"25px", marginLeft:"7px"}} />
//                     </itemS.TableCell>
//                     <itemS.TableCell>
//                     <img src={question.plusImg} alt="plus" style={{cursor:"pointer", width:"30px", height:"30px"}} onClick={() => handleAddQuestion(question)} />
//                     </itemS.TableCell>
//                 </itemS.TableRow>
//                 ))}
//             </itemS.Table>
//         </itemS.TableContainer>
//         {/* <itemS.Pagination>
//           <itemS.PaginationButton
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 0}
//             >
//             <img src="/img/grayarrow.png" alt="왼쪽" style={{width:"17.43px", height:"9.85px", transform: "rotate(180deg)"}} />
//           </itemS.PaginationButton>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <itemS.PaginationButton
//               key={i}
//               onClick={() => handlePageChange(i)}
//               active={i === currentPage}
//             >
//               {i + 1}
//             </itemS.PaginationButton>
//           ))}
//           <itemS.PaginationButton
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages - 1}
//           >
//             <img src="/img/grayarrow.png" alt="오른쪽" style={{width:"17.43px", height:"9.85px"}} />
//           </itemS.PaginationButton>
//         </itemS.Pagination> */}
//         <itemS.Pagination>
//           <itemS.PaginationArrow
//             left
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 0}
//           />
//           {Array.from({ length: totalPages }, (_, i) => (
//             <itemS.PaginationNumber
//               key={i}
//               onClick={() => handlePageChange(i)}
//               active={i === currentPage}
//             >
//               {i + 1}
//             </itemS.PaginationNumber>
//           ))}
//           <itemS.PaginationArrow
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages - 1}
//           />
//         </itemS.Pagination>

//       </itemS.ModalContent>
//     </itemS.ModalOverlay>
//   )
// }


import React, { useEffect, useState } from 'react'
import * as itemS from "./Styled/RegularStudy.regularstudy.addquestionmodal.styles"
import request from '../../Api/request';
import { useParams } from 'react-router-dom';

// const newQuestions = [
//     { id: '12121', title: '새로운 문제 제목 11-2-0', levelImg: '/img/level.png', plusImg: '/img/PlusBtn.png' },
//     { id: '12122', title: '새로운 문제 제목 11-2-1', levelImg: '/img/level.png', plusImg: '/img/PlusBtn.png' },
//     { id: '12123', title: '새로운 문제 제목 11-2-2', levelImg: '/img/level.png', plusImg: '/img/PlusBtn.png' },
//     { id: '12124', title: '새로운 문제 제목 11-2-3', levelImg: '/img/level.png', plusImg: '/img/PlusBtn.png' },
// ];
// 25개의 임의의 문제 생성
// const newQuestions = Array.from({ length: 25 }, (_, i) => ({
//   id: `1212${i + 1}`,
//   title: `문제 제목 ${i + 1}`,
//   levelImg: '/img/level.png',
//   plusImg: '/img/PlusBtn.png',
// }));

export default function RegularStudyAddQuestionModal({ week, onClose, onAddQuestion }) {
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      const fetchQuestions = async () => {
        try {
            const response = await request.get(`/study/${id}/workbook`);
            console.log("정규스터디 모의 테스트 조회: ", response);
            if (response.isSuccess) {
                const { workbookList } = response.result;
                const newQuestions = workbookList
                  .filter(weekData => weekData.week === week) // 주차가 일치하는 데이터만 필터링
                  .flatMap(weekData =>
                      weekData.problemList.map(problem => ({
                          id: problem.number.toString(),
                          title: problem.name,
                          levelImg: problem.levelUrl, //'/img/level.png'
                          plusImg: '/img/PlusBtn.png'
                      }))
                );
                setQuestions(newQuestions);
            } else {
                console.error('API call failed:', response.message);
            }
        } catch (error) {
            console.error('API error:', error);
        }
      };
      fetchQuestions();
    }, [id, week]);

    const filteredQuestions = questions.filter(question =>
        question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastQuestion = (currentPage + 1) * itemsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - itemsPerPage;
    const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);

    const handlePageChange = (newPage) => {
      if (newPage >= 0 && newPage < totalPages) {
        setCurrentPage(newPage);
      }
    };

    const handleAddQuestion = (question) => {
      onAddQuestion(question.id, question.title, question.levelImg);
    };

  return (
    <itemS.ModalOverlay>
      <itemS.ModalContent>
        <itemS.ModalHeader>
          <itemS.ModalTitle>{week}주차 모의테스트 문제 추가</itemS.ModalTitle>
          <img src="/img/close.png" onClick={onClose} style={{marginTop:"16px", marginRight:"24px", cursor:"pointer"}} alt="x" />
        </itemS.ModalHeader>
        <itemS.SearchContainer>
          <itemS.Search 
            type="text"
            placeholder="문제 제목 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
        </itemS.SearchContainer>
        <itemS.TableContainer>
            <itemS.Table>
                <itemS.TableHead>백준번호</itemS.TableHead>
                <itemS.TableHead>제목</itemS.TableHead>
                <itemS.TableHead>레벨</itemS.TableHead>
                <itemS.TableHead></itemS.TableHead>
                {currentQuestions.length > 0 ? (
                  currentQuestions.map((question, index) => (
                      <itemS.TableRow key={index}>
                          <itemS.TableCell>{question.id}</itemS.TableCell>
                          <itemS.TableCell>{question.title}</itemS.TableCell>
                          <itemS.TableCell><img src={question.levelImg} alt="level" /></itemS.TableCell>
                          <itemS.TableCell>
                              <img
                                  src={question.plusImg}
                                  alt="plus"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleAddQuestion(question)}
                              />
                          </itemS.TableCell>
                      </itemS.TableRow>
                  ))
                  ) : (
                    <itemS.TableRow>
                        <itemS.TableCell colSpan="4" style={{ textAlign: 'center' }}>준비 중입니다.</itemS.TableCell>
                    </itemS.TableRow>
                  )
                }
            </itemS.Table>
        </itemS.TableContainer>
        <itemS.Pagination>
          <itemS.PaginationArrow
            left
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <itemS.PaginationNumber
              key={i}
              onClick={() => handlePageChange(i)}
              active={i === currentPage}
            >
              {i + 1}
            </itemS.PaginationNumber>
          ))}
          <itemS.PaginationArrow
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          />
        </itemS.Pagination>

      </itemS.ModalContent>
    </itemS.ModalOverlay>
  )
}