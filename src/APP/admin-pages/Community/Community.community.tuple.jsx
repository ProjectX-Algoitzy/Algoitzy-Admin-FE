import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Community.community.tuple.styles";
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function CommunityTuple({ item, isTabClick }) {
  const { alert } = useContext(AlertContext);  
  
  const [isAbled, setIsAbled] = useState(true); 

	const renderTupleTitle = (title) => {
    if (title.length > 36) {
      return <itemS.TupleTitle>{title.slice(0, 35) + '...'}</itemS.TupleTitle>;
    } else {
      return <itemS.TupleTitle>{title}</itemS.TupleTitle>;
    }
  };

	return (
		<itemS.TupleContainer fixYn={item.fixYn}>
			<itemS.TupleType>{isTabClick ? item.boardId : item.category}</itemS.TupleType>
			<itemS.TupleTitleBox>
				{/* <itemS.TupleTitle>{item.title}</itemS.TupleTitle> */}
				{renderTupleTitle(item.title)}
				{/* {item.new && (
					<itemS.NewIcon>NEW</itemS.NewIcon>	
				)} */}
			</itemS.TupleTitleBox>
			<itemS.TupleWriter>{item.createdName}</itemS.TupleWriter>
			<itemS.TupleDate>{item.createdTime}</itemS.TupleDate>
			<itemS.TupleView>{item.viewCount}</itemS.TupleView>
				
		</itemS.TupleContainer>
	);
}