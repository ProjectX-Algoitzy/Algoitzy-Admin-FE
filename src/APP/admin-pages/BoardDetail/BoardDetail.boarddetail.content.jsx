import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/BoardDetail.boarddetail.content.styles";

export default function Content({ content, files }) {
	


	return (
		<itemS.Container>
			<itemS.ContentContainer>
				<itemS.Content>{content}</itemS.Content>
				{files && files.length > 0 && (
					<itemS.FileContainer>
						<itemS.FileText>첨부파일 : </itemS.FileText>
						<itemS.FileList>
							{files.map((file, index) => (
								<itemS.File key={index}>{file.originalName}</itemS.File>
							))}
						</itemS.FileList>
					</itemS.FileContainer>
				)}
			</itemS.ContentContainer>

		</itemS.Container>
	);
}
