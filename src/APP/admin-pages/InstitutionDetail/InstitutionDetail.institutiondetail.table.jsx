import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.table.styles";
import InstitutionDetailTuple from './InstitutionDetail.institutiondetail.tuple';

export default function InstitutionDetailTable({ itemList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkbookId, setSelectedWorkbookId] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkbookId(null); //TODO -  - api 연결 후 사용할 것 -> 변수명은 바꾸고
  };

  const openModal = (workbookId) => { //TODO -  - api 연결 후 사용할 것 -> 변수명은 바꾸고
    setIsModalOpen(true);
    setSelectedWorkbookId(workbookId);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
   
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
              key={item.workbookId}
              item={item}
              isSelected={selectedWorkbookId === item.workbookId && isModalOpen}  //TODO -  - api 연결 후 사용할 것 -> 변수명은 바꾸고
              // isSelected={isModalOpen}
              onOpen={() => openModal(item.workbookId)} //TODO -  - api 연결 후 사용할 것 -> 변수명은 바꾸고
              onClose={closeModal}
              // onOpen={openModal}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}