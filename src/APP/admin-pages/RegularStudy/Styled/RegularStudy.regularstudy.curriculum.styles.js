import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.042rem;
  justify-content: space-between;
  margin-top: 4.17rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.83rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
`;

export const BtnMakeCurri = styled.button`
  width: 7.92rem;
  height: 1.96rem;
  background: #00A5FF; 
  color: white;
  border-radius: 0.21rem; 
  border: none;
  cursor: pointer; 
  ${tokens.typography.T6_SB_14}; 
`;

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.833rem;
  width: 33.04rem;
  height: 4.17rem;
  background-color: ${tokens.colors.White};
  box-shadow: 0px 0.167rem 0.417rem rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div`
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: space-between;
`;

export const CurriculumText = styled.div`
  display: flex;
  max-width: 60%;
  align-items: center;
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  margin-left: 1.667rem;
  cursor: pointer;
`;

export const HighlightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tokens.typography.T5_SB_16};
  height: 21px;
  width: 62px;
  background-color: rgba(251, 170, 132, 0.2); 
  color: #F88F78;
  border-radius: 4px; 
`;

export const MiddleCurriculumContainer = styled.div`
  display: flex;
  width: 30%;
`;

export const SmallCurriculumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Gray5Text = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.Sub_M_12};
  color: ${tokens.colors.Grey_5};
  margin-top: 0.125rem;
  margin-left: 0.333rem;
`;

export const Gray6Text = styled.div`
  ${tokens.typography.Sub_M_12};
  color: ${tokens.colors.Grey_6};
  margin-bottom: 0.417rem;
`;

export const Gray7Text = styled.div`
  display: flex;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 0.583rem;
  line-height: 0.75rem;
  color: ${tokens.colors.Grey_7};
`;

export const CurriculumDate = styled.div`
  ${tokens.typography.B3_M_14};
  color: #A2A2A2;
`;

export const DeleteIcon = styled.div`
  background-size: cover;
  margin-right: 1.583rem;
    display: flex;
  flex-direction: column;
  justify-content: center;
`;
