import React, { useState } from 'react';
import * as itemS from "./Styled/UpdateGeneration.updategeneration.tuple.styles";
import UpdateModal from './UpdateModal';

// 날짜 포맷팅 함수
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
};

// 날짜 계산 함수 (startDate로부터 days 후 날짜 계산)
const calculateEndDate = (startDate, days) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + days);
  return formatDate(date);
};

export default function UpdateGenerationTuple({ item }) {
  const [startDate, setStartDate] = useState('0000년 00월 00일');
  const [endDate, setEndDate] = useState('0000년 00월 00일');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAbled, setIsAbled] = useState(true);

  const handleEditClick = () => {
    if (isAbled) {
      setIsUpdateModalOpen(true);
    }
  };

  const handleUpdateConfirm = (schedule) => {
    setIsUpdateModalOpen(false);
    setStartDate(schedule);
    const [year, month, day] = schedule.split(/년 |월 |일/).map(str => parseInt(str.trim(), 10));
    const startDateObj = new Date(year, month - 1, day);
    const calculatedEndDate = calculateEndDate(startDateObj, 7);
    setEndDate(calculatedEndDate);
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
