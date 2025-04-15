import React from 'react'
import * as itemS from "./Styled/InquiryBoardDetail.inquiryboarddetail.content.styles";
import MarkdownContent from '../BoardDetail/BoardDetail.boarddetail.markdowncontent';

export default function InquiryContent({ content }) {
  return (
    <itemS.Container>
      <itemS.ContentContainer>
        <MarkdownContent markdownContent={content || ''} />
      </itemS.ContentContainer>
    </itemS.Container>
  )
}
