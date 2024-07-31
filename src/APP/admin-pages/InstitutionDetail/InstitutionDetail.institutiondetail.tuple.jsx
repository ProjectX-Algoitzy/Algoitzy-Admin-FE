import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.tuple.styles";
import request from "../../Api/request";
import WorkbookDetail from '../WorkbookDetail/WorkbookDetail.workbookdetail.main';


export default function InstitutionDetailTuple({ item, isSelected, onOpen, onClose }) {


  return (
    <itemS.TupleContainer onClick={onOpen}>
      <itemS.TupleNumber>{item.number}</itemS.TupleNumber>
      <itemS.TupleTitle>{item.title}</itemS.TupleTitle>
      {isSelected && (
				<WorkbookDetail
					
					isOpen={isSelected}
					onClose={onClose}

				/>
			)}
    </itemS.TupleContainer>
  );
}
