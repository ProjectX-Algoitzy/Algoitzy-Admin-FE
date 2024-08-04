import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import request from '../../Api/request';
import * as itemS from "./Styled/InstitutionDetail.institutiondetail.main.styles";
import InstitutionDetailTable from './InstitutionDetail.institutiondetail.table';
import InstitutionDetailExplanation from './InstitutionDetail.institutiondetail.explanation';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function InstitutionDetail() {
  const { institutionId } = useParams();
  const { state } = useLocation();
  const { confirm } = useContext(ConfirmContext);
  const navigate = useNavigate();
  
  const [itemList, setItemList] = useState([]); // 스터디원

  useEffect(() => {
    const fetchWorkbook = async () => {
      try {
        const response = await request.get(`/institution/${institutionId}/workbook`);
  
        if (response.isSuccess) {
          console.log("추천 문제집 목록 조회 성공", response);
          setItemList(response.result.workbookList);
        } else {
          console.error("추천 문제집 목록 조회 실패:", response);
        }
      } catch (error) {
        console.error('추천 문제집 목록 조회 오류', error);
      }
    };

    fetchWorkbook();
  }, [institutionId]);

  const handleDeleteClick = async () => {
    const confirmed = await confirm('추천 문제집과 함께 삭제되며, 삭제된 정보는 복구할 수 없습니다.\n정말로 삭제하시겠습니까?');
    if (confirmed) {
      try {
        const response = await request.delete(`/institution/${institutionId}`);
        if (response.isSuccess) {
          console.log("기관 삭제 성공 response:", response);
          navigate('/enterbootlist');
        } else {
          console.error("기관 삭제 실패:", response);
        }
      } catch (error) {
        console.error("기관 삭제 에러:", error);
      }
    }
  };

  return (
    <itemS.OuterContainer>
      <itemS.Container>
        <itemS.InnerContainer>
          <itemS.TitleBox>
            <itemS.Title>{state?.name || '기관 이름 없음'}</itemS.Title>
            <itemS.DeleteButton onClick={handleDeleteClick}>삭제</itemS.DeleteButton>
          </itemS.TitleBox>
          <itemS.PartBox>
            <itemS.FirstPart>코딩테스트 분석</itemS.FirstPart>
            <itemS.EditButtonBox>
              <itemS.EditIcon src='/img/edit.svg' alt='수정' />
              <itemS.EditText>수정하기</itemS.EditText>
            </itemS.EditButtonBox>
          </itemS.PartBox>
          <InstitutionDetailExplanation />
          <itemS.PartBox>
            <itemS.SecondPart>추천 문제집</itemS.SecondPart>
            <itemS.AddButtonBox>
              <itemS.AddIcon src='/img/add.svg' alt='추가' />
            </itemS.AddButtonBox>
          </itemS.PartBox>
          <InstitutionDetailTable itemList={itemList} />
        </itemS.InnerContainer>
      </itemS.Container>
    </itemS.OuterContainer>
  );
}
