import React, { useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.bottomtable.styles";
import BottomTuple from './WorkbookDetail.workbookdetail.bottomtuple';

export default function BottomTable({ allItemList, fetchItemList, workbookId }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          <itemS.CategoryNumber>백준 번호</itemS.CategoryNumber>
          <itemS.CategoryTitle>제목</itemS.CategoryTitle>
          <itemS.CategoryLevel>레벨</itemS.CategoryLevel>
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {allItemList.map(item => (
            <BottomTuple
              key={item.number}
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