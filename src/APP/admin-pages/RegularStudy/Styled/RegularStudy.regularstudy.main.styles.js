import styled from "styled-components";

export const OutsideContainer = styled.div`
  display: flex; /* 사이드바와 콘텐츠를 가로로 배치 */
  width: 100%; /* 전체 화면 기준 */
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 3.33rem;
  overflow: auto; 
  justify-content: center; 
  
  @media (max-width: 600px) {
    flex-direction: column; 
    padding: 0 0.33rem;
  }
  
`;

export const Content = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    margin-bottom: 3.33rem;
  }
`;