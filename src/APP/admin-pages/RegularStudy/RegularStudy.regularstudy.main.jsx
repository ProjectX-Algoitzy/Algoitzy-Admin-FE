import React, { useState } from 'react'
import * as itemS from "../../admin-pages/RegularStudy/Styled/RegularStudy.regularstudy.main.styles";
import RegularStudySideBar from "./RegularStudy.regularstudy.sidebar";
import RegularStudyHome from "./RegularStudy.regularstudy.home"
import RegularStudyAttendance from "./RegularStudy.regularstudy.attendance"
import RegularStudyCurriculum from "./RegularStudy.regularstudy.curriculum"

export default function RegularStudyMain() {
  const [activeComponent, setActiveComponent] = useState('home');
  const renderComponent = () => {
    switch (activeComponent) {
      case 'home': 
        return <RegularStudyHome />;
      case 'attendance':
        return <RegularStudyAttendance />;
      case 'curriculum':
        return <RegularStudyCurriculum />;
      default:
        return <RegularStudyHome />;
    }
  }
  return (
    <itemS.Container>
      <RegularStudySideBar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      {renderComponent()}
    </itemS.Container>
  )
}
