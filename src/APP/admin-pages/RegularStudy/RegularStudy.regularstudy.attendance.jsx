import React, { useState } from 'react';
import * as itemS from '../RegularStudy/Styled/RegularStudy.regularstudy.attendance.styles';

// 각 탭에 해당하는 데이터
const data = {
  '문제 인증': [
    ["문제 인증", "1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"],
    ["김두현", <itemS.ImgIcon src='/img/attendanceIcon.png' alt="출석" />, "", "", "", "", "", "", ""],
    ["추세빈", <itemS.ImgIcon src='/img/noattendanceicon.png' alt="비출석" />, "", "", "", "", "", "", ""],
    ["박창현", "", "", "", "", "", "", "", ""]
  ],
  '블로그 포스팅': [
    ["블로그 포스팅", "1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"],
    ["김두현", "", <itemS.ImgIcon src='/img/attendanceIcon.png' alt="출석" />, "", "", "", "", "", ""],
    ["추세빈", "", <itemS.ImgIcon src='/img/noattendanceicon.png' alt="비출석" />, "", "", "", "", "", ""],
    ["박창현", "", "", "", "", "", "", "", ""]
  ],
  '주말 모의테스트': [
    ["주말 모의테스트", "1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"],
    ["김두현", "", "", <itemS.ImgIcon src='/img/attendanceIcon.png' alt="출석" />, "", "", "", "", ""],
    ["추세빈", "", "", <itemS.ImgIcon src='/img/noattendanceicon.png' alt="비출석" />, "", "", "", "", ""],
    ["박창현", "", "", "", <itemS.ImgIcon src='/img/attendanceIcon.png' alt="출석" />, "", "", "", ""]
  ]
};

const Table = ({ currentTab, onArrowClick }) => (
  <itemS.StyledTable>
    <tbody>
      {data[currentTab].map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, colIndex) => (
            <itemS.StyledTd key={colIndex} rowIndex={rowIndex} colIndex={colIndex}>
              {rowIndex === 0 && colIndex === 0 ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <button onClick={() => onArrowClick('prev')}>&lt;</button>
                  <span style={{ margin: '0 8px' }}>{currentTab}</span>
                  <button onClick={() => onArrowClick('next')}>&gt;</button>
                </div>
              ) : (
                cell
              )}
            </itemS.StyledTd>
          ))}
        </tr>
      ))}
    </tbody>
  </itemS.StyledTable>
);

export default function RegularStudyAttendance() {
  const [currentTab, setCurrentTab] = useState('문제 인증');

  const handleArrowClick = (direction) => {
    const tabs = Object.keys(data);
    const currentIndex = tabs.indexOf(currentTab);
    const newIndex = direction === 'next' ? (currentIndex + 1) % tabs.length : (currentIndex - 1 + tabs.length) % tabs.length;
    setCurrentTab(tabs[newIndex]);
  };

  return (
    <itemS.Container>
      <itemS.Title>출석부</itemS.Title>
      <Table currentTab={currentTab} onArrowClick={handleArrowClick} />
      {/* <itemS.BtnContainer>
        <itemS.CertificationBtn>출석 인증하기</itemS.CertificationBtn>
      </itemS.BtnContainer> */}
    </itemS.Container>
  );
}
