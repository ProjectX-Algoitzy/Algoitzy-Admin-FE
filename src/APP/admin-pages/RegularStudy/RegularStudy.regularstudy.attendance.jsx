import React, { useContext, useEffect, useState } from 'react';
import * as itemS from '../RegularStudy/Styled/RegularStudy.regularstudy.attendance.styles';
import request from '../../Api/request';
import { useParams } from 'react-router-dom';
import { AlertContext } from '../../Common/Alert/AlertContext';

const transformData = (attendanceList) => {
  const data = {
    '문제 인증': [['문제 인증', '1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']],
    '블로그 포스팅': [['블로그 포스팅', '1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']],
    '주말 모의테스트': [['주말 모의테스트', '1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']]
  };

  if (attendanceList.length === 0) {
    Object.keys(data).forEach(key => {
      const emptyRow = Array(data[key][0].length).fill("");
      emptyRow[0] = "학생이 없습니다";
      data[key].push(emptyRow);
    });
    return data;
  }

  const students = {};

  attendanceList.forEach(({ attendanceId, name, handle, problemYN, blogYN, workbookYN, week }) => {
    const uniqueKey = `${name}-${handle}`;
    if (!students[uniqueKey]) {
      students[uniqueKey] = {
        'attendanceId': attendanceId, // attendanceId 추가
        '문제 인증': Array(9).fill(""),
        '블로그 포스팅': Array(9).fill(""),
        '주말 모의테스트': Array(9).fill("")
      };
      ['문제 인증', '블로그 포스팅', '주말 모의테스트'].forEach((key) => {
        students[uniqueKey][key][0] = (
          <>
            {name} <br />
            <itemS.StyledSpanBaekjoon>{handle}</itemS.StyledSpanBaekjoon>
          </>
        );
      });
    }

    // week와 YN 필드들이 null인 경우 빈 값 유지
    if (week !== null) {
      if (problemYN !== null) {
        students[uniqueKey]['문제 인증'][week] = problemYN ? (
          <itemS.ImgIcon src='/img/attendanceicon.png' alt="출석" attendanceId={attendanceId}/>
        ) : (
          <itemS.ImgIcon src='/img/noattendanceicon.png' alt="결석" attendanceId={attendanceId}/>
        );
      }

      if (blogYN !== null) {
        students[uniqueKey]['블로그 포스팅'][week] = blogYN ? (
          <itemS.ImgIcon src='/img/attendanceicon.png' alt="출석" attendanceId={attendanceId}/>
        ) : (
          <itemS.ImgIcon src='/img/noattendanceicon.png' alt="결석" attendanceId={attendanceId}/>
        );
      }

      if (workbookYN !== null) {
        students[uniqueKey]['주말 모의테스트'][week] = workbookYN ? (
          <itemS.ImgIcon src='/img/attendanceicon.png' alt="출석" attendanceId={attendanceId}/>
        ) : (
          <itemS.ImgIcon src='/img/noattendanceicon.png' alt="결석" attendanceId={attendanceId}/>
        );
      }
    }
  });

  Object.keys(students).forEach(uniqueKey => {
    data['문제 인증'].push(students[uniqueKey]['문제 인증']);
    data['블로그 포스팅'].push(students[uniqueKey]['블로그 포스팅']);
    data['주말 모의테스트'].push(students[uniqueKey]['주말 모의테스트']);
  });

  return data;
};

const Table = ({ currentTab, onArrowClick, data, onIconClick }) => (
  <itemS.StyledTable>
    <tbody>
      {data[currentTab]?.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, colIndex) => (
            <itemS.StyledTd key={colIndex} rowIndex={rowIndex} colIndex={colIndex}>
              {rowIndex === 0 && colIndex === 0 ? (
                <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
                  <img 
                    src="/img/tablearrow.png" 
                    style={{ cursor: "pointer", position: 'absolute', left: 0,  width: "0.458rem", height: "0.458rem", marginTop:"0.208rem", marginLeft:"0.458rem" }} 
                    alt="왼쪽" 
                    onClick={() => onArrowClick('prev')} 
                  />
                  <span>{currentTab}</span>
                  <img 
                    src="/img/tablearrow.png" 
                    style={{ rotate: "180deg", cursor: "pointer", position: 'absolute', right: 0, width: "0.458rem", height: "0.458rem", marginTop:"0.208rem", marginRight:"0.458rem" }} 
                    alt="오른쪽" 
                    onClick={() => onArrowClick('next')} 
                  />
                </div>
              ) : (
                React.isValidElement(cell) ? (
                  React.cloneElement(cell, { onClick: () => onIconClick(rowIndex, colIndex) })
                ) : (
                  cell
                )
              )}
            </itemS.StyledTd>
          ))}
        </tr>
      ))}
    </tbody>
  </itemS.StyledTable>
);

export default function RegularStudyAttendance() {
  const { id } = useParams(); //해당 스터디의 ID를 받아온다
  const [currentTab, setCurrentTab] = useState('문제 인증');
  const [data, setData] = useState({}); // 초기 데이터 상태를 빈 객체로 설정
  const [isModified, setIsModified] = useState(false);
  const [modifiedAttendance, setModifiedAttendance] = useState([]);
  const { alert } = useContext(AlertContext);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await request.get(`study/${id}/attendance`);
        console.log("정규스터디 출석부 조회: ", response);

        if (response["isSuccess"]) {
          const transformedData = transformData(response.result.attendanceList);
          setData(transformedData);
          console.log("정규스터디 출석부 성공");
        }
      } catch (error) {
        console.error("정규스터디 출석부 조회 오류", error);
      }
    };
    fetchAttendance();
  }, [id]);

  const handleArrowClick = (direction) => {
    const tabs = Object.keys(data);
    const currentIndex = tabs.indexOf(currentTab);
    const newIndex = direction === 'next' ? (currentIndex + 1) % tabs.length : (currentIndex - 1 + tabs.length) % tabs.length;
    setCurrentTab(tabs[newIndex]);
  };

  const handleIconClick = (rowIndex, colIndex) => {
    const updatedData = { ...data };
    const tabData = updatedData[currentTab];
    const currentIcon = tabData[rowIndex][colIndex];
  
    if (React.isValidElement(currentIcon) && currentIcon.props && currentIcon.props.src) {
      const currentSrc = currentIcon.props.src;
      let newSrc = '';
  
      if (currentSrc && currentSrc.includes('attendanceicon')) {
        newSrc = currentSrc.replace('attendanceicon', 'checknoattendanceicon');
      } 
      if (currentSrc && currentSrc.includes('noattendanceicon')) {
        newSrc = currentSrc.replace('noattendanceicon', 'checkattendanceicon');
      } 
      if (currentSrc && currentSrc.includes('checkattendanceicon')) {
        newSrc = currentSrc.replace('checkattendanceicon', 'noattendanceicon');
      } 
      if (currentSrc && currentSrc.includes('checknoattendanceicon')) {
        newSrc = currentSrc.replace('checknoattendanceicon', 'attendanceicon');
      }
  
      const updatedIcon = (
        <itemS.ImgIcon 
          src={newSrc} 
          alt="변경된 아이콘" 
          onClick={() => handleIconClick(rowIndex, colIndex)} 
          attendanceId={currentIcon.props.attendanceId}
        />
      );
  
      tabData[rowIndex][colIndex] = updatedIcon;
      updatedData[currentTab] = tabData;
      setData(updatedData);
  
      const updatedAttendanceList = { ...modifiedAttendance };
      const attendanceType = currentTab === '문제 인증' ? 'PROBLEM' : currentTab === '블로그 포스팅' ? 'BLOG' : 'WORKBOOK';
      const attendanceId = updatedData[currentTab][rowIndex][colIndex].props.attendanceId;  
  
      if (!updatedAttendanceList[currentTab]) {
        updatedAttendanceList[currentTab] = [];
      }
  
      if (
        (currentSrc.includes('checkattendanceicon') && newSrc.includes('noattendanceicon')) ||
        (currentSrc.includes('checknoattendanceicon') && newSrc.includes('attendanceicon'))
      ) {
        const attendanceIndex = updatedAttendanceList[currentTab].findIndex(item => item.attendanceId === attendanceId);
        if (attendanceIndex !== -1) {
          updatedAttendanceList[currentTab].splice(attendanceIndex, 1);
        }
      } else {
        const attendanceIndex = updatedAttendanceList[currentTab].findIndex(item => item.attendanceId === attendanceId);
        if (attendanceIndex !== -1) {
          updatedAttendanceList[currentTab][attendanceIndex].attendanceType = attendanceType;
        } else {
          updatedAttendanceList[currentTab].push({ attendanceId, attendanceType });
        }
      }
  
      setModifiedAttendance(updatedAttendanceList);
  
      const allIconsUnmodified = Object.values(updatedData).every(tab =>
        tab.every(row =>
          row.every(cell =>
            !React.isValidElement(cell) || !cell.props.src || !cell.props.src.includes('check')
          )
        )
      );
  
      setIsModified(!allIconsUnmodified);
    }
  };
    
  const updateAttendance = async () => {
    try {
      if (!isModified) return;

      const updatedDataForServer = Object.values(modifiedAttendance).flatMap(tabData => 
        tabData.map(item => ({
          attendanceId: item.attendanceId,
          attendanceType: item.attendanceType
        }))
      );

      const response = await request.patch(`/attendance`, { attendanceList: updatedDataForServer });
      if (response.isSuccess) {
        await alert("출석부가 갱신되었습니다");
        setIsModified(false);
        setModifiedAttendance([]);
        window.location.reload();
      } 
    } catch (error) {
      console.error("출석 정보 갱신 실패:", error);
    }
  };
  
  return (
    <itemS.Container>
      <itemS.Title>출석부</itemS.Title>
      {Object.keys(data).length > 0 ? (
        <div>
          <Table currentTab={currentTab} onArrowClick={handleArrowClick} data={data} onIconClick={handleIconClick} />
          <itemS.ModifyBtn isModified={isModified} disabled={!isModified} onClick={updateAttendance}>
            수정하기
          </itemS.ModifyBtn>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </itemS.Container>
  );
}