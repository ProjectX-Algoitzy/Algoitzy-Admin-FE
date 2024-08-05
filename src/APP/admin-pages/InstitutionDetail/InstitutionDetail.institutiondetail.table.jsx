import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { IsOpenModal } from '../Recoil/Recoil.state';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.table.styles";
import InstitutionDetailTuple from './InstitutionDetail.institutiondetail.tuple';

export default function InstitutionDetailTable({ itemList, fetchWorkbook }) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsOpenModal);
  const [selectedWorkbookId, setSelectedWorkbookId] = useState(null);

  const openModal = (workbookId) => {
    setIsModalOpen(true);
    setSelectedWorkbookId(workbookId);
  };

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
              isSelected={selectedWorkbookId === item.workbookId && isModalOpen}
              onOpen={() => openModal(item.workbookId)}
              fetchWorkbook={fetchWorkbook}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}
