import React, { useState, useContext } from 'react';
import * as itemS from "./Styled/ManageAuth.manageauth.managertuple";
import request from "../../Api/request";
import { AlertContext } from '../../Common/Alert/AlertContext';


export default function ManageAuthManagerTuple({ item, fetchAdminList, fetchUserList }) {
  const { alert } = useContext(AlertContext);

  const handleRevoke = async () => {

    const requestData = {
			memberId: item.memberId,
			role: "ROLE_USER"
		};

    try {
      const response = await request.patch(`/member/role`, requestData);
      if (response.isSuccess) {
        console.log("권한 회수 성공 response:", response);
        fetchAdminList();
        fetchUserList();
      } else {
        console.error("권한 회수 실패:", response);
      }
    } catch (error) {
      console.error("권한 회수 에러:", error);
      // const errorMessage = error.response?.data?.message || "권한 회수 에러"; 
      //   alert(String(errorMessage));
    }
  };
  

  return (
    <itemS.TupleContainer>
      <itemS.TupleNameBox>
        {item.role === "ROLE_OWNER" ? (
          <itemS.Crown src='/img/crown.svg' alt='왕관'/>
        ) : (
          <itemS.Blank></itemS.Blank>
        )}
        <itemS.TupleName>{item.name}</itemS.TupleName>
      </itemS.TupleNameBox>
      <itemS.TupleHandle>{item.handle}</itemS.TupleHandle>
      <itemS.TupleMajor>{item.major}</itemS.TupleMajor>
      <itemS.RevokeButton onClick={handleRevoke}>권한 회수</itemS.RevokeButton>
    </itemS.TupleContainer>
  );
}
