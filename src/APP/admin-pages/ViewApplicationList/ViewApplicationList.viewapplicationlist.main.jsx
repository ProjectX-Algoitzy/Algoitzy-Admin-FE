import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import StudySelect from './ViewApplicationList.viewapplicationlist.select';
import { useRecoilState } from "recoil";
import { IsSendMail } from '../Recoil/Recoil.state';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { dummyData } from './dummy';

export default function ViewApplicationList() {
	const { alert } = useContext(AlertContext);
	// const tabObj = {'전체 지원자' : 'all',
	// 								'서류 전형' : 'doc',
	// 								'면접 전형' : 'interview'}
	const [categories, setCategories] = useState([{ code: '', name: '전체 지원자' }]); // Default '전체 지원자' tab									
	const [selectedTab, setSelectedTab] = useState('');
	
	const [applications, setApplications] = useState([]);
	const [generation, setGeneration] = useState(null);
	const [generations, setGenerations] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [filteredApplications, setFilteredApplications] = useState([]);
	// const [tabs, setTabs] = useState(['전체 지원자']);
	// const [selectedTab, setSelectedTab] = useState('전체 지원자');
	const [checkedItems, setCheckedItems] = useState([]);
	const [sendMailItems, setSendMailItems] = useState([]); // 메일 발송한 id 들 -> 발송 후 체크 해제 위한 변수
	const [firstCheckedStage, setFirstCheckedStage] = useState(null);
	const [sortOrder, setSortOrder] = useState('desc');
	const [isSendMail, setIsSendMail] = useRecoilState(IsSendMail);

	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(5); //TODO - 임시 ) 전체 페이지 수 -> response 값으로 전체 개수 받아와야함
	const [currentPageGroup, setCurrentPageGroup] = useState(0);
	const itemsPerPage = 10; // 페이지당 항목 수

	const pageNumbers = Array.from(
		{ length: Math.min(5, totalPages - currentPageGroup * 5) },
		(_, i) => currentPageGroup * 5 + i
	);

	useEffect(() => {
		const fetchGeneration = async () => { // 최신 4기수 가져오기
			try {
				const response = await request.get(`/application`);
	
				if (response.isSuccess) {
					console.log("최신 4기수 조회 성공",response);
					const generationsOptions = response.result.applicationList.map(app => app.generation);
	
						
					setGenerations(generationsOptions);
					console.log("generationsOptions", generationsOptions);
					setGeneration(generationsOptions[0]);
				} else {
					console.error("최신 4기수 조회 실패:", response);
				}
			} catch (error) {
				console.error('최신 4기수 조회 오류', error);
			}
		};
		fetchGeneration();
	}, []);

	const fetchCategories = async () => { // 카테고리 목록
    try {
      const response = await request.get('/answer/status');
      if (response.isSuccess) {
        const apiCategories = response.result.statusList;
        setCategories([{ code: '', name: '전체' }, ...apiCategories]); // Add '전체' as the first tab
      } else {
        console.error('카테고리 목록 조회 실패:', response);
      }
    } catch (error) {
      console.error('카테고리 목록 조회 오류', error);
    }
  };

	const fetchApplication = async () => {
		try {
			const response = await request.get(`/answer?status=${selectedTab}&generation=${generation}&page=${currentPage + 1}&size=${itemsPerPage}`);
			console.log("response", response);

			if (response.isSuccess) {
				console.log("지원서 조회 성공");
				setApplications(response.result.answerList);
				setFilteredApplications(response.result.answerList);
				setTotalPages(Math.ceil(response.result.totalCount / itemsPerPage));
				setTotalCount(response.result.totalCount);
			} else {
				console.error("지원서 조회 실패:", response);
			}
		} catch (error) {
			console.error('지원서 조회 오류', error);
		}
	};

	useEffect(() => {
    fetchCategories();
  }, []);

	useEffect(() => {
		fetchApplication();
	}, [currentPage, selectedTab, generation]);

	// useEffect(() => {
	// 	const stages = [...new Set(applications.map(app => app.status))];
	// 	const newTabs = ['전체 지원자'];
	// 	if (
	// 		stages.includes('서류 전형') || 
	// 		stages.includes('서류 합격') || 
	// 		stages.includes('서류 불합격')
	// 	) {
	// 		newTabs.push('서류 전형');
	// 	}
	// 	if (
	// 		stages.includes('면접 전형') || 
	// 		stages.includes('최종 합격') ||
	// 		stages.includes('불합격')
	// 	) {
	// 		newTabs.push('면접 전형');
	// 	}
	// 	setTabs(newTabs);

	// 	setFilteredApplications(applications); 

	// }, [applications]);

	useEffect(() => {
		let sortedApplications = sortApplications(filteredApplications, sortOrder);
		setFilteredApplications(sortedApplications);
	}, [selectedTab, sortOrder, applications]);

	const sortApplications = (applications, order) => {
		return [...applications].sort((a, b) => {
			// Interview time이 존재하지 않는 경우를 확인
			if (!a.interviewTime || a.interviewTime === '-') return 1;
			if (!b.interviewTime || b.interviewTime === '-') return -1;

			// Split으로 나누기 전에 interviewTime의 형식 확인
			const interviewTimeA = a.interviewTime.split(' ');
			const interviewTimeB = b.interviewTime.split(' ');

			if (interviewTimeA.length < 3 || interviewTimeB.length < 3) return 0;

			const [monthA, dayA, timeA] = interviewTimeA;
			const [monthB, dayB, timeB] = interviewTimeB;

			// timeA 또는 timeB가 존재하지 않는 경우를 확인
			if (!timeA || !timeB) return 0;

			const [hourA, minuteA] = timeA.split(':').map(Number);
			const [hourB, minuteB] = timeB.split(':').map(Number);

			const compareMonth = parseInt(monthA.replace("월", "")) - parseInt(monthB.replace("월", ""));
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
		setSelectedTab(tab.code);
		// if (tab === '전체 지원자') {
		// 	setFilteredApplications(applications);
		// } else if (tab === '서류 전형') {
		// 	setFilteredApplications(applications.filter(app => 
		// 		app.status === '서류 전형' ||
		// 		app.status === '서류 합격' ||
		// 		app.status === '서류 불합격'
		// 	));
		// } else if (tab === '면접 전형') {
		// 	setFilteredApplications(applications.filter(app => 
		// 		app.status === '면접 전형' ||
		// 		app.status === '최종 합격' ||
		// 		app.status === '불합격'
		// 	));
		// }
		setCurrentPage(0);
		setCurrentPageGroup(0);
	};

	const handleCheckChange = (id, isChecked, stage) => {
		if (isChecked) {
			setCheckedItems(prev => {
				const newCheckedItems = [...prev, id];
				// console.log('Checked Items:', newCheckedItems); 
				return newCheckedItems;
			});
			if (!firstCheckedStage) {
				setFirstCheckedStage(stage);
			}
		} else {
			setCheckedItems(prev => {
				const newCheckedItems = prev.filter(item => item !== id);
				// console.log('Checked Items:', newCheckedItems); 
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
				
				 // 체크 항목 해제 <- 메일 전송 버튼 닫기 위함
				setIsSendMail(true);
				// setFilteredApplications(prevApps => {
				// 	return prevApps.map(app => {
				// 		if (checkedItems.includes(app.answerId)) {
				// 				return { ...app, isChecked: false };
				// 		}
				// 		return app;
				// 	});
				// });
				setSendMailItems(checkedItems);
				setCheckedItems([]);
				setFirstCheckedStage(null); // 위와 같은 이유
				alert("성공적으로 이메일 발송하였습니다.");

			} else {
				console.error("이메일 전송 실패:", response);
			}
		} catch (error) {
			console.error('이메일 전송 오류:', error);
		}
	};

	const handlePageChange = (newPage) => {
		if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      setCurrentPageGroup(Math.floor(newPage / 5)); // 페이지 그룹을 업데이트
		}
	};

	const handlePageGroupChange = (direction) => {
    if (direction === 'next' && (currentPageGroup + 1) * 5 < totalPages) {
      setCurrentPageGroup(currentPageGroup + 1);
      setCurrentPage((currentPageGroup + 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
    } else if (direction === 'prev' && currentPageGroup > 0) {
      setCurrentPageGroup(currentPageGroup - 1);
      setCurrentPage((currentPageGroup - 1) * 5); // 새로운 그룹의 첫 번째 페이지로 이동
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
		} else if (firstCheckedStage === '서류 불합격' || firstCheckedStage === '불합격') {
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
						{categories.map(tab => (
							tab.code === selectedTab ? (
								<itemS.TabSelected key={tab.code} onClick={() => handleTabClick(tab)}>
									{tab.name}
								</itemS.TabSelected>
							) : (
								<itemS.Tab key={tab.code} onClick={() => handleTabClick(tab)}>
									{tab.name}
								</itemS.Tab>
							)
						))}
					</itemS.TabContainer>
					<itemS.TextContainer>
						<itemS.NormText>총</itemS.NormText>
						<itemS.CntText>{totalCount}</itemS.CntText>
						<itemS.NormText>개의 지원서</itemS.NormText>
					</itemS.TextContainer>
					<ViewApplicationListTable 
						applications={filteredApplications} 
						onCheckChange={handleCheckChange} 
						firstCheckedStage={firstCheckedStage}
						onSortClick={handleSortClick}
						fetchApplication={fetchApplication}
						sendMailItems={sendMailItems}
					/>
					<itemS.PaginationContainer>
						<itemS.Pagination>
							<itemS.PaginationArrow
								left
								onClick={() => handlePageGroupChange('prev')}
								disabled={currentPageGroup === 0}
							/>
							{pageNumbers.map((pageNumber) => (
								<itemS.PaginationNumber
									key={pageNumber}
									onClick={() => handlePageChange(pageNumber)}
									active={pageNumber === currentPage}
								>
									{pageNumber + 1}
								</itemS.PaginationNumber>
							))}
							<itemS.PaginationArrow
								onClick={() => handlePageGroupChange('next')}
								disabled={(currentPageGroup + 1) * 5 >= totalPages}
							/>
						</itemS.Pagination>

					</itemS.PaginationContainer>
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
