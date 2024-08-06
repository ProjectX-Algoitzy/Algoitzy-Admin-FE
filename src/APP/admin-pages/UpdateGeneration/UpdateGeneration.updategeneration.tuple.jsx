import React, { useState, useEffect } from 'react';
import * as itemS from "./Styled/UpdateGeneration.updategeneration.tuple.styles";
import UpdateModal from './UpdateModal';

// 날짜 포맷팅 함수
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  return `${year}년 ${month} ${day}일`;
}

// api 요청 데이터 날짜 포맷팅 함수
const requesFormatDate = (date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' }).replace('월', '');
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

// 날짜 계산 함수 (startDate로부터 days 후 날짜 계산)
const calculateEndDate = (startDate, days) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + days);
  return formatDate(date);
};

export default function UpdateGenerationTuple({ item, onUpdateTuple  }) {
  const [requestStartDate, setRequestStartDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAbled, setIsAbled] = useState(true);

  useEffect(() => {
    if (item.startTime) {
      const parsedStartDate = new Date(item.startTime);
      setStartDate(formatDate(parsedStartDate));
    }

    if (item.endTime) {
      const parsedEndDate = new Date(item.endTime);
      setEndDate(formatDate(parsedEndDate));
    }
  }, []);

  const handleEditClick = () => {
    if (isAbled) {
      setIsUpdateModalOpen(true);
    }
  };

  const handleUpdateConfirm = (schedule, requestSchedule) => {
    setIsUpdateModalOpen(false);
    setStartDate(schedule);
    const [year, month, day] = schedule.split(/년 |월 |일/).map(str => parseInt(str.trim(), 10));
    const startDateObj = new Date(year, month - 1, day);
    const calculatedEndDate = calculateEndDate(startDateObj, 6);
    setEndDate(calculatedEndDate);
    onUpdateTuple(item.week, requestSchedule);
  };

  return (
    <itemS.TupleContainer>
      <itemS.TupleWeek>{item.week}</itemS.TupleWeek>
      <itemS.TupleStartDateContainer>
        <itemS.TupleStartDate>{startDate}</itemS.TupleStartDate>
        <itemS.EditIcon src="/img/edit.svg" alt="Edit Icon" onClick={handleEditClick} />
        {isUpdateModalOpen && (
          <UpdateModal interviewId={item.week} onConfirm={handleUpdateConfirm} />
        )}
      </itemS.TupleStartDateContainer>
      <itemS.TupleEndDate>{endDate}</itemS.TupleEndDate>
    </itemS.TupleContainer>
  );
}
