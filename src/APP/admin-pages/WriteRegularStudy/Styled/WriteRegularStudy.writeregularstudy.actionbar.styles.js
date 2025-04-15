import styled from 'styled-components';
import * as tokens from "../../../../tokens";

export const ActionBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 1.2rem;
  background-color: rgba(246, 252, 255, 100);
`;

export const ExitButton = styled.button`
  background: none;
  border: none;
  ${tokens.typography.T5_SB_16}
  color: ${tokens.colors.B_Grey_7};
  cursor: pointer;
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

export const Btn = styled.button`
  width: 6.67rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  background-color: ${tokens.colors.Blue_0_Main};
`;

export const DraftButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 6.67rem;
  height: 2rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const DraftSaveArea = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;

export const DraftCountArea = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;