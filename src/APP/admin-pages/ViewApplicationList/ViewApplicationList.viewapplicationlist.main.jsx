import React, { useState, useEffect } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.main.styles";
import ViewApplicationListTable from './ViewApplicationList.viewapplicationlist.table';
import Select, { components } from 'react-select';

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
		const StudySelect =  () => {  //어떤 스터디인지 react-select를 통해 선택
			const CustomDropdownIndicator = props => {  //주관식인지 객관식인지 판별하는 과정에서 역삼각형을 꾸며주는 컴포넌트
					return (
						<components.DropdownIndicator {...props}>
							<img src="/img/triangle.png" alt="triangle-icon" style={{width: "24px", height: "24px"}} />
						</components.DropdownIndicator>
					);
			};
			
			const options = [
				{ value: 'koala 4기', label: 'koala 4기' },
				{ value: 'koala 3기', label: 'koala 3기' },
				{ value: 'koala 2기', label: 'koala 2기' },
				{ value: 'koala 1기', label: 'koala 1기' }
			];
			return(
					<itemS.StudySelectContainer
							
							options={options}
							// isDisabled={true}
							// value={options.find(option => option.value === value)}
							// onChange={selectedOption => onChange(selectedOption.value)}
							defaultValue={options[0]}
							components={{DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null}}
					/>  
			)
	};

	return (
		<itemS.OuterContainer>
			<itemS.Container>
				<itemS.InnerContainer>
					<itemS.HeadContainer>
						<itemS.Head>4기 지원자 목록</itemS.Head>
						<itemS.DropBox>
							<StudySelect  />
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
