import React from 'react';
import MakedApplicationListIndividual from './MakedApplicationList.makedapplicationlist.individual';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.group.styles";

export default function MakedApplicationListGroup({ applicationList, handleMakeApp, setCntApp }) {
  return (
    <itemS.Container>
      {applicationList.length > 0 ? (
        applicationList.map((application, index) => (
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
        ))
      ) : (
        // <itemS.NoDataContainer>
        //   <itemS.NoDataText>데이터가 없습니다.</itemS.NoDataText>
        // </itemS.NoDataContainer>
        <div></div>
      )}
    </itemS.Container>
  );
}