import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/PostDetail.postdetail.content.styles";

export default function Content({ item }) {
	


	return (
		<itemS.Container>
			<itemS.ContentContainer>
				<itemS.Content>{item[0].content}</itemS.Content>
				<itemS.FileContainer>
					<itemS.FileText>첨부파일 : </itemS.FileText>
					<itemS.FileList>
						{item[0].files.map((file, index) => (
							<itemS.File key={index}>{file}</itemS.File>
						))}
					</itemS.FileList>
				</itemS.FileContainer>
			</itemS.ContentContainer>

		</itemS.Container>
	);
}
