import React, { useState, useEffect } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';

export default function ViewApplicationList() {
    //지원한 모든 학생들의 지원서를 한꺼번에 볼 수 있도록 api를 받아온 페이지입니다
    // const [applications, setApplications] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
	//     const fetchApplications = async () => {
//         try {
//             const response = await request.get('/answer?page=1&size=10');
//             console.log("response", response);
//             setApplications(response.result.answerList);
//             setLoading(false);
//         } catch (error) {
//             console.error('지원서 열람 오류', error);
//             setError(error);
//             setLoading(false);
//         }
	//     };

    //     fetchApplications();
    // }, []);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
			<itemS.OuterContainer>
				<itemS.Container>
					<itemS.InnerContainer>
						<itemS.HeadContainer>
							<itemS.Head>4기 지원자 목록</itemS.Head>
							<itemS.DropBox>koala 4기</itemS.DropBox>
						</itemS.HeadContainer>
						<itemS.TabContainer>
							<itemS.TabSelected>전체 지원자 (50)</itemS.TabSelected>
							<itemS.Tab>서류 전형 (20)</itemS.Tab>
							<itemS.Tab>면접 전형 (10)</itemS.Tab>
							<itemS.Tab>최종 합격자 (8)</itemS.Tab>
						</itemS.TabContainer>
						<itemS.TextContainer>
							<itemS.NormText>총</itemS.NormText>
							<itemS.CntText>50</itemS.CntText>
							<itemS.NormText>개의 지원서</itemS.NormText>
						</itemS.TextContainer>
						<ViewApplicationListTable></ViewApplicationListTable>
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
