import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import StudySelect from './ViewApplicationList.viewapplicationlist.select'; // 별도 파일로 StudySelect import
import { dummyData } from './dummy';

export default function ViewApplicationList() {
	const [applications, setApplications] = useState([]); // 지원자 데이터를 저장하는 상태
	const [filteredApplications, setFilteredApplications] = useState([]); // 필터링된 지원자 데이터를 저장하는 상태
	const [tabs, setTabs] = useState(['전체 지원자']); // 탭 목록을 저장하는 상태
	const [selectedTab, setSelectedTab] = useState('전체 지원자'); // 선택된 탭을 저장하는 상태
	const [checkedItems, setCheckedItems] = useState([]); // 체크된 항목 ID를 저장하는 상태

	useEffect(() => {
		setApplications(dummyData); // 더미 데이터를 설정

		// 동적으로 탭 생성
		const stages = [...new Set(dummyData.map(app => app.selection_stage))]; // 전형 단계 목록 생성
		const newTabs = ['전체 지원자'];
		if (
			stages.includes('서류 전형') || 
			stages.includes('서류 합격') || 
			stages.includes('서류 불합격')
		) {
			newTabs.push('서류 전형'); // '서류 전형', '서류 합격', '서류 불합격' 단계가 포함된 경우 탭 추가
		}
		if (
			stages.includes('면접 전형') || 
			stages.includes('최종 합격')
		) {
			newTabs.push('면접 전형'); // '면접 전형' 또는 '최종 합격' 단계가 포함된 경우 탭 추가
		}
		setTabs(newTabs); // 생성된 탭 목록을 상태에 설정

		setFilteredApplications(dummyData); // 기본적으로 모든 지원자 데이터를 필터링된 상태로 설정
	}, []);

	// 탭 클릭 시 호출되는 함수
	const handleTabClick = (tab) => {
		setSelectedTab(tab); // 선택된 탭을 상태에 설정
		if (tab === '전체 지원자') {
			setFilteredApplications(applications); // '전체 지원자' 탭 클릭 시 모든 지원자 데이터 설정
		} else if (tab === '서류 전형') {
			setFilteredApplications(applications.filter(app => 
				app.selection_stage === '서류 전형' ||
				app.selection_stage === '서류 합격' ||
				app.selection_stage === '서류 불합격'
			)); // '서류 전형' 관련 데이터 필터링
		} else if (tab === '면접 전형') {
			setFilteredApplications(applications.filter(app => 
				app.selection_stage === '면접 전형' ||
				app.selection_stage === '최종 합격'
			)); // '면접 전형' 관련 데이터 필터링
		}
	};

	// 체크박스 변경 시 호출되는 함수
	const handleCheckChange = (id, isChecked) => {
		if (isChecked) {
			setCheckedItems(prev => [...prev, id]); // 체크된 경우 ID 추가
		} else {
			setCheckedItems(prev => prev.filter(item => item !== id)); // 체크 해제된 경우 ID 제거
		}
	};

	// 조건에 따라 액션 버튼을 렌더링하는 함수
	const renderActionButton = () => {
		if (checkedItems.length === 0) return null; // 체크된 항목이 없으면 버튼 렌더링 안함

		const firstCheckedStage = applications.find(app => app.id === checkedItems[0]).selection_stage;

		switch (firstCheckedStage) {
			case '서류 합격':
				return <itemS.BtnPass>서류 합격 메일 발송</itemS.BtnPass>; // '서류 합격' 단계일 때 버튼 렌더링
			case '서류 불합격':
				return <itemS.BtnNonpass>서류 불합격 메일 발송</itemS.BtnNonpass>; // '서류 불합격' 단계일 때 버튼 렌더링
			case '면접 전형':
				return <itemS.BtnMail>면접 일정 메일 발송</itemS.BtnMail>; // '면접 전형' 단계일 때 버튼 렌더링
			case '최종 합격':
				return <itemS.BtnFinal>최종 합격 메일 발송</itemS.BtnFinal>; // '최종 합격' 단계일 때 버튼 렌더링
			default:
				return null; // 다른 경우 버튼 렌더링 안함
		}
	};

	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.HeadContainer>
						<itemS.Head>4기 지원자 목록</itemS.Head> {/* 헤더 */}
						<StudySelect /> {/* StudySelect 컴포넌트 */}
					</itemS.HeadContainer>
					<itemS.TabContainer>
						{tabs.map(tab => (
							tab === selectedTab ? (
								<itemS.TabSelected key={tab} onClick={() => handleTabClick(tab)}>
									{tab}
								</itemS.TabSelected> // 선택된 탭 스타일
							) : (
								<itemS.Tab key={tab} onClick={() => handleTabClick(tab)}>
									{tab}
								</itemS.Tab> // 일반 탭 스타일
							)
						))}
					</itemS.TabContainer>
					<itemS.TextContainer>
						<itemS.NormText>총</itemS.NormText>
						<itemS.CntText>{filteredApplications.length}</itemS.CntText>
						<itemS.NormText>개의 지원서</itemS.NormText>
					</itemS.TextContainer>
					<ViewApplicationListTable applications={filteredApplications} onCheckChange={handleCheckChange} /> {/* 지원자 리스트 테이블 */}
				</itemS.InnerContainer>
			</itemS.Container>
			{checkedItems.length > 0 && (
				<itemS.BtnContainer>
					{renderActionButton()} {/* 조건에 따른 액션 버튼 */}
				</itemS.BtnContainer>
			)}
		</itemS.OuterContainer>
	);
}