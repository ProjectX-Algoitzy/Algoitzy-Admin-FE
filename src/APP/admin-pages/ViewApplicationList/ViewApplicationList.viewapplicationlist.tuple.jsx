import React, { useState, useEffect } from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';
import UpdateModal from './updateModal';

export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose, onCheckChange, firstCheckedStage }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // State for UpdateModal

    const handleCheckChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
        onCheckChange(application.id, checked, application.selection_stage);
    };

    useEffect(() => {
        if (firstCheckedStage && application.selection_stage !== firstCheckedStage) {
            setIsChecked(false);
        }
    }, [firstCheckedStage]);

    const handleEditClick = () => {
        setIsUpdateModalOpen(true);
    };

    const handleUpdateConfirm = (schedule) => {
        setIsUpdateModalOpen(false);
        // Here you would update the application data
        application.interview_schedule = schedule;
    };

    return (
        <itemS.TupleContainer>
            <itemS.CheckBox
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckChange}
                disabled={firstCheckedStage && application.selection_stage !== firstCheckedStage}
            />
            <itemS.TupleShort onClick={onOpen}>{application.name}</itemS.TupleShort>
            <itemS.TupleShort onClick={onOpen}>{application.grade}</itemS.TupleShort>
            <itemS.TupleLong onClick={onOpen}>{application.department}</itemS.TupleLong>
            <itemS.Tuple onClick={onOpen}>{application.desired_study}</itemS.Tuple>
            <itemS.Tuple onClick={onOpen}>{application.selection_stage}</itemS.Tuple>
            <itemS.TupleInterviewContainer>
                <itemS.TupleInterview>{application.interview_schedule}</itemS.TupleInterview>
                <itemS.EditIcon src="/img/edit.svg" alt="Edit Icon" onClick={handleEditClick} />
                {isUpdateModalOpen && (
                <UpdateModal onClose={() => setIsUpdateModalOpen(false)} onConfirm={handleUpdateConfirm} />
                )}
            </itemS.TupleInterviewContainer>
            {isSelected && (
                <ViewApplicationDetail
                    applicationId={application.id}
                    isOpen={isSelected}
                    onClose={onClose}
                />
            )}
            
        </itemS.TupleContainer>
    );
}