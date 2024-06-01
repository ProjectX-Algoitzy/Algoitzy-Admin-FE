import React from 'react';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import ViewApplicationDetail from '../ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';

export default function ViewApplicationListTuple({ application, isSelected, onOpen, onClose }) {

    return (
        <itemS.TupleContainer> {/* onClick 이벤트 핸들러에 handleClcik 함수를 연결합니다. */}
					<itemS.CheckBox type="checkbox" />
					<itemS.Tuple onClick={onOpen}>{application.name}</itemS.Tuple>
					<itemS.Tuple onClick={onOpen}>{application.grade}</itemS.Tuple>
					<itemS.Tuple onClick={onOpen}>{application.department}</itemS.Tuple>
					<itemS.Tuple onClick={onOpen}>{application.desired_study}</itemS.Tuple>
					<itemS.Tuple onClick={onOpen}>{application.selection_stage}</itemS.Tuple>
					<itemS.TupleDrop>{application.interview_schedule}</itemS.TupleDrop>
					{isSelected && (
							<ViewApplicationDetail
									applicationId={application.id}
									isOpen={isSelected}
									onClose={onClose} // 모달이 닫힐 때 onClose 함수를 호출합니다.
							/>
					)}
        </itemS.TupleContainer>
    );
}