import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import StudySelect from './ViewApplicationList.viewapplicationlist.select'; // 별도 파일로 StudySelect import
import { dummyData } from './dummy';
export default function ViewApplicationList() {
	const [applications, setApplications] = useState([]);
	const [filteredApplications, setFilteredApplications] = useState([]);
	const [tabs, setTabs] = useState(['전체 지원자']);
	const [selectedTab, setSelectedTab] = useState('전체 지원자');

	useEffect(() => {
			setApplications(dummyData);

			// 동적으로 탭 생성
			const stages = [...new Set(dummyData.map(app => app.selection_stage))]; // 전형 단계
			const newTabs = ['전체 지원자'];
			if (stages.includes('서류 전형')) newTabs.push('서류 전형');
			if (stages.includes('면접 전형')) newTabs.push('면접 전형');
			setTabs(newTabs);

			setFilteredApplications(dummyData); // default to all applications
	}, []);

	const handleTabClick = (tab) => {
			setSelectedTab(tab);
			if (tab === '전체 지원자') {
					setFilteredApplications(applications);
			} else {
					setFilteredApplications(applications.filter(app => app.selection_stage === tab));
			}
	};

	return (
			<itemS.OuterContainer>
					<itemS.Container>
							<itemS.InnerContainer>
									<itemS.HeadContainer>
											<itemS.Head>4기 지원자 목록</itemS.Head>
											<itemS.DropBox>
													<StudySelect />
											</itemS.DropBox>
									</itemS.HeadContainer>
									<itemS.TabContainer>
										{tabs.map(tab => (
											tab === selectedTab ? (
												<itemS.TabSelected key={tab} onClick={() => handleTabClick(tab)}>
													{tab}
												</itemS.TabSelected>
											) : (
												<itemS.Tab key={tab} onClick={() => handleTabClick(tab)}>
													{tab}
												</itemS.Tab>
											)
										))}
									</itemS.TabContainer>
									<itemS.TextContainer>
											<itemS.NormText>총</itemS.NormText>
											<itemS.CntText>{filteredApplications.length}</itemS.CntText>
											<itemS.NormText>개의 지원서</itemS.NormText>
									</itemS.TextContainer>
									<ViewApplicationListTable applications={filteredApplications} />
							</itemS.InnerContainer>
					</itemS.Container>
					<itemS.BtnContainer>
							<itemS.BtnDelete>지원서 삭제</itemS.BtnDelete>
							<itemS.BtnPass>서류 합격 메일 발송</itemS.BtnPass>
							<itemS.BtnMail>면접 일정 메일 발송</itemS.BtnMail>
							<itemS.BtnFinal>최종 합격 메일 발송</itemS.BtnFinal>
					</itemS.BtnContainer>
			</itemS.OuterContainer>
	);
}