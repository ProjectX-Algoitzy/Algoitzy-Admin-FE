import React, { useState, useEffect } from 'react'
import * as itemS from "../../admin-pages/RegularStudy/Styled/RegularStudy.regularstudy.main.styles";
import { useParams } from 'react-router-dom';
import RegularStudySideBar from "./RegularStudy.regularstudy.sidebar";
import RegularStudyHome from "./RegularStudy.regularstudy.home"
import RegularStudyAttendance from "./RegularStudy.regularstudy.attendance"
import RegularStudyCurriculum from "./RegularStudy.regularstudy.curriculum"
import RegularStudyMocktest from './RegularStudy.regularstudy.mocktest';

export default function RegularStudyMain() {
  const { id } = useParams();  // 정규스터디 ID 가져오기
  
  const getInitialComponent = () => {
    const savedComponent = localStorage.getItem(`activeComponent_${id}`);
    return savedComponent || 'home';
  };

  const [activeComponent, setActiveComponent] = useState(getInitialComponent);

  useEffect(() => {
    localStorage.setItem(`activeComponent_${id}`, activeComponent);
  }, [activeComponent, id]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home': 
        return <RegularStudyHome />;
      case 'attendance':
        return <RegularStudyAttendance />;
      case 'curriculum':
        return <RegularStudyCurriculum />;
      case 'mocktest':
        return <RegularStudyMocktest />;
      default:
        return <RegularStudyHome />;
    }
  }
  return (
    <itemS.Container>
      <RegularStudySideBar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <itemS.Content>{renderComponent()}</itemS.Content>
    </itemS.Container>
  )
}
