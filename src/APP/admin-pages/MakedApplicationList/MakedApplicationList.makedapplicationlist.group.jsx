import React, { useEffect, useState } from 'react'
import request from '../../Api/request';
import { useNavigate, useLocation } from 'react-router-dom';
import MakedApplicationListIndividual from './MakedApplicationList.makedapplicationlist.individual';
import { dummyData1, dummyData2, dummyData3, dummyData4 } from './dummy';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.group.styles";
import { useRecoilState } from "recoil";
import { CntAppication } from '../Recoil/Recoil.state';

export default function MakedApplicationListGroup() {

  const navigate = useNavigate();
  const [applicationList, setApplicationList] = useState([]);

  // 지원서 복사 및 삭제 시 리로딩 위함
  const [cntApp, setCntApp] = useRecoilState(CntAppication);

  useEffect(() => {
    const fetchMakedApplicationDetail = async () => {
      try {
        const response = await request.get(`/application`);
        console.log("response", response);
        console.log("applicationList", response.result.applicationList);
  
        if (response.isSuccess) {
          console.log("제작된 지원서 조회 성공");
          setApplicationList(response.result.applicationList);
        } else {
          console.error("제작된 지원서 조회 실패:", response);
        }
      } catch (error) {
        console.error('제작된 지원서 조회 오류', error);
      }
    };
    fetchMakedApplicationDetail();
  }, [cntApp]);


// if (loading) return <div>Loading...</div>;
// if (error) return <div>Error: {error.message}</div>;

  // const dummyDataArray = [dummyData1, dummyData2, dummyData3, dummyData4];
  // const generationTexts = ["4기", "3기", "2기", "1기"];

  const handleMakeApp = () => {
    navigate('/makingapplicationform');
  };

  return (
    <itemS.Container>
      {applicationList.map((application, index) => (
        <div key={index}>
          <itemS.TxtBtnBox>
            <itemS.ApplicationText>
              {application.generation}기 지원서
            </itemS.ApplicationText>
            {index === 0 && (
              <itemS.BtnMakeApp onClick={handleMakeApp}>
                + 새 지원서 생성하기
              </itemS.BtnMakeApp>
            )}
          </itemS.TxtBtnBox>
          <itemS.Group>
            {application.applicationByGenerationList.map((item) => (
              <MakedApplicationListIndividual 
                key={item.applicationId} 
                application={item} 
                setCntApp={setCntApp}
              />
            ))}
          </itemS.Group>
        </div>
      ))}
    </itemS.Container>
  );
}
