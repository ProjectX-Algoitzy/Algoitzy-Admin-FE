import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Home from './APP/sharing-pages/Home';
import Login from './APP/admin-pages/Auth/Auth.login';
import Header from './APP/components/Header/Header.header';
import Footer from './APP/components/Footer/Footer.footer';
// import MakingApplicationForm from "./APP/admin-pages/MakingApplication/MakingApplication.makingapplication"
import ViewApplicationList from './APP/admin-pages/ViewApplicationList/ViewApplicationList.viewapplicationlist.main';
import ViewApplicationDetail from './APP/admin-pages/ViewApplicationDetail/ViewApplicationDetail.viewapplicationdetail';
import MakedApplicationList from './APP/admin-pages/MakedApplicationList/MakedApplicationList.makedapplicationlist.main';
import MakedApplicationDetail from './APP/admin-pages/MakedApplicationDetail/MakedApplicationDetail.makedapplicationdetail';
import MakedSelfStudyList from './APP/admin-pages/MakedSelfStudyList/MakedSelfStudyList.makedselfstudylist.main';
import RegularStudy from './APP/admin-pages/RegularStudy/RegularStudy.regularstudy.main';
import QuillPractice from './APP/sharing-pages/QuillPractice';
import MakingRegularStudyStudyinfo from './APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.studyinfo';
import MakingRegularStudyEditStudyInfo from './APP/admin-pages/MakingRegularStudy/MakingRegularStudy.makingregularstudy.editstudyinfo';
import MakingCurriculumHome from './APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.home';
import MakingCurriculum from './APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.curriculum';
import CurriculumCheck from './APP/admin-pages/MakingCurriculum/MakingCurriculum.makingcurriculum.curriculumcheck';
import RegularStudyList from './APP/admin-pages/RegularStudyList/RegularStudyList.regularstudylist.main';
import EnterBootList from './APP/admin-pages/EnterpriseBootcampList/EnterpriseBootcampList.enterprisebootcamplist.main';
import UpdateGeneration from './APP/admin-pages/UpdateGeneration/UpdateGeneration.updategeneration.main';
import ManageAuth from './APP/admin-pages/ManageAuth/ManageAuth.manageauth.main';
import InstitutionDetail from './APP/admin-pages/InstitutionDetail/InstitutionDetail.institutiondetail.main';
import Community from './APP/admin-pages/Community/Community.community.main';
import Inquiry from './APP/admin-pages/Inquiry/Inquiry.inquiry.main';
import WritePost from './APP/admin-pages/WritePost/WritePost.writepost.main';
import BoardDetail from './APP/admin-pages/BoardDetail/BoardDetail.boarddetail.main';
import InquiryBoardDetail from './APP/admin-pages/InquiryBoardDetail/InquiryBoardDetail.inquiryboarddetail.main';
import WriteInstitution from './APP/admin-pages/WriteInstitution/WriteInstitution.writeinstitution.main';
import WriteRegularStudy from './APP/admin-pages/WriteRegularStudy/WriteRegularStudy.writeregularstudy.main';
import WriteCurriculum from './APP/admin-pages/WriteCurriculum/WriteCurriculum.writecurriculum.main';
import styled from 'styled-components';
import ScrollToTop from './APP/Common/ScrollToTop';
import useInterval from './APP/Common/UseInterval';
import {refreshToken} from './APP/Api/refreshToken';
import {checkToken} from './APP/Api/checkToken';
import {ACCESS_TOKEN} from './APP/Api/request';
import GlobalStyle from './GlobalStyles';
import {useLoading} from './APP/Common/Loading/LoadingContext';
import {setLoadingFunctions} from './APP/Api/request';

