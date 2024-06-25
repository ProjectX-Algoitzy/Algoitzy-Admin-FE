import React, { useState } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/UpdateModal";


// const CustomDropdownIndicator = props => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px" }} />
//     </components.DropdownIndicator>
//   );
// };

const generateOptions = (count, prefix = '') => {
  return [...Array(count)].map((_, i) => {
    const value = String(i + (prefix ? 1 : 0)).padStart(2, '0');
    return { value, label: value };
  });
};

const monthOptions = generateOptions(12, 'month');
const dayOptions = generateOptions(31, 'day');
const hourOptions = generateOptions(24, 'hour');
const minuteOptions = generateOptions(12, '').map((option, index) => ({
  value: String(index * 5).padStart(2, '0'),
  label: String(index * 5).padStart(2, '0')
}));

export default function UpdateModal({ interviewId, onConfirm }) {
  const [month, setMonth] = useState(monthOptions[0]);
  const [day, setDay] = useState(dayOptions[0]);
  const [hour, setHour] = useState(hourOptions[0]);
  const [minute, setMinute] = useState(minuteOptions[0]);

  const handleConfirm = async () => {
    const schedule = `${month.label}월 ${day.label}일 ${hour.label}:${minute.label}`;
    const sumSchedule = month.value + day.value + hour.value + minute.value;

    const requestData = {
			interviewId: interviewId,
			time: sumSchedule
		};

    try {
      const response = await request.patch(`/interview`, requestData);
      if (response.isSuccess) {
        console.log("면접 날짜 업뎃 성공 response:", response);
        onConfirm(schedule); 
      } else {
        console.error("면접 날짜 업뎃 실패:", response);
      }
    } catch (error) {
      console.error("면접 날짜 업뎃 에러:", error);
    }
  };

  return (
    <itemS.ModalContainer>
      <itemS.InterviewSelect
        
        options={monthOptions}
        defaultValue={month}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setMonth}
      />
      <itemS.DropText>월</itemS.DropText>
      <itemS.InterviewSelect
        
        options={dayOptions}
        defaultValue={day}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setDay}
      />
      <itemS.DropText>일</itemS.DropText>
      <itemS.InterviewSelect
        
        options={hourOptions}
        defaultValue={hour}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setHour}
      />
      <itemS.DropText>시</itemS.DropText>
      <itemS.InterviewSelect
        
        options={minuteOptions}
        defaultValue={minute}
        components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        isSearchable={false}
        onChange={setMinute}
      />
      <itemS.DropText>분</itemS.DropText>
      <itemS.ConfirmButton onClick={handleConfirm}>확인</itemS.ConfirmButton>
    </itemS.ModalContainer>
  );
}