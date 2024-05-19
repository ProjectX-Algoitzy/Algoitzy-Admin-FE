import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as itemS from "./Styled/ViewApplicationDetail.viewapplicationdetail.styles";
import request from '../../Api/request';
import { dummyData } from './dummy';

const ViewApplicationDetail = ({ applicationId, isOpen, onClose }) => {
	//지원서 상세페이지입니다. 이 페이지를 통해 지원한 학생의 지원서를 보게하고자 합니다
	// const { id } = useParams();  //파라미터로 각 학생별로 부여된 id를 받아옵니다
	// const [detail, setDetail] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);
	// useEffect(() => {
	// 		const fetchDetail = async () => {
	// 				try {
	// 						const response = await request.get(`/answer/${id}`);
	// 						setDetail(response.result);
	// 						// setLoading(false);
	// 				} catch (error) {
	// 						console.error("상세페이지 조회 오류", error);
	// 						// setError(error);
	// 						// setLoading(false);
	// 				}
	// 		};
	// 		fetchDetail();
	// }, [id]);
	const [applications, setApplications] = useState([]);
	useEffect(() => {
		setApplications(dummyData);
	}, []);

	if (!isOpen) return null;

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error.message}</div>;

  return (
    <itemS.Backdrop>
			{/* <itemS.Backdrop/> */}
			<itemS.ModalContainer>
				<itemS.TopContainer>
					<itemS.TopTitle>지원서 보기</itemS.TopTitle>
					<itemS.Close onClick={onClose}></itemS.Close>
				</itemS.TopContainer>

				<itemS.InnerContainer>
					<itemS.StudyNameContainer>
						<itemS.Title>지원분야</itemS.Title>
						<itemS.StudyName>코딩테스트 대비반{applications.studyName}</itemS.StudyName>
					</itemS.StudyNameContainer>

					<itemS.InnerInnerContainer>
						<itemS.Title>지원서</itemS.Title>

						<itemS.BaseQAContainer>
							<itemS.BaseQuestion>지원자 이메일</itemS.BaseQuestion>
							<itemS.BaseAnswer>pch990824@naver.com{applications.submitEmail}</itemS.BaseAnswer>
						</itemS.BaseQAContainer>
						<itemS.BaseQAContainer>
							<itemS.BaseQuestion>지원자 이름</itemS.BaseQuestion>
							<itemS.BaseAnswer>박창현{applications.submitName}</itemS.BaseAnswer>
						</itemS.BaseQAContainer>
						<itemS.BaseQAContainer>
							<itemS.BaseQuestion>핸드폰 번호</itemS.BaseQuestion>
							<itemS.BaseAnswer>010-1111-1111{applications.phoneNumber}</itemS.BaseAnswer>
						</itemS.BaseQAContainer>
						
						<itemS.BaseQAContainer>
							<itemS.BaseQuestion>현재 본인 어쩌구{applications.textAnswerList}</itemS.BaseQuestion>
							<itemS.BaseAnswer>샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ샬라샬라라라라라라라라라라라랄라ㅏㄹ{applications.textAnswerList}</itemS.BaseAnswer>
						</itemS.BaseQAContainer>
					</itemS.InnerInnerContainer>

					<itemS.Time>{new Date(applications.submitTime).toLocaleString()}</itemS.Time>

					<itemS.BottomContainer>
						<itemS.Title>평가</itemS.Title>
						<itemS.BtnContainer>
							<itemS.NonPassBtn>불합격</itemS.NonPassBtn>
							<itemS.PassBtn>합격</itemS.PassBtn>
						</itemS.BtnContainer>
					</itemS.BottomContainer>
				</itemS.InnerContainer>


				<itemS.DecisionBtn>확정하기</itemS.DecisionBtn>
			</itemS.ModalContainer>
    </itemS.Backdrop>
  )
}
export default ViewApplicationDetail;



// {dummyData && (
// 	<div>
// 		<div>Answer ID: {dummyData.answerId}</div>
// 		<div>Study Name: {dummyData.studyName}</div>
// 		<div>Submitted By: {dummyData.submitName}</div>
// 		<div>Submit Email: {dummyData.submitEmail}</div>
// 		<div>Phone Number: {dummyData.phoneNumber}</div>

// 		<h3>답변 항목</h3>
// 		<ul>
// 				{dummyData.selectAnswerList && dummyData.selectAnswerList.map((answer, index) => (
// 						<li key={index}>
// 								<div>{answer.question}</div>
// 								<ul>
// 										{answer.selectAnswerFieldList.map((field, index) => (
// 												<li key={index}>{field.selected ? "Selected" : "Not selected"}</li>
// 										))}
// 								</ul>
// 						</li>
// 				))}
// 		</ul>

// 		<h3>텍스트 답변</h3>
// 		<ul>
// 				{dummyData.textAnswerList && dummyData.textAnswerList.map((answer, index) => (
// 						<li key={index}>
// 								<div>{answer.question}</div>
// 								<div>{answer.text}</div>
// 						</li>
// 				))}
// 		</ul>

// 		<div>Submitted Time: {new Date(dummyData.submitTime).toLocaleString()}</div>
// 	</div>
// )}