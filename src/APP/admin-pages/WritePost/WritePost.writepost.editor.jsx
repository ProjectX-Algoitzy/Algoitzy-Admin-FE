import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EditorState, EditorSelection } from '@codemirror/state';
import { EditorView, keymap, placeholder } from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import { defaultKeymap } from '@codemirror/commands';
import * as Styled from './Styled/WritePost.writepost.editor.styles';
import request from '../../Api/request';
import DraftModal from './WritePost.writepost.draft';
import FileTable from './WritePost.writepost.filetable';
import { ConfirmContext } from '../../Common/Confirm/ConfirmContext';
import { AlertContext } from '../../Common/Alert/AlertContext';

const categoryPlaceholderText = '카테고리 선택';

export default function Editor({
  boardId,
  title,
  setTitle,
  initialContent,
  setMarkdownContent,
  initialCategoryCode,
  initialUploadedFiles,
}) {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation으로 전달된 state 접근
  const { state } = location;

  const editorRef = useRef(null);
  const imageInputRef = useRef(null); // 이미지 파일 입력창을 제어할 useRef
  const fileInputRef = useRef(null); // 일반 파일 입력창을 제어할 useRef
  const modalRef = useRef(null);
  const [editorView, setEditorView] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 상태 관리
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 상태
  const [isCategorySelected, setIsCategorySelected] = useState(false); // 카테고리 선택 여부 상태
  const [categoryCode, setCategoryCode] = useState(state?.initialCategoryCode || null);
  const [categoryOptions, setCategoryOptions] = useState([]); // 동적 카테고리 옵션
  const [category, setCategory] = useState(categoryOptions[0]);

  const [linkURL, setLinkURL] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]); // 선택된 파일들 상태
  const [uploadedFiles, setUploadedFiles] = useState(state?.initialUploadedFiles || []);

  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const [saveYn, setSaveYn] = useState(true); // 임시 저장 여부 (default: true)

  const [draftCount, setDraftCount] = useState(0); // 임시저장 게시글 수
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false); // 모달 상태
  const [drafts, setDrafts] = useState([]); // 임시저장 게시글 목록
  const loadCount = useRef(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const { confirm } = useContext(ConfirmContext); // ConfirmContext 사용
  const { alert } = useContext(AlertContext);

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

  useEffect(() => {
    // 카테고리 옵션을 API에서 가져오기
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
          setSelectedCategory(filteredOptions[0] || null); // 첫 번째 옵션 선택
        } else {
          console.error('카테고리 목록 조회 실패:', response.message);
        }
      } catch (error) {
        console.error('카테고리 목록 조회 중 오류:', error);
      }
    };

    fetchCategoryOptions();
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setCategoryCode(selectedOption.value); // 선택된 카테고리 코드 설정
    setSelectedCategory(selectedOption); // 선택된 카테고리 설정
    setIsCategorySelected(true); // 선택 여부 설정
  };


  const resizeTextarea = (e) => {
    e.target.style.height = 'auto'; // 높이 초기화
    e.target.style.height = `${e.target.scrollHeight}px`; // 내용에 맞게 높이 조정
  };

  const fetchEditDetails = async () => {
        // 제목과 내용을 업데이트
        setTitle(title);
        setMarkdownContent(initialContent);
        // 에디터 내용 업데이트
        editorView.dispatch({
          changes: {
            from: 0,
            to: editorView.state.doc.length, // 기존 내용 삭제
            insert: initialContent, // 새로운 내용 삽입
          },
        });
  
        // 파일 리스트 업데이트
        /*
        const initialUploadedFiles = boardFileList.map((file) => ({
          originalName: file.originalName,
          fileUrl: file.fileUrl,
        }));
        setUploadedFiles(initialUploadedFiles);
        */
        // 카테고리 업데이트
        setCategory({ value: initialCategoryCode, label: initialCategoryCode });
  
        console.log('수정 글 불러오기 성공:', title);
  };

  useEffect(() => {
    if (!editorRef.current || initialContent === undefined) return;
    const startState = EditorState.create({
      doc: initialContent || '', // 수정 시 초기 내용을 Codemirror에 반영
      extensions: [
        keymap.of(defaultKeymap),
        markdown(),
        placeholder("내용을 적어보세요"),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const content = update.state.doc.toString();
            setMarkdownContent(content);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    setEditorView(view);

    return () => {
      view.destroy();
    };
  }, []);

  useEffect(() => {
    // initialContent가 늦게 바뀌므로 2번 변경 감지 후 초기화 끄기
  
    if (editorView && initialContent !== undefined) {
      if (loadCount.current < 2) {
        editorView.dispatch({
          changes: {
            from: 0,
            to: editorView.state.doc.length, 
            insert: initialContent || '',
          },
        });
        loadCount.current += 1; // 실행 횟수 증가
      }
    }
  }, [editorView, initialContent]); // initialContent를 포함해 변경 감지

  const applyMarkdownSyntax = (syntax) => {
    if (!editorView) return;

    if (syntax === 'link') {
      const { top, left } = editorView.coordsAtPos(editorView.state.selection.main.head);
      setModalPosition({ top, left });
      setIsModalOpen(true);
      return;
    } else if (syntax === 'image') {
      openImageFileExplorer(); // 이미지 파일 선택창 열기
      return;
    } else if (syntax === 'file') {
      openFileExplorer(); // 일반 파일 선택창 열기
      return;
    } else if (syntax === 'code') {
      // 코드 블록 추가
      editorView.dispatch(
        editorView.state.changeByRange((range) => {
          const codeBlock = `\`\`\`\n${editorView.state.sliceDoc(range.from, range.to)}\n\`\`\``;
          return {
            changes: { from: range.from, to: range.to, insert: codeBlock },
            range: EditorSelection.cursor(range.from + codeBlock.length),
          };
        })
      );
      return;
    }

    editorView.dispatch(
      editorView.state.changeByRange((range) => {
        const line = editorView.state.doc.lineAt(range.from);
        const currentLineText = line.text;
        const selectedText = editorView.state.sliceDoc(range.from, range.to);

        let newText;

        if (syntax.startsWith('heading')) {
          const level = parseInt(syntax.slice(-1));
          newText = setHeadingLevel(currentLineText, level);
          return {
            changes: { from: line.from, to: line.to, insert: newText },
            range: EditorSelection.cursor(line.from + newText.length),
          };
        } else if (syntax === 'blockquote') {
          newText = currentLineText.startsWith('> ')
            ? currentLineText.slice(2)
            : `> ${currentLineText}`;
  
          return {
            changes: { from: line.from, to: line.to, insert: newText },
            range: EditorSelection.cursor(line.from + newText.length),
          };
        } else {
          newText = toggleInlineStyle(selectedText, syntax);
          return {
            changes: { from: range.from, to: range.to, insert: newText },
            range: EditorSelection.range(range.from, range.from + newText.length),
          };
        }
      })
    );
  };

  const toggleInlineStyle = (text, style) => {
    const styles = {
      bold: /^\*\*(.*)\*\*$/,
      italic: /^\*(.*)\*$/,
      strikethrough: /^~~(.*)~~$/,
    };

    const wraps = {
      bold: '**',
      italic: '*',
      strikethrough: '~~',
    };

    const regex = styles[style];
    const wrap = wraps[style];

    return regex.test(text) ? text.replace(regex, '$1') : `${wrap}${text || '텍스트'}${wrap}`;
  };

  const setHeadingLevel = (currentLineText, level) => {
    const headingLevels = ['# ', '## ', '### '];
    const strippedText = currentLineText.replace(/^#+\s*/, '');
    return headingLevels[level - 1] + strippedText;
  };

  const handleLinkInsert = () => {
    if (!editorView) return;
  
    const linkText = "링크 텍스트";
    const markdownLink = `[${linkText}](${linkURL})`;
    const linkTextStart = 1;
    const linkTextEnd = linkTextStart + linkText.length;
  
    editorView.dispatch(
      editorView.state.changeByRange((range) => ({
        changes: { from: range.from, to: range.to, insert: markdownLink },
        range: EditorSelection.range(range.from + linkTextStart, range.from + linkTextEnd),
      }))
    );
    setLinkURL('');
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);


    // S3 이미지 업로드 함수
    const uploadImage = async (file) => {
      try {
        const formData = new FormData();
        formData.append('multipartFileList', file); // 파일 추가
    
        // 요청 경로를 /s3/v2로 변경
        const response = await request.post('/s3/v2', formData);
    
        if (response.isSuccess) {
          // 반환된 파일 URL 추출
          const uploadedFile = response.result.s3FileList?.[0];
          if (uploadedFile) {
            return uploadedFile.fileUrl; // 파일 URL 반환
          } else {
            throw new Error('파일 정보가 응답에 없습니다.');
          }
        } else {
          throw new Error(`이미지 업로드 실패: ${response.message}`);
        }
      } catch (error) {
        console.error('이미지 업로드 오류:', error);
        throw error;
      }
    };
  
    // 이미지 업로드 핸들러
    const handleImageUpload = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      try {
        const imageURL = await uploadImage(file); // S3 업로드 후 URL 반환
        setUploadedImageUrls((prevUrls) => [...prevUrls, imageURL]); // 업로드된 URL 저장
  
        const markdownImage = `<img src="${imageURL}" alt="" style="max-width: 100%; height: auto;" />`;
        editorView.dispatch(
          editorView.state.changeByRange((range) => ({
            changes: { from: range.from, to: range.to, insert: markdownImage },
            range: EditorSelection.cursor(range.from + markdownImage.length),
          }))
        );
      } catch (error) {
        alert('이미지 업로드에 실패했습니다.');
      }
    };
  
    const deleteImageFromS3 = async (fileUrl) => {
      try {
        const response = await request.delete('/s3', { params: { fileUrl } });
        if (!response.isSuccess) {
          console.error('이미지 삭제 실패:', response.message);
        }
      } catch (error) {
        console.error('이미지 삭제 중 오류:', error);
      }
    };
  
    const deleteAllUploadedImages = async () => {
      const promises = uploadedImageUrls.map((url) => deleteImageFromS3(url));
      await Promise.all(promises); // 모든 삭제 요청 실행
    };
  
    useEffect(() => {
      // 페이지를 떠날 때 처리
      const handleBeforeUnload = (event) => {
        if (uploadedImageUrls.length > 0) {
          deleteAllUploadedImages();
          event.preventDefault();
          event.returnValue = ''; // 브라우저 기본 메시지 표시
        }
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      // Cleanup: 이벤트 리스너 제거
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [uploadedImageUrls]);
  
    useEffect(() => {
      // 컴포넌트 언마운트 시 이미지 삭제
      return () => {
        deleteAllUploadedImages();
      };
    }, []);
  
    const handleExit = async () => {
      try {
        const confirmed = await confirm(
          '저장하지 않은 내용은 사라집니다. 계속하시겠습니까?'
        );
        if (confirmed) {
          await deleteAllUploadedImages(); // 이미지 삭제 로직 실행
          navigate(-1); // 이전 페이지로 이동
        } else {
          console.log('사용자가 취소했습니다.');
        }
      } catch (error) {
        console.error('나가기 처리 중 오류 발생:', error);
      }
    };
    
  const openImageFileExplorer = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click(); // 이미지 파일 탐색기 열기
    }
  };
  
  const openFileExplorer = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 일반 파일 탐색기 열기
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // 선택된 파일 배열로 변환
    setSelectedFiles(files); // 상태에 파일 목록 저장
    handleFileUpload(event);
  };

  const deleteFile = async (file) => {
    try {
      const response = await request.delete('/s3', { params: { fileUrl: file.fileUrl } });
      if (response.isSuccess) {
        setUploadedFiles((prevFiles) =>
          prevFiles.filter((f) => f.fileUrl !== file.fileUrl)
        );
      } else {
        throw new Error('파일 삭제 실패');
      }
    } catch (error) {
      console.error('파일 삭제 실패:', error);
      alert('파일 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files); // 다중 파일 처리
   
    for (const file of files) {
      try {
        const formData = new FormData();
        formData.append('multipartFileList', file);
  
        const response = await request.post('/s3/v2', formData);
        if (response.isSuccess) {
          const uploadedFile = response.result.s3FileList?.[0];
          if (uploadedFile) {
            setUploadedFiles((prevFiles) => [
              ...prevFiles,
              { ...uploadedFile, size: file.size },
            ]);
          }
        } else {
          throw new Error('파일 업로드 실패');
        }
      } catch (error) {
        console.error('파일 업로드 오류:', error);
        alert('파일 업로드 중 오류가 발생했습니다.');
      }
    }
  };


  // 임시저장 게시글 목록 조회
  const fetchDrafts = async () => {
    try {
      const response = await request.get('board/draft');
      if (response.isSuccess) {
        const draftList = response.result.boardList.map((draft) => {
          const matchedCategory = categoryOptions.find(
            (option) => option.value === draft.category
          );
          return {
            ...draft,
            name: matchedCategory ? matchedCategory.label : '알 수 없음',
          };
        });
        
        console.log('Fetched Drafts:', draftList); // 디버깅용 출력

        setDrafts(draftList);
        setDraftCount(draftList.length); // 게시글 수 업데이트
      } else {
        console.error('임시저장 목록 조회 실패:', response.message);
      }
    } catch (error) {
      console.error('임시저장 목록 조회 중 오류:', error);
    }
  };

    // 모달 열기/닫기
    const toggleDraftModal = () => {
      setIsDraftModalOpen((prev) => !prev);
    };

    const handleSaveDraft = async () => {
      const content = editorView.state.doc.toString().trim();
      const fileUrls = uploadedFiles.map(file => file.fileUrl);

      const requestData = {
        title: title.trim() || '',
        content: content || '',
        fileUrlList: fileUrls,
        saveYn: false, // 임시저장
      };
    
      try {
        const response = await request.post('board', requestData);
    
        if (response.isSuccess) {
          alert('글이 임시저장되었습니다.');
          fetchDrafts(); // 임시저장 목록 갱신
        } else {
          alert(`임시저장 실패: ${response.message}`);
        }
      } catch (error) {
        console.error('임시저장 중 오류 발생:', error);
      }
    };

    // 임시저장 글 상세 데이터를 가져오는 함수
const fetchDraftDetails = async (boardId) => {
  try {
    const response = await request.get(`board/draft/${boardId}`);
    if (response.isSuccess) {
      const draft = response.result;

      // 제목과 내용을 업데이트
      setTitle(draft.title);
      setMarkdownContent(draft.content);

      // 에디터 내용 업데이트
      editorView.dispatch({
        changes: {
          from: 0,
          to: editorView.state.doc.length, // 기존 내용 삭제
          insert: draft.content, // 새로운 내용 삽입
        },
      });

      // 파일 리스트 업데이트
      const uploadedFilesFromDraft = draft.boardFileList.map((file) => ({
        originalName: file.originalName,
        fileUrl: file.fileUrl,
      }));
      setUploadedFiles(uploadedFilesFromDraft);
      console.log(uploadedFiles);

      // 카테고리 업데이트
      setCategory({ value: draft.category, label: draft.category });

      console.log('임시저장 글 불러오기 성공:', draft);
    } else {
      console.error('임시저장 글 불러오기 실패:', response.message);
    }
  } catch (error) {
    console.error('임시저장 글 불러오기 오류:', error);
  }
};
  
    // 임시저장 글 선택
    const handleSelectDraft = async (draft) => {
      try {
        const confirmed = await confirm(
          '저장하지 않은 내용은 사라집니다. 계속하시겠습니까?'
        );
  
        if (confirmed) {
          fetchDraftDetails(draft.boardId); // 선택된 글 불러오기
        }
      } catch {
        console.log('사용자가 취소했습니다.');
      }
    };
  
    // 컴포넌트 마운트 시 임시저장 목록 가져오기
    useEffect(() => {
      fetchDrafts();
    }, []);


 // 게시글 등록 API 호출 함수
 const handlePostSubmit = async () => {
  const content = editorView.state.doc.toString().trim();

  const fileUrls = uploadedFiles.map(file => file.fileUrl);

  const requestData = {
    title: title.trim(),
    content: content,
    category: categoryCode,
    fileUrlList: fileUrls,
    saveYn: true,
  };

  console.log('요청 데이터:', requestData);

  try {
    let response;

      if (boardId) {
        // 수정 요청
        response = await request.patch(`/board/${boardId}`, requestData);
      } else {
        // 새 게시글 작성 요청
        response = await request.post('/board', requestData);
      }

      if (response.isSuccess) {
        alert(boardId ? '게시글이 수정되었습니다.' : '게시글이 등록되었습니다.');
        navigate(-1); // 이전 페이지로 이동
      } else {
        alert('게시글을 저장하는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      alert('게시글을 저장하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <Styled.LeftContainer>
      <Styled.InnerEditorContainer ref={editorRef} isScrolling={isScrolling}>
      <Styled.EditorHeader>
      <Styled.TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          resizeTextarea(e);
        }}
        hasText={title.length > 0}
      />

        <Styled.Divider/>

        <Styled.LIContainer>
        <Styled.BlankLabel>게시판 선택</Styled.BlankLabel>
        <Styled.CategorySelect
          options={categoryOptions}
          placeholder={categoryPlaceholderText}
          value={categoryOptions[0]} // 기본값을 "공지사항"으로 설정
          // isDisabled={true} // 선택 비활성화
          // defaultValue={categoryOptions[0]}
          components={{ DropdownIndicator: null, IndicatorSeparator: null }}
          isSearchable={false}
          onChange={handleCategoryChange}
          isCategorySelected={isCategorySelected}

        />
        </Styled.LIContainer>

        {/* 선택된 파일 목록 표시 */}
        {uploadedFiles.length > 0 && (
        <Styled.FileContainer>
          <FileTable uploadedFiles={uploadedFiles} deleteFile={deleteFile} />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
            multiple // 다중 파일 업로드 지원
          />


        </Styled.FileContainer>
      )}
      
    </Styled.EditorHeader>

      <Styled.Toolbar>
        <button onClick={() => applyMarkdownSyntax('heading1')}><img src='/img/toolbar_H1.svg' alt="Heading 1"/></button>
        <button onClick={() => applyMarkdownSyntax('heading2')}><img src='/img/toolbar_H2.svg' alt="Heading 2"/></button>
        <button onClick={() => applyMarkdownSyntax('heading3')}><img src='/img/toolbar_H3.svg' alt="Heading 3"/></button>
        <span>|</span>
        <button onClick={() => applyMarkdownSyntax('bold')}><img src='/img/toolbar_bold.svg' alt="Bold"/></button>
        <button onClick={() => applyMarkdownSyntax('italic')}><img src='/img/toolbar_italic.svg' alt="Italic"/></button>
        <button onClick={() => applyMarkdownSyntax('strikethrough')}><img src='/img/toolbar_strikethrough.svg' alt="Strikethrough"/></button>
        <span>|</span>
        <button onClick={() => applyMarkdownSyntax('blockquote')}><img src='/img/toolbar_blockquote.svg' alt="Blockquote"/></button>
        <button onClick={() => fileInputRef.current?.click()}><img src='/img/toolbar_attach.svg' alt="Attach" /></button>
          <input
            type="file"
            ref={fileInputRef} // 첨부파일 업로드용 ref
            style={{ display: 'none' }}
            multiple
            onChange={handleFileChange} // 모든 형식 허용
          />
        <button onClick={() => applyMarkdownSyntax('link')}><img src='/img/toolbar_link.svg' alt="Link"/></button>
        <button onClick={() => imageInputRef.current?.click()}><img src='/img/toolbar_image.svg' alt="Image" /></button>
          <input
            type="file"
            ref={imageInputRef} // 이미지 업로드용 ref
            style={{ display: 'none' }}
            onChange={handleImageUpload}
            accept="image/*"
          />
        <button onClick={() => applyMarkdownSyntax('code')}><img src='/img/toolbar_code.svg' alt="Code"/></button>
      </Styled.Toolbar>

      <Styled.EditorContainer ref={editorRef} />

      {isModalOpen && (
        <Styled.ModalContent ref={modalRef} style={{ position: 'absolute', top: modalPosition.top, left: modalPosition.left }}>
          <p>링크 등록</p>
          <Styled.UrlContainer>
          <input
            type="text"
            placeholder="URL을 입력하세요"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
          />
          <button onClick={handleLinkInsert}>확인</button>
          </Styled.UrlContainer>
        </Styled.ModalContent>
      )}
    </Styled.InnerEditorContainer> 
      <Styled.BtnContainer>
      <Styled.ExitButton onClick={handleExit}>← 나가기</Styled.ExitButton>
      <Styled.BtnContainer2>
      {!boardId && ( // boardId가 없을 때만 표시
      <Styled.DraftButton>
        {/* 임시저장 클릭 영역 */}
        <Styled.DraftSaveArea onClick={handleSaveDraft}>
          임시저장
        </Styled.DraftSaveArea>
        {/* 임시저장 카운트 클릭 영역 */}
        <Styled.DraftCountArea onClick={toggleDraftModal}>
          | {draftCount}
        </Styled.DraftCountArea>
      </Styled.DraftButton>
    )}
      <Styled.Btn onClick={handlePostSubmit}>
        {boardId ? '수정하기' : '등록하기'}
      </Styled.Btn>
      </Styled.BtnContainer2>
      </Styled.BtnContainer>

      <DraftModal
        isDraftModalOpen={isDraftModalOpen}
        toggleDraftModal={toggleDraftModal}
        drafts={drafts}
        onSelectDraft={handleSelectDraft}
      />
    </Styled.LeftContainer>
  );
}
