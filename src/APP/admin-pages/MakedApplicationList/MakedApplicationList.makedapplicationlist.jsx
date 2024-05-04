import React, { useEffect, useState } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';

export default function MakedApplicationList() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMakedApplications = async() => {
            try {
                const response = await request.get('/application?generation=14'); //genenration은 계속 바뀔 예정
                console.log("response", response);
                setApplications(response.result.applicationList);
                setLoading(false);
                if (response["isSuccess"]) {
                    console.log("제작된 지원서 조회 성공");
                } else {
                    console.error("제작된 지원서 조회 실패:", response);
                }
            } catch (error) {
                console.error('제작된 지원서 조회 오류', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchMakedApplications();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <h1>제작된 지원서 리스트</h1>
        <Link to={`/makingapplicationform`}>지원서 제작하러 가기</Link>
        <ul>
            {applications.map(application => (
                <li key={application.applicationId}>
                    <Link to={`/makedapplicationdetail/${application.applicationId}`}>applicationId: {application.applicationId}</Link>
                    <div>title: {application.title}</div>
                    <div>studyName: {application.studyName}</div>
                    <div>createdName: {application.createdName}</div>
                    <div>createdTime: {application.createdTime}</div>
                    <div>updatedName: {application.updatedName}</div>
                    <div>updatedTime: {application.updatedTime}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}
