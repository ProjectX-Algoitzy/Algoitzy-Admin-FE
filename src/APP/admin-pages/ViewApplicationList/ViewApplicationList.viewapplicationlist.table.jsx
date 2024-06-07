import React, { useState } from 'react';
import * as itemS from "./Styled/ViewApplicationList.viewapplicationlist.table.styles";
import ViewApplicationListTuple from './ViewApplicationList.viewapplicationlist.tuple';

export default function ViewApplicationListTable({ applications, onCheckChange, firstCheckedStage }) {
    const [selectedApplicationId, setSelectedApplicationId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedApplicationId(null);
    };

    const openModal = (applicationId) => {
        setIsModalOpen(true);
        setSelectedApplicationId(applicationId);
    };

    const handleSelectAllChange = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        applications.forEach(application => onCheckChange(application.id, isChecked, application.selection_stage));
    };

    return (
        <itemS.Container>
            <itemS.Table>
                <itemS.CategoryContainer>
                    <itemS.CheckBox
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                    />
                    <itemS.CategoryShort>이름</itemS.CategoryShort>
                    <itemS.CategoryShort>학년</itemS.CategoryShort>
                    <itemS.CategoryLong>학과</itemS.CategoryLong>
                    <itemS.Category>참여 희망 스터디</itemS.Category>
                    <itemS.Category>진행 단계</itemS.Category>
                    <itemS.CategoryDrop>면접 일정</itemS.CategoryDrop>
                </itemS.CategoryContainer>
                <itemS.TupleContainer>
                    {applications.map(application => (
                        <ViewApplicationListTuple
                            key={application.id}
                            application={application}
                            isSelected={selectedApplicationId === application.id && isModalOpen}
                            onOpen={() => openModal(application.id)}
                            onClose={closeModal}
                            onCheckChange={onCheckChange}
                            selectAll={selectAll}
                            firstCheckedStage={firstCheckedStage}
                        />
                    ))}
                </itemS.TupleContainer>
            </itemS.Table>
        </itemS.Container>
    );
}