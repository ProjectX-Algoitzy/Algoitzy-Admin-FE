import React, { useEffect, useState } from 'react'
import MakedApplicationListGroup from './MakedApplicationList.makedapplicationlist.group';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.main.styles";

export default function MakedApplicationList() {
    

  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <itemS.Head>지원서 제작</itemS.Head>
        <MakedApplicationListGroup></MakedApplicationListGroup>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
