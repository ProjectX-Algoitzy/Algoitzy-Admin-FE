import React, { useEffect, useState } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import MakedApplicationListIndividual from './MakedApplicationList.makedapplicationlist.individual';
import dummyData from './dummy';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.group.styles";

export default function MakedApplicationListGroup() {

	const navigate = useNavigate();
	

	// const [applications, setApplications] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 		const fetchMakedApplications = async() => {
	// 				try {
	// 						const response = await request.get('/application?generation=14'); //genenration은 계속 바뀔 예정
	// 						console.log("response", response);
	// 						setApplications(response.result.applicationList.slice(0, 4));
	// 						setLoading(false);
	// 						if (response["isSuccess"]) {
	// 								console.log("제작된 지원서 조회 성공");
	// 						} else {
	// 								console.error("제작된 지원서 조회 실패:", response);
	// 						}
	// 				} catch (error) {
	// 						console.error('제작된 지원서 조회 오류', error);
	// 						setError(error);
	// 						setLoading(false);
	// 				}
	// 		};
	// 		fetchMakedApplications();
	// }, []);

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error.message}</div>;

	const handleMakeApp = () => {
		navigate('/makingapplicationform');
	};

  return (
    <itemS.Container>
      <itemS.Head>지원서 제작</itemS.Head>

      <itemS.TxtBtnBox>
				<itemS.ApplicationText>
					4기 지원서
				</itemS.ApplicationText>
				<itemS.BtnMakeApp onClick={handleMakeApp}>
					+ 새 지원서 생성하기
				</itemS.BtnMakeApp>
			</itemS.TxtBtnBox>
      <itemS.Group>
        {dummyData.map((item, index) => (
          <MakedApplicationListIndividual key={item.applicationId} application={item} />
        ))}
      </itemS.Group>

			<itemS.TxtBtnBox>
				<itemS.ApplicationText>
					3기 지원서
				</itemS.ApplicationText>
			</itemS.TxtBtnBox>
      <itemS.Group>
        {dummyData.map((item, index) => (
          <MakedApplicationListIndividual key={item.applicationId} application={item} />
        ))}
      </itemS.Group>

			<itemS.TxtBtnBox>
				<itemS.ApplicationText>
					2기 지원서
				</itemS.ApplicationText>
			</itemS.TxtBtnBox>
      <itemS.Group>
        {dummyData.map((item, index) => (
          <MakedApplicationListIndividual key={item.applicationId} application={item} />
        ))}
      </itemS.Group>

			<itemS.TxtBtnBox>
				<itemS.ApplicationText>
					1기 지원서
				</itemS.ApplicationText>
			</itemS.TxtBtnBox>
      <itemS.Group>
        {dummyData.map((item, index) => (
          <MakedApplicationListIndividual key={item.applicationId} application={item} />
        ))}
      </itemS.Group>
    </itemS.Container>
  );
}
