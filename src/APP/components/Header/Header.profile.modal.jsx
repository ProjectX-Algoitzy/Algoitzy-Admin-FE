import React from 'react';
import * as itemS from "./Styled/Header.profile.modal.styles";

const ProfileModal = () => {
  return (
      <itemS.ArrowBubble onClick={e => e.stopPropagation()}>
        <itemS.TopContainer>
          <itemS.Profile></itemS.Profile>
          <itemS.Name>구교연 님</itemS.Name>
          <itemS.Logout>로그아웃</itemS.Logout>
        </itemS.TopContainer>
        <itemS.BottomContainer>
          <itemS.Button>개인 정보 수정</itemS.Button>
          <itemS.Button>나의 스터디</itemS.Button>
        </itemS.BottomContainer>
      </itemS.ArrowBubble>
  );
};

export default ProfileModal;