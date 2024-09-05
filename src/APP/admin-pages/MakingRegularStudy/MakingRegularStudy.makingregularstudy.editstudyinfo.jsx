import React, { useCallback, useEffect, useState } from 'react';
import * as itemS from './Styled/MakingRegularStudy.makingregularstudy.editstudyinfo.styles';
import QuillPractice from '../MakingCurriculum/MakingCurriculum.makingcurriculum.quilleditor';
import request from '../../Api/request';
import { useDropzone } from 'react-dropzone';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertContext } from '../../Common/Alert/AlertContext';
import { useContext } from 'react';
import { hardCodedContent } from './tmpContentData';

export default function MakingRegularStudyEditStudyInfo() {
    const { id } = useParams();  //해당 스터디의 id를 파라미터로 가져온다
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const { alert } = useContext(AlertContext);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            // 두 개의 API 호출을 동시에 수행
            const [infoResponse, homeResponse] = await Promise.all([
                request.get(`study/${id}/info`),
                request.get(`study/${id}/home`)
            ]);

            console.log("infoResponse: ", infoResponse);
            console.log("homeResponse: ", homeResponse);

            // 받은 데이터로 상태 업데이트
            setName(infoResponse.result.studyName);
            setImageUrl(infoResponse.result.profileUrl);
            setContent(homeResponse.result);
            // setContent(hardCodedContent);
            setLoading(false);
        } catch (error) {
            console.error('데이터 불러오기 오류:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const onChangeName = (e) => {
        if(name === "코딩테스트 기초반" || name === "코딩테스트 심화반") {
            alert("해당 정규스터디의 이름은 변경할 수 없습니다");
            return;
        }
        setName(e.target.value);
    };

    const uploadImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('multipartFileList', file);

            const response = await request.post('/s3', formData);
            if (response.isSuccess) {
                return response.result[0];
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
                setImageUrl(url);
                onFileUpload(url);
            } catch (error) {
                console.error('파일 업로드 중 오류가 발생했습니다.', error);
            }
        }, [onFileUpload]);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

        return (
            <itemS.FileUploadContainer {...getRootProps()} className={isDragActive ? 'dragActive' : ''}>
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

    const handleSave = async () => {
        const requestData = {
            profileUrl: imageUrl,
            name: name,
            content: content
        };

        try {
            const response = await request.patch(`/study/${id}`, requestData);
            if (response.isSuccess) {
                navigate(`/regularstudy/${id}`);
            }
        } catch (error) {
            console.error('정규스터디 수정 중 오류:', error);
        }
        
        // 에디터 수정을 위한 출력
        // console.log("########################## 에디터에서 보낸 데이터: ", requestData);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <itemS.BackGroundContainer>
            <itemS.Container>
                <itemS.StyledPageName>스터디 수정</itemS.StyledPageName>
                <itemS.ContentContainer>
                    <itemS.LittleContainer>
                        <itemS.StyledTitle>스터디 대표 이미지</itemS.StyledTitle>
                        <FileUpload onFileUpload={(url) => setImageUrl(url)} />
                    </itemS.LittleContainer>

                    <itemS.LittleContainer>
                        <itemS.StyledTitle>이름</itemS.StyledTitle>
                        <itemS.StyledInput placeholder='이름을 입력해주세요' type='text' value={name} onChange={onChangeName} />
                    </itemS.LittleContainer>

                    <itemS.LittleContainer>
                        <itemS.StyledTitle>내용</itemS.StyledTitle>
                        <QuillPractice setContent={setContent} content={content} />
                    </itemS.LittleContainer>
                </itemS.ContentContainer>
            </itemS.Container>

            <itemS.BtnContainer>
                <itemS.BtnContainer2>
                    {/* <itemS.ArbitaryBtn>임시저장</itemS.ArbitaryBtn> */}
                    <itemS.Btn onClick={handleSave}>저장하기</itemS.Btn>
                </itemS.BtnContainer2>
            </itemS.BtnContainer>
        </itemS.BackGroundContainer>
    );
}