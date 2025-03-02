import React from 'react';
import * as itemS from "./Styled/RegularStudy.regularstudy.checkattendancehistorymodal.styles";
import { useState } from 'react';

export default function RegularStudyCheckAttendanceHistoryModal({ currentWeek, attendanceRequesterName, attendanceRequestList, onClose }) {
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);  // 기본값을 현재주차로 설정

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
  };
  
  const selectedWeekData = attendanceRequestList.find((data) => data.week === selectedWeek);

  return (
    <itemS.ModalOverlay>
        <itemS.ModalContent>
            <itemS.FirstSentence>
              <itemS.BigTitle>{attendanceRequesterName} 출석 인증</itemS.BigTitle>
              <itemS.XBtn onClick={onClose} src="/img/close.png" alt="x"/>
            </itemS.FirstSentence>

            <itemS.WeeksContainer>
              {Array.from({ length: 8 }, (_, index) => {
                const week = index + 1;
                const isDisabled = week > currentWeek; // 비활성화
                const isSelected = week == selectedWeek; // 선택된 주차

                return (
                  <itemS.Weeks
                    key={index}
                    disabled={isDisabled}  // 비활성화 상태 전달
                    selected={isSelected}  // 선택된 상태 전달
                    onClick={() => !isDisabled && handleWeekClick(week)}  // 비활성화된 주차는 클릭하지 않음
                  >
                    {week}주차
                  </itemS.Weeks>
                );
              })}
            </itemS.WeeksContainer>

            {selectedWeekData ? (
                <itemS.ContentContainer>
                    {selectedWeekData.problemUrlList.map((url, index) => (
                    <itemS.LittleContainer key={index}>
                        <itemS.SmallTitle>문제 인증{index + 1}</itemS.SmallTitle>
                        <itemS.StyledInputContainer>
                        <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                        <itemS.StyledInput type="text" value={url} readOnly />
                        </itemS.StyledInputContainer>
                    </itemS.LittleContainer>
                    ))}

                    <itemS.LittleContainer>
                        <itemS.SmallTitle>블로그 인증</itemS.SmallTitle>
                        <itemS.StyledInputContainer>
                            <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                            <itemS.StyledInput type="text" value={selectedWeekData.blogUrl} readOnly />
                        </itemS.StyledInputContainer>
                    </itemS.LittleContainer>
                </itemS.ContentContainer>
            ) : (
                <itemS.BlueCommentContainer> 
                    <itemS.BlueComment>*문제 인증을 하지 않았습니다.</itemS.BlueComment>
                </itemS.BlueCommentContainer>
            )}
        </itemS.ModalContent>
    </itemS.ModalOverlay>
  )
}
