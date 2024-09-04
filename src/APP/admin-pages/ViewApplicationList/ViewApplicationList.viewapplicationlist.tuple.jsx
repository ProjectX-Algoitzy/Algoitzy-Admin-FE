import React, { useState, useRef, useEffect, useContext  } from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';
import UpdateModal from './updateModal';
import { useRecoilValue } from 'recoil';
import { IsSendMail } from '../Recoil/Recoil.state';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose, onCheckChange, firstCheckedStage, fetchApplication, sendMailItems }) {
  const { alert } = useContext(AlertContext);  
  
  const [isChecked, setIsChecked] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // State for UpdateModal
  const [isAbled, setIsAbled] = useState(true); 

  const isSendMail = useRecoilValue(IsSendMail);

  const modalRef = useRef(null); 

	const handleCheckChange = (event) => {
		const checked = event.target.checked;
		const regexPattern = /^(1[0-2]|[1-9])월 (0?[1-9]|[12][0-9]|3[01])일 (0?[0-9]|1[0-9]|2[0-4]):([0-5][0-9]|5[0-5])$/;
		const isValidFormat = regexPattern.test(application.interviewTime);
		const status = application.status;

		if (status === "최종 합격" || status === "불합격" || status === "서류 불합격") {
			alert("모집 전형이 마무리된 지원자입니다.");
		} else if (status !== "서류 합격") {
			setIsChecked(checked);
			onCheckChange(application.answerId, checked, status);
		} else if (isValidFormat) {
			setIsChecked(checked);
			onCheckChange(application.answerId, checked, status);
			setIsAbled(false); 
		} else {
			// alert("면접 일정 변경 후 메일 발송해주세요.");
			setIsChecked(checked);
			onCheckChange(application.answerId, checked, status)
		}
			
	};


	useEffect(() => {
		if (firstCheckedStage && application.status !== firstCheckedStage) {
			setIsChecked(false);
		}
	}, [firstCheckedStage]);


	// 메일 발송 후 체크 해제
	useEffect(() => {
		// console.log('튜플isSendMail',isSendMail);
		// console.log('튜플sendMailItems',sendMailItems);
		if (isSendMail) {
			if (sendMailItems.includes(application.answerId)) {
				setIsChecked(false);
			}
		}
	}, [isSendMail]);

	const handleEditClick = () => {
		if (isAbled) {
			setIsUpdateModalOpen(true);
		} 
	};

	const handleUpdateConfirm = (schedule) => {
		setIsUpdateModalOpen(false);
		application.interviewTime = schedule;
		// fetchApplication();
	};

	useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsUpdateModalOpen(false);
      }
    };

    if (isUpdateModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUpdateModalOpen]);

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
					<div ref={modalRef}>
						<UpdateModal interviewId={application.interviewId} onConfirm={handleUpdateConfirm} fetchApplication={fetchApplication} interviewTime={application.interviewTime} />
					</div>
				)}
			</itemS.TupleInterviewContainer>
			{isSelected && (
				<ViewApplicationDetail
					applicationId={application.answerId}
					status={application.status}
					isOpen={isSelected}
					onClose={onClose}
					fetchApplication={fetchApplication}
				/>
			)}
				
		</itemS.TupleContainer>
	);
}