import React from 'react';
import * as itemS from "./Styled/WorkbookDetail.workbookdetail.bottomtuple.styles";
import request from '../../Api/request';

export default function BottomTuple({ item, fetchItemList, workbookId }) {

  const handleRedirect = () => {
    window.location.href = item.baekjoonUrl;
  };

  const handleAdd = async () => {
    const requestData = { 
      number: item.number 
    };

    try {
      const response = await request.post(`workbook/${workbookId}/problem`, requestData);
      if (response.isSuccess) {
        console.log("문제집 문제 추가 성공 response:", response);
        fetchItemList();
      } else {
        console.error("문제집 문제 추가 실패:", response);
      }
      
    } catch (error) {
      console.error('문제집 문제 추가 에러:', error);
    }
  };

  return (
    <itemS.Container>
      <itemS.Tuple>
        <itemS.TupleNumber onClick={handleRedirect}>{item.number}</itemS.TupleNumber>
        <itemS.TupleTitle onClick={handleRedirect}>{item.name}</itemS.TupleTitle>
        <itemS.TupleLevel>
          <itemS.Level src={item.levelUrl} alt='레벨' onClick={handleRedirect}/>
        </itemS.TupleLevel>
        <itemS.AddButton src='/img/addbox.svg' alt='추가' onClick={handleAdd} />
      </itemS.Tuple>
    </itemS.Container>
  );
}
