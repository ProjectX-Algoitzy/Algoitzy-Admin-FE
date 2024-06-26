import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.individual.styles";
import MakeModal from './MakedApplicationList.modal';

export default function MakedApplicationListIndividual({ application, setCntApp }){
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
		navigate(`/newapplication/${id}`);
	}

	// 스터디 제목 글자수 자르기
	const truncateStudyName = (name) => {
		if (name.length > 12) {
			return name.slice(0, 11) + '...';
		}
		return name;
	}

	// 날짜와 시간을 포맷팅하는 함수
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    
		<itemS.InnerContainer key={application.applicationId}>
			<itemS.TopContainer>
				<itemS.Top>
					<itemS.TopInner>
						<itemS.TopText>제작일</itemS.TopText>
						<itemS.CreatedText>{formatDateTime(application.createdTime)}</itemS.CreatedText>
					</itemS.TopInner>
					<itemS.TopInner>
						<itemS.KeyIcon onClick={openModal}></itemS.KeyIcon>
					</itemS.TopInner>
				</itemS.Top>
				<itemS.Top>
					<itemS.TopInner>
						<itemS.TopText>제작자</itemS.TopText>
						<itemS.createdContainer>
							<itemS.Img src="https://kau-koala.s3.ap-northeast-2.amazonaws.com/basic-image/profile-image.png" alt="기본 프로필"></itemS.Img>
							<itemS.CreatedText>{application.createdName}</itemS.CreatedText>
						</itemS.createdContainer>
					</itemS.TopInner>
				</itemS.Top>
				{/* 모달창 */}
				<MakeModal applicationId={application.applicationId} isOpen={isModalOpen} onClose={closeModal} setCntApp={setCntApp} />
			</itemS.TopContainer>

			<itemS.BottomContainer>
				<itemS.Bottom>
					<itemS.Title onClick={() => moveToDetail(application.applicationId)}>{truncateStudyName(application.title)}</itemS.Title>
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
						<itemS.Img src="https://kau-koala.s3.ap-northeast-2.amazonaws.com/basic-image/profile-image.png" alt="기본 프로필"></itemS.Img>
						<itemS.UpdatedText>{application.updatedName}</itemS.UpdatedText>
					</itemS.BottomInner>
				</itemS.Bottom>
			</itemS.BottomContainer>

		</itemS.InnerContainer>
	)
    
};


