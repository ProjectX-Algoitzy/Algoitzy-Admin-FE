import React, { useState, useEffect } from 'react';
import request from '../../Api/request';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import StudySelect from './ViewApplicationList.viewapplicationlist.select'; // 별도 파일로 StudySelect import
import { dummyData } from './dummy';

export default function ViewApplicationList() {
	const [applications, setApplications] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchApplications = async () => {
    //         try {
    //             const response = await request.get('/answer?page=1&size=10');
    //             setApplications(response.result.answerList);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchApplications();
    // }, []);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;
	useEffect(() => {
			setApplications(dummyData);
	}, []);

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
									<itemS.TabSelected>전체 지원자</itemS.TabSelected>
									<itemS.Tab>서류 전형</itemS.Tab>
									<itemS.Tab>면접 전형</itemS.Tab>
									<itemS.Tab>최종 합격자</itemS.Tab>
							</itemS.TabContainer>
							<itemS.TextContainer>
									<itemS.NormText>총</itemS.NormText>
									<itemS.CntText>{applications.length}</itemS.CntText>
									<itemS.NormText>개의 지원서</itemS.NormText>
							</itemS.TextContainer>
							<ViewApplicationListTable applications={applications} />
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