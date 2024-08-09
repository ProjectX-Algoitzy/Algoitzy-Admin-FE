import React, { useState, useEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

// Styled Components
const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 161px;  
`;

const EditorWrapper = styled.div`
  width: 800px;
  height: 600px;

  .ql-editor a {
    cursor: pointer;
    color: blue; /* Optional: link color */
    text-decoration: underline; /* Optional: link underline */
  }

  pre.ql-syntax {
    background-color: #f4f4f4; /* Optional: background color for code blocks */
    padding: 10px; /* Optional: padding for code blocks */
    border-radius: 5px; /* Optional: border radius for code blocks */
  }
`;

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
  'float',
  'height',
  'width',
  'video',
  'code-block',
];

export default function QuillPractice() {
  const [content, setContent] = useState("");
  console.log(content);
  const [title, setTitle] = useState("");
  const quillRef = useRef(null);
  let isHandlingTextChange = false;

  useEffect(() => {
    const quill = quillRef.current.getEditor();

    const handleTextChange = () => {
      if (isHandlingTextChange) return;
      isHandlingTextChange = true;

      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const text = quill.getText();
      const matches = text.match(urlRegex);
      
      if (matches && matches.length > 0) {
        matches.forEach(url => {
          const index = text.indexOf(url);
          quill.formatText(index, url.length, 'link', url);
        });
      }

      isHandlingTextChange = false;
    };

    quill.on('text-change', handleTextChange);

    // Add click event listener to the editor
    quill.container.addEventListener('click', handleClick);

    return () => {
      quill.off('text-change', handleTextChange);
      quill.container.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event) => {
    const quill = quillRef.current.getEditor();
    if (event.target.tagName === 'VIDEO') {
      const videoURL = event.target.src;
      window.open(videoURL, '_blank');
    }
  };

  const modules = React.useMemo(
    () => ({
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video', 'code-block'], // Added code-block button
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean']
        ],
        ImageResize: {
          modules: ['Resize']
        },
        customLinkHandler: true
      },
      syntax: {
        highlight: text => hljs.highlightAuto(text).value,
      },
      keyboard: {
        bindings: {
          tab: {
            key: 9,
            handler: function(range, context) {
              if (context.format['code-block']) {
                this.quill.editor.insertText(range.index, '  ', Quill.sources.USER);
                this.quill.editor.setSelection(range.index + 2, Quill.sources.SILENT);
              } else {
                this.quill.editor.format('indent', '+1', Quill.sources.USER);
              }
            }
          },
          shiftTab: {
            key: 9,
            shiftKey: true,
            handler: function(range, context) {
              if (context.format['code-block']) {
                const [line, offset] = this.quill.editor.getLine(range.index);
                const text = line.domNode.textContent;
                if (text.startsWith('  ')) {
                  this.quill.editor.deleteText(range.index - offset, 2, Quill.sources.USER);
                }
              } else {
                this.quill.editor.format('indent', '-1', Quill.sources.USER);
              }
            }
          }
        }
      }
    }),
    []
  );

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <Container>
      <h1>Quill Example</h1>
      <div>
        <label htmlFor="title">제목</label>
        <input id="title" type="text" onChange={handleTitleChange} />
        <EditorWrapper>
          <ReactQuill
            ref={quillRef}
            modules={modules}
            value={content}
            onChange={setContent}
            formats={formats}
          />
        </EditorWrapper>
      </div>
    </Container>
  )
}
