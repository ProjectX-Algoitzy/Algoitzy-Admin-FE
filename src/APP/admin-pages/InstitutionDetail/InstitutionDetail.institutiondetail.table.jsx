import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.table.styles";
import InstitutionDetailTuple from './InstitutionDetail.institutiondetail.tuple';

export default function InstitutionDetailTable({ itemList }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          <itemS.CategoryNumber>번호</itemS.CategoryNumber>
          <itemS.CategoryTitle>문제집 제목</itemS.CategoryTitle>
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {itemList.map(item => (
            <InstitutionDetailTuple
              key={item.id}
              item={item}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}