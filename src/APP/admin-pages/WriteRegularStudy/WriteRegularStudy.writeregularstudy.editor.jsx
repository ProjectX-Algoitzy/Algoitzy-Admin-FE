import React, { useState, useEffect, useRef, useContext } from 'react';
import * as Styled from './Styled/WriteRegularStudy.writeregularstudy.editor.styles';
import request from '../../Api/request';
import MarkdownEditor from './WriteRegularStudy.writeregularstudy.markdowneditor';
import ActionBar from './WriteRegularStudy.writeregularstudy.actionbar';

import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';
import { AlertContext } from '../../Common/Alert/AlertContext';

export default function Editor({
  boardId,
  setBoardId,

  fetchBoardData,

  title,
  setTitle,

  categoryCode,
  setCategoryCode,

  category,
  setCategory,

  boardFileList,
  setBoardFileList,
  
  uploadedImageUrls=[],
  setUploadedImageUrls,

  markdownContent,
  setMarkdownContent,

  saveYn,
  setSaveYn,
}) {

  const editorRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 상태 관리
  
  const [selectedCategory, setSelectedCategory] = useState({ value: categoryCode, label: category }); // 선택된 카테고리 상태
  const [categoryOptions, setCategoryOptions] = useState([]); // 동적 카테고리 옵션

  const { confirm } = useContext(ConfirmContext);
  const { alert } = useContext(AlertContext);
  
  const categoryPlaceholderText = '카테고리 선택';
    

  // 에디터 내부 스크롤
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true); // 스크롤 상태 활성화
      // 일정 시간 후 스크롤 상태 비활성화
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const editorElement = editorRef.current;
    if (editorElement) {
      editorElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (editorElement) {
        editorElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  // 카테고리 옵션 리스트 가져오기
  useEffect(() => {
    const fetchCategoryOptions = async () => {
      try {
        const response = await request.get('/board/category');
        if (response.isSuccess) {
          const options = response.result.categoryList.map((category) => ({
            value: category.code,
            label: category.name,
          }));

          const filteredOptions = options.filter(
            (option) => option.label == '공지'
          );

          setCategoryOptions(filteredOptions);
          setSelectedCategory({ value: categoryCode, label: category });
          setSelectedCategory(filteredOptions[0] || null); // 첫 번째 옵션 선택
        } else {
          console.error('카테고리 목록 조회 실패:', response.message);
        }
      } catch (error) {
        console.error('카테고리 목록 조회 중 오류:', error);
      }
    };

    fetchCategoryOptions();
  }, [categoryCode]);


  // 카테고리 변경
  const handleCategoryChange = (selectedOption) => {
    setCategoryCode(selectedOption.value);
    setCategory(selectedOption.label);
    setSelectedCategory(selectedOption);
  };

  
  return (
    <Styled.LeftContainer>
      <Styled.InnerEditorContainer ref={editorRef} isScrolling={isScrolling}>
        <Styled.EditorHeader>
          <Styled.PageLabel>새로운 스터디</Styled.PageLabel>
          <Styled.Divider/>

          <Styled.OptionLabel>스터디 이름</Styled.OptionLabel>
          <Styled.TextInput 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="이름을 입력해주세요"
          />

          <Styled.OptionLabel>스터디 대표 이미지</Styled.OptionLabel>
          <Styled.CategorySelect
            options={categoryOptions}
            placeholder={categoryPlaceholderText}
            value={selectedCategory?.value ? selectedCategory : undefined}
            isDisabled={true} // 선택 비활성화
            // defaultValue={categoryOptions[0]}
            components={{ DropdownIndicator: null, IndicatorSeparator: null }}
            isSearchable={false}
            onChange={handleCategoryChange}
          />
        </Styled.EditorHeader>

        <MarkdownEditor
          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}
          boardFileList={boardFileList}
          setBoardFileList={setBoardFileList}
          uploadedImageUrls={uploadedImageUrls}
          setUploadedImageUrls={setUploadedImageUrls}
        />

      </Styled.InnerEditorContainer>

      <ActionBar
          boardId={boardId}
          setBoardId={setBoardId}

          fetchBoardData={fetchBoardData}

          title={title}
          setTitle={setTitle}

          categoryCode={categoryCode}
          setCategoryCode={setCategoryCode}

          category={category}
          setCategory={setCategory}

          boardFileList={boardFileList}
          setBoardFileList={setBoardFileList}

          uploadedImageUrls={uploadedImageUrls}
          setUploadedImageUrls={setUploadedImageUrls}

          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}

          saveYn={saveYn}
          setSaveYn={setSaveYn}
      />
    </Styled.LeftContainer>
  );
}