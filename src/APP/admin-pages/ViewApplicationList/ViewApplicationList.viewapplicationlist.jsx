import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function ViewApplicationList() {
    //지원한 모든 학생들의 지원서를 한꺼번에 볼 수 있도록 api를 받아온 페이지입니다
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndGo1NTdAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImVtYWlsIjoiZ3RqNTU3QG5hdmVyLmNvbSIsImV4cCI6MTcxNDI5MzYyNX0.kJ_Yf8nt-zQsn360JUn8aLykI85Wg_KAjepAwW1Oyia6QLxhFNA3u4T5iaTwQ5I5m8ze0o9Q2wBX8U6OhGqsJw";
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://3.35.47.250:8181/answer?page=1&size=10', {
                    headers: {
                        accept: '*/*',
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setApplications(response.data.result.answerList);
                setLoading(false);
            } catch (error) {
                console.error('지원서 열람 오류', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchApplications();
    }, [accessToken]);

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
