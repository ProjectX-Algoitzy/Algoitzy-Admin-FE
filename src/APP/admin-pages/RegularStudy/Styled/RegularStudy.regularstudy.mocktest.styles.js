import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.333rem;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.167rem;
  margin-bottom: 1.5rem;
  width: 33.042rem;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 0.667rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const ComingSoonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.042rem;
  height: 15rem;
  background-color: ${tokens.colors.B_Grey_1};
  border-radius: 0.417rem;
  color: ${tokens.colors.B_Grey_5};
  ${tokens.typography.T3_B_24};
`;

export const WeeksSelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    display: flex;
    width: 5.917rem;
    height: 1.5rem;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 0.167rem;
  }
  .react-select__menu {
    position: absolute;
    top: -0.417rem;
    left: -0.042rem;
    width: 6.042rem;
    height: 11.667rem;
    border-radius: 0.167rem;
    border: none;
    box-shadow: 0 0.083rem 0.167rem rgba(0, 0, 0, 0.1);
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
  .react-select__single-value {
    width: 100%;
    text-align: center;
    padding-left: 1.125rem;
  }
`;

// 테이블 스타일 시작
export const TableContainer = styled.div`
  width: var(--common-width); /* 동일한 CSS 변수 사용 */
`;

export const Table = styled.table`
  width: 33.042rem;
  border-collapse: collapse;
  background-color: #fff;
  table-layout: fixed; /* 열 너비 고정 */
`;

export const TableHead = styled.th`
  background-color: ${tokens.colors.Grey_1};
  color: ${tokens.colors.Black};
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  padding-top: 0.708rem; 
  padding-bottom: 0.708rem;
  text-align: left;
  ${tokens.typography.T5_SB_16};
  position: relative;

  &:nth-child(1) {
    padding-left: 0.917rem;
  }

  &:nth-child(2) {
    padding-left: 2.083rem;
  }

  &:nth-child(4) {
    padding-left: 2.5rem;
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  text-align: left;
  padding-top: 0.708rem; 
  padding-bottom: 0.708rem;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  ${tokens.typography.B2_M_16};

  &:nth-child(1) {
    padding-left: 0.917rem;
  }

  &:nth-child(2) {
    padding-left: 2.083rem;
  }

  &:nth-child(3) {
    padding-left: 11.042rem;
  }

  &:nth-child(4) {
    padding-left: 7.083rem;
  }
`;
// 테이블 스타일 끝

export const BtnContainer = styled.div`
  display: flex;
  width: 33.042rem;
  margin-top: 0.667rem;
  flex-direction: row-reverse;
`;

export const AddQuestionBtn = styled.button`
  width: 7.333rem;
	height: 2rem;
  border-radius: 0.167rem;
	border: none;
	cursor: pointer;
	color: ${tokens.colors.White};
	${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;

export const DeleteIcon = styled.div`
  background-image: url('/img/GrayX.png');
  background-size: cover;
  width: 0.583rem;
  height: 0.583rem;
  cursor: pointer;
`;