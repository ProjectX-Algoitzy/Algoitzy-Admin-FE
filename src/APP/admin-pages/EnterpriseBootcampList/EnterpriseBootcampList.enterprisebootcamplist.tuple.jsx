import React, { useState, useEffect, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "../../admin-pages/EnterpriseBootcampList/Styled/EnterpriseBootcampList.enterprisebootcamplist.tuple.styles";

export default function EnterBootListTuple({ item }) {

  const navigate = useNavigate();

  const onOpen = (institutionId) => {
		navigate(`/institutiondetail/${institutionId}`);
	};
  
	return (
		<itemS.TupleContainer>
			<itemS.TupleNumber onClick={() => onOpen(item.institutionId)}>{item.institutionId}</itemS.TupleNumber>
			<itemS.TupleName onClick={() => onOpen(item.institutionId)}>{item.name}</itemS.TupleName>
			<itemS.TupleView onClick={() => onOpen(item.institutionId)}>{item.viewCount}</itemS.TupleView>
		</itemS.TupleContainer>
	);
}