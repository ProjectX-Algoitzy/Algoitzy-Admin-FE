import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.explanation.styles";

export default function InstitutionDetailExplanation({ content }) {
   console.log("ㄴ야ㅓ랸얼content: ", content);
    
  return (
    <itemS.Container>
        <itemS.CategoryContainer>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </itemS.CategoryContainer>
    </itemS.Container>
  );
}