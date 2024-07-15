import React from 'react';
import * as itemS from "../../Common/Alert/Alert.styles"

const Alert = ({ title, message, onClickOK }) => {
  return (
    <itemS.Container>
      <itemS.Dialog>
        <itemS.TitleBox>
          <itemS.Title>{title}</itemS.Title>
        </itemS.TitleBox>
        {/* <itemS.TextBox>
          <itemS.Text>{message}</itemS.Text>
        </itemS.TextBox> */}
        <itemS.ButtonContatiner>
          
          <itemS.Button onClick={onClickOK}>확인</itemS.Button>
        </itemS.ButtonContatiner>
      </itemS.Dialog>
    </itemS.Container>
  
  );
};

export default Alert;