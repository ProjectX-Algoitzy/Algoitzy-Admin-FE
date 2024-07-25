import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 793px;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
`;

export const BtnMakeCurri = styled.button`
  width: 190px;
  height: 47px;
  background: #00A5FF; 
  color: white;
  border-radius: 5px; 
  border: none; 
  cursor: pointer; 
`;

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 793px;;
  height: 100px;
  background-color: ${tokens.colors.White};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

export const CurriculumText = styled.div`
  display: flex;
  align-items: center;
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  margin-left: 40px;
  cursor: pointer;
`;

export const MiddleCurriculumContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-top: 3px;
  margin-left: 8px;
`;

export const Gray6Text = styled.div`
  ${tokens.typography.Sub_M_12};
  color: ${tokens.colors.Grey_6};
  margin-bottom: 10px;
`;

export const Gray7Text = styled.div`
  display: flex;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${tokens.colors.Grey_7};
`;

export const CurriculumDate = styled.div`
  ${tokens.typography.B3_M_14};
  color: #A2A2A2;
`;

export const DeleteIcon = styled.div`
  background-image: url('/img/GrayX.png');
  width: 14px;
  height: 14px;
  margin-top: 38px;
  margin-right: 38px;
  margin-left: 120px;
  cursor: pointer;
`;