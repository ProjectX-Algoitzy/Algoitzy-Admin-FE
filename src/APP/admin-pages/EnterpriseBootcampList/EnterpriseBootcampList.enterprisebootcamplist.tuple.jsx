import React, { useState, useEffect, useContext  } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "../../admin-pages/EnterpriseBootcampList/Styled/EnterpriseBootcampList.enterprisebootcamplist.tuple.styles";

export default function EnterBootListTuple({ item }) {

  const navigate = useNavigate;

  const onOpen = (number) => {
		navigate('/${number}');
	};
  
	return (
		<itemS.TupleContainer>
			<itemS.TupleNumber onClick={onOpen}>{item.number}</itemS.TupleNumber>
			<itemS.TupleName onClick={onOpen}>{item.name}</itemS.TupleName>
			<itemS.TupleView onClick={onOpen}>{item.views}</itemS.TupleView>
		</itemS.TupleContainer>
	);
}