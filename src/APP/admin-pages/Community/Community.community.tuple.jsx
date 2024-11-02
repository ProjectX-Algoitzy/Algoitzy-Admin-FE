import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Community.community.tuple.styles";
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function CommunityTuple({ item, isTabClick, searchKeyword }) {
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

  // Highlight rendering function
  const renderHighlight = (text) => {
    if (!searchKeyword) return text;

    const parts = text.split(new RegExp(`(${searchKeyword})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchKeyword.toLowerCase() ? (
        <itemS.HighlightedText key={index}>{part}</itemS.HighlightedText>
      ) : (
        <itemS.TupleTitle key={index}>{part}</itemS.TupleTitle>
      )
    );
  };

  const renderTupleTitle = (title) => {
    const maxLength = 36;

    // Truncate title if it exceeds maxLength
    const truncatedTitle = title.length > maxLength ? title.slice(0, maxLength - 1) + '...' : title;

    // Apply highlight rendering to the truncated title
    return (
      <itemS.TupleTitle>
        {renderHighlight(truncatedTitle)}
      </itemS.TupleTitle>
    );
  };

  const moveToDetail = (id) => {
    navigate(`/board/${id}`);
  };

  return (
    <itemS.TupleContainer fixyn={item.fixYn} onClick={() => moveToDetail(item.boardId)}>
      <itemS.TupleType>{isTabClick ? item.boardId : item.category}</itemS.TupleType>
      <itemS.TupleTitleBox>
        {renderTupleTitle(item.title)}
        {item.newBoardYn && <itemS.NewIcon>NEW</itemS.NewIcon>}
      </itemS.TupleTitleBox>
      <itemS.TupleWriter>{renderHighlight(item.createdName)}</itemS.TupleWriter>
      <itemS.TupleDate>{formatDate(item.createdTime)}</itemS.TupleDate>
      <itemS.TupleView>{item.viewCount}</itemS.TupleView>
    </itemS.TupleContainer>
  );
}
