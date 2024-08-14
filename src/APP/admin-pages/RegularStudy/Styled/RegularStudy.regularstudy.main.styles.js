import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  margin-left: 15rem;
  margin-top: 3.333rem;
`;

export const Content = styled.div`
  flex: 1;
  overflow: auto; // 컨텐츠 영역에 스크롤 처리를 추가하여 overflow 발생 시 스크롤 되도록 설정합니다.
`;
