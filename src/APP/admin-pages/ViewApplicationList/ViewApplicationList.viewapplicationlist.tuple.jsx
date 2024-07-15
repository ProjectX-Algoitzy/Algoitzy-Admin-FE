import React, { useState, useEffect, useContext  } from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';
import UpdateModal from './updateModal';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose, onCheckChange, firstCheckedStage, fetchApplication }) {

	const { alert } = useContext(AlertContext);
	
	const [isChecked, setIsChecked] = useState(false);
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // State for UpdateModal
	const [isAbled, setIsAbled] = useState(true); 

	const handleCheckChange = (event) => {
		const checked = event.target.checked;
		const regexPattern = /^(1[0-2]|[1-9])월 (0?[1-9]|[12][0-9]|3[01])일 (0?[0-9]|1[0-9]|2[0-4]):([0-5][0-9]|5[0-5])$/;
		const isValidFormat = regexPattern.test(application.interviewTime);
		const status = application.status;

		if (status === "최종 합격" || status === "최종 불합격" || status === "서류 불합격") {
			console.log("최종 메일 발송완료");
		} else if (status !== "서류 합격") {
			setIsChecked(checked);
			onCheckChange(application.answerId, checked, status);
		} else if (isValidFormat) {
			setIsChecked(checked);
			onCheckChange(application.answerId, checked, status);
			setIsAbled(false); 
		} else {
			alert("면접 일정 변경 후 메일 발송해주세요.");
		}
			
	};

	useEffect(() => {
		if (firstCheckedStage && application.status !== firstCheckedStage) {
			setIsChecked(false);
		}
	}, [firstCheckedStage]);

	const handleEditClick = () => {
		if (isAbled) {
			setIsUpdateModalOpen(true);
		} 
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
				<itemS.EditIcon src="/img/edit.svg" alt="Edit Icon" onClick={handleEditClick}/>
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