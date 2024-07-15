import React, { useEffect } from 'react';
import * as itemS from "../../Common/Alert/Alert.styles"

const Alert = ({ title, message, onClickOK }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior
        onClickOK();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClickOK]);

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