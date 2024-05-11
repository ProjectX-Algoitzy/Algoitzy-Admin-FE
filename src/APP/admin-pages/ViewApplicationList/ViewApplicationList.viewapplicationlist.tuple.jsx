import React, { useState, useEffect } from 'react'
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.tuple.styles";
import { dummyData } from './dummy';

export default function ViewApplicationListTuple() {
	const [applications, setApplications] = useState([]);

	useEffect(() => {
			setApplications(dummyData);
	}, []);

	return (
		<itemS.Container>
			{applications.map(application => (
				<itemS.TupleContainer key={application.id}>
					<itemS.CheckBox type="checkbox" />
					<itemS.Tuple>
						<itemS.Name>{application.name}</itemS.Name>
						<itemS.DetailIcon></itemS.DetailIcon>
						
					</itemS.Tuple>
					<itemS.Tuple>{application.grade}</itemS.Tuple>
					<itemS.Tuple>{application.department}</itemS.Tuple>
					<itemS.Tuple>{application.desired_study}</itemS.Tuple>
					<itemS.Tuple>{application.selection_stage}</itemS.Tuple>
					<itemS.TupleDrop>{application.interview_schedule}</itemS.TupleDrop>
				</itemS.TupleContainer>
			))}
		</itemS.Container>
	);
}
