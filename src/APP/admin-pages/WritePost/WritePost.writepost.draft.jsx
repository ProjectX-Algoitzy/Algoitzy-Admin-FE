import React, { useEffect, useState } from 'react';
import * as Styled from './Styled/WritePost.writepost.draft.styles';
import request from '../../Api/request';

export default function DraftModal({ isDraftModalOpen, toggleDraftModal, drafts, onSelectDraft }) {
  const [categoryOptions, setCategoryOptions] = useState([]); // 카테고리 옵션 상태
  const [mappedDrafts, setMappedDrafts] = useState([]); // 매핑된 drafts 상태

  // 카테고리 옵션 가져오기
  useEffect(() => {
    const fetchCategoryOptions = async () => {
      try {
        const response = await request.get('/board/category');
        if (response.isSuccess) {
          const options = response.result.categoryList.map((category) => ({
            value: category.code,
            label: category.name,
          }));
          setCategoryOptions(options);
        } else {
          console.error('카테고리 목록 조회 실패:', response.message);
        }
      } catch (error) {
        console.error('카테고리 목록 조회 중 오류:', error);
      }
    };
    fetchCategoryOptions();
  }, []);

  // drafts와 categoryOptions 매핑
  useEffect(() => {
    if (categoryOptions.length > 0 && drafts.length > 0) {

      const mapped = drafts.map((draft) => {
        const matchedCategory = categoryOptions.find(
          (option) => option.value === draft.category // 매칭
        );
        return {
          ...draft,
          categoryName: matchedCategory ? matchedCategory.label : '알 수 없음', // 매칭된 이름
        };
      });
      setMappedDrafts(mapped);
      console.log('Mapped drafts:', mapped);
    }
  }, [drafts, categoryOptions]);
  
  if (!isDraftModalOpen) return null;

  return (
    <Styled.DraftModalBackdrop>
      <Styled.DraftModalContainer>
        <Styled.DraftModalHeader>
          <Styled.DraftModalTitle>임시저장 목록</Styled.DraftModalTitle>
          <Styled.DraftModalClose onClick={toggleDraftModal} />
        </Styled.DraftModalHeader>
        <Styled.DraftModalBody>
          {mappedDrafts.length > 0 ? (
              mappedDrafts.map((draft) => (
                <Styled.DraftItem
                  key={draft.boardId}
                  onClick={() => {
                    toggleDraftModal();
                    onSelectDraft(draft);
                  }}
                >
                <Styled.DraftCategory>{draft.categoryName}</Styled.DraftCategory>
                <Styled.DraftTitle>{draft.title}</Styled.DraftTitle>
                <Styled.DraftDate>{new Date(draft.createdTime).toLocaleString()}</Styled.DraftDate>
              </Styled.DraftItem>
            ))
          ) : (
            <Styled.EmptyDraftMessage>임시저장된 게시글이 없습니다.</Styled.EmptyDraftMessage>
          )}
        </Styled.DraftModalBody>
      </Styled.DraftModalContainer>
    </Styled.DraftModalBackdrop>
  );
}
