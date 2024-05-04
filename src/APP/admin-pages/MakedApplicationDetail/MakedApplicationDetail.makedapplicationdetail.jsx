import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import request from '../../Api/request';

export default function MakedApplicationDetail() {
    const { id } = useParams();  //파라미터로 각 학생별로 부여된 id를 받아옵니다
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMakedApplicationDetail = async() => {
            try {
                const response = await request.get(`/application/${id}`); 
                console.log("response", response);
                setDetail(response.result);
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
        fetchMakedApplicationDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <h1>지원서 양식 상세조회</h1>
        {detail && (
            <div>
                <h2>Title: {detail.title}</h2>
                <p>Generation: {detail.generation}</p>
                <p>Study Name: {detail.studyName}</p>
                <h3>Select Questions:</h3>
                <ul>
                    {detail.selectQuestionList.map(question => (
                        <li key={question.selectQuestionId}>
                            <p>Question: {question.question}</p>
                            <p>Multi Select: {question.multiSelect ? 'Yes' : 'No'}</p>
                            <p>Required: {question.required ? 'Yes' : 'No'}</p>
                            <ul>
                                {question.fieldList.map(field => (
                                    <li key={field.fieldId}>
                                        <p>Field Context: {field.context}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <h3>Text Questions:</h3>
                <ul>
                    {detail.textQuestionList.map(question => (
                        <li key={question.textQuestionId}>
                            <p>Question: {question.question}</p>
                            <p>Required: {question.required ? 'Yes' : 'No'}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}
