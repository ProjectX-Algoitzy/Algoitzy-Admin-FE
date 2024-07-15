import React from 'react';
import * as itemS from "../../Common/Confirm/Confirm.styles"

const Confirm = ({ title, message, onClickOK, onClickCancel }) => {
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
          <itemS.CancelButton onClick={onClickCancel}>취소</itemS.CancelButton>
          <itemS.ConfirmButton onClick={onClickOK}>확인</itemS.ConfirmButton>
        </itemS.ButtonContatiner>
      </itemS.Dialog>
    </itemS.Container>
  
  );
};

export default Confirm;