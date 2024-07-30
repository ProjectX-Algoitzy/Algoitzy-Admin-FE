import React, { useContext, useEffect, useState } from 'react'
import * as itemS from "./Styled/RegularStudy.regularstudy.mocktest.styles"
import Select, { components } from 'react-select';
import request from '../../Api/request';
import AddQuestionModal from './RegularStudy.regularstudy.addquestionmodal'
import { useParams } from 'react-router-dom';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function RegularStudyMocktest() {
  const { id } = useParams();
  const [week, setWeek] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weekData, setWeekData] = useState({});
  const [workbookId, setWorkbookId] = useState(null);
  const { confirm } = useContext(ConfirmContext);

  const WeeksSelect = ({ value, onChange }) => {
    const CustomDropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px"}} />
        </components.DropdownIndicator>
      );
    };

    const options = [
      { value: '1', label: '1주차' },
      { value: '2', label: '2주차' },
      { value: '3', label: '3주차' },
      { value: '4', label: '4주차' },
      { value: '5', label: '5주차' },
      { value: '6', label: '6주차' },
      { value: '7', label: '7주차' },
      { value: '8', label: '8주차' },
    ];

    return (
      <itemS.WeeksSelectContainer
        options={options}
        value={options.find(option => option.value === value.toString())}
        onChange={selectedOption => onChange(selectedOption.value)}
        placeholder="주차 선택"
        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
        isSearchable={false}
      />
    );
  };

  const fetchQuestions = async () => {
    try {
      const response = await request.get(`/study/${id}/workbook`);
      console.log("워크북 모의테스트 조회: ", response);
      if (response.isSuccess) {
        const { workbookList } = response.result;
        const newWeekData = {};
        workbookList.forEach(workbook => {
          const { week, problemList, workbookId } = workbook;
          const problems = problemList.map(problem => ({
            id: problem.number.toString(),
            title: problem.name,
            levelImg: problem.levelUrl,
            cancelImg: '/img/GrayX.png',
            baekjoonUrl: `https://www.acmicpc.net/problem/${problem.number}`,
            workbookId: workbookId // workbookId 추가
          }));
          newWeekData[week] = problems;

          // 현재 주차의 workbookId를 설정합니다.
          if (week === parseInt(week)) {
            setWorkbookId(workbookId);
          }
        });
        setWeekData(newWeekData);
      } else {
        console.error('API call failed:', response.message);
      }
    } catch (error) {
      console.error('API error:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [id]);

  const handleDeleteQuestion = async (workbookId, problemNumber) => {
    const confirmation = await confirm("정말로 삭제하시겠습니까?");
    if(confirmation) {
      try {
        const response = await request.delete(`/workbook/${workbookId}/problem/${problemNumber}`);
        if (response.isSuccess) {
          setWeekData(prevData => {
            const updatedWeekData = { ...prevData };
            updatedWeekData[week] = updatedWeekData[week].filter(question => question.id !== problemNumber.toString());
            return updatedWeekData;
          });
        } else {
          console.error('Delete API call failed:', response.message);
        }
      } catch (error) {
        console.error('API error:', error);
      }
    }
  };

  const handleOpenModal = () => {
    setWorkbookId(weekData[week]?.[0]?.workbookId || null);     // 모달을 열기 전에 현재 주차에 해당하는 workbookId를 설정
    setIsModalOpen(true)
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddQuestion = (id, title, levelImg) => {
    setWeekData(prevData => {
      const updatedWeekData = { ...prevData };
      const newQuestion = {
        id,
        title,
        levelImg,
        cancelImg: '/img/GrayX.png',
        baekjoonUrl: `https://www.acmicpc.net/problem/${id}`,
        workbookId: workbookId // 현재 선택된 workbookId를 추가합니다
      };
      updatedWeekData[week] = [...(updatedWeekData[week] || []), newQuestion];
      return updatedWeekData;
    });
  };

  const hasWeekData = weekData[week] && weekData[week].length > 0;

  return (
    <itemS.Container>
      <itemS.Title>
        모의테스트
        <WeeksSelect value={week} onChange={setWeek} />
      </itemS.Title>
      {hasWeekData ? (
        <>
          <itemS.TableContainer>
            <itemS.Table>
              <itemS.TableHead>백준번호</itemS.TableHead>
              <itemS.TableHead>제목</itemS.TableHead>
              <itemS.TableHead style={{ textAlign: "right", paddingLeft: "60px" }}>레벨</itemS.TableHead>
              <itemS.TableHead></itemS.TableHead>

              {weekData[week].map((row, index) => (
                <itemS.TableRow key={index}>
                  <itemS.TableCell>{row.id}</itemS.TableCell>
                  <itemS.TableCell>
                    <a href={row.baekjoonUrl} target="_blank" rel="noopener noreferrer">{row.title}</a>
                  </itemS.TableCell>
                  <itemS.TableCell style={{ textAlign: "right", paddingRight: "25px" }}>
                    <img src={row.levelImg} alt="level" style={{ width: "19.5px", height: "25px", marginLeft: "7px" }} />
                  </itemS.TableCell>
                  <itemS.TableCell>
                    <img
                      src={row.cancelImg}
                      onClick={() => handleDeleteQuestion(row.workbookId, row.id)}
                      alt="cancel"
                      style={{ cursor: "pointer" }}
                    />
                  </itemS.TableCell>
                </itemS.TableRow>
              ))}
            </itemS.Table>
          </itemS.TableContainer>
          <itemS.BtnContainer>
            <itemS.AddQuestionBtn onClick={handleOpenModal}>문제 추가하기</itemS.AddQuestionBtn>
          </itemS.BtnContainer>
        </>
      ) : (
        <>
          <itemS.ComingSoonContainer>준비 중입니다.</itemS.ComingSoonContainer>
        </>
      )}

      {isModalOpen && (
        <AddQuestionModal 
          week={week} 
          onClose={handleCloseModal} 
          workbookId={workbookId}
          onAddQuestion={(id, title, levelImg) => handleAddQuestion(id, title, levelImg)}
        />
      )}
    </itemS.Container>
  );
}