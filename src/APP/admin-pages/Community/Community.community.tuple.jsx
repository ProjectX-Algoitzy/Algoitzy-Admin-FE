import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Community.community.tuple.styles";
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function CommunityTuple({ item, isTabClick }) {
	const navigate = useNavigate();
  const { alert } = useContext(AlertContext);
  const [isAbled, setIsAbled] = useState(true);

  const formatDate = (createdTime) => {
    const date = new Date(createdTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const renderTupleTitle = (title) => {
    if (title.length > 36) {
      return <itemS.TupleTitle>{title.slice(0, 35) + '...'}</itemS.TupleTitle>;
    } else {
      return <itemS.TupleTitle>{title}</itemS.TupleTitle>;
    }
  };

	const moveToDetail = (id) => {
		navigate(`/board/${id}`);
	}

  return (
    <itemS.TupleContainer fixyn={item.fixYn} onClick={() => moveToDetail(item.boardId)}>
      <itemS.TupleType>{isTabClick ? item.boardId : item.category}</itemS.TupleType>
      <itemS.TupleTitleBox>
        {renderTupleTitle(item.title)}
        {item.newBoardYn && (
          <itemS.NewIcon>NEW</itemS.NewIcon>
        )}
      </itemS.TupleTitleBox>
      <itemS.TupleWriter>{item.createdName}</itemS.TupleWriter>
      <itemS.TupleDate>{formatDate(item.createdTime)}</itemS.TupleDate> 
      <itemS.TupleView>{item.viewCount}</itemS.TupleView>
    </itemS.TupleContainer>
  );
}
