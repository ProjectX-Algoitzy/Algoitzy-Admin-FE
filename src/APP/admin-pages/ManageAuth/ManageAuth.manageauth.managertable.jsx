import React, { useState } from 'react';
import * as itemS from "./Styled/ManageAuth.manageauth.managertable";
import ManageAuthManagerTuple from './ManageAuth.manageauth.managertuple';

export default function ManageAuthManagerTable({ adminList, fetchAdminList, fetchUserList }) {
   
    
  return (
    <itemS.Container>
      <itemS.Table>
        <itemS.CategoryContainer>
          
          <itemS.CategoryName>이름</itemS.CategoryName>
          <itemS.CategoryHandle>백준 닉네임</itemS.CategoryHandle>
          <itemS.CategoryMajor>학과</itemS.CategoryMajor>
          <itemS.Blank></itemS.Blank>
          
        </itemS.CategoryContainer>
        <itemS.TupleContainer>
          {adminList.map(item => (
            <ManageAuthManagerTuple
              key={item.id}
              item={item}
              fetchAdminList={fetchAdminList}
              fetchUserList={fetchUserList}
            />
          ))}
        </itemS.TupleContainer>
      </itemS.Table>
    </itemS.Container>
  );
}