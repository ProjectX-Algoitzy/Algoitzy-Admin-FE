import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.tuple.styles";
import request from "../../Api/request";
import WorkbookDetail from '../WorkbookDetail/WorkbookDetail.workbookdetail.main';


export default function InstitutionDetailTuple({ item, isSelected, onOpen, onClose }) {


  return (
    <itemS.TupleContainer onClick={onOpen}>
      <itemS.TupleNumber>{item.workbookId}</itemS.TupleNumber>
      <itemS.TupleTitle>{item.name}</itemS.TupleTitle>
      {isSelected && (
				<WorkbookDetail
          workbookId={item.workbookId}
          workbookName={item.name}
					isOpen={isSelected}
					onClose={onClose}

				/>
			)}
    </itemS.TupleContainer>
  );
}
