import React, { useCallback, useEffect, useState } from 'react'
import * as itemS from "./Styled/MakingRegularStudy.makingregularstudy.studyinfo.styles";
import QuillPractice from './MakingRegularStudy.makingregularstudy.quilleditor';
import request from '../../Api/request';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

export default function MakingRegularStudyStudyinfo() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const uploadImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('multipartFileList', file);

            const response = await request.post('/s3', formData);
            if (response.isSuccess) {
                console.log("업로드된 이미지 URL:", response.result[0]); // 콘솔에 URL 출력
                return response.result[0]; // 반환된 이미지 URL
            } else {
                throw new Error('이미지 업로드 실패');
            }
        } catch (error) {
            console.error('이미지 업로드 오류:', error);
            throw error;
        }
    };

    const FileUpload = ({ onFileUpload }) => {
        const onDrop = useCallback(async (acceptedFiles) => {
            const uploadedFile = acceptedFiles[0];
            try {
                const url = await uploadImage(uploadedFile);
                setImageUrl(url); // 이미지 URL을 상태에 저장
                onFileUpload(url); // 부모 컴포넌트에 URL 전달
            } catch (error) {
                console.error("파일 업로드 중 오류가 발생했습니다.", error);
            }
        }, [onFileUpload]);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

        return (
            <itemS.FileUploadContainer {...getRootProps()} className={isDragActive ? 'dragActive' : ''} >
                <input {...getInputProps()} />
                {!imageUrl && <p>이미지 드래그 혹은 <itemS.HighlightText>파일 업로드</itemS.HighlightText></p>}
                {imageUrl && (
                    <itemS.ImagePreview>
                        <img src={imageUrl} alt="Preview" />
                    </itemS.ImagePreview>
                )}
            </itemS.FileUploadContainer>
        );
    };

    const handleArbitarySave = async () => {
        const requestData = {
            profileUrl: imageUrl,
            name: name,
            content: content
        };

        try {
            const response = await request.post('/study', requestData)
            console.log(response);

            if (response["isSuccess"]) {
                alert("정규스터디 임시저장 완료")
            } 
        } catch (error) {
            console.error('정규스터디 저장과정에서 에러', error);
        }
    };

    const handleSave = () => {
        handleSave();
        // navigate('/makingregularstudycurriculum');
    }
  return (
    <itemS.BackGroundContainer>
        <itemS.Container>
            <itemS.StyledPageName>새로운 스터디</itemS.StyledPageName>
            <itemS.ContentContainer>
                <itemS.LittleContainer>
                    <itemS.StyledTitle>스터디 대표 이미지</itemS.StyledTitle>
                    <FileUpload onFileUpload={(url) => setImageUrl(url)}/>
                </itemS.LittleContainer>

                <itemS.LittleContainer>
                    <itemS.StyledTitle>이름</itemS.StyledTitle>
                    <itemS.StyledInput placeholder='이름을 입력해주세요' type='text' value={name} onChange={onChangeName} />
                </itemS.LittleContainer>

                <itemS.LittleContainer>
                    <itemS.StyledTitle>내용</itemS.StyledTitle>
                    <QuillPractice setContent={setContent} />
                </itemS.LittleContainer>
            </itemS.ContentContainer>
        </itemS.Container>

        <itemS.BtnContainer>
            <itemS.BtnContainer2>
                <itemS.ArbitaryBtn onClick={handleArbitarySave}>임시저장</itemS.ArbitaryBtn>
                <itemS.Btn onClick={handleSave}>생성하기</itemS.Btn>
            </itemS.BtnContainer2>
        </itemS.BtnContainer>
    </itemS.BackGroundContainer>
  )
}
