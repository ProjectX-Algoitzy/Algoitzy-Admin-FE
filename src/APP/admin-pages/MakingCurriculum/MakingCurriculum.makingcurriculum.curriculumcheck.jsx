import React, { useEffect, useState } from 'react';
import * as itemS from './Styled/MakingCurriculum.makingcurriculum.curriculumcheck.styles'
import request from '../../Api/request';
import { useLocation } from 'react-router-dom';

export default function CurriculumCheck() {
  const location = useLocation();
  const { curriculumId } = location.state;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(`/curriculum/${curriculumId}`);
        console.log("response", response);
        if (response["isSuccess"]) {
          setData(response.result);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <itemS.Container>
      <itemS.Title>{data.title}</itemS.Title>
      <itemS.SecondContainer>
        <itemS.WhiteBox>{data.studyName}</itemS.WhiteBox>
        <itemS.WhiteBox>{data.week}주차</itemS.WhiteBox>
      </itemS.SecondContainer>
      <itemS.ContentsContainer dangerouslySetInnerHTML={{ __html: data.content }} />
    </itemS.Container>
  );
}
