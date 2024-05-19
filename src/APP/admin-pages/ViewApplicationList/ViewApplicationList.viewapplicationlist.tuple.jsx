import React, { useState, useEffect } from 'react'
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import { dummyData } from './dummy';
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';

export default function ViewApplicationListTuple() {
    const [applications, setApplications] = useState([]);

    // 모달 상태 관리
    const [selectedApplicationId, setSelectedApplicationId] = useState(null);

    // 모달 열기
    const openModal = (applicationId) => {
        setSelectedApplicationId(applicationId);
    };

    // 모달 닫기
    const closeModal = () => {
        setSelectedApplicationId(null);
    };

    useEffect(() => {
        setApplications(dummyData);
    }, []);

    return (
        <itemS.Container>
            {applications.map(application => (
                <itemS.TupleContainer key={application.id}>
                    <itemS.CheckBox type="checkbox" />
                    <itemS.Tuple>
                        <itemS.Name onClick={() => openModal(application.id)}>{application.name}</itemS.Name>
                        <itemS.DetailIcon></itemS.DetailIcon>
                    </itemS.Tuple>
                    <itemS.Tuple>{application.grade}</itemS.Tuple>
                    <itemS.Tuple>{application.department}</itemS.Tuple>
                    <itemS.Tuple>{application.desired_study}</itemS.Tuple>
                    <itemS.Tuple>{application.selection_stage}</itemS.Tuple>
                    <itemS.TupleDrop>{application.interview_schedule}</itemS.TupleDrop>
                    {/* 모달창 */}
                    {selectedApplicationId === application.id && (
                        <ViewApplicationDetail 
                            applicationId={application.id} 
                            isOpen={selectedApplicationId === application.id} 
                            onClose={closeModal} 
                        />
                    )}
                </itemS.TupleContainer>
            ))}
        </itemS.Container>
    );
}