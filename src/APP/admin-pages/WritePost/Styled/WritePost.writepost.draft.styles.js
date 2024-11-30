import styled from 'styled-components';
import * as tokens from '../../../../tokens';

export const DraftModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export const DraftModalContainer = styled.div`
  background-color: white;
  width: 40rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export const DraftModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${tokens.colors.Grey_4};
`;

export const DraftModalTitle = styled.h2`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

export const DraftModalClose = styled.button`
  background-image: url('/img/close.png');
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  cursor: pointer;
`;

export const DraftModalBody = styled.div`
  padding: 1rem;
  max-height: 20rem;
  overflow-y: auto;
`;

export const DraftItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${tokens.colors.Grey_3};
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: ${tokens.colors.Grey_1};
  }
`;

export const DraftTitle = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
  width: 26rem;
`;

export const DraftCategory = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;


export const DraftDate = styled.div`
  ${tokens.typography.B3_M_14};
  color: ${tokens.colors.Grey_8};
`;

export const EmptyDraftMessage = styled.div`
  text-align: center;
  padding: 1rem;
  color: ${tokens.colors.Grey_5};
  ${tokens.typography.B3_R_14};
`;
