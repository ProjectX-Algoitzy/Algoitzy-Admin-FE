import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 794px;
  margin-left: 563px;
`;

export const Title = styled.div`
  ${tokens.typography.T1_SB_32};
  color: ${tokens.colors.Grey_8};
  margin-top: 180px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${tokens.colors.B_Grey_2};
  margin-bottom: 32px;
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