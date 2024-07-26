import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 794px;
  margin-left: 563px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  margin-top: 180px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 32px;
`;

export const TitleInput = styled.input`
  display: flex;
  justify-content: space-between;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const WhiteBox = styled.div`
  width: 390px;
  height: 56px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  border-radius: 4px;
  border: 1px solid ${tokens.colors.Grey_4};
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B2_M_16};
`;

export const WeeksSelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    text-align: center;
    width: 390px;
    height: 58px;
    margin-bottom: 32px;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 4px;
  }
  .react-select__menu {
    position: absolute;
    top: -10px;
    left: -1px;
    width: 392px;
    height: 280px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
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
    background-color: rgba(102, 201, 255, 0.2);
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
    background-color: rgba(102, 201, 255, 0.2);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
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
`;

export const ContentsContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 43px;
  border-radius: 4px;
  border: 1px solid ${tokens.colors.B_Grey_2};
  color: ${tokens.colors.Grey_7};
  width: 100%;
  height: 679px;
  overflow: auto;
`;