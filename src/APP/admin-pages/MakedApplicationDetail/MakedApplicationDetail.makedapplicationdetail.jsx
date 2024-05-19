import React, { useEffect, useState } from 'react'
import * as items from './Styled/MakedApplicationDetail.makedapplicationDetail'
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
    <items.Container>
        <items.InnerContainer>
            <items.ContentForTitleContainer>
                <items.ApplicationName>KOALA 1기 스터디 지원서</items.ApplicationName>
                <items.StudySelectContainer>{detail.title}</items.StudySelectContainer>
            </items.ContentForTitleContainer>
        </items.InnerContainer>

        {allQuestions.map(question => (
            <items.SecondInnerContainer key={question.sequence}>
                <items.ContentContainer>
                    <items.QuestionAndMultiSelectCheckContainer>
                        <items.QuestionContainer>
                            {question.question}
                            {question.required === true ? (
                                <items.NecessaryImg src='/img/necessarystar.png' alt='필수'/>
                            ): (null)} 
                        </items.QuestionContainer>
                        {question.multiSelect === true ? (
                            <items.MultiselectImg src='/img/textmultiselect.png' alt='복수응답'/>
                        ): (null)}
                    </items.QuestionAndMultiSelectCheckContainer>

                    <items.SelectAndAnswerContainer>
                        {question.fieldList ? (
                            <items.SelectContainer>
                                {question.fieldList.map(field => (
                                    <items.OptionsContainer key={field.fieldId}>
                                        {question.multiSelect === true ? (
                                            <img src="/img/iconsquare.png" alt="복수응답" style={{width:"20px", height:"20px"}} />
                                            // <items.SquareCheckBox type='checkbox' />
                                        ): (
                                            <img src="/img/iconcircle.png" alt="단일응답" style={{width:"20px", height:"20px"}} />
                                            // <items.CircleCheckBox type='checkbox'/>
                                        )}
                                        <items.ChoiceForSelectQuestionContainer>{field.context}</items.ChoiceForSelectQuestionContainer>
                                    </items.OptionsContainer>
                                ))}
                            </items.SelectContainer>
                        ): (
                            <items.AnswerInputContainer type='text' placeholder='답변을 적어주세요' />
                        )}  
                    </items.SelectAndAnswerContainer>
                </items.ContentContainer>
            </items.SecondInnerContainer>
        ))}

        {/* <items.BtnContainer>
            <items.BtnContainer2>
                <items.ArbitaryBtn>임시저장</items.ArbitaryBtn>
                <items.Btn>저장하기</items.Btn>
            </items.BtnContainer2>
        </items.BtnContainer> */}
    </items.Container>
  )
}