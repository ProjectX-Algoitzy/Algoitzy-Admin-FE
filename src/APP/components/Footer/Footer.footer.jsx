import React from 'react'
import * as itemS from "./Styled/Footer.footer"

export default function Footer() {
  return (
    <itemS.FooterContainer>
        <itemS.FooterWrap>
            <itemS.FooterLeftWrap>
                <itemS.Rabel>KOALA (한국항공대학교 알고리즘 협회)</itemS.Rabel>
            </itemS.FooterLeftWrap>
            <itemS.FooterRightWrap>
                <itemS.Rabel></itemS.Rabel>
            </itemS.FooterRightWrap>
        </itemS.FooterWrap>
    </itemS.FooterContainer>
  )
}
