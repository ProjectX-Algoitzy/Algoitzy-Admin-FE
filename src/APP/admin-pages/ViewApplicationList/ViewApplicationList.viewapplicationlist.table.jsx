import React, { useState } from 'react';
import * as itemS from "./Styled/ViewApplicationList.viewapplicationlist.table.styles";
import ViewApplicationListTuple from './ViewApplicationList.viewapplicationlist.tuple';

export default function ViewApplicationListTable({ applications, onCheckChange, firstCheckedStage, onSortClick, fetchApplication  }) {
    const [selectedApplicationId, setSelectedApplicationId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSortDropVisible, setIsSortDropVisible] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedApplicationId(null);
    };

    const openModal = (applicationId) => {
        setIsModalOpen(true);
        setSelectedApplicationId(applicationId);
    };

    const toggleSortDrop = () => {
        setIsSortDropVisible(prevState => !prevState);
    };

		const onSortDesc = () => {
			onSortClick('desc');
			setIsSortDropVisible(prevState => !prevState);
		};

		const onSortAsc = () => {
			onSortClick('asc');
			setIsSortDropVisible(prevState => !prevState);
		};

		const onSortNothing = () => {
			setIsSortDropVisible(prevState => !prevState);
		};

    return (
        <itemS.Container>
            <itemS.Table>
                <itemS.CategoryContainer>
                    <itemS.BlankBox></itemS.BlankBox>
                    <itemS.CategoryShort>이름</itemS.CategoryShort>
                    <itemS.CategoryShort>학년</itemS.CategoryShort>
                    <itemS.CategoryLong>학과</itemS.CategoryLong>
                    <itemS.Category>참여 희망 스터디</itemS.Category>
                    <itemS.Category>진행 단계</itemS.Category>
                    <itemS.CategoryInterviewContainer>
                        <itemS.CategoryDrop>면접 일정</itemS.CategoryDrop>
                        <itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
                        {isSortDropVisible && (
                            <itemS.SortDrop>
                                <itemS.SortText onClick={onSortNothing}>선택 안함</itemS.SortText>
                                <itemS.SortCenterText onClick={onSortDesc}>면접 날짜 내림차순</itemS.SortCenterText>
                                <itemS.SortText onClick={onSortAsc}>면접 날짜 올림차순</itemS.SortText>
                            </itemS.SortDrop>
                        )}
                    </itemS.CategoryInterviewContainer>
                </itemS.CategoryContainer>
                <itemS.TupleContainer>
                    {applications.map(application => (
                        <ViewApplicationListTuple
                            key={application.answerId}
                            application={application}
                            isSelected={selectedApplicationId === application.answerId && isModalOpen}
                            onOpen={() => openModal(application.answerId)}
                            onClose={closeModal}
                            onCheckChange={onCheckChange}
                            firstCheckedStage={firstCheckedStage}
                            fetchApplication={fetchApplication}
                        />
                    ))}
                </itemS.TupleContainer>
            </itemS.Table>
        </itemS.Container>
    );
}