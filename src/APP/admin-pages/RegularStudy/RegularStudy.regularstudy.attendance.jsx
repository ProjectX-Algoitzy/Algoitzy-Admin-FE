import React from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.attendance.styles"

export default function RegularStudyAttendance() {

  const Table = () => {
    const tableData = [
      ["주차별 출석", "1주차", "2주차", "3주차", "4주차", "5주차", "6주차", "7주차", "8주차"],
      ["문제 할당량", <itemS.ImgIcon src='/img/attendanceIcon.png' alt="출석"/>, "", "", "", "", "", "", ""],
      ["블로그 포스팅", <itemS.ImgIcon src='/img/noattendanceicon.png' alt="비출석" />, "", "", "", "", "", "", ""],
      ["주말 모의테스트", "", "", "", "", "", "", "", ""]
    ];
    return (
      <itemS.StyledTable>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <itemS.StyledTd key={colIndex} rowIndex={rowIndex} colIndex={colIndex}>
                  {cell}
                </itemS.StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </itemS.StyledTable>
    );
  };

  return (
    <itemS.Container>
      <itemS.Title>출석부</itemS.Title>
      <Table />
      {/* <itemS.BtnContainer>
        <itemS.CertificationBtn>출석 인증하기</itemS.CertificationBtn>
      </itemS.BtnContainer> */}
    </itemS.Container>
  )
}
