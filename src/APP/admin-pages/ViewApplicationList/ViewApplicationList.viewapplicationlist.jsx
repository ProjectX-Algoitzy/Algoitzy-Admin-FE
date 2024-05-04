import React, { useState, useEffect } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';

export default function ViewApplicationList() {
    //지원한 모든 학생들의 지원서를 한꺼번에 볼 수 있도록 api를 받아온 페이지입니다
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await request.get('/answer?page=1&size=10');
                console.log("response", response);
                setApplications(response.result.answerList);
                setLoading(false);
            } catch (error) {
                console.error('지원서 열람 오류', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div>스터디원들이 작성한 지원서 목록 조회</div>
            <ul>
                {applications.map(application => (
                    <li key={application.answerId}>
                        <Link to={`/viewapplicationlist/${application.answerId}`}>Answer ID: {application.answerId}</Link>
                        <div>Study Name: {application.studyName}</div>
                        <div>Submitted By: {application.submitName}</div>
                        <div>Submitted Time: {new Date(application.submitTime).toLocaleString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
