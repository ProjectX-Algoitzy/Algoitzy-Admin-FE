import React from 'react'
import * as itemS from "./Styled/Inquiry.inquiry.table.styles";
import InquiryTuple from "./Inquiry.inquiry.tuple";

export default function InquiryTable({ items, isTabClick, searchKeyword, isRegularMember }) {
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          <itemS.BlankBox>구분</itemS.BlankBox>
          <itemS.CategoryTitle>제목</itemS.CategoryTitle>
          {isRegularMember ? (
            <itemS.CategoryWriter>작성자</itemS.CategoryWriter>
          ) : (
            <itemS.CategoryBlank></itemS.CategoryBlank>
          )}
          <itemS.CategoryDate>작성일</itemS.CategoryDate>
          <itemS.CategoryView>조회수</itemS.CategoryView>
          <itemS.CategoryView>처리 현황</itemS.CategoryView>
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {items.map(item => (
            <InquiryTuple
              key={item.boardId}
              item={item}
              isTabClick={isTabClick}
              searchKeyword={searchKeyword}
              isRegularMember={isRegularMember}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  )
}
