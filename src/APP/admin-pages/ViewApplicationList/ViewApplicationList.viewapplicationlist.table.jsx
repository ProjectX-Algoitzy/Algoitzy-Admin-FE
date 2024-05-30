import React, { useState, useEffect } from 'react';
import * as itemS from "./Styled/ViewApplicationList.viewapplicationlist.table.styles";
import ViewApplicationListTuple from './ViewApplicationList.viewapplicationlist.tuple';
import { dummyData } from './dummy';

export default function ViewApplicationListTable() {
    const [applications, setApplications] = useState([]);
    const [selectedApplicationId, setSelectedApplicationId] = useState(null);
		const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
			setApplications(dummyData);
    }, []);

    const closeModal = () => {
			setIsModalOpen(false);
			console.log("Closing modal");
			setSelectedApplicationId(null); // Ensure selectedApplicationId is set to null
	};

    const openModal = (applicationId) => {
			setIsModalOpen(true);
			console.log(`Opening modal for application ID: ${applicationId}`);
			setSelectedApplicationId(applicationId);
    };

    return (
        <itemS.Container>
            <itemS.Table>
                <itemS.CategoryContainer>
                    <itemS.CheckBox type="checkbox" />
                    <itemS.Category>이름</itemS.Category>
                    <itemS.Category>학년</itemS.Category>
                    <itemS.Category>학과</itemS.Category>
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
                        />
                    ))}
                </itemS.TupleContainer>
            </itemS.Table>
        </itemS.Container>
    );
}