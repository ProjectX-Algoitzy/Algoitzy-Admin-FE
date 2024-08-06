import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/UpdateGeneration.updategeneration.main.styles";
import UpdateGenerationTable from './UpdateGeneration.updategeneration.table';
import { dummydata } from './dummy';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function UpdateGeneration() {

	const { confirm } = useContext(ConfirmContext);

  const [generationList, setGenerationList] = useState([]);

	const fetchInstitutionList = async () => { // 기관 목록 조회
		try {
			const response = await request.get('/generation');
			if (response.isSuccess) {
				console.log("기수 조회 성공",response);
				setGenerationList(response.result.weekList);
			} else {
				console.error("기수 조회 실패:", response);
			}
		} catch (error) {
			console.error('기수 조회 오류', error);
		}
	};
  
  useEffect(() => {
    fetchInstitutionList();
  },[])

	
	const handleUpdate = async () => {
    const confirmed = await confirm('초기화된 스터디 정보는 복구할 수 없습니다. \n정말로 갱신하시겠습니까?');
    if (confirmed) {
			
			const requestData = {
				weekList: generationList.map(item => ({
					week: item.week,
					startTime: item.startTime,
				})),
			};
      try {
        const response = await request.post('/generation', requestData);
        if (response.isSuccess) {
          console.log("기수 갱신 성공 response:", response);
          fetchInstitutionList();
        } else {
          console.error("기수 갱신 실패:", response);
        }
      } catch (error) {
        console.error("기수 갱신 에러:", error);
      }
    }
  };
	const handleUpdateTuple = (week, startTime) => {
    setGenerationList(prevList =>
      prevList.map(item =>
        item.week === week ? { ...item, startTime } : item
      )
    );
  };

	return (
		<itemS.OuterContainer>
				<itemS.Container>
				<itemS.InnerContainer>
					<itemS.HeadContainer>
						  <itemS.Head>기수 갱신</itemS.Head>
					</itemS.HeadContainer>
          <itemS.CautionContainer>
						<itemS.CautionIcon src='/img/caution.svg' alt='주의'/>
            <itemS.Caution>모든 정규 스터디의 스터디원을 포함한 출석부, 모의테스트 내역이 초기화됩니다.</itemS.Caution>
          </itemS.CautionContainer>
					<UpdateGenerationTable 
						generationList={generationList} 
						onUpdateTuple={handleUpdateTuple}
					/>
				<itemS.UdateButton onClick={handleUpdate}>기수 갱신</itemS.UdateButton>
				</itemS.InnerContainer>
			</itemS.Container>
			
		</itemS.OuterContainer>
	);
}
