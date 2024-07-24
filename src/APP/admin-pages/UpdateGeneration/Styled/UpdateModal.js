import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import Select from 'react-select';

export const ModalContainer = styled.div`
  position: absolute;
  left: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 51px;
  background: white;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(58, 107, 135, 0.08);
  z-index: 1001;
`;

export const DropText = styled.div`
  ${tokens.typography.B2_M_16};
  color: ${tokens.colors.Black};
  margin: 0 4px;
`;

export const ConfirmButton = styled.button`
  width: 40px;
  height: 24px;
  background-color: ${tokens.colors.B_Grey_7};
  color: ${tokens.colors.White};
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 4px;
`;

export const YearDateSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
.react-select__control {
  // width: 42px;
  // height: 24px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  text-align: center;
  justify-content: center;
}

.react-select__menu {
  position: absolute;
  top: -10px;  
  left: -2px;
  width: 60px;
  height: 76px; 
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
  overflow: hidden; /* Hide scrollbar */
}

.react-select__menu-list {
  max-height: 244px;
  overflow-y: auto;
  /* Hide scrollbar for WebKit-based browsers (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Hide scrollbar for Internet Explorer and Edge */
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: none;
  ${tokens.typography.B3_M_14};
  position: relative;
  top: -4px;
}

.react-select__option--is-selected:last-of-type {
  background-color: ${tokens.colors.White};
  backdrop-filter: blur(8px);
  color: ${tokens.colors.Grey_8};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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
  // width: 42px;
  // height: 24px;
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: 1px solid ${tokens.colors.B_Grey_3};
  border-radius: 4px;
  text-align: center;
  justify-content: center;
}

.react-select__menu {
  position: absolute;
  top: -10px;  
  left: -2px;
  width: 44px;
  height: 250px; 
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
  overflow: hidden; /* Hide scrollbar */
}

.react-select__menu-list {
  max-height: 244px;
  overflow-y: auto;
  /* Hide scrollbar for WebKit-based browsers (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Hide scrollbar for Internet Explorer and Edge */
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: none;
  ${tokens.typography.B3_M_14};
  position: relative;
  top: -4px;
}

.react-select__option--is-selected:last-of-type {
  background-color: ${tokens.colors.White};
  backdrop-filter: blur(8px);
  color: ${tokens.colors.Grey_8};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
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