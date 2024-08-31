import React, { useState, useContext } from 'react';
import * as itemS from "./Styled/ManageAuth.manageauth.usertuple";
import request from "../../Api/request";
import { AlertContext } from '../../Common/Alert/AlertContext';


export default function ManageAuthUserTuple({ item, fetchAdminList, fetchUserList }) {
  const { alert } = useContext(AlertContext);

  const [isDropVisible, setIsDropVisible] = useState(false);
  // const [role, setRole] = useState('');

  const toggleSortDrop = () => {
    setIsDropVisible(prevState => !prevState);
  };

  const onSelect = async (role) => {
    
      const requestData = {
        memberId: item.memberId,
        role: role
      };
  
      try {
        const response = await request.patch(`/member/role`, requestData);
        if (response.isSuccess) {
          console.log("권한 추가 성공 response:", response);
          // setRole(role);
          setIsDropVisible(prevState => !prevState);
          fetchAdminList();
          fetchUserList();
        } else {
          console.error("권한 추가 실패:", response);
        }
      } catch (error) {
        console.error("권한 추가 에러:", error);
        // const errorMessage = error.response?.data?.message || "권한 추가 에러"; 
        // alert(String(errorMessage));
      }
  
  };
  

  return (
    <itemS.TupleContainer>
      <itemS.TupleName>{item.name}</itemS.TupleName>
      <itemS.TupleHandle>{item.handle}</itemS.TupleHandle>
      <itemS.TupleMajor>{item.major}</itemS.TupleMajor>
      <itemS.GrantButton onClick={toggleSortDrop}>
        <itemS.GrantText>임원</itemS.GrantText>
        <itemS.SortIcon src="/img/sorticon.svg" alt="Sort Icon" />
        {isDropVisible && (
          <itemS.SelectDrop>
            <itemS.SelectText onClick={() => onSelect('ROLE_OWNER')}>회장</itemS.SelectText>
            <itemS.SelectText onClick={() => onSelect('ROLE_ADMIN')}>임원</itemS.SelectText>
          </itemS.SelectDrop>
        )}
      </itemS.GrantButton>
    </itemS.TupleContainer>
  );
}
