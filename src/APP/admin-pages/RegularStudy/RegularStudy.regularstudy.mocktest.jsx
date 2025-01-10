import React, { useCallback, useContext, useEffect, useState } from 'react'
import * as itemS from "./Styled/RegularStudy.regularstudy.mocktest.styles"
import Select, { components } from 'react-select';
import request from '../../Api/request';
import AddQuestionModal from './RegularStudy.regularstudy.addquestionmodal'
import { useParams } from 'react-router-dom';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function RegularStudyMocktest() {
  const { id } = useParams();
  const [week, setWeek] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(1); // 만약 기수가 다를 경우 1주차를 디폴트로
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weekData, setWeekData] = useState({});
  const [workbookId, setWorkbookId] = useState(null);
  const { confirm } = useContext(ConfirmContext);

  const WeeksSelect = ({ value, onChange }) => {
    const CustomDropdownIndicator = (props) => {
      return (
        <components.DropdownIndicator {...props}>
          <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "1rem", height: "1rem" }} />
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
  
    const defaultValue = options.find(option => option.value === currentWeek?.toString()) || options[0];
  
    return (
      <itemS.WeeksSelectContainer
        options={options}
        value={value ? options.find(option => option.value === value.toString()) : defaultValue}
        onChange={selectedOption => onChange(selectedOption.value)}
        placeholder="주차 선택"
        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
        isSearchable={false}
      />
    );
  };

  const fetchCurrentWeek = useCallback(async () => {
    try {
      const responseCurrentWeek = await request.get('/week/current');
      console.log("현재 주차 정보 조회: ", responseCurrentWeek);
      if (responseCurrentWeek.isSuccess) {
        const currentWeekValue = responseCurrentWeek.result.week;
        setCurrentWeek(currentWeekValue); // 상태 업데이트
        return currentWeekValue; // 현재 주차 반환
      }
    } catch (error) {
      console.error('현재 주차 정보 조회 오류: ', error);
    }
    return null; // 실패 시 null 반환
  }, []);

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
        return { isSuccess: true };
      } else {
        console.error('API call failed:', response.message);
        return { isSuccess: false };
      }
    } catch (error) {
      console.error('API error:', error);
      return { isSuccess: false };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 현재 주차를 먼저 가져온다
        const currentWeekResponse = await fetchCurrentWeek();
        if (!currentWeekResponse) return; // 실패 시 처리
  
        // 문제 데이터를 가져온다
        const questionsResponse = await fetchQuestions();
        if (questionsResponse?.isSuccess) {
          // currentWeek가 업데이트된 후에만 초기 week 상태 설정
          setWeek(currentWeekResponse); 
        }
      } catch (error) {
        console.error('데이터 초기화 중 오류:', error);
      }
    };
  
    fetchData();
  }, [id]); // id가 변경될 때마다 호출

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

  const handleAddQuestion = async (id, title, levelImg) => {
    try {
      // 문제 추가 후
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
  
      // 데이터를 다시 fetch 하여 갱신
      await fetchQuestions();
  
    } catch (error) {
      console.error('문제 추가 후 데이터 갱신 실패: ', error);
    }
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
              <itemS.TableHead>백준 번호</itemS.TableHead>
              <itemS.TableHead>제목</itemS.TableHead>
              <itemS.TableHead></itemS.TableHead>
              <itemS.TableHead>레벨</itemS.TableHead>

              {weekData[week].map((row, index) => (
                <itemS.TableRow key={index}>
                  <itemS.TableCell>{row.id}</itemS.TableCell>
                  <itemS.TableCell>
                    <a href={row.baekjoonUrl} style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">{row.title}</a>
                  </itemS.TableCell>
                  <itemS.TableCell>
                    <img src={row.levelImg} alt="level" style={{ width: "0.813rem", height: "1.042rem"}} />
                  </itemS.TableCell>
                  <itemS.TableCell>
                    <itemS.DeleteIcon
                      onClick={() => handleDeleteQuestion(row.workbookId, row.id)}
                      alt="cancel"
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