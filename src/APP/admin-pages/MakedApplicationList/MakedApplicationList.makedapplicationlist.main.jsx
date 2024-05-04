import React, { useEffect, useState } from 'react'
import request from '../../Api/request';
import { Link } from 'react-router-dom';
import MakedApplicationListGroup from './MakedApplicationList.makedapplicationlist.group';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.main.styles";

export default function MakedApplicationList() {
    

  return (
    <itemS.Container>
      <itemS.InnerContainer>
        <MakedApplicationListGroup></MakedApplicationListGroup>
      </itemS.InnerContainer>
    </itemS.Container>
  )
}
