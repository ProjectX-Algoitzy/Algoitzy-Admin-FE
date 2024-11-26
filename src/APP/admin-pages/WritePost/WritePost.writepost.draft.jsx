import React from 'react';
import * as Styled from './Styled/WritePost.writepost.draft.styles';

export default function DraftModal({ isDraftModalOpen, toggleDraftModal, drafts, onSelectDraft }) {
  if (!isDraftModalOpen) return null;

  return (
    <Styled.DraftModalBackdrop>
      <Styled.DraftModalContainer>
        <Styled.DraftModalHeader>
          <Styled.DraftModalTitle>임시저장 목록</Styled.DraftModalTitle>
          <Styled.DraftModalClose onClick={toggleDraftModal} />
        </Styled.DraftModalHeader>
        <Styled.DraftModalBody>
          {drafts.length > 0 ? (
            drafts.map((draft) => (
              <Styled.DraftItem key={draft.boardId}
              onClick={() => {
                toggleDraftModal();
                onSelectDraft(draft)}}>
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
