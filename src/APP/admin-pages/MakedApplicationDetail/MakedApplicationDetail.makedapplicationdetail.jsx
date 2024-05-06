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

    const allQuestions = [...detail.selectQuestionList, ...detail.textQuestionList]; // selectQuestionList와 textQuestionList를 합침
    allQuestions.sort((a, b) => a.sequence - b.sequence); // sequence로 재정렬

  return (
    <div>
        <h1>지원서 양식 상세조회</h1>
        {detail && (
            <div>
            <h2>Title: {detail.title}</h2>
            <p>Generation: {detail.generation}</p>
            <p>Study Name: {detail.studyName}</p>
            <h3>Questions:</h3>
            <ul>
                {allQuestions.map(question => (
                    <li key={question.sequence}>
                        <p>sequence: {question.sequence}</p> {/* 몇 번째 문항인지 */}
                        <p>Question: {question.question}</p> {/* 지원서 질문내용 */}
                        {question.multiSelect !== undefined && <p>Multi Select: {question.multiSelect ? 'Yes' : 'No'}</p>} {/* 만약 객관식일 경우 복수형인지 단일형인지 알려주는 부분 */}
                        {question.required !== undefined && <p>Required: {question.required ? 'Yes' : 'No'}</p>} {/* 해당 문항이 필수인지 아닌지 알려주는 부분 */}
                        {question.fieldList && ( //만약 객관실일 경우 객관식 보기 문항들을 한번에 보여주는 부분
                            <ul>
                                {question.fieldList.map(field => (
                                    <li key={field.fieldId}>
                                        <p>Field Context: {field.context}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            </div>
            // <div>
            //     <h2>Title: {detail.title}</h2>
            //     <p>Generation: {detail.generation}</p>
            //     <p>Study Name: {detail.studyName}</p>
            //     <h3>Select Questions:</h3>
            //     <ul>
            //         {detail.selectQuestionList.map(question => (
            //             <li key={question.selectQuestionId}>
            //                 <p>Question: {question.question}</p>
            //                 <p>sequence: {question.sequence}</p>
            //                 <p>Multi Select: {question.multiSelect ? 'Yes' : 'No'}</p>
            //                 <p>Required: {question.required ? 'Yes' : 'No'}</p>
            //                 <ul>
            //                     {question.fieldList.map(field => (
            //                         <li key={field.fieldId}>
            //                             <p>Field Context: {field.context}</p>
            //                         </li>
            //                     ))}
            //                 </ul>
            //             </li>
            //         ))}
            //     </ul>
            //     <h3>Text Questions:</h3>
            //     <ul>
            //         {detail.textQuestionList.map(question => (
            //             <li key={question.textQuestionId}>
            //                 <p>Question: {question.question}</p>
            //                 <p>sequence: {question.sequence}</p>
            //                 <p>Required: {question.required ? 'Yes' : 'No'}</p>
            //             </li>
            //         ))}
            //     </ul>
            // </div>
        )}
    </div>
  )
}
