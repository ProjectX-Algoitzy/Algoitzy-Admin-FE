import React, { useEffect, useState } from 'react'
// import request from '../../Api/request';
import { useNavigate, useLocation } from 'react-router-dom';
import MakedApplicationListIndividual from './MakedApplicationList.makedapplicationlist.individual';
import { dummyData1, dummyData2, dummyData3, dummyData4 } from './dummy';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.group.styles";

export default function MakedApplicationListGroup() {

  const navigate = useNavigate();

  const dummyDataArray = [dummyData1, dummyData2, dummyData3, dummyData4];
  const generationTexts = ["4기", "3기", "2기", "1기"];

  const handleMakeApp = () => {
    navigate('/makingapplicationform');
  };

  return (
    <itemS.Container>
      <itemS.Head>지원서 제작</itemS.Head>

      {dummyDataArray.map((dummyData, index) => (
        <div key={index}>
          <itemS.TxtBtnBox>
            <itemS.ApplicationText>
              {generationTexts[index]} 지원서
            </itemS.ApplicationText>
            {index === 0 && (
              <itemS.BtnMakeApp onClick={handleMakeApp}>
                + 새 지원서 생성하기
              </itemS.BtnMakeApp>
            )}
          </itemS.TxtBtnBox>
          <itemS.Group>
            {dummyData.map((item) => (
              <MakedApplicationListIndividual key={item.applicationId} application={item} />
            ))}
          </itemS.Group>
        </div>
      ))}
    </itemS.Container>
  );
}
