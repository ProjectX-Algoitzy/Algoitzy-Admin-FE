import React, { useState } from 'react';
import * as itemS from "./Styled/UpdateGeneration.updategeneration.table.styles";
import UpdateGenerationTuple from './UpdateGeneration.updategeneration.tuple';

export default function UpdateGenerationTable({ dateList }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          
          <itemS.CategoryWeek>주차</itemS.CategoryWeek>
          <itemS.CategoryStartDate>시작 일자</itemS.CategoryStartDate>
          <itemS.CategoryEndDate>종료 일자</itemS.CategoryEndDate>
          
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {dateList.map(item => (
            <UpdateGenerationTuple
              key={item.week}
              item={item}
                
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}