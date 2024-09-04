import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import Select from 'react-select';

export const ModalContainer = styled.div`
  position: absolute;
  left: 16.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 11.667rem;
  height: 2.125rem;
  background: white;
  padding: 0 0.5rem;
  border-radius: 0.167rem;
  box-shadow: 0 0.167rem 0.417rem 0.167rem rgba(58, 107, 135, 0.08);
  z-index: 1001;
`;

export const DropText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin: 0 0.167rem;
`;

export const ConfirmButton = styled.button`
  width: 1.667rem;
  height: 1rem;
  background-color: ${tokens.colors.B_Grey_7};
  color: ${tokens.colors.White};
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 0.167rem;
`;

export const YearDateSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 0.167rem;
    text-align: center;
    justify-content: center;
  }

  .react-select__menu {
    position: absolute;
    top: -0.417rem;  
    left: -0.083rem;
    width: 2.5rem;
    height: 3.167rem; 
    border-radius: 0.167rem;
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
    overflow: hidden; /* Hide scrollbar */
  }

  .react-select__menu-list {
    max-height: 10.167rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .react-select__option:not(:last-child) {
    border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  }

  .react-select__option {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
  }

  .react-select__option--is-selected:first-of-type {
    background-color: ${tokens.colors.White};
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
    background-color: ${tokens.colors.White};
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 0.167rem;
    border-bottom-right-radius: 0.167rem;
    border: none;
    ${tokens.typography.B3_M_14};
  }

  .react-select__option--is-selected:not(:first-of-type):not(:last-of-type) {
    background-color: ${tokens.colors.White};
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

export const MonthDateSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 0.167rem;
    text-align: center;
    justify-content: center;
  }

  .react-select__menu {
    position: absolute;
    top: -0.417rem;  
    left: -0.083rem;
    width: 1.833rem;
    height: 10.417rem; 
    border-radius: 0.167rem;
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
    overflow: hidden; /* Hide scrollbar */
  }

  .react-select__menu-list {
    max-height: 10.167rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .react-select__option:not(:last-child) {
    border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  }

  .react-select__option {
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: none;
  }

  .react-select__option--is-selected:first-of-type {
    background-color: ${tokens.colors.White};
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
    background-color: ${tokens.colors.White};
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 0.167rem;
    border-bottom-right-radius: 0.167rem;
    border: none;
    ${tokens.typography.B3_M_14};
  }

  .react-select__option--is-selected:not(:first-of-type):not(:last-of-type) {
    background-color: ${tokens.colors.White};
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