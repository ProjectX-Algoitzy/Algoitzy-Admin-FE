import React from 'react'
import * as itemS from "./Styled/Footer.footer.styles"

export default function footer() {
  return (
    <itemS.FooterContainer>
        <itemS.FooterLeftWrap>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <itemS.Sentence1>KOALA</itemS.Sentence1><itemS.Sentence2>(한국항공대학교 알고리즘 협회)</itemS.Sentence2>
          </div>
          <itemS.Sentence3>문의처 : engus525@naver.com</itemS.Sentence3>
          <itemS.Sentence3 style={{marginTop:"24px"}}>Copyrightⓒ2024.KOALA. All rights reserved.</itemS.Sentence3>
        </itemS.FooterLeftWrap>

        <itemS.FooterRightWrap>
          <a href="https://github.com/kauKoala" target='_blank' rel='noopener noreferrer'><itemS.Icon src='/img/icongithub.png' alt='깃허브 아이콘' /></a>
          <a href="https://kau-algorithm.tistory.com/" target='_blank' rel='noopener noreferrer'><itemS.Icon src='/img/iconblog.png' alt='블로그 아이콘' style={{marginLeft:"16px"}} /></a>
        </itemS.FooterRightWrap>
    </itemS.FooterContainer>
  )
}
