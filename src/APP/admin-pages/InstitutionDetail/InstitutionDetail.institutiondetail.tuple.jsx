import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.tuple.styles";
import request from "../../Api/request";


export default function InstitutionDetailTuple({ item }) {


  return (
    <itemS.TupleContainer>
      <itemS.TupleNumber>{item.number}</itemS.TupleNumber>
      <itemS.TupleTitle>{item.title}</itemS.TupleTitle>
    </itemS.TupleContainer>
  );
}
