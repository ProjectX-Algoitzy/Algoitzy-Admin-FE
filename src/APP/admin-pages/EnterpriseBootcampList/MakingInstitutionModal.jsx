import React, { useContext, useEffect, useState } from 'react'
import Select, { components } from 'react-select';
import * as itemS from "./Styled/MakingInstitutionModal.styles"
import QuillPractice from '../MakingCurriculum/MakingCurriculum.makingcurriculum.quilleditor';
import request from '../../Api/request';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function MakingInstitutionModal({ onClose, isModalOpen, fetchInstitutionList }) {
  const [name, setName] = useState('');
  const [selecttype, setSelectType] = useState('');
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const { alert } = useContext(AlertContext);
  useEffect(() => {
    console.log('모달창',isModalOpen);
    
   
  }, [isModalOpen]);

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const handleAdd = async () => {
    const requestData = {
      name: name,  
      type: type,
      content: content,
    };

    try {
      const response = await request.post('/institution', requestData)
      console.log(response);

      if (response.isSuccess) {
        alert("기업/부트캠프 생성이 완료되었습니다!")
        .then(() => {
          onClose();
          fetchInstitutionList();
          setName('');
          setSelectType('');
          setType('');
        });
      } 
    } catch (error) {
      console.error('기업/부트캠프 생성에서 에러', error);
      alert("이름/유형/분석내용 입력칸을 채워주세요.");
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
    } else if (value === '부트캠프'){
      setType('CAMP');
    }
    
  };

  if (!isModalOpen) return null;

  return (
    <itemS.Backdrop>
      <itemS.ModalContainer>
        <itemS.TopBox>
          <itemS.Title>기업/부트캠프 추가</itemS.Title>
          <itemS.Close onClick={onClose}></itemS.Close>
        </itemS.TopBox>
        <itemS.InnerContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>기업/부트캠프 이름</itemS.StyledTitle>
            <itemS.StyledInput placeholder='이름을 입력해주세요' type='text' value={name} onChange={onChangeName} />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>기관 유형 선택</itemS.StyledTitle>
            <TypeSelect value={selecttype} onChange={handleTypeChange} />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>분석 내용</itemS.StyledTitle>
            <QuillPractice setContent={setContent} />
          </itemS.LittleContainer>
        
          <itemS.Btn onClick={handleAdd}>추가하기</itemS.Btn>
          
        </itemS.InnerContainer>

      </itemS.ModalContainer>
    </itemS.Backdrop>
  );
}
