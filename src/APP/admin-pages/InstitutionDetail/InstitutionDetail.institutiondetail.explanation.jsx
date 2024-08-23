import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.explanation.styles";

export default function InstitutionDetailExplanation({ content }) {    
  return (
    <itemS.Container>
        <itemS.CategoryContainer>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </itemS.CategoryContainer>
    </itemS.Container>
  );
}