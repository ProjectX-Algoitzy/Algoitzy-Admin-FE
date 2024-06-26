import React, { useEffect, useState } from 'react';
import * as itemS from "./Styled/ViewApplicationDetail.viewapplicationdetail.styles";
import request from '../../Api/request';

const ViewApplicationDetail = ({ applicationId, isOpen, onClose, fetchApplication }) => {
  const [applications, setApplications] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await request.get(`/answer/${applicationId}`);
        console.log("response", response);
        setApplications(response.result);
      } catch (error) {
        console.error("상세페이지 조회 오류", error);
      }
    };
    fetchDetail();
  }, [applicationId]);

  if (!isOpen) return null;

  const handleButtonClick = (buttonType) => {
    setActiveButton(activeButton === buttonType ? null : buttonType);
  };

  const handleDecisionClick = async () => {
    if (!activeButton) {
      alert("합격 또는 불합격을 선택해주세요.");
      return;
    }

    const type = activeButton === 'pass' ? 'DOCUMENT_PASS' : 'DOCUMENT_FAIL';
    const emailList = [applications.submitEmail];

    const requestData = {
      type: type,
      emailList: emailList
    };

    try {
      const response = await request.post('/email', requestData);
      if (response.isSuccess) {
        console.log("서류 합/불 메일 전송 성공 response:", response);
        fetchApplication();
        onClose();
      } else {
        console.error("서류 합/불 메일 전송 실패:", response);
      }
      // handle response if needed
    } catch (error) {
      console.error("서류 합/불 메일 전송 에러:", error);
    }
  };

  const renderSelectAnswers = (selectAnswerList) => {
    return selectAnswerList.map((answer, index) => {
      const selectedAnswers = answer.multiSelect
        ? answer.selectAnswerFieldList.filter(field => field.selected).map(field => field.context).join(', ')
        : answer.selectAnswerFieldList.find(field => field.selected)?.context || '';

      return (
        <itemS.BaseQAContainer key={index}>
          <itemS.BaseQuestion>{answer.question}</itemS.BaseQuestion>
          <itemS.BaseAnswer>{selectedAnswers}</itemS.BaseAnswer>
        </itemS.BaseQAContainer>
      );
    });
  };

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopContainer>
          <itemS.TopTitle>지원서 보기</itemS.TopTitle>
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopContainer>

        <itemS.InnerContainer>
          <itemS.StudyNameContainer>
            <itemS.Title>지원분야</itemS.Title>
            <itemS.StudyName>{applications.studyName}</itemS.StudyName>
          </itemS.StudyNameContainer>

          <itemS.InnerInnerContainer>
            <itemS.Title>지원서</itemS.Title>

            <itemS.BaseQAContainer>
              <itemS.BaseQuestion>지원자 이메일</itemS.BaseQuestion>
              <itemS.BaseAnswer>{applications.submitEmail}</itemS.BaseAnswer>
            </itemS.BaseQAContainer>
            <itemS.BaseQAContainer>
              <itemS.BaseQuestion>지원자 이름</itemS.BaseQuestion>
              <itemS.BaseAnswer>{applications.submitName}</itemS.BaseAnswer>
            </itemS.BaseQAContainer>
            <itemS.BaseQAContainer>
              <itemS.BaseQuestion>핸드폰 번호</itemS.BaseQuestion>
              <itemS.BaseAnswer>{applications.phoneNumber}</itemS.BaseAnswer>
            </itemS.BaseQAContainer>
            
            {applications.textAnswerList && applications.textAnswerList.length > 0 && (
              applications.textAnswerList.map((textAnswer, index) => (
                <itemS.BaseQAContainer key={index}>
                  <itemS.BaseQuestion>{textAnswer.question}</itemS.BaseQuestion>
                  <itemS.BaseAnswer>{textAnswer.text}</itemS.BaseAnswer>
                </itemS.BaseQAContainer>
              ))
            )}

            {applications.selectAnswerList && applications.selectAnswerList.length > 0 && (
              renderSelectAnswers(applications.selectAnswerList)
            )}
          </itemS.InnerInnerContainer>

          <itemS.Time>{new Date(applications.submitTime).toLocaleString()}</itemS.Time>

          <itemS.BottomContainer>
            <itemS.Title>평가</itemS.Title>
            <itemS.BtnContainer>
              <itemS.NonPassBtn
                onClick={() => handleButtonClick('nonPass')}
                isActive={activeButton === 'nonPass'}
              >
                불합격
              </itemS.NonPassBtn>
              <itemS.PassBtn
                onClick={() => handleButtonClick('pass')}
                isActive={activeButton === 'pass'}
              >
                합격
              </itemS.PassBtn>
            </itemS.BtnContainer>
          </itemS.BottomContainer>
        </itemS.InnerContainer>

        <itemS.DecisionBtn onClick={handleDecisionClick}>확정하기</itemS.DecisionBtn>
      </itemS.ModalContainer>
    </itemS.Backdrop>
  );
};

export default ViewApplicationDetail;
