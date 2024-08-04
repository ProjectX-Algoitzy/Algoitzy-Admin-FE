import styled from 'styled-components';
import * as tokens from "../../../../tokens"



export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 20px;
  padding: 158px 360px 0px 360px;
  margin-bottom: 98px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  padding-bottom: 24px;
  margin-bottom: 36px;
`;

export const Title = styled.div`
  ${tokens.typography.H3_SB_40};
  color: ${tokens.colors.Black};
`;

export const DeleteButton = styled.button`
  background-color: ${tokens.colors.Red};
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.White};
  border: none;
  width: 160px;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;
`;



export const PartBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin-bottom: 16px;
`;

// 첫번째 파트 
export const FirstPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Blue_0_Main};
  background-color: rgba(0, 165, 255, 0.1);
  width: 1035px;
  height: 40px;
  border: none;
  border-radius: 4px;
  margin-right: 12px;
  padding-left: 22px;
`;

export const EditButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 40px;
  background-color: ${tokens.colors.B_Grey_1};
  border: 1px solid ${tokens.colors.B_Grey_4};
  border-radius: 4px;
  cursor: pointer;
`;

export const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const EditText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.B_Grey_8};
`;

// 두번째 파트

export const SecondPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Blue_0_Main};
  background-color: rgba(0, 165, 255, 0.1);
  width: 1124px;
  height: 40px;
  border: none;
  border-radius: 4px;
  margin-right: 12px;
  padding-left: 22px;
`;

export const AddButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${tokens.colors.B_Grey_1};
  border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  cursor: pointer;
`;

export const AddIcon = styled.img`
  width: 18px;
  height: 18px;
`;