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

    const handleCheckChange = (id, isChecked, stage) => {
			if (isChecked) {
					setCheckedItems(prev => {
							const newCheckedItems = [...prev, id];
							console.log('Checked Items:', newCheckedItems); // 추가된 부분
							return newCheckedItems;
					});
					if (!firstCheckedStage) {
							setFirstCheckedStage(stage);
					}
			} else {
					setCheckedItems(prev => {
							const newCheckedItems = prev.filter(item => item !== id);
							console.log('Checked Items:', newCheckedItems); // 추가된 부분
							return newCheckedItems;
					});
					if (checkedItems.length === 1) {
							setFirstCheckedStage(null);
					}
			}
		};

    const renderButton = () => {
        switch (firstCheckedStage) {
            case '서류 합격':
                return <itemS.BtnPass>서류 합격 메일 발송</itemS.BtnPass>;
            case '서류 불합격':
                return <itemS.BtnNonpass>서류 불합격 메일 발송</itemS.BtnNonpass>;
            case '면접 전형':
                return <itemS.BtnMail>면접 일정 메일 발송</itemS.BtnMail>;
            case '최종 합격':
                return <itemS.BtnFinal>최종 합격 메일 발송</itemS.BtnFinal>;
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