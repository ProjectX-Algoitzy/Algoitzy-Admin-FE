import React, { useState, useEffect } from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';

// ViewApplicationListTuple 컴포넌트는 개별 지원자의 정보를 표시하는 컴포넌트입니다.
export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose, onCheckChange, selectAll }) {
	const [isChecked, setIsChecked] = useState(false); // 개별 지원서 체크 상태를 저장하는 상태

	useEffect(() => {
		setIsChecked(selectAll); // selectAll 상태가 변경될 때마다 체크 상태를 업데이트
	}, [selectAll]);

	const handleCheckChange = (event) => {
		const checked = event.target.checked; // 체크박스의 체크 상태를 가져옴
		setIsChecked(checked); // 체크 상태 업데이트
		onCheckChange(application.id, checked); // 체크 상태 변경 시 부모 컴포넌트로 알림
	};

	return (
		<itemS.TupleContainer>
			<itemS.CheckBox type="checkbox" checked={isChecked} onChange={handleCheckChange} /> {/* 체크박스 */}
			<itemS.TupleShort onClick={onOpen}>{application.name}</itemS.TupleShort> {/* 지원자 이름 */}
			<itemS.TupleShort onClick={onOpen}>{application.grade}</itemS.TupleShort> {/* 지원자 학년 */}
			<itemS.TupleLong onClick={onOpen}>{application.department}</itemS.TupleLong> {/* 지원자 학과 */}
			<itemS.Tuple onClick={onOpen}>{application.desired_study}</itemS.Tuple> {/* 지원자가 희망하는 스터디 */}
			<itemS.Tuple onClick={onOpen}>{application.selection_stage}</itemS.Tuple> {/* 지원자의 진행 단계 */}
			<itemS.TupleDrop>{application.interview_schedule}</itemS.TupleDrop> {/* 면접 일정 */}
			{isSelected && (
				<ViewApplicationDetail
					applicationId={application.id} // 선택된 지원서의 ID
					isOpen={isSelected} // 모달 창이 열려 있는지 여부
					onClose={onClose} // 모달 창을 닫는 함수
				/>
			)}
		</itemS.TupleContainer>
	);
}