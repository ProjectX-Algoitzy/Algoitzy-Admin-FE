import React, { useState } from 'react';
import * as itemS from "./Styled/ViewApplicationList.viewapplicationlist.table.styles";
import ViewApplicationListTuple from './ViewApplicationList.viewapplicationlist.tuple';

export default function ViewApplicationListTable({ applications, onCheckChange }) {
	const [selectedApplicationId, setSelectedApplicationId] = useState(null); // 선택된 지원자의 ID를 저장하는 상태
	const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창의 열림/닫힘 상태를 저장하는 상태
	const [selectAll, setSelectAll] = useState(false); // 전체 선택 체크박스 상태를 저장하는 상태

	// 모달 창을 닫는 함수
	const closeModal = () => {
		setIsModalOpen(false); // 모달 창 닫기
		setSelectedApplicationId(null); // 선택된 지원자 ID 초기화
	};

	// 모달 창을 여는 함수
	const openModal = (applicationId) => {
		setIsModalOpen(true); // 모달 창 열기
		setSelectedApplicationId(applicationId); // 선택된 지원자 ID 설정
	};

	// 전체 선택 체크박스 변경 시 호출되는 함수
	const handleSelectAllChange = (event) => {
		const isChecked = event.target.checked;
		setSelectAll(isChecked); // 전체 선택 상태 설정
		applications.forEach(application => onCheckChange(application.id, isChecked)); // 모든 지원자에 대해 체크 상태 변경
	};

	return (
		<itemS.Container>
			<itemS.Table>
				<itemS.CategoryContainer>
					<itemS.CheckBox
						type="checkbox"
						checked={selectAll}
						onChange={handleSelectAllChange} // 전체 선택 체크박스 변경 핸들러
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
							key={application.id} // 각 지원자의 고유 ID를 키로 사용
							application={application} // 지원자 데이터 전달
							isSelected={selectedApplicationId === application.id && isModalOpen} // 선택된 지원자인지 여부와 모달 창 상태
							onOpen={() => openModal(application.id)} // 모달 창 여는 함수
							onClose={closeModal} // 모달 창 닫는 함수
							onCheckChange={onCheckChange} // 체크박스 상태 변경 함수
							selectAll={selectAll} // 전체 선택 상태
						/>
					))}
				</itemS.TupleContainer>
			</itemS.Table>
		</itemS.Container>
	);
}