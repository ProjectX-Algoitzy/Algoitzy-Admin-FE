import React, { useState } from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.toptuple.styles";
import request from "../../Api/request";


export default function TopTuple({ item, fetchItemList, workbookId }) {

  const handleDelete = async () => {

    try {
      const response = await request.delete(`workbook/${workbookId}/problem/${item.number}`);
      if (response.isSuccess) {
        console.log("문제집 문제 삭제 성공 response:", response);
        fetchItemList();
      } else {
        console.error("문제집 문제 삭제 실패:", response);
      }
      
    } catch (error) {
      console.error('문제집 문제 삭제 에러:', error);
    }
  };

  return (
    <itemS.Container>
      <itemS.Tuple>
        <itemS.TupleNumber>{item.number}</itemS.TupleNumber>
        <itemS.TupleTitle>{item.name}</itemS.TupleTitle>
        <itemS.TupleLevel>
          <itemS.Level src={item.levelUrl} alt='레벨'/>
        </itemS.TupleLevel>
        
        <itemS.DeleteButton src='/img/deleteX.svg' alt='삭제' onClick={handleDelete} />
      </itemS.Tuple>
    </itemS.Container>
  );
}


