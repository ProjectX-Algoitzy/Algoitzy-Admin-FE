import React, { useContext, useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import * as itemS from "./Styled/EditInstitutionModal.styles";
import QuillPractice from '../MakingCurriculum/MakingCurriculum.makingcurriculum.quilleditor';
import request from '../../Api/request';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function EditInstitutionModal({ isModalOpen, onClose, originName, originType, originContent, institutionId, fetchWorkbook, fetchWorkbookExplain }) {
  const [name, setName] = useState('');
  const [selectType, setSelectType] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const { alert } = useContext(AlertContext);

  useEffect(() => {
    // console.log(originName,originType,originContent);
    if (isModalOpen) {
      setName(originName);
      setSelectType(originType);
      // if (originType === 'COMPANY') {
      //   setSelectType('기업');
      // } else if (originType === 'CAMP') {
      //   setSelectType('부트캠프');
      // }
      setContent(originContent);
      if (originType === '기업') {
        setType('COMPANY');
      } else if (originType === '부트캠프') {
        setType('CAMP');
      }
    }
  }, [isModalOpen, originName, originType, originContent]);

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const handleEdit = async () => {
    const requestData = {
      name: name,
      type: type,
      content: content,
    };

    try {
      const response = await request.patch(`/institution/${institutionId}`, requestData);
      console.log(response);

      if (response.isSuccess) {
        alert("기업/부트캠프 수정이 완료되었습니다!")
          .then(() => {
            onClose();
            fetchWorkbook();
            fetchWorkbookExplain();
          });
      }
    } catch (error) {
      console.error('기업/부트캠프 수정에서 에러', error);
    }
  };

  const TypeSelect = ({ value, onChange }) => {
    const CustomDropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "1rem", height: "1rem"}} />
        </components.DropdownIndicator>
      );
    };

    const options = [
      { value: '기업', label: '기업' },
      { value: '부트캠프', label: '부트캠프' }
    ];

    return (
      <itemS.TypeSelectContainer
        options={options}
        value={options.find(option => option.value === value)}
        onChange={selectedOption => onChange(selectedOption.value)}
        placeholder="유형 선택"
        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
        isSearchable={false}
      />
    );
  };

  const handleTypeChange = (value) => {
    setSelectType(value);
    if (value === '기업') {
      setType('COMPANY');
    } else if (value === '부트캠프') {
      setType('CAMP');
    }
  };

  if (!isModalOpen) return null;

  const isButtonDisabled = !name || !type;  

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopBox>
          <itemS.Title>기업/부트캠프 수정</itemS.Title>
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopBox>
        <itemS.InnerContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>기업/부트캠프 이름</itemS.StyledTitle>
            <itemS.StyledInput type='text' value={name} onChange={onChangeName} />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>기관 유형 선택</itemS.StyledTitle>
            <TypeSelect value={selectType} onChange={handleTypeChange} />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>분석 내용</itemS.StyledTitle>
            <QuillPractice setContent={setContent} content={content} />
          </itemS.LittleContainer>

          <itemS.Btn onClick={handleEdit} disabled={isButtonDisabled} isButtonDisabled={isButtonDisabled} >수정하기</itemS.Btn>

        </itemS.InnerContainer>

      </itemS.ModalContainer>
    </itemS.Backdrop>
  );
}
