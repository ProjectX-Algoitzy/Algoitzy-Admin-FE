import React, {useEffect, useRef, useState} from 'react';
import * as itemS from './Styled/Header.header.style';
import request from '../../Api/request';
import ProfileModal from './Header.profile.modal';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    // Refs for detecting clicks outside
    const modalRef = useRef(null);
    const studyMenuRef = useRef(null);
    const applicationMenuRef = useRef(null);
    const codingMenuRef = useRef(null);

    const checkLoginStatus = async () => {
        try {
            const response = await request.get('/member/info');
            console.log('로그인 멤버 정보 조회', response);
            if (response['isSuccess']) {
                setUserName(response.result.name);
                setProfileUrl(response.result.profileUrl);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('로그인 멤버 정보 조회 실패', error);
        }
    };
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            checkLoginStatus();
        }
    }, []);

    const toggleProfileModal = () => {
        setShowProfileModal((prev) => !prev);
        setActiveMenu('');
    };

    const handleMenuClick = (menu) => {
        setActiveMenu((prev) => (prev === menu ? '' : menu));
    };

    const handleNav = () => {
        // 하위 메뉴 이동 후 메뉴창 닫기
        setActiveMenu('');
    };

    // Click Outside Handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click is inside Profile Modal
            const clickedInsideProfile = modalRef.current && modalRef.current.contains(event.target);

            // Check if click is inside any open submenu
            let clickedInsideMenu = false;
            if (activeMenu === 'study') {
                clickedInsideMenu = studyMenuRef.current && studyMenuRef.current.contains(event.target);
            } else if (activeMenu === 'application') {
                clickedInsideMenu = applicationMenuRef.current && applicationMenuRef.current.contains(event.target);
            } else if (activeMenu === 'coding') {
                clickedInsideMenu = codingMenuRef.current && codingMenuRef.current.contains(event.target);
            }

            // If click is outside both Profile Modal and any open submenu, close them
            if (!clickedInsideProfile && !clickedInsideMenu) {
                setShowProfileModal(false);
                setActiveMenu('');
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileModal, activeMenu]);

    return (
        <itemS.HeaderContainer activeMenu={activeMenu}>
            <itemS.InnerContainer>
                <itemS.HeaderWrap>
                    <itemS.HeaderLeftWrap>
                        <itemS.StyledLink
                            to={isLoggedIn ? '/regularstudylist' : '/login'}
                            style={{textDecoration: 'none'}}
                        >
                            <itemS.Rabel src="/img/koalalogo.png" alt="코알라로고" />
                        </itemS.StyledLink>
                    </itemS.HeaderLeftWrap>
                    <itemS.HeaderRightWrap>
                        <itemS.StyledLink onClick={() => handleMenuClick('application')}>
                            <itemS.PageLink>지원자 관리</itemS.PageLink>
                            {activeMenu === 'application' && (
                                <itemS.SubMenuContaier ref={applicationMenuRef}>
                                    <itemS.SubMenu isLoggedIn={isLoggedIn}>
                                        <itemS.StyledLink
                                            to={isLoggedIn ? '/manageauth' : '/login'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNav();
                                            }}
                                        >
                                            <itemS.SubMenuItem>권한 관리</itemS.SubMenuItem>
                                        </itemS.StyledLink>
                                        <itemS.StyledLink
                                            to={isLoggedIn ? '/answer' : '/login'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNav();
                                            }}
                                        >
                                            <itemS.SubMenuItem>지원자 관리</itemS.SubMenuItem>
                                        </itemS.StyledLink>
                                    </itemS.SubMenu>
                                </itemS.SubMenuContaier>
                            )}
                        </itemS.StyledLink>
                        <itemS.StyledLink onClick={() => handleMenuClick('study')}>
                            <itemS.PageLink>스터디 관리</itemS.PageLink>
                            {activeMenu === 'study' && (
                                <itemS.SubMenuContaier ref={studyMenuRef}>
                                    <itemS.SubMenu isLoggedIn={isLoggedIn}>
                                        <itemS.StyledLink
                                            to={isLoggedIn ? '/regularstudylist' : '/login'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNav();
                                            }}
                                        >
                                            <itemS.SubMenuItem>정규 스터디</itemS.SubMenuItem>
                                        </itemS.StyledLink>
                                        <itemS.StyledLink
                                            to={isLoggedIn ? '/generation' : '/login'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNav();
                                            }}
                                        >
                                            <itemS.SubMenuItem>기수 갱신</itemS.SubMenuItem>
                                        </itemS.StyledLink>
                                    </itemS.SubMenu>
                                </itemS.SubMenuContaier>
                            )}
                        </itemS.StyledLink>
                        <itemS.StyledLink to={isLoggedIn ? '/community' : '/login'}>
                            <itemS.PageLink>커뮤니티</itemS.PageLink>
                        </itemS.StyledLink>
                        <itemS.StyledLink to={isLoggedIn ? '/inquiry' : '/login'}>
                            <itemS.PageLink>문의 관리</itemS.PageLink>
                        </itemS.StyledLink>
                        <itemS.StyledLink onClick={() => handleMenuClick('coding')}>
                            <itemS.PageLink>코딩테스트 분석</itemS.PageLink>
                            {activeMenu === 'coding' && (
                                <itemS.SubMenuContaier ref={codingMenuRef}>
                                    <itemS.SubMenu isLoggedIn={isLoggedIn}>
                                        <itemS.StyledLink
                                            to={isLoggedIn ? '/enterbootlist' : '/login'}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNav();
                                            }}
                                        >
                                            <itemS.SubMenuItem style={{marginBottom: '2.5rem'}}>
                                                기업/부트캠프
                                            </itemS.SubMenuItem>
                                        </itemS.StyledLink>
                                    </itemS.SubMenu>
                                </itemS.SubMenuContaier>
                            )}
                        </itemS.StyledLink>
                        {isLoggedIn ? (
                            <div style={{position: 'relative'}} ref={modalRef}>
                                <itemS.ProfileBox onClick={toggleProfileModal}>
                                    <itemS.AdminName>안녕하세요, {userName} 님</itemS.AdminName>
                                    <itemS.Arrow src="/img/arrow-bt.svg" alt="화살표" />
                                </itemS.ProfileBox>
                                {showProfileModal && (
                                    <ProfileModal
                                        userName={userName}
                                        profileUrl={profileUrl}
                                        setIsLoggedIn={setIsLoggedIn}
                                    />
                                )}
                            </div>
                        ) : (
                            <itemS.StyledLink to="/login">
                                <itemS.Btn>로그인</itemS.Btn>
                            </itemS.StyledLink>
                        )}
                    </itemS.HeaderRightWrap>
                </itemS.HeaderWrap>
            </itemS.InnerContainer>
        </itemS.HeaderContainer>
    );
}
