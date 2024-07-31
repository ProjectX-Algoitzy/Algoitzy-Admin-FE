import React, { useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.toptuple.styles";
import request from "../../Api/request";


export default function TopTuple({ item }) {

  return (
    <itemS.Container>
      <itemS.Tuple>
        <itemS.TupleNumber>{item.num}</itemS.TupleNumber>
        <itemS.TupleTitle>{item.title}</itemS.TupleTitle>
        <itemS.TupleLevel>{item.level}</itemS.TupleLevel>
        <itemS.DeleteButton src='/img/deleteX.svg' alt='삭제' />
      </itemS.Tuple>
    </itemS.Container>
  );
}
