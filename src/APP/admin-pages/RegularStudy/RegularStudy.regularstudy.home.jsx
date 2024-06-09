import React from 'react'
import * as itemS from "../RegularStudy/Styled/RegularStudy.regularstudy.home.styles"

export default function RegularStudyHome() {
  return (
    <itemS.Container>
      <itemS.Title>홈</itemS.Title>

      <itemS.ContentContainer>
        <itemS.BlueContainer>대상</itemS.BlueContainer>
        <itemS.InputContainer type='text' placeholder='백준 닉네임을 입력해주세요'/>
      </itemS.ContentContainer>

      <itemS.ContentContainer style={{marginBottom:"146px"}}>
        <itemS.BlueContainer>주제</itemS.BlueContainer>
        <itemS.InputContainer type='text' placeholder='비밀번호를 입력해주세요'/>
      </itemS.ContentContainer>

      <itemS.ContentContainer>
        <itemS.BlueContainer>규칙</itemS.BlueContainer>
        <itemS.InputContainer type='text' placeholder='비밀번호를 입력해주세요'/>
      </itemS.ContentContainer>
    </itemS.Container>
  )
}
