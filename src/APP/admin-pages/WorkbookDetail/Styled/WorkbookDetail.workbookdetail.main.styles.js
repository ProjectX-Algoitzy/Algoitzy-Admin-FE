import styled, { css } from 'styled-components';
import * as tokens from "../../../../tokens"

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 41.125rem;  /* 987px */
  background-color: white;
  border-radius: 0.167rem;  /* 4px */
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 23, 33, 0.49); 
  padding: 5.292rem 0 14.875rem 0px;  /* 127px 0 357px 0px */
  z-index: 1001; 
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 41.125rem;  /* 911px */
  padding: 0.625rem 1rem 0.625rem 2.167rem;  /* 15px 24px 15px 52px */
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
  margin-bottom: 2.083rem;  /* 50px */
`;

export const Title = styled.input`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
  width: 24.583rem;
  border: none;
  border: 0.042rem solid ${tokens.colors.Grey_4};
  padding: 0.3rem 0.667rem;
`;

export const Close = styled.div`
  background-image: url('/img/close.png');
  width: 1.333rem;  /* 32px */
  height: 1.333rem;  /* 32px */
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33.042rem;  /* 793px */
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${tokens.colors.Grey_1};
  width: 19.5rem;  /* 468px */
  height: 1.5rem;  /* 36px */
  border: 0.042rem solid ${tokens.colors.Grey_3};
  border-radius: 0.167rem;  /* 4px */
  margin-bottom: 1.083rem;  /* 26px */
  margin-top: 2.5rem;  /* 60px */
`;

export const Search = styled.input`
  background-color: ${tokens.colors.Grey_1};
  width: 17.417rem;  /* 418px */
  height: 1.25rem;  /* 30px */
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.B_Grey_6};
  margin: 0 0.417rem;  /* 0 10px */
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;  /* 24px */
  height: 1rem;  /* 24px */
  margin-right: 0.25rem;  /* 6px */
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 0.833rem;  /* 20px */
  list-style: none;
`;

export const PaginationArrow = styled.div`
  width: 1rem;  /* 24px */
  height: 1rem;  /* 24px */
  background-image: url('/img/grayarrow.png');
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${(props) => (props.left ? 'rotate(180deg)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PaginationNumber = styled.div`
  margin: 0 0.208rem;  /* 0 5px */
  width: 0.333rem;  /* 8px */
  height: 0.875rem;  /* 21px */
  padding: 0.417rem;  /* 10px */
  cursor: pointer;
  color: ${(props) => (props.active ? tokens.colors.Blue_3 : tokens.colors.B_Grey_7)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  ${tokens.typography.B3_M_14};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 14rem;  /* 336px */
  margin-bottom: 1.667rem;  /* 40px */
`;

export const EditButton = styled.button`
  background-color: ${tokens.colors.Blue_0_Main};
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  width: 6.667rem;  /* 160px */
  height: 2rem;  /* 48px */
  border-radius: 0.167rem;  /* 4px */
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: ${tokens.colors.Red};
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16};
  width: 6.667rem;  /* 160px */
  height: 2rem;  /* 48px */
  border-radius: 0.167rem;  /* 4px */
  border: none;
  cursor: pointer;
`;
