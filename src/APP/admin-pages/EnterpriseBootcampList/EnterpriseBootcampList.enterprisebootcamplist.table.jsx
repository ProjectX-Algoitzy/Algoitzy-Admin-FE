import React, { useState } from 'react';
import * as itemS from "./Styled/EnterpriseBootcampList.enterprisebootcamplist.table.styles";
import EnterBootListTuple from './EnterpriseBootcampList.enterprisebootcamplist.tuple';

export default function EnterBootListTable({ filteredLists }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          
          <itemS.CategoryNumber>번호</itemS.CategoryNumber>
          <itemS.CategoryName>기업명</itemS.CategoryName>
          <itemS.CategoryView>조회수</itemS.CategoryView>
          
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {filteredLists.map(item => (
            <EnterBootListTuple
              key={item.answerId}
              item={item}
                
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}