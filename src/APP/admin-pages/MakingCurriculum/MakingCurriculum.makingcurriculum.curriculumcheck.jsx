import React, { useContext, useEffect, useState } from 'react';
import * as itemS from './Styled/MakingCurriculum.makingcurriculum.curriculumcheck.styles'
import request from '../../Api/request';
import Select, { components } from 'react-select';
import QuillPractice from './MakingCurriculum.makingcurriculum.quilleditor';
import { useParams } from 'react-router-dom';
import { AlertContext } from '../../Common/Alert/AlertContext';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

export default function CurriculumCheck() {
  const { curriculumId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [week, setWeek] = useState(0);
  const [content, setContent] = useState('');
  const { alert } = useContext(AlertContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(`/curriculum/${curriculumId}`);
        console.log("커리큘럼 내용: ", response);
        if (response["isSuccess"]) {
          setData(response.result);
          setTitle(response.result.title);
          setWeek(response.result.week);
          setContent(response.result.content);
        } else {
          setError('Failed to fetch data');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [curriculumId]);

  useEffect(() => {
    // 코드블록에 하이라이트 적용
    if (content) {
      document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [content]);

  const handleEditCurriculum = () => {
    setIsEditing(true);
  };

  const WeeksSelect = ({ value, onChange }) => {
    const CustomDropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "1rem", height: "1rem" }} />
        </components.DropdownIndicator>
      );
    };

    const options = [
      { value: '1', label: '1주차' },
      { value: '2', label: '2주차' },
      { value: '3', label: '3주차' },
      { value: '4', label: '4주차' },
      { value: '5', label: '5주차' },
      { value: '6', label: '6주차' },
      { value: '7', label: '7주차' },
      { value: '8', label: '8주차' },
    ];
  
    return (
      <itemS.WeeksSelectContainer
        options={options}
        value={options.find(option => option.value === value.toString())} // week 값과 일치하는 옵션 찾기
        onChange={selectedOption => onChange(selectedOption.value)}
        placeholder="주차 선택"
        components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
        isSearchable={false}
      />
    );
  };

  const handleSaveCurriculum = async () => {
    try {
      const response = await request.patch(`/curriculum/${curriculumId}`, {
        studyId: data.studyId,
        title,
        week,
        content,
      });
      if (response["isSuccess"]) {
        setData({
          ...data,
          title,
          week,
          content,
        });
        setIsEditing(false);
      }
    } catch (error) {
      setError('An error occurred while saving data');
      console.error('커리큘럼 저장과정에서 에러', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <itemS.ContentWrapper>
    <itemS.Container>
      <itemS.Title>
        {isEditing ? (
            <itemS.TitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          ) : (title)
        }
        <img
          src={isEditing ? "/img/btnsave.png" : "/img/btnedit.png"}
          alt={isEditing ? "저장 버튼" : "편집 버튼"}
          onClick={isEditing ? handleSaveCurriculum : handleEditCurriculum}
          style={{ width: "2.5rem", height: "1.708rem", cursor: "pointer" }}
        />
      </itemS.Title>
      <itemS.SecondContainer>
        <itemS.WhiteBox>{data.studyName}</itemS.WhiteBox>
          {isEditing ? (
            <WeeksSelect value={week} onChange={setWeek} />
          ) : (
            <itemS.WhiteBox>{week}주차</itemS.WhiteBox>
          )}
      </itemS.SecondContainer>
      <>
        {isEditing ? (
          <QuillPractice setContent={setContent} content={content} />
        ) : (
          <itemS.ContentsContainer>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </itemS.ContentsContainer>
        )}
      </>
    </itemS.Container>
    </itemS.ContentWrapper>
  );
}