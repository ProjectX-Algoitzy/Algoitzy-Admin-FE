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
import MakingRegularStudyStudyinfo from "./APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.studyinfo"
import MakingRegularStudyEditStudyInfo from "./APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.editstudyinfo"
import MakingCurriculumHome from "./APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.home"
import MakingCurriculum from "./APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.curriculum"
import CurriculumCheck from "./APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.curriculumcheck"
import RegularStudyList from "./APP/admin-pages/RegularStudyList/RegularStudyList.regularstudylist.main"
import FindEmail from "./APP/admin-pages/FindAuth/FindEmail/FindEmail.findemail"
import FindEmailSuccess from "./APP/admin-pages/FindAuth/FindEmailSuccess/FindEmailSuccess.findemailsuccess"
import FindPassword from "./APP/admin-pages/FindAuth/FindPassword/FindPassword.findpassword"
import EnterBootList from "./APP/admin-pages/EnterpriseBootcampList/EnterpriseBootcampList.enterprisebootcamplist.main"
import UpdateGeneration from "./APP/admin-pages/UpdateGeneration/UpdateGeneration.updategeneration.main"
import ManageAuth from "./APP/admin-pages/ManageAuth/ManageAuth.manageauth.main"
import InstitutionDetail from "./APP/admin-pages/InstitutionDetail/InstitutionDetail.institutiondetail.main"
import styled from "styled-components"
import ScrollToTop from "./APP/Common/ScrollToTop"
import useInterval from "./APP/Common/UseInterval"
import { refreshToken } from "./APP/Api/refreshToken"
import { ACCESS_TOKEN } from "./APP/Api/request"

const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

function App() {
  useInterval(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      refreshToken();
    }
  }, 30000);

  return (
    <Root>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
        <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/findemail" element={<FindEmail />} />
          <Route path="/findemailsuccess" element={<FindEmailSuccess />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route path="/application" element={<MakedApplicationList />} />
          <Route path="/newapplication/:id" element={<MakedApplicationDetail />} />
          {/* <Route path="/makingapplicationform" element={<MakingApplicationForm />} /> */}
          <Route path="/answer" element={<ViewApplicationList />} />
          <Route path="/answer/:id" element={<ViewApplicationDetail />} />
          <Route path="/makedselfstudylist" element={<MakedSelfStudyList />} />
          <Route path="/regularstudy/:id" element={<RegularStudy />} />
          <Route path="/quillpractice" element={<QuillPractice />} />
          <Route path="/makingregularstudyinfo" element={<MakingRegularStudyStudyinfo />} />
          <Route path="/editingregularstudyinfo/:id" element={<MakingRegularStudyEditStudyInfo />} />
          <Route path="/curriculumcheck/:curriculumId" element={<CurriculumCheck />} />
          <Route path="/makingcurriculumhome" element={<MakingCurriculumHome />} />
          <Route path="/makingcurriculum/:studyId" element={<MakingCurriculum />} />
          <Route path="/regularstudylist" element={<RegularStudyList />} /> {/* 정규 스터디 목록 */}
          <Route path="/enterbootlist" element={<EnterBootList />} /> {/* 기업/부트캠프 */}
          <Route path="/generation" element={<UpdateGeneration />} /> {/* 기수 갱신 */}
          <Route path="/manageauth" element={<ManageAuth />} /> {/* 권한 관리 */}
          <Route path="/institutiondetail/:institutionId" element={<InstitutionDetail />} /> {/* 기업/부트캠프 상세조회 */}
        </Routes>
        {/* <Footer /> */} {/* figma에 보니 admin은 푸터가 없었기에 일단 임시로 주석처리를 했다 */}
      </BrowserRouter>
    </Root>
  );
}

export default App;
