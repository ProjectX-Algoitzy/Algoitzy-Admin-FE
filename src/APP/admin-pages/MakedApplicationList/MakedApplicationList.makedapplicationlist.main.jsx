import React, { useEffect, useState } from 'react';
import MakedApplicationListGroup from './MakedApplicationList.makedapplicationlist.group';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.main.styles";
import { useRecoilState } from "recoil";
import { CntAppication } from '../Recoil/Recoil.state';
import request, { ACCESS_TOKEN } from '../../Api/request';
import { useNavigate } from 'react-router-dom';

export default function MakedApplicationList() {
  const navigate = useNavigate();
  const [applicationList, setApplicationList] = useState([]);
  const [cntApp, setCntApp] = useRecoilState(CntAppication);

  useEffect(() => {
    const fetchMakedApplicationDetail = async () => {
      try {
        const response = await request.get(`/application`);
        console.log("response", response);

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

  const handleMakeApp = async () => {
    try {
      const responseApplication = await request.post(`/application`);
      if(responseApplication["isSuccess"]) {
        console.log("지원서 제작 페이지로 이동");
        navigate(`/newapplication/${responseApplication.result.applicationId}`);
      } else {
        console.error("지원서 제작 페이지로 이동 실패", responseApplication);
      }
    } catch (error) {
      console.error("지원서 생성 오류", error);
    }
  };

  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.Head>
          지원서 제작
          {applicationList.length === 0 && (
            <itemS.BtnMakeApp onClick={handleMakeApp}>
              + 새 지원서 생성하기
            </itemS.BtnMakeApp>
          )}
        </itemS.Head>
        <MakedApplicationListGroup 
          applicationList={applicationList} 
          handleMakeApp={handleMakeApp} 
          setCntApp={setCntApp}
        />
      </itemS.InnerContainer>
    </itemS.Container>
  );
}