const Root = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
`;

function App() {
    const {showLoading, hideLoading} = useLoading();

    setLoadingFunctions(showLoading, hideLoading);

    useInterval(async () => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            const isTokenValid = await checkToken();
            if (isTokenValid) {
                await refreshToken();
            }
        }
    }, 30000);

    const isLoggedIn = () => {
        //로그인 확인 유무를 토큰으로 확인하고자 했습니다.
        return !!localStorage.getItem(ACCESS_TOKEN);
    };

    const location = useLocation(); // 현재 경로 확인
    const hideHeader = window.location.pathname.toLowerCase().startsWith('/write');

    return (
        <Root>
            <GlobalStyle />
            <ScrollToTop />
            {!hideHeader && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* 모든 다른 경로는 홈으로 리다이렉트 */}
                {/* <Route path="/home" element={<Home />} />  */}
                <Route path="/login" element={<Login />} />
                {/*
          <Route path="/findemail" element={<FindEmail /> }/>
          <Route path="/findemailsuccess" element={<FindEmailSuccess />}/>
          <Route path="/findpassword" element={<FindPassword />}/>
          */}
                <Route
                    path="/application"
                    element={isLoggedIn() ? <MakedApplicationList /> : <Navigate to="/login" />}
                />
                <Route
                    path="/newapplication/:id"
                    element={isLoggedIn() ? <MakedApplicationDetail /> : <Navigate to="/login" />}
                />
                <Route path="/answer" element={isLoggedIn() ? <ViewApplicationList /> : <Navigate to="/login" />} />
                <Route
                    path="/answer/:id"
                    element={isLoggedIn() ? <ViewApplicationDetail /> : <Navigate to="/login" />}
                />
                {/* <Route path="/makedselfstudylist" element={isLoggedIn() ? <MakedSelfStudyList /> : <Navigate to="/login" />} /> */}
                <Route path="/regularstudy/:id" element={isLoggedIn() ? <RegularStudy /> : <Navigate to="/login" />} />
                {/* <Route path="/quillpractice" element={<QuillPractice />} /> */}
                <Route
                    path="/makingregularstudyinfo"
                    element={isLoggedIn() ? <MakingRegularStudyStudyinfo /> : <Navigate to="/login" />}
                />
                <Route
                    path="/editingregularstudyinfo/:id"
                    element={isLoggedIn() ? <MakingRegularStudyEditStudyInfo /> : <Navigate to="/login" />}
                />
                <Route
                    path="/curriculumcheck/:curriculumId"
                    element={isLoggedIn() ? <CurriculumCheck /> : <Navigate to="/login" />}
                />
                <Route
                    path="/makingcurriculumhome"
                    element={isLoggedIn() ? <MakingCurriculumHome /> : <Navigate to="/login" />}
                />
                <Route
                    path="/makingcurriculum/:studyId"
                    element={isLoggedIn() ? <MakingCurriculum /> : <Navigate to="/login" />}
                />
                <Route
                    path="/regularstudylist"
                    element={isLoggedIn() ? <RegularStudyList /> : <Navigate to="/login" />}
                />{' '}
                {/* 정규 스터디 목록 */}
                <Route
                    path="/enterbootlist"
                    element={isLoggedIn() ? <EnterBootList /> : <Navigate to="/login" />}
                />{' '}
                {/* 기업/부트캠프 */}
                <Route
                    path="/generation"
                    element={isLoggedIn() ? <UpdateGeneration /> : <Navigate to="/login" />}
                />{' '}
                {/* 기수 갱신 */}
                <Route path="/manageauth" element={isLoggedIn() ? <ManageAuth /> : <Navigate to="/login" />} />{' '}
                {/* 권한 관리 */}
                <Route
                    path="/institutiondetail/:institutionId"
                    element={isLoggedIn() ? <InstitutionDetail /> : <Navigate to="/login" />}
                />{' '}
                {/* 기업/부트캠프 상세조회 */}
                <Route path="/writepost" element={<WritePost />} /> {/* 새 글쓰기 */}
                <Route path="/community" element={isLoggedIn() ? <Community /> : <Navigate to="/login" />} />{' '}
                {/* 커뮤니티 */}
                <Route path="/board/:id" element={isLoggedIn() ? <BoardDetail /> : <Navigate to="/login" />} />{' '}
                {/* 커뮤니티 글 세부 */} {/* ANCHOR - id로 설정하기 */}
                <Route path="/inquiry" element={isLoggedIn() ? <Inquiry /> : <Navigate to="/" />} />
                <Route
                    path="/inquiryboard/:id"
                    element={isLoggedIn() ? <InquiryBoardDetail /> : <Navigate to="/" />}
                />{' '}
                {/*문의하기 글 세부 */}
                <Route path="/writeinstitution" element={<WriteInstitution />} /> {/* 새 글쓰기 */}
                <Route path="/writeregularstudy" element={<WriteRegularStudy />} /> {/* 새 글쓰기 */}
                <Route path="/writecurriculum" element={<WriteCurriculum />} /> {/* 새 글쓰기 */}
            </Routes>
            {/* <Footer /> */} {/* figma에 보니 admin은 푸터가 없었기에 일단 임시로 주석처리를 했다 */}
        </Root>
    );
}

export default App;
