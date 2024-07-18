import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/EnterpriseBootcampList/Styled/EnterpriseBootcampList.enterprisebootcamplist.main.styles";
import EnterBootListTable from './EnterpriseBootcampList.enterprisebootcamplist.table';
import { dummyCompanyList, dummyBootList } from './dummy';

export default function EnterBootList() {

  const [companyLists, setCompanyLists] = useState([]);
  const [bootLists, setBootLists] = useState([]);

  const [filteredLists, setFilteredLists] = useState([]);

  const [selectedTab, setSelectedTab] = useState('기업');

  const [isSortDropVisible, setIsSortDropVisible] = useState(false);

  const tabs = ['기업', '부트캠프'];
  
  useEffect(() => {
    setCompanyLists(dummyCompanyList);
    setBootLists(dummyBootList);

    setFilteredLists(dummyCompanyList);
  },[])

  const handleTabClick = (tab) => {
		setSelectedTab(tab);
		if (tab === '기업') {
			setFilteredLists(companyLists);
		} else if (tab === '부트캠프') {
			setFilteredLists(bootLists);
		}
	};

  const toggleSortDrop = () => {
    setIsSortDropVisible(prevState => !prevState);
  };

  const onSortNothing = () => {
    setIsSortDropVisible(false);
  };
	

	return (
		<itemS.OuterContainer>
				<itemS.Container>
				<itemS.InnerContainer>
					<itemS.TopContainer>
            <itemS.HeadContainer>
						  <itemS.Head>문제 추천 서비스</itemS.Head>
              <itemS.AddBtn>추가</itemS.AddBtn>
              <itemS.DeleteBtn>삭제</itemS.DeleteBtn>
            </itemS.HeadContainer>
            <itemS.SearchContainer>
              <itemS.Search />
              <itemS.SearchIcon src='/img/search.svg' alt='돋보기' />
            </itemS.SearchContainer>
						
					</itemS.TopContainer>
          <itemS.TabSortContainer>
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
            <itemS.CategoryInterviewContainer>
              <itemS.CategoryDrop>조회수</itemS.CategoryDrop>
              <itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" onClick={toggleSortDrop} />
              {isSortDropVisible && (
                <itemS.SortDrop>
                  <itemS.SortText onClick={onSortNothing} >조회수</itemS.SortText>
                  <itemS.SortText onClick={onSortNothing} >이름순</itemS.SortText>
                </itemS.SortDrop>
              )}
            </itemS.CategoryInterviewContainer>
            
          </itemS.TabSortContainer>
					
					<EnterBootListTable 
						filteredLists={filteredLists} 
					/>
				</itemS.InnerContainer>
			</itemS.Container>
			
		</itemS.OuterContainer>
	);
}
