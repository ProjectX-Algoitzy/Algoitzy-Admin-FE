import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemS from "./Styled/Inquiry.inquiry.tuple.styles";

export default function InquiryTuple({ item, isTabClick, searchKeyword, isRegularMember }) {
  const navigate = useNavigate();

  const formatDate = (createdTime) => {
    const date = new Date(createdTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

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

    if (!title) {
      // title이 null, undefined, 또는 빈 문자열일 경우 처리
      return <itemS.TupleTitle>제목 없음</itemS.TupleTitle>;
    }

    const truncatedTitle = title.length > maxLength ? title.slice(0, maxLength - 1) + '...' : title;

    return (
      <itemS.TupleTitle>
        {renderHighlight(truncatedTitle)}
      </itemS.TupleTitle>
    );
  };

  const moveToDetail = (id) => {
    navigate(`/inquiryboard/${id}`);
  };

  return (
    <itemS.TupleContainer onClick={() => moveToDetail(item.inquiryId)}>
      <itemS.TupleType>{isTabClick ? item.inquiryId : item.categoryName}</itemS.TupleType> {/* 커뮤니티랑 똑같이 카테고리 탭 클릭시 id가 대신 오도록 */}
      <itemS.TupleTitleBox>
        {renderTupleTitle(item.title)}
        {!item.publicYn && <itemS.Lockimg src='/img/lock.png' alt='자물쇠' />}
      </itemS.TupleTitleBox>
      {isRegularMember ? (
        <itemS.TupleWriter>{renderHighlight(item.createdName)}</itemS.TupleWriter>
      ) : (
        <itemS.TupleBlank></itemS.TupleBlank>
      )}
      <itemS.TupleDate>{formatDate(item.createdTime)}</itemS.TupleDate>
      <itemS.TupleView>{item.viewCount}</itemS.TupleView>
      <itemS.TupleProcess>
        <itemS.ProcessingYNBox solvedYn={item.solvedYn}>
          {item.solvedYn ? '답변 완료' : '답변 대기'}
        </itemS.ProcessingYNBox>
      </itemS.TupleProcess>
    </itemS.TupleContainer>
  )
}
