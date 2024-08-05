import styled from "styled-components";
import * as tokens from "../../../../tokens";
import Select, { components } from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 36px;
  width: 793px;
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  padding-bottom: 16px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
`;

export const ComingSoonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 793px;
  height: 360px;
  background-color: ${tokens.colors.B_Grey_1};
  border-radius: 10px;
  color: ${tokens.colors.B_Grey_5};
  ${tokens.typography.T3_B_24};
`;

export const WeeksSelectContainer = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    display: flex;
    width: 142px;
    height: 36px;
    color: ${tokens.colors.Grey_8};
    ${tokens.typography.B3_M_14};
    border: 1px solid ${tokens.colors.B_Grey_3};
    border-radius: 4px;
  }
  .react-select__menu {
    position: absolute;
    top: -10px;
    left: -1px;
    width: 145px;
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
  .react-select__single-value {
    width: 100%;
    text-align: center;
    padding-left: 27px;
  }
`;

// 테이블 스타일 시작
export const TableContainer = styled.div`
  width: var(--common-width); /* 동일한 CSS 변수 사용 */
`;

export const Table = styled.table`
  width: 793px;
  /* height: 447px; */
  border-collapse: collapse;
  background-color: #fff;
  table-layout: fixed; /* 열 너비 고정 */
`;

export const TableHead = styled.th`
  background-color: ${tokens.colors.Grey_1};
  color: ${tokens.colors.Black};
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  padding-top: 17px; 
  padding-bottom: 17px;
  text-align: left;
  ${tokens.typography.T5_SB_16};
  position: relative;

  /* 첫 번째 열: 백준 번호 */
  &:nth-child(1) {
    padding-left: 22px;
  }

  /* 두 번째 열: 제목 */
  &:nth-child(2) {
    padding-left: 50px;
  }

  /* 세 번째 열은 공백, 네 번째 열은 레벨 */
  &:nth-child(4) {
    padding-left: 60px;
  }

`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  text-align: left;
  padding-top: 17px; 
  padding-bottom: 17px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_3};
  ${tokens.typography.B2_M_16};

  /* 첫 번째 열: 백준 번호 */
  &:nth-child(1) {
    padding-left: 22px;
  }

  /* 두 번째 열: 제목 */
  &:nth-child(2) {
    padding-left: 50px;
  }

  /* 세 번째 열: 레벨 */
  &:nth-child(3) {
    padding-left: 265px;
  }

  /* 오른쪽 정렬 추가 */
  &:nth-child(4) {
    padding-left: 170px;
  }
`;
// 테이블 스타일 끝

export const BtnContainer = styled.div`
  display: flex;
  width: 793px;
  margin-top: 16px;
  flex-direction: row-reverse;
`;

export const AddQuestionBtn = styled.button` /* 문제 추가하기 버튼*/
  width: 176px;
	height: 48px;
  border-radius: 4px;
	border: none;
	cursor: pointer;
	color: ${tokens.colors.White};
	${tokens.typography.T5_SB_16}
  background-color: ${tokens.colors.B_Grey_7};
`;