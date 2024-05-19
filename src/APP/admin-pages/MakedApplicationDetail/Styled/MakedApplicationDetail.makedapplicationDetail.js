import styled from "styled-components";
import * as tokens from "../../../../tokens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  /* background-image: url('/img/makingapplication.png'); */
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 150px;
`;

export const ContentForTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colors.White};
  border-radius: 4px;
  width: 793px;
  padding: 12px 31px 8px 14px;
  box-shadow: 0px 2px 3px 2px #D6DaF0;
`;

export const ApplicationName = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.typography.H2_SB_48};
  color: ${tokens.colors.Grey_8};
  margin-left: 32px;
  justify-content: center; 
  background-color: ${tokens.colors.White};
  margin-top: 44px;
  width: 745px;
  padding-bottom: 16px;
`;

export const StudySelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${tokens.typography.B3_M_14};
  margin-left: 32px;
  margin-bottom: 40px;
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 4px;
  background-color: rgba(102, 201, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
  color: ${tokens.colors.Blue_0_Main};
`;

export const SecondInnerContainer = styled.div` /*문항들 하나하나를 감싸주는 컨테이너*/
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.div` /* 하나의 질문 전체를 담아주는 컨테이너 */
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colors.White};
  border-radius: 4px;
  padding: 32px 31px 8px 24px;
  width: 793px;
  box-shadow: 0px 2px 3px 2px #D6DaF0; 
`;

export const QuestionAndMultiSelectCheckContainer = styled.div` /* 질문과 그 옆의 복수 응답 부분까지를 다 감싸주는 컨테이너 */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuestionContainer = styled.div` /* 질문과 필수답변 여부를 감싸주는 컨테이너*/
  display: flex;
  flex-direction: row; 
  border: none;
  ${tokens.typography.T5_SB_16};
  color: ${tokens.colors.Grey_8};
`;

export const NecessaryImg = styled.img` /*필수질문일 때 넣을 별표이미지를 꾸며주는 스타일드 컴포넌트*/
  width: 12px;
  height: 12px;
  margin-left: 8px;
`;

export const MultiselectImg = styled.img` /*객관식 복수일 때 넣을 '복수응답' 이미지를 꾸며주는 스타일드 컴포넌트 */
  width: 76px;
  height: 29px;
`;

export const SelectAndAnswerContainer = styled.div` /*주관식 응답과 객관식 응답(보기)부분을 모두 감싸주는 컨테이너 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerInputContainer = styled.input` /*스터디원이 주관식 질문에 답하기 위한 input콘테이너 */
  margin-top: 16px;
  margin-bottom: 40px;
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${tokens.colors.B_Grey_4};
  ${tokens.typography.B2_M_16};
`;

export const SelectContainer = styled.div` /*객관식 보기 및 추가버튼을 모두 감싸주는 컨테이너 */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

export const OptionsContainer = styled.div` /*객관식 보기들과 그 보기 지우기 버튼을 모두 감싸주는 컨테이너 */
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 28px;
`;

export const SquareCheckBox = styled.input`
  appearance: none;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
	background-image: url('/img/checkboxicon.png');
  &:checked {
    background-image: url('/img/checkedicon.png');
    width: 24px;
    height: 24px;
    margin-left: 2px;
  }
`;

export const CircleCheckBox = styled.input`
  appearance: none;
  border: none;
  width: 20px;
  height: 20px;
  margin-right: 60px;
  margin-left: 24px;
  cursor: pointer;
	background-image: url('/img/iconcircle.png');
  &:checked {
    background-image: url('/img/checkedcircleicon.png');
    width: 24px;
    height: 24px;
    margin-right: 58px;
    margin-left: 22px;
  }
`;

export const ChoiceForSelectQuestionContainer = styled.div` /* 객관식 문항의 보기input들을 감싸주는 컨테이너 */
  padding-left: 12px;
  border: none;
  ${tokens.typography.B3_M_14};
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 96px;

  position: fixed;
  bottom: 0; /* 아래쪽으로 고정 */
  left: 0; /* 왼쪽으로 고정 */
  background-color: rgba(255, 255, 255, 0.2); /* 색상 코드를 rgba 형식으로 변경하고, 투명도를 20%로 설정 */
  backdrop-filter: blur(8px); /* 필터를 원하는 것으로 설정 */
  backdrop-filter: 20%;
  z-index: 1000; /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

export const BtnContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 19%;
`;

export const ArbitaryBtn = styled.button` /* 임시 저장하기 버튼 */
  ${tokens.Btns.Btn_fill_default}
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20}
  background-color: ${tokens.colors.B_Grey_7};
  margin-right: 80px;  /*임시로 픽셀로 마진을 놓았음... 나중에 추가수정 필요*/
`;

export const Btn = styled.button` /*저장하기 버튼*/
	border-radius: "4px";
	border: "none";
	cursor: "pointer";
  ${tokens.Btns.Btn_fill_default};
	color: ${tokens.colors.White};
	${tokens.typography.T4_SB_20};
`;