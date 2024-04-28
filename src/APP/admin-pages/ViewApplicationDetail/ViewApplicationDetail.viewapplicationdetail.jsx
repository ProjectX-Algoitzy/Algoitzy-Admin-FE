import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ViewApplicationDetail() {
    //지원서 상세페이지입니다. 이 페이지를 통해 지원한 학생의 지원서를 보게하고자 합니다
    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndGo1NTdAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImVtYWlsIjoiZ3RqNTU3QG5hdmVyLmNvbSIsImV4cCI6MTcxNDI5MzYyNX0.kJ_Yf8nt-zQsn360JUn8aLykI85Wg_KAjepAwW1Oyia6QLxhFNA3u4T5iaTwQ5I5m8ze0o9Q2wBX8U6OhGqsJw";
    const { id } = useParams();  //파라미터로 각 학생별로 부여된 id를 받아옵니다
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`http://3.35.47.250:8181/answer/${id}`, {
                    headers: {
                        accept: '*/*',
                        Authorization: `Bearer ${accessToken}`,
                    }
                });
                setDetail(response.data.result);
                setLoading(false);
            } catch (error) {
                console.error("상세페이지 조회 오류", error);
                setError(error);
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <h2>상세페이지</h2>
        {detail && (
            <div>
                <div>Answer ID: {detail.answerId}</div>
                <div>Study Name: {detail.studyName}</div>
                <div>Submitted By: {detail.submitName}</div>
                <div>Submit Email: {detail.submitEmail}</div>
                <div>Phone Number: {detail.phoneNumber}</div>

                <h3>답변 항목</h3>
                <ul>
                    {detail.selectAnswerList && detail.selectAnswerList.map((answer, index) => (
                        <li key={index}>
                            <div>{answer.question}</div>
                            <ul>
                                {answer.selectAnswerFieldList.map((field, index) => (
                                    <li key={index}>{field.selected ? "Selected" : "Not selected"}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <h3>텍스트 답변</h3>
                <ul>
                    {detail.textAnswerList && detail.textAnswerList.map((answer, index) => (
                        <li key={index}>
                            <div>{answer.question}</div>
                            <div>{answer.text}</div>
                        </li>
                    ))}
                </ul>

                <div>Submitted Time: {new Date(detail.submitTime).toLocaleString()}</div>
            </div>
        )}
    </div>
  )
}
