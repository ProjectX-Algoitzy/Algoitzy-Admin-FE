import React, { useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.toptable.styles";
import TopTuple from './WorkbookDetail.workbookdetail.toptuple';

export default function TopTable({ items, fetchItemList, workbookId }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          <itemS.CategoryNumber>백준 번호</itemS.CategoryNumber>
          <itemS.CategoryTitle>제목</itemS.CategoryTitle>
          <itemS.CategoryLevel>레벨</itemS.CategoryLevel>
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {items.map(item => (
            <TopTuple
              key={item.id}
              item={item}
              fetchItemList={fetchItemList}
              workbookId={workbookId}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}