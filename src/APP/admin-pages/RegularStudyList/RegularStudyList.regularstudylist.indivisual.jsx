import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../admin-pages/RegularStudyList/Styled/RegularStudyList.regularstudylist.indivisual.styles";


export default function RegularStudyListIndividual({ application }){

	// const navigate = useNavigate();

	
	// const moveToDetail = (id) => { // 보기 추가 함수
	// 	navigate(`/makedapplicationdetail/${id}`);
	// }

	// 스터디 제목 글자수 자르기
	const truncateStudyName = (name) => {
		if (name.length > 12) {
			return name.slice(0, 11) + '...';
		}
		return name;
	}

  return (
    
		<itemS.InnerContainer key={application.studyId}>
			<itemS.TopContainer>
				
				<itemS.TopImg>
					
				</itemS.TopImg>
				
			</itemS.TopContainer>

			<itemS.BottomContainer>
				<itemS.Bottom>
          <itemS.Title>{truncateStudyName(application.name)}</itemS.Title>
					<itemS.BottomHeadCount>
						<itemS.PeopleIcon></itemS.PeopleIcon>		
						<itemS.BottomInner>
							<itemS.HeadCount>1</itemS.HeadCount>
							<itemS.CountText>명</itemS.CountText>
						</itemS.BottomInner>
					</itemS.BottomHeadCount>
					
					{/* <itemS.BottomBottom>
						<itemS.CreatedNameContainer>
							<itemS.ProfileIcon></itemS.ProfileIcon>
							<itemS.CreatedName>{application.createdName}</itemS.CreatedName>
						</itemS.CreatedNameContainer>
						<itemS.CreatedDate>{application.createdTime}</itemS.CreatedDate>
					</itemS.BottomBottom>												 */}
				</itemS.Bottom>
			</itemS.BottomContainer>

		</itemS.InnerContainer>
	)
    
};


