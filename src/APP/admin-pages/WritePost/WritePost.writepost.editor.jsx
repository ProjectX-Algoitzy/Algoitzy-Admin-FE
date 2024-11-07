import React, { useState, useEffect, useRef } from 'react';
import { EditorState, EditorSelection } from '@codemirror/state';
import { EditorView, keymap, placeholder } from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import { defaultKeymap } from '@codemirror/commands';
import * as Styled from './Styled/WritePost.writepost.editor.styles';


const gradeOptions = [
  {value: "공지사항", label:"공지사항"},
  {value: "자유", label:"자유"},
  {value: "질문", label:"질문"},
  {value: "정보 공유", label:"정보 공유"},
  {value: "홍보", label:"홍보"},
]

const gradePlaceholderText = '게시판 선택';


export default function Editor({
  title,
  setTitle,
  setMarkdownContent,
}) {
  const editorRef = useRef(null);
  const imageInputRef = useRef(null); // 이미지 파일 입력창을 제어할 useRef
  const fileInputRef = useRef(null); // 일반 파일 입력창을 제어할 useRef
  const modalRef = useRef(null);
  const [editorView, setEditorView] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [linkURL, setLinkURL] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]); // 선택된 파일들 상태
  const [isGradeSelected, setisGradeSelected] = useState(false); 
  const [grade, setGrade] = useState(gradeOptions[0]);

  // 학년 선택 change event
  const handleGradeChange = (selectedOption) => {
    const { value } = selectedOption;
    setGrade(value);
    // setGradeColor('#555555');
    setisGradeSelected(true);
  }

  const resizeTextarea = (e) => {
    e.target.style.height = 'auto'; // 높이 초기화
    e.target.style.height = `${e.target.scrollHeight}px`; // 내용에 맞게 높이 조정
  };

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: '',
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageURL = reader.result;
      const markdownImage = `<img src="${imageURL}" alt="" style="width:100%;" />`;

      editorView.dispatch(
        editorView.state.changeByRange((range) => ({
          changes: { from: range.from, to: range.to, insert: markdownImage },
          range: EditorSelection.cursor(range.from + markdownImage.length),
        }))
      );
    };
    reader.readAsDataURL(file);
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
  };

  return (
    <Styled.LeftContainer>
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
        <Styled.GradeSelect
          options={gradeOptions}
          placeholder={gradePlaceholderText}
          // defaultValue={gradeOptions[0]}
          components={{ DropdownIndicator: null, IndicatorSeparator: null }}
          isSearchable={false}
          onChange={handleGradeChange}
          isGradeSelected={isGradeSelected}

        />
        </Styled.LIContainer>

        {/* 선택된 파일 목록 표시 */}
        {selectedFiles.length > 0 && (
        <Styled.FileContainer>
          <Styled.FileLabel>첨부파일 :</Styled.FileLabel>
          <Styled.FileList>
            {selectedFiles.map((file, index) => (
              <Styled.FileItem key={index}>{file.name}</Styled.FileItem>
            ))}
          </Styled.FileList>
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

      <Styled.BtnContainer>
      <Styled.ExitButton>← 나가기</Styled.ExitButton>
        <Styled.BtnContainer2>
          <Styled.ArbitaryBtn>임시저장</Styled.ArbitaryBtn>
          <Styled.Btn>등록하기</Styled.Btn> 
        </Styled.BtnContainer2>
      </Styled.BtnContainer>
    </Styled.LeftContainer>
  );
}
