import React, { useState, useEffect } from 'react'
import * as itemS from "./Styled/ViewApplicationList.viewapplicationlist.table.styles";
import ViewApplicationListTuple from './ViewApplicationList.viewapplicationlist.tuple';

export default function ViewApplicationListTable() {

    return (
			<itemS.Container>
				{/* 테이블 */}
				<itemS.Table> 
					{/* 카테고리 */}
					<itemS.CategoryContainer>
						<itemS.CheckBox type="checkbox" />
						<itemS.Category>이름</itemS.Category>
						<itemS.Category>학년</itemS.Category>
						<itemS.Category>학과</itemS.Category>
						<itemS.Category>참여 희망 스터디</itemS.Category>
						<itemS.Category>진행 단계</itemS.Category>
						<itemS.CategoryDrop>면접 일정</itemS.CategoryDrop>
					</itemS.CategoryContainer>

					{/* 튜플 */}
					<itemS.TupleContainer>
						<ViewApplicationListTuple></ViewApplicationListTuple>
					</itemS.TupleContainer>
				</itemS.Table>
			</itemS.Container>
	);
}
