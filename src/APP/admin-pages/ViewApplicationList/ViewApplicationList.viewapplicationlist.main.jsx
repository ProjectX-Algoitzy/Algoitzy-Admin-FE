import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import StudySelect from './ViewApplicationList.viewapplicationlist.select';

export default function ViewApplicationList() {
	const [applications, setApplications] = useState([]);
	const [generation, setGeneration] = useState(null);
	const [generations, setGenerations] = useState([]);
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(20);
	const [filteredApplications, setFilteredApplications] = useState([]);
	const [tabs, setTabs] = useState(['전체 지원자']);
	const [selectedTab, setSelectedTab] = useState('전체 지원자');
	const [checkedItems, setCheckedItems] = useState([]);
	const [firstCheckedStage, setFirstCheckedStage] = useState(null);
	const [sortOrder, setSortOrder] = useState('desc');


	useEffect(() => {
		const fetchGeneration = async () => { // 최신 4기수 가져오기
			try {
				const response = await request.get(`/application`);
	
				if (response.isSuccess) {
					console.log("제작된 지원서 조회 성공",response);
					const generationsOptions = response.result.applicationList.map(app => app.generation);
	
						
					setGenerations(generationsOptions);
					console.log("generationsOptions", generationsOptions);
					setGeneration(generationsOptions[0]);
				} else {
					console.error("제작된 지원서 조회 실패:", response);
				}
			} catch (error) {
				console.error('제작된 지원서 조회 오류', error);
			}
		};
		fetchGeneration();
	}, []);

	const fetchApplication = async () => {
		try {
			const response = await request.get(`/answer?generation=${generation}&page=${page}&size=${size}`);
			console.log("response", response);

			if (response.isSuccess) {
				console.log("지원서 조회 성공");
				setApplications(response.result.answerList);
			} else {
				console.error("지원서 조회 실패:", response);
			}
		} catch (error) {
			console.error('지원서 조회 오류', error);
		}
	};

	useEffect(() => {
		fetchApplication();
	}, [page, size, generation]);

	useEffect(() => {
		const stages = [...new Set(applications.map(app => app.status))];
		const newTabs = ['전체 지원자'];
		if (
			stages.includes('서류 전형') || 
			stages.includes('서류 합격') || 
			stages.includes('서류 불합격')
		) {
			newTabs.push('서류 전형');
		}
		if (
			stages.includes('면접 전형') || 
			stages.includes('최종 합격')
		) {
			newTabs.push('면접 전형');
		}
		setTabs(newTabs);

		setFilteredApplications(applications);
	}, [applications]);

	useEffect(() => {
		let sortedApplications = sortApplications(applications, sortOrder);
		setFilteredApplications(sortedApplications);
	}, [selectedTab, sortOrder, applications]);

	const sortApplications = (applications, order) => {
		return [...applications].sort((a, b) => {
			if (a.interviewTime === '-') return 1;
			if (b.interviewTime === '-') return -1;

			const [monthA, dayA, timeA] = a.interviewTime.split(' ');
			const [monthB, dayB, timeB] = b.interviewTime.split(' ');

			const [hourA, minuteA] = timeA.split(':').map(Number);
			const [hourB, minuteB] = timeB.split(':').map(Number);

			const compareMonth = parseInt(monthA.replace("월", "")) - parseInt(monthB.replace("월", ""))
			if (compareMonth !== 0) return order === 'asc' ? compareMonth : -compareMonth;

			const compareDay = parseInt(dayA.replace("일", "")) - parseInt(dayB.replace("일", ""));
			if (compareDay !== 0) return order === 'asc' ? compareDay : -compareDay;

			const compareHour = hourA - hourB;
			if (compareHour !== 0) return order === 'asc' ? compareHour : -compareHour;

			const compareMinute = minuteA - minuteB;
			return order === 'asc' ? compareMinute : -compareMinute;
		});
	};

	const handleSortClick = (order) => {
		setSortOrder(order);
	};

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
		if (tab === '전체 지원자') {
			setFilteredApplications(applications);
		} else if (tab === '서류 전형') {
			setFilteredApplications(applications.filter(app => 
				app.status === '서류 전형' ||
				app.status === '서류 합격' ||
				app.status === '서류 불합격'
			));
		} else if (tab === '면접 전형') {
			setFilteredApplications(applications.filter(app => 
				app.status === '면접 전형' ||
				app.status === '최종 합격' ||
				app.status === '최종 불합격'
			));
		}
	};

	const handleCheckChange = (id, isChecked, stage) => {
		if (isChecked) {
			setCheckedItems(prev => {
				const newCheckedItems = [...prev, id];
				console.log('Checked Items:', newCheckedItems); 
				return newCheckedItems;
			});
			if (!firstCheckedStage) {
				setFirstCheckedStage(stage);
			}
		} else {
			setCheckedItems(prev => {
				const newCheckedItems = prev.filter(item => item !== id);
				console.log('Checked Items:', newCheckedItems); 
				return newCheckedItems;
			});
			if (checkedItems.length === 1) {
				setFirstCheckedStage(null);
			}
		}
	};

	const handleEmailSend = async (type) => {
		const emailList = filteredApplications
			.filter(app => checkedItems.includes(app.answerId))
			.map(app => app.submitEmail);

		const requestData = {
			type: type,
			emailList: emailList
		};

		try {
			const response = await request.post('/email', requestData);
			if (response.isSuccess) {
        console.log("이메일 전송 성공 response:", response);
        fetchApplication();
				setCheckedItems([]); // 체크 항목 해제 <- 메일 전송 버튼 닫기 위함
				setFirstCheckedStage(null); // 위와 같은 이유
      } else {
        console.error("이메일 전송 실패:", response);
      }
		} catch (error) {
			console.error('이메일 전송 오류:', error);
		}
	};

	const renderButton = () => {
		if (firstCheckedStage === '서류 전형') {
			return (
				<>
					<itemS.BtnDocNonpass onClick={() => handleEmailSend('DOCUMENT_FAIL')}>
						서류 불합격 메일 발송
					</itemS.BtnDocNonpass>
					<itemS.BtnDocPass onClick={() => handleEmailSend('DOCUMENT_PASS')}>
						서류 합격 메일 발송
					</itemS.BtnDocPass>
				</>
			);
		} else if (firstCheckedStage === '서류 합격') {
			return (
				<itemS.BtnMail onClick={() => handleEmailSend('INTERVIEW')}>
					면접 일정 메일 발송
				</itemS.BtnMail>
			);
		} else if (firstCheckedStage === '면접 전형') {
			return (
				<>
					<itemS.BtnFinalNonPass onClick={() => handleEmailSend('FAIL')}>
						최종 불합격 메일 발송
					</itemS.BtnFinalNonPass>
					<itemS.BtnFinalPass onClick={() => handleEmailSend('PASS')}>
						최종 합격 메일 발송
					</itemS.BtnFinalPass>
				</>
			);
		} else if (firstCheckedStage === '서류 불합격' || firstCheckedStage === '최종 불합격') {
			return null;
		} else {
			return null;
		}
	};

	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.HeadContainer>
						<itemS.Head>{generation}기 지원자 목록</itemS.Head>
						<StudySelect 
							generationOptions={generations}
							onChange={(option) => setGeneration(option.value)}
						/>
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
						<ViewApplicationListTable 
							applications={filteredApplications} 
							onCheckChange={handleCheckChange} 
							firstCheckedStage={firstCheckedStage}
							onSortClick={handleSortClick}
							fetchApplication={fetchApplication}
						/>
					</itemS.InnerContainer>
				</itemS.Container>
				{checkedItems.length > 0 && (
					<itemS.BtnContainer>
						{renderButton()}
					</itemS.BtnContainer>
				)}
		</itemS.OuterContainer>
	);
}
