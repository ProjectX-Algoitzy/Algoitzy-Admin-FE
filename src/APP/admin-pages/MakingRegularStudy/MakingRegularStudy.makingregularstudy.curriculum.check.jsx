import React, { useEffect, useState } from 'react';
import request from '../../Api/request';

export default function MakingRegularStudyCurriculumCheck() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(`/curriculum/8`);
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
    <div style={{display: "flex", flexDirection:"column", alignItems:"center", marginTop: "100px" }}>
      <h1>{data.title}</h1>
      <h2>Week: {data.week}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.content }} style={{backgroundColor:"skyblue"}} />
    </div>
  );
}
