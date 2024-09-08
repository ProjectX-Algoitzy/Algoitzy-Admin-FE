import React from 'react'
import * as itemS from "./Styled/MakingCurriculum.makingcurriculum.quilleditor.modal.styles"

const Modal = ({ isOpen, onClose, onSubmit, value, onChange }) => {
    if (!isOpen) return null;
  
    return (
      <>
        <itemS.DisableBackground />
        <itemS.ModalBackground>
          <itemS.ModalContent>
            <h3>비디오 URL 삽입</h3>
            <input
              type="text"
              placeholder="비디오 URL을 입력하세요"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <div>
              <itemS.ModalButton onClick={onSubmit}>삽입</itemS.ModalButton>
              <itemS.ModalButton onClick={onClose} style={{ background: '#ccc', color: '#000' }}>취소</itemS.ModalButton>
            </div>
          </itemS.ModalContent>
        </itemS.ModalBackground>
      </>
    );
  };
  
  export default Modal;