import React, { useState } from 'react';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.explanation.styles";

export default function InstitutionDetailExplanation({ content }) {
   
    
  return (
    <itemS.Container>
        <itemS.CategoryContainer dangerouslySetInnerHTML={{ __html: content }}></itemS.CategoryContainer>
    </itemS.Container>
  );
}