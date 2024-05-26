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

  // const handleMakeApp = () => { //기존의 handleMakeApp함수
  //   navigate('/makingapplicationform');
  // };

  const handleMakeApp = async () => { //수정된 api에 따라 제가 수정을 했습니다. 
    try {
      const responseApplication = await request.post(`/application`);
      console.log("responseApplication", responseApplication); // 받아온 api response에는 새롭게 생성된 applicationId가 있습니다. 
      if(responseApplication["isSuccess"]) {
        console.log("지원서 제작 페이지로 이동");
        navigate(`/makedapplicationdetail/${responseApplication.result.applicationId}`); //버튼을 누르면 우선적으로 디비에 지원서가 디폴트값들로 생성되는 규칙이 적용되었기에, 여기서는 새롭게 생성된 id에 따라 바로 MakedApplicationDetail로 갈 수 있도록 수정했습니다. 
      } else {
        console.error("지원서 제작 페이지로 이동 실패", responseApplication);
      }

    } catch (error) {
      console.error("지원서 생성 오류", error);
    }
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
