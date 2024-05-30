import React, { useState, useEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';

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
          ['link', 'image', 'video'],
          [{ align: [] }, { color: [] }, { background: [] }],
          ['clean']
        ],
        ImageResize: {
          modules: ['Resize']
        },
        customLinkHandler: true
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

// import React, { useState, useEffect, useRef } from 'react';
// import ReactQuill, { Quill } from 'react-quill';
// import styled from 'styled-components';
// import 'react-quill/dist/quill.snow.css';
// import { ImageActions } from '@xeger/quill-image-actions';
// import { ImageFormats } from '@xeger/quill-image-formats';

// Quill.register('modules/imageActions', ImageActions);
// Quill.register('modules/imageFormats', ImageFormats);

// // Styled Components
// const Container = styled.div` 
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 161px;  
// `;

// const EditorWrapper = styled.div`
//   width: 800px;
//   height: 600px;

//   .ql-editor a {
//     cursor: pointer;
//     color: blue; /* Optional: link color */
//     text-decoration: underline; /* Optional: link underline */
//   }
// `;

// const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'image',
//     'align',
//     'color',
//     'background',
//     'float',
//     'height',
//     'width'
//   ];

// // Registering a custom module for link handling
// Quill.register('modules/customLinkHandler', function(quill, options) {
//   quill.container.addEventListener('click', function(event) {
//     if (event.target.tagName === 'A') {
//       const href = event.target.getAttribute('href');
//       window.open(href, '_blank');
//     }
//   });
// });

// export default function QuillPractice() {
//   const [content, setContent] = useState("");
//   console.log(content);
//   const [title, setTitle] = useState("");
//   const quillRef = useRef(null);
//   let isHandlingTextChange = false;

//   useEffect(() => {
//     const quill = quillRef.current.getEditor();

//     const handleTextChange = () => {
//       if (isHandlingTextChange) return;
//       isHandlingTextChange = true;

//       const urlRegex = /(https?:\/\/[^\s]+)/g;
//       const text = quill.getText();
//       const matches = text.match(urlRegex);
      
//       if (matches && matches.length > 0) {
//         matches.forEach(url => {
//           const index = text.indexOf(url);
//           quill.formatText(index, url.length, 'link', url);
//         });
//       }

//       isHandlingTextChange = false;
//     };

//     quill.on('text-change', handleTextChange);

//     return () => {
//       quill.off('text-change', handleTextChange);
//     };
//   }, []);

//    const modules = React.useMemo(
//     () => ({
//       imageActions: {},
//       imageFormats: {},
//       // 툴바 설정
//       toolbar: {
//         container: [
//           [{ header: [1, 2, 3, 4, 5, false] }], // header 설정
//           ['bold', 'italic', 'underline', 'strike', 'blockquote'], // 굵기, 기울기, 밑줄 등 부가 tool 설정
//           [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], // 리스트, 인덴트 설정
//           ['link', 'image'], // 링크, 이미지, 비디오 업로드 설정
//           [{ align: [] }, { color: [] }, { background: [] }], // 정렬, 글자 색, 글자 배경색 설정
//           ['clean'] // toolbar 설정 초기화 설정
//         ],

//         // 이미지 크기 조절
//         ImageResize: {
//           modules: ['Resize']
//         },
//         customLinkHandler: true  // Custom link handler 모듈 활성화
//       }
//     }),
//     []
//   );

//   const handleTitleChange = (e) => {
//     setTitle(e.currentTarget.value);
//   };

//   return (
//     <Container>
//       <h1>Quill Example</h1>
//       <div>
//         <label htmlFor="title">제목</label>
//         <input id="title" type="text" onChange={handleTitleChange} />
//         <EditorWrapper>
//           <ReactQuill
//             ref={quillRef}
//             modules={modules}
//             value={content}
//             onChange={setContent}
//             formats={formats}
//           />
//         </EditorWrapper>
//       </div>
//     </Container>
//   )
// }