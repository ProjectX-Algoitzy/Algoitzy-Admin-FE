import React, { useState, useEffect } from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';
import UpdateModal from './updateModal';

export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose, onCheckChange, firstCheckedStage, fetchApplication }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // State for UpdateModal

    const handleCheckChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
        onCheckChange(application.answerId, checked, application.status);
    };

    useEffect(() => {
        if (firstCheckedStage && application.status !== firstCheckedStage) {
            setIsChecked(false);
        }
    }, [firstCheckedStage]);

    const handleEditClick = () => {
        setIsUpdateModalOpen(true);
    };

    const handleUpdateConfirm = (schedule) => {
        setIsUpdateModalOpen(false);
        application.interviewTime = schedule;
        fetchApplication();
    };

    return (
        <itemS.TupleContainer>
            <itemS.CheckBox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckChange}
                disabled={firstCheckedStage && application.status !== firstCheckedStage}
            />
            <itemS.TupleShort onClick={onOpen}>{application.submitName}</itemS.TupleShort>
            <itemS.TupleShort onClick={onOpen}>{application.grade}</itemS.TupleShort>
            <itemS.TupleLong onClick={onOpen}>{application.major}</itemS.TupleLong>
            <itemS.Tuple onClick={onOpen}>{application.studyName}</itemS.Tuple>
            <itemS.Tuple onClick={onOpen}>{application.status}</itemS.Tuple>
            <itemS.TupleInterviewContainer>
                <itemS.TupleInterview>{application.interviewTime}</itemS.TupleInterview>
                <itemS.EditIcon src="/img/edit.svg" alt="Edit Icon" onClick={handleEditClick} />
                {isUpdateModalOpen && (
                <UpdateModal interviewId={application.interviewId} onConfirm={handleUpdateConfirm} fetchApplication={fetchApplication} />
                )}
            </itemS.TupleInterviewContainer>
            {isSelected && (
                <ViewApplicationDetail
                    applicationId={application.answerId}
                    isOpen={isSelected}
                    onClose={onClose}
                    fetchApplication={fetchApplication}
                />
            )}
            
        </itemS.TupleContainer>
    );
}