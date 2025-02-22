import React from 'react';
import * as itemS from "./Styled/RegularStudy.regularstudy.checkattendancehistorymodal.styles";

export default function RegularStudyCheckAttendanceHistoryModal({onClose}) {
  return (
    <itemS.ModalOverlay>
        <itemS.ModalContent>
            <itemS.FirstSentence>
                <itemS.BigTitle>누구누구의 출석 인증</itemS.BigTitle>
                <img src="/img/close.png" onClick={onClose} style={{ marginTop: "0.667rem", marginRight: "1rem", cursor: "pointer" }} alt="x" />
            </itemS.FirstSentence>

            <itemS.ContentContainer>
              <itemS.WeeksContainer>
                <itemS.Weeks>1주차</itemS.Weeks>
                <itemS.Weeks>2주차</itemS.Weeks>
                <itemS.Weeks>3주차</itemS.Weeks>
                <itemS.Weeks>4주차</itemS.Weeks>
                <itemS.Weeks>5주차</itemS.Weeks>
                <itemS.Weeks>6주차</itemS.Weeks>
                <itemS.Weeks>7주차</itemS.Weeks>
                <itemS.Weeks>8주차</itemS.Weeks>
              </itemS.WeeksContainer>
            </itemS.ContentContainer>

            <itemS.ContentContainer>
              <itemS.LittleContainer>
                  <itemS.SmallTitle>문제 인증1</itemS.SmallTitle>
                  <itemS.StyledInputContainer>
                      <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                      <itemS.StyledInput 
                          type="text" 
                          // value={item.title} 
                          // onChange={(e) => handleProblemTitleChange(item.id, e.target.value)} 
                      />
                  </itemS.StyledInputContainer>
              </itemS.LittleContainer>

              <itemS.LittleContainer>
                  <itemS.SmallTitle>문제 인증2</itemS.SmallTitle>
                  <itemS.StyledInputContainer>
                      <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                      <itemS.StyledInput 
                          type="text" 
                          // value={item.title} 
                          // onChange={(e) => handleProblemTitleChange(item.id, e.target.value)} 
                      />
                  </itemS.StyledInputContainer>
              </itemS.LittleContainer>

              <itemS.LittleContainer>
                  <itemS.SmallTitle>문제 인증3</itemS.SmallTitle>
                  <itemS.StyledInputContainer>
                      <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                      <itemS.StyledInput 
                          type="text" 
                          // value={item.title} 
                          // onChange={(e) => handleProblemTitleChange(item.id, e.target.value)} 
                      />
                  </itemS.StyledInputContainer>
              </itemS.LittleContainer>

              <itemS.LittleContainer>
                  <itemS.SmallTitle>블로그 인증</itemS.SmallTitle>
                  <itemS.StyledInputContainer>
                      <itemS.LinkImg src="/img/imglink.png" alt="클립" />
                      <itemS.StyledInput 
                          type="text" 
                          // value={item.title} 
                          // onChange={(e) => handleProblemTitleChange(item.id, e.target.value)} 
                      />
                  </itemS.StyledInputContainer>
              </itemS.LittleContainer>


            </itemS.ContentContainer>
        </itemS.ModalContent>
    </itemS.ModalOverlay>
  )
}
