import React from 'react';
import * as itemS from "../../admin-pages/MakedApplicationList/Styled/MakedApplicationList.modal.styles";
import request from '../../Api/request';
import { useRecoilState } from "recoil";
import { CntAppication } from '../Recoil/Recoil.state';

const MakeModal = ({ isOpen, onClose, applicationId, setCntApp }) => {
  
  if (!isOpen) return null;

  const handleDelete = () => {
    console.log("applicationId", applicationId);
    request.delete(`/application/${applicationId}`)
      .then(response => {
        console.log("삭제 성공", response);
        // 삭제가 성공했을 때 추가적인 작업 수행
        setCntApp(cnt => cnt + 1); 
        onClose(); // 모달창 닫기
      })
      .catch(error => {
        console.error("삭제 오류", error);
      });
  };

  const handleCopy = () => {
    console.log("applicationId", applicationId);
    const requestData = { applicationId };
    request.post(`/application/copy`, requestData)
      .then(response => {
        console.log("복사 성공", response);
        // 복사가 성공했을 때 추가적인 작업 수행
        setCntApp(cnt => cnt + 1); 
        onClose(); // 모달창 닫기
        
      })
      .catch(error => {
        console.error("복사 오류", error);
      });
  };

  return (
    <>
      <itemS.Backdrop onClick={onClose} /> {/* 모달 외부를 클릭했을 때 닫기 */}
      <itemS.ModalContainer>
        <itemS.BtnBox onClick={handleDelete}>
          <itemS.TrashImg></itemS.TrashImg>
          <itemS.Text>
            삭제
          </itemS.Text>
        </itemS.BtnBox>
        <itemS.Hr></itemS.Hr>
        <itemS.BtnBox onClick={handleCopy}>
          <itemS.CopyImg></itemS.CopyImg>
          <itemS.Text>
            복사
          </itemS.Text>
        </itemS.BtnBox>
      </itemS.ModalContainer>
    </>
  );
};

export default MakeModal;
