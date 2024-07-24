import React, { useState } from 'react';
import * as itemS from "./Styled/UpdateModal";

const generateOptions = (count, prefix = '') => {
  return [...Array(count)].map((_, i) => {
    const value = String(i + (prefix ? 1 : 0)).padStart(2, '0');
    return { value, label: value };
  });
};

const yearOptions = [
  { value: new Date().getFullYear(), label: String(new Date().getFullYear()) },
  { value: new Date().getFullYear() + 1, label: String(new Date().getFullYear() + 1) }
];

const monthOptions = generateOptions(12, 'month');
const dayOptions = generateOptions(31, 'day');

export default function UpdateModal({ interviewId, onConfirm }) {
  const [year, setYear] = useState(yearOptions[0]);
  const [month, setMonth] = useState(monthOptions[0]);
  const [day, setDay] = useState(dayOptions[0]);

  const handleConfirm = async () => {
    const schedule = `${year.label}년 ${month.label}월 ${day.label}일`;
    const requestSchedule= `${year.value}-${month.value}-${day.value}`;
    onConfirm(schedule);
  };

  return (
    <itemS.ModalContainer>
      <itemS.YearDateSelect
        options={yearOptions}
        defaultValue={year}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setYear}
      />
      <itemS.DropText>년</itemS.DropText>
      <itemS.MonthDateSelect
        options={monthOptions}
        defaultValue={month}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setMonth}
      />
      <itemS.DropText>월</itemS.DropText>
      <itemS.MonthDateSelect
        options={dayOptions}
        defaultValue={day}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setDay}
      />
      <itemS.DropText>일</itemS.DropText>
      <itemS.ConfirmButton onClick={handleConfirm}>확인</itemS.ConfirmButton>
    </itemS.ModalContainer>
  );
}
