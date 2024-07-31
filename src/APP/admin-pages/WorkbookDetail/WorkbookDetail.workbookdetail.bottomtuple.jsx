import React, { useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.bottomtuple.styles";
import request from "../../Api/request";


export default function BottomTuple({ item }) {

  return (
    <itemS.Container>
      <itemS.Tuple>
        <itemS.TupleNumber>{item.num}</itemS.TupleNumber>
        <itemS.TupleTitle>{item.title}</itemS.TupleTitle>
        <itemS.TupleLevel>{item.level}</itemS.TupleLevel>
        <itemS.AddButton src='/img/addbox.svg' alt='추가' />
      </itemS.Tuple>
    </itemS.Container>
  );
}
