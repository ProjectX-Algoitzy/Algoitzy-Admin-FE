import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';


export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  background-color: white;
  border-radius: 0.167rem;
`;

// 모달 외부  #121721 49%
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(18, 23, 33, 0.49); 
  padding: 5.292rem 0 14.875rem 0;
  z-index: 1001; 
`;

// 제목 박스
export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 46.833rem;
  padding: 0.625rem 1rem 0.875rem 2.167rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_3};
  margin-bottom: 1.833rem;
`;

// 지원서 보기
export const Title = styled.div`
  ${tokens.typography.T3_B_24};
  color: ${tokens.colors.Grey_8};
`;

// 닫기 버튼
export const Close = styled.div`
  background-image: url('/img/close.png');
  background-size: cover;
  width: 1.333rem;
  height: 1.333rem;
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 0.792rem;
`;

export const StyledTitle = styled.div`
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.T4_SB_20};
  margin-bottom: 0.417rem;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 0.167rem;
  border: none;
  border: 0.042rem solid ${tokens.colors.Grey_4};
  width: 24.583rem;
  height: 2.333rem;
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B3_M_14};
  padding-left: 0.667rem;

  &::placeholder {
    color: ${tokens.colors.Grey_4};
  }
  &:focus {
    outline: none;
  }
`;

export const TypeSelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  
  .react-select__control { 
    width: 24.583rem;
    height: 2.333rem;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 0.042rem solid ${tokens.colors.B_Grey_3};
    border-radius: 0.167rem;
    padding-left: 10.417rem;
    min-height: auto;
  }
  
  .react-select__menu { 
    position: absolute;
    top: -0.5rem;  
    left: -0.052rem;
    width: 24.708rem;
    height: 4.967rem; 
    border-radius: 0.167rem;
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
    ${tokens.typography.B3_M_14};
    font-weight: 600;
    text-align: center;
  }
  
  .react-select__option:not(:last-child) { 
    border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2}; 
  }
  
  .react-select__option { 
    height: 2.333rem; 
    display: flex; 
    justify-content: center;
    align-items: center; 
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
  }
  
  .react-select__option--is-selected:first-of-type { 
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-top-left-radius: 0.167rem; 
    border-top-right-radius: 0.167rem; 
    border: none;
    ${tokens.typography.B3_M_14};
    position: relative; 
    top: -0.167rem; 
  }
  
  .react-select__option--is-selected:last-of-type { 
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 0.167rem; 
    border-bottom-right-radius: 0.167rem; 
    border: none;
    ${tokens.typography.B3_M_14};
  }
  
  .react-select__option--is-selected:not(:first-of-type):not(:last-of-type) { 
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border: none;
    ${tokens.typography.B3_M_14};
  }
  
  .react-select__option--is-focused { 
    background-color: transparent;
    cursor: pointer;
  }
  
  .react-select__option:active {
    background-color: transparent;
  }
  
  .react-select__option:hover {
    background-color: rgba(102, 201, 255, 0.2);
  }
`;


export const Btn = styled.button` 
  color: ${tokens.colors.White};
  ${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.Blue_0_Main};
  width: 14.333rem;
  height: 2rem;
  margin-bottom: 1.667rem;
  border-radius: 0.167rem;
  border: none;
  cursor: pointer;
`;