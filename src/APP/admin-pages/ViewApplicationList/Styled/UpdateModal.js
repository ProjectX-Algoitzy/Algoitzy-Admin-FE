import styled from 'styled-components';
import * as tokens from "../../../../tokens"
import Select from 'react-select';

export const ModalContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
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
  ${tokens.typography.B3_M_14};
  margin-left: 0.333rem;
`;

export const InterviewSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`

.react-select__control {
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: none;
  border-bottom: 0.029rem solid ${tokens.colors.B_Grey_3};
  border-radius: 0;
  text-align: center;
  justify-content: center;
  height: auto;
  min-height: unset;
  width: 2.5rem;
  outline: none; 
}

.react-select__single-value {
  text-align: center;
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 100%;
  padding: 0;
  margin : 0;
}

.react-select__menu {
  position: absolute;
  top: -1rem; 
  width: 1.833rem;
  height: 10.167rem; 
  border-radius: 0.167rem;
  border: none;
  box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
  font-weight: 600;
  text-align: center;
  ${tokens.typography.B3_M_14};
  overflow: hidden;
  width: 2.5rem;
}

.react-select__menu-list {
  max-height: 10.167rem;
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
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
}

.react-select__option {
  color: ${tokens.colors.Grey_8};
  ${tokens.typography.B3_M_14};
  border: none;
  min-height: unset;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
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
