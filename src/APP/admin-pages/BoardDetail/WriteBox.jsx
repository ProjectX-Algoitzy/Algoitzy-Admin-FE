import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/WirteBox.styles";

export default function WriteBox() {
	
  const [comment, setComment] = useState('');

	return (
		<itemS.Container>
			<itemS.WriteBox>
        <itemS.InputBox
          type="text"
          placeholder="댓글을 남겨보세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <itemS.SubmitBtn>올리기</itemS.SubmitBtn>
      </itemS.WriteBox>
		</itemS.Container>
	);
}
