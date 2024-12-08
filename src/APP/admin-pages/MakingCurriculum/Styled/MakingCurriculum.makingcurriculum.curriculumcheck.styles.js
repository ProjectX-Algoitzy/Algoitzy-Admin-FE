import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
    @media (max-width: 600px) {
    width: 34rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  margin-top: 7.5rem;
  padding-bottom: 0.83rem;
  border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2};
  margin-bottom: 1.33rem;
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
  width: 24.5rem;
  height: 2.33rem;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  border-radius: 0.167rem;
  border: 0.042rem solid ${tokens.colors.Grey_4};
  color: ${tokens.colors.Grey_7};
  ${tokens.typography.B2_M_16};
`;

export const Blank = styled.div`
  width: 0.5rem;
  height: 2.33rem;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

export const WeeksSelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    text-align: center;
    width: 24.5rem;
    height: 2.33rem;
    margin-bottom: 1.333rem; 
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    border-radius: 0.167rem;
    border: 0.042rem solid ${tokens.colors.Grey_4};
    color: ${tokens.colors.Grey_7};
    ${tokens.typography.B2_M_16};
  }
  .react-select__menu {
    position: absolute;
    top: -0.417rem; 
    left: -0.042rem; 
    width: 24.5rem;
    height: auto;
    border-radius: 0.167rem; 
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1); /* 0 2px 4px */
    font-weight: 600;
    text-align: center;
    ${tokens.typography.B3_M_14};
  }
  .react-select__option:not(:last-child) {
    border-bottom: 0.042rem solid ${tokens.colors.B_Grey_2}; /* 1px */
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
    border-top-left-radius: 0.167rem; 
    border-top-right-radius: 0.167rem; 
    border: none;
    ${tokens.typography.B3_M_14};
    position: relative;
    top: -0.167rem; /* -4px */
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
    background-color: rgba(102, 201, 255, 0.1);
    backdrop-filter: blur(8px);
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
  }
  .react-select__option--is-focused {
    background-color: rgba(102, 201, 255, 0.2);
    cursor: pointer;
  }
  .react-select__option:active {
    background-color: transparent;
  }
  .react-select__dropdown-indicator {
    padding: 0;
    height: auto;
  }
`;

export const ContentsContainer = styled.div`
  margin-top: 1.33rem;
  margin-bottom: 1.79rem;
  border-radius: 0.167rem;
  border: 0.042rem solid ${tokens.colors.B_Grey_2};
  color: ${tokens.colors.Grey_7};
  width: 100%;
  height: 28.29rem;
  overflow: auto;
  font-size: 0.75rem;
  padding: 0.5rem;

  pre {
    background-color: #282c34;  /* 배경색 검정 */
    color: #abb2bf;  /* 텍스트 색 회색 */
    padding: 10px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    display: block;
    overflow-x: auto;
  }

  code {
    background-color: #282c34;
    color: #abb2bf;
    padding: 10px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }
`;
