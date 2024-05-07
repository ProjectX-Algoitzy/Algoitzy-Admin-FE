import React from 'react';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.modal.styles";

const MakeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <itemS.Backdrop onClick={onClose} /> {/* 모달 외부를 클릭했을 때 닫기 */}
      <itemS.ModalContainer>
        <itemS.BtnBox>
          <itemS.Img></itemS.Img>
          <itemS.Text>
            삭제
          </itemS.Text>
        </itemS.BtnBox>
        <itemS.Hr></itemS.Hr>
        <itemS.BtnBox>
          <itemS.Img></itemS.Img>
          <itemS.Text>
            복사
          </itemS.Text>
        </itemS.BtnBox>
      
      </itemS.ModalContainer>
    </>
  );
};

export default MakeModal;