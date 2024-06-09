import React, { useEffect, useState } from 'react';
import MakedApplicationListGroup from './MakedApplicationList.makedapplicationlist.group';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.main.styles";
import { useRecoilState } from "recoil";
import { CntAppication } from '../Recoil/Recoil.state';
import request from '../../Api/request';
import { useNavigate } from 'react-router-dom';

export default function MakedApplicationList() {
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

  const handleMakeApp = async () => {
    try {
      const responseApplication = await request.post(`/application`);
      console.log("responseApplication", responseApplication); // 받아온 api response에는 새롭게 생성된 applicationId가 있습니다. 
      if(responseApplication["isSuccess"]) {
        console.log("지원서 제작 페이지로 이동");
        navigate(`/newapplication/${responseApplication.result.applicationId}`); //버튼을 누르면 우선적으로 디비에 지원서가 디폴트값들로 생성되는 규칙이 적용되었기에, 여기서는 새롭게 생성된 id에 따라 바로 MakedApplicationDetail로 갈 수 있도록 수정했습니다. 
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