import React from 'react';
import { Link } from 'react-router-dom';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.makedapplicationlist.individual.styles";

export default function MakedApplicationListIndividual({ application }){
  return (
    
        <itemS.InnerContainer key={application.applicationId}>
          {/* <Link to={`/makedapplicationdetail/${application.applicationId}`}>
            applicationId: {application.applicationId}
          </Link> */}
					<itemS.TopContainer>
						<itemS.Top>
							<itemS.TopInner>
								<itemS.SM12default>제작일</itemS.SM12default>
								<itemS.B3M14TOP>{application.createdTime}</itemS.B3M14TOP>
							</itemS.TopInner>
							<itemS.TopInner>
								<itemS.SM12default>:::</itemS.SM12default>
							</itemS.TopInner>
						</itemS.Top>
						<itemS.Top>
							<itemS.TopInner>
								<itemS.SM12default>제작자</itemS.SM12default>
								<itemS.B3M14TOP>00 {application.createdName}</itemS.B3M14TOP>
							</itemS.TopInner>
						</itemS.Top>
					</itemS.TopContainer>

					<itemS.BottomContainer>
						<itemS.Bottom>
							<itemS.T3B24>{application.title}</itemS.T3B24>
						</itemS.Bottom>
						<itemS.Bottom>
							<itemS.T5SB16>{application.studyName}</itemS.T5SB16>
						</itemS.Bottom>
						<itemS.Bottom>
							<itemS.BottomInner>	
								<itemS.SM12>최종 수정</itemS.SM12>
								<itemS.B3M14>{application.updatedTime}</itemS.B3M14>
							</itemS.BottomInner>
							<itemS.BottomInner>
								<itemS.B3M14>00</itemS.B3M14>
								<itemS.B3M14>{application.updatedName}</itemS.B3M14>
							</itemS.BottomInner>
						</itemS.Bottom>
					</itemS.BottomContainer>

        </itemS.InnerContainer>
      )
    
};


