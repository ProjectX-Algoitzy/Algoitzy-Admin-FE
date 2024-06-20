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
    const [checkedItems, setCheckedItems] = useState([]);
    const [firstCheckedStage, setFirstCheckedStage] = useState(null);

    

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
            .filter(app => checkedItems.includes(app.id))
            .map(app => app.email);
    
        const requestBody = {
            type,
            emailList
        };
    
        try {
            console.log("zz", requestBody);
            const response = await request.post('/email', requestBody);
            console.log('Email send response:', response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const renderButton = () => {
    switch (firstCheckedStage) {
        case '서류 합격':
        return (
            <itemS.BtnPass onClick={() => handleEmailSend('DOCUMENT_PASS')}>
            서류 합격 메일 발송
            </itemS.BtnPass>
        );
        case '서류 불합격':
        return (
            <itemS.BtnNonpass onClick={() => handleEmailSend('DOCUMENT_FAIL')}>
            서류 불합격 메일 발송
            </itemS.BtnNonpass>
        );
        case '면접 전형':
        return (
            <itemS.BtnMail onClick={() => handleEmailSend('INTERVIEW')}>
            면접 일정 메일 발송
            </itemS.BtnMail>
        );
        case '최종 합격':
        return (
            <itemS.BtnFinal onClick={() => handleEmailSend('PASS')}>
            최종 합격 메일 발송
            </itemS.BtnFinal>
        );
        default:
        return null;
    }
    };

    return (
        <itemS.OuterContainer>
            <itemS.Container>
                <itemS.InnerContainer>
                    <itemS.HeadContainer>
                        <itemS.Head>4기 지원자 목록</itemS.Head>
                        <StudySelect />
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
                    <ViewApplicationListTable applications={filteredApplications} onCheckChange={handleCheckChange} firstCheckedStage={firstCheckedStage} />
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