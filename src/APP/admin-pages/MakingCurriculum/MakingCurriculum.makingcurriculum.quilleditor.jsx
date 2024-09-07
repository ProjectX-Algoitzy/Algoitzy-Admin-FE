import React, { useEffect, useRef } from 'react';
import * as itemS from './Styled/MakingCurriculum.makingcurriculum.quilleditor.styles';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import request from '../../Api/request';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

// Custom Video Blot using iframe
const Video = Quill.import('formats/video');
const Link = Quill.import('formats/link');

class CustomVideo extends Video {
  static create(value) {
    const node = super.create(value);
    
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('src', this.sanitize(value));
    iframe.setAttribute('style', 'height: 300px; width: 100%');
    node.appendChild(iframe);

    return node;
  }

  static sanitize(url) {
    // Transform YouTube URL to embed URL
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return Link.sanitize(url);
  }
}

CustomVideo.blotName = 'video';
CustomVideo.className = 'ql-video';
CustomVideo.tagName = 'DIV';

Quill.register('formats/video', CustomVideo);

// Custom Block Blot to handle unwanted <br> tags
const Block = Quill.import('blots/block');

class CustomBlock extends Block {
  static create(value) {
    let node = super.create(value);
    node.classList.add('custom-block');
    return node;
  }

  static formats(node) {
    return {};
  }
}

CustomBlock.blotName = 'custom-block';
CustomBlock.tagName = 'DIV'; // Or 'P' depending on your needs
Quill.register(CustomBlock);

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'code-block',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  // 'align',
  'color',
  'background',
  'float',
  'height',
  'width',
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
      const text = quill.root.innerText;
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
      const rawHTML = quill.root.innerHTML;
      setContent(rawHTML);
    });

    quill.container.addEventListener('click', handleClick);

    return () => {
      quill.off('text-change', handleTextChange);
      quill.container.removeEventListener('click', handleClick);
    };
  }, [setContent, quillRef]);

  const handleClick = (event) => {
    if (event.target.tagName === 'IFRAME') {
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
          ['bold', 'italic', 'underline', 'strike', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video'],
          // [{ align: [] }, { color: [] }, { background: [] }],
          [{ color: [] }, { background: [] }],
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

              const range = quillRef.current.getEditor().getSelection(true);
              quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl);
            };
          },
          video: () => {
            const videoURL = prompt("동영상의 URL을 넣어주세요");
            if (videoURL) {
              const range = quillRef.current.getEditor().getSelection(true);
              quillRef.current.getEditor().insertEmbed(range.index, 'video', videoURL);
            }
          },
        },
        ImageResize: {
          modules: ['Resize']
        }
      },
      clipboard: { //망할 개행 이슈 막아주는 소중한 곳이니까 없애면 안되용
        matchVisual: false
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
          {...(content && { value: content })}
          onChange={setContent}
          formats={formats}
        />
      </itemS.EditorWrapper>
    </itemS.Container>
  );
}
