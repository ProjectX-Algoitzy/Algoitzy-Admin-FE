import React, { useState, useEffect, useContext } from 'react';
import request from '../../Api/request';
import * as itemS from "./Styled/UpdateGeneration.updategeneration.main.styles";
import UpdateGenerationTable from './UpdateGeneration.updategeneration.table';
import { dummydata } from './dummy';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';

export default function UpdateGeneration() {

	const { confirm } = useContext(ConfirmContext);

  const [dateList, setDateList] = useState([]);
  
  useEffect(() => {
    setDateList(dummydata);
  },[])

	const handleUpdate = () => {    //하나의 문단 클릭했음을 나타내는 함수
		confirm('초기화된 스터디 정보는 복구할 수 없습니다. \n정말로 갱신하시겠습니까?');
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
						dateList={dateList} 
					/>
				<itemS.UdateButton onClick={handleUpdate}>기수 갱신</itemS.UdateButton>
				</itemS.InnerContainer>
			</itemS.Container>
			
		</itemS.OuterContainer>
	);
}
