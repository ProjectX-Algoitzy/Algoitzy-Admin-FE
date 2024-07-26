import React, { useState } from 'react';
import * as itemS from "./Styled/ManageAuth.manageauth.usertable";
import ManageAuthUserTuple from './ManageAuth.manageauth.usertuple';

export default function ManageAuthUserTable({ userList, fetchAdminList, fetchUserList }) {
   
    
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
          {userList.map(item => (
            <ManageAuthUserTuple
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