export const SubMenuBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${tokens.colors.B_Grey_1};
  position: fixed;
  top: 80px; 
  z-index: 999;
`;

export const SubStudyMenu = styled(SubMenuBase)`
  padding-left: 952px;
`;

export const SubApplicationMenu = styled(SubMenuBase)`
  padding-left: 1102px;
`;

export const SubCodingMenu = styled(SubMenuBase)`
  padding-left: 1412px;
`;
