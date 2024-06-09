import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./APP/sharing-pages/Home"
import Login from "./APP/admin-pages/Auth/Auth.login"
import Header from "./APP/components/Header/Header.header"
import Footer from "./APP/components/Footer/Footer.footer"
// import MakingApplicationForm from "./APP/admin-pages/MakingApplication/MakingApplication.makingapplication"
import ViewApplicationList from "./APP/admin-pages/ViewApplicationList/ViewApplicationList.viewapplicationlist.main"
import ViewApplicationDetail from "./APP/admin-pages/ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail"
import MakedApplicationList from "./APP/admin-pages/MakedApplicationList/MakedApplicationList.makedapplicationlist.main"
import MakedApplicationDetail from "./APP/admin-pages/MakedApplicationDetail/MakedApplicationDetail.makedapplicationdetail"
import MakedSelfStudyList from "./APP/admin-pages/MakedSelfStudyList/MakedSelfStudyList.makedselfstudylist.main"
import RegularStudy from "./APP/admin-pages/RegularStudy/RegularStudy.regularstudy.main"
import QuillPractice from "./APP/sharing-pages/QuillPractice"
import MakingRegularStudyCurriculum from "./APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.curriculum"
import MakingRegularStudyCurriculumCheck from "./APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.curriculum.check"
import styled from "styled-components"
import ScrollToTop from "./APP/Common/ScrollToTop"

const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

function App() {
  return (
    <Root>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<MakedApplicationList />} />
          <Route path="/newapplication/:id" element={<MakedApplicationDetail />} />
          {/* <Route path="/makingapplicationform" element={<MakingApplicationForm />} /> */}
          <Route path="/answer" element={<ViewApplicationList />} />
          <Route path="/answer/:id" element={<ViewApplicationDetail />} />
          <Route path="/makedselfstudylist" element={<MakedSelfStudyList />} />
          <Route path="/regularstudy" element={<RegularStudy />} />
          <Route path="/quillpractice" element={<QuillPractice />} />
          <Route path="/makingregularstudycurriculum" element={<MakingRegularStudyCurriculum />} />
          <Route path="/makingregularstudycurriculumcheck" element={<MakingRegularStudyCurriculumCheck />} />
        </Routes>
        {/* <Footer /> */} {/* figma에 보니 admin은 푸터가 없었기에 일단 임시로 주석처리를 했다 */}
      </BrowserRouter>
    </Root>
  );
}

export default App;
