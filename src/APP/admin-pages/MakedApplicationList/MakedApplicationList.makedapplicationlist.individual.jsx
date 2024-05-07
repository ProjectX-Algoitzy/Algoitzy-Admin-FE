import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.individual.styles";
import MakeModal from './MakedApplicationList.modal';

export default function MakedApplicationListIndividual({ application }){

	const navigate = useNavigate();

	// 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

	// 모달 열기
	const openModal = () => {
		setIsModalOpen(true);
	};

	// 모달 닫기
	const closeModal = () => {
		setIsModalOpen(false);
	}

	const moveToDetail = (id) => { // 보기 추가 함수
		navigate(`/makedapplicationdetail/${id}`);
	}

  return (
    
		<itemS.InnerContainer key={application.applicationId}>
			<itemS.TopContainer>
				<itemS.Top>
					<itemS.TopInner>
						<itemS.TopText>제작일</itemS.TopText>
						<itemS.CreatedText>{application.createdTime}</itemS.CreatedText>
					</itemS.TopInner>
					<itemS.TopInner>
						<itemS.KeyIcon onClick={openModal}></itemS.KeyIcon>
					</itemS.TopInner>
				</itemS.Top>
				<itemS.Top>
					<itemS.TopInner>
						<itemS.TopText>제작자</itemS.TopText>
						<itemS.createdContainer>
							<itemS.Img></itemS.Img>
							<itemS.CreatedText>{application.createdName}</itemS.CreatedText>
						</itemS.createdContainer>
					</itemS.TopInner>
				</itemS.Top>
				{/* 모달창 */}
				<MakeModal isOpen={isModalOpen} onClose={closeModal} />
			</itemS.TopContainer>

			<itemS.BottomContainer>
				<itemS.Bottom>
					<itemS.Title onClick={() => moveToDetail(application.applicationId)}>{application.title}</itemS.Title>
				</itemS.Bottom>
				<itemS.Bottom>
					<itemS.StudyName>{application.studyName}</itemS.StudyName>
				</itemS.Bottom>
				<itemS.Bottom>
					<itemS.BottomInner>	
						<itemS.BottomText>최종 수정</itemS.BottomText>
						<itemS.UpdatedText>{application.updatedTime}</itemS.UpdatedText>
					</itemS.BottomInner>
					<itemS.BottomInner>
						<itemS.Img></itemS.Img>
						<itemS.UpdatedText>{application.updatedName}</itemS.UpdatedText>
					</itemS.BottomInner>
				</itemS.Bottom>
			</itemS.BottomContainer>

		</itemS.InnerContainer>
	)
    
};


