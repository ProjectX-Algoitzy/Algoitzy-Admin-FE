import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center; 
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border-radius: 1.25rem;
  padding: 6.583rem 15rem 0 15rem;
  margin-bottom: 4.083rem;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
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
  width: 6.667rem;
  height: 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const PartBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.667rem;
`;

// 첫번째 파트 
export const FirstPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${tokens.typography.T4_SB_20};
  color: ${tokens.colors.Blue_0_Main};
  background-color: rgba(0, 165, 255, 0.1);
  width: 43.125rem;
  height: 1.667rem;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  padding-left: 0.917rem;
`;

export const EditButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.458rem;
  height: 1.667rem;
  background-color: ${tokens.colors.B_Grey_1};
  border: 0.042rem solid ${tokens.colors.B_Grey_4};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const EditIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.417rem;
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
  width: 46.833rem;
  height: 1.667rem;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  padding-left: 0.917rem;
`;

export const AddButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.667rem;
  height: 1.667rem;
  background-color: ${tokens.colors.B_Grey_1};
  border: 0.042rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const AddIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;