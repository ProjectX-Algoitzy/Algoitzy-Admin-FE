import React, { useState, useEffect, useRef } from 'react';
import * as itemS from './Styled/MakingCurriculum.makingcurriculum.quilleditor.styles';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';
import request from '../../Api/request';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
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
];

export default function QuillPractice({ setContent, content }) {
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

    quill.on('text-change', () => {
      handleTextChange();
      setContent(quill.root.innerHTML);
      console.log(quill.root.innerHTML);
    });

    // Add click event listener to the editor
    quill.container.addEventListener('click', handleClick);

    return () => {
      quill.off('text-change', handleTextChange);
      quill.container.removeEventListener('click', handleClick);
    };
  }, [setContent]);

  const handleClick = (event) => {
    const quill = quillRef.current.getEditor();
    if (event.target.tagName === 'VIDEO') {
      const videoURL = event.target.src;
      window.open(videoURL, '_blank');
    }
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('multipartFileList', file);

      const response = await request.post('/s3', formData);
      if (response.isSuccess) {
        return response.result[0]; // 반환된 이미지 URL
      } else {
        throw new Error('이미지 업로드 실패');
      }
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
      throw error;
    }
  };

  const modules = React.useMemo(
    () => ({
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video'],
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean']
        ],
        handlers: {
          image: () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            
            input.onchange = async () => {
              const file = input.files[0];
              const imageUrl = await uploadImage(file);
              
              // 이미지 URL을 Quill 에디터에 삽입
              const range = quillRef.current.getEditor().getSelection(true);
              quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl);
            };
          },
        },
        ImageResize: {
          modules: ['Resize']
        },
        customLinkHandler: true
      },
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
     },
    }),
    []
  );

  return (
    <itemS.Container>
        <itemS.EditorWrapper>
            <ReactQuill 
              ref={quillRef}
              modules={modules}
              {...(content && { value: content })} // content가 있을 때만 value 설정
              onChange={setContent} // 에디터 내용이 변경될 때 setContent 호출
              formats={formats}
            />
        </itemS.EditorWrapper>
    </itemS.Container>
  )
}