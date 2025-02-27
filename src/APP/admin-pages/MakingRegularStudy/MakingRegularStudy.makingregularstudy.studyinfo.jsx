import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import * as itemS from "./Styled/MakingRegularStudy.makingregularstudy.studyinfo.styles";
import QuillPractice from "../MakingCurriculum/MakingCurriculum.makingcurriculum.quilleditor";
import request from "../../Api/request";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../Common/Alert/AlertContext";

export default function MakingRegularStudyStudyinfo() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const { alert } = useContext(AlertContext);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("multipartFileList", file);

      const response = await request.post("/s3", formData);
      if (response.isSuccess) {
        console.log("업로드된 이미지 URL:", response.result[0]);
        return response.result[0];
      } else {
        throw new Error("이미지 업로드 실패");
      }
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      throw error;
    }
  };

  const FileDropzone = ({ onFileUpload }) => {
    const allowedExtensions = ["jpg", "jpeg", "png", "gif", "svg"];
    const fileInputRef = useRef(null);

    // 파일 선택 버튼 클릭 시 발생할 동작
    const handleClick = () => {
      fileInputRef.current.click();
    };

    // 드래그 앤 드롭 처리
    const onDrop = useCallback(
      async (acceptedFiles) => {
        if (acceptedFiles.length === 0) {
          alert("허용되지 않은 파일 형식입니다.");
          return;
        }

        const uploadedFile = acceptedFiles[0];
        const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
          alert(`${fileExtension} 확장자는 허용되지 않습니다.`);
          return;
        }

        try {
          const url = await uploadImage(uploadedFile);
          onFileUpload(url);
        } catch (error) {
          console.error("파일 업로드 중 오류 발생", error);
        }
      },
      [onFileUpload]
    );

    // react-dropzone 훅
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: allowedExtensions.map((ext) => `image/${ext}`).join(","),
    });

    return (
      <itemS.FileUploadContainer
        {...getRootProps()}
        className={isDragActive ? "dragActive" : ""}
        onClick={handleClick}
      >
        <input {...getInputProps()} />
        {!imageUrl && (
          <p>
            이미지 드래그 혹은{" "}
            <itemS.HighlightText>파일 업로드</itemS.HighlightText>
          </p>
        )}
        {/* 파일 선택을 위한 숨겨진 input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={allowedExtensions.map((ext) => `image/${ext}`).join(",")}
          style={{ display: "none" }}
          onChange={async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
              const url = await uploadImage(file);
              onFileUpload(url);
            } catch (error) {
              console.error("파일 업로드 중 오류 발생", error);
            }
          }}
        />
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
      content: content,
    };

    try {
      const response = await request.post("/study", requestData);
      console.log(response);

      if (response["isSuccess"]) {
        navigate("/regularstudylist");
      }
    } catch (error) {
      console.error("정규스터디 저장과정에서 에러", error);
    }
  };

  return (
    <itemS.BackGroundContainer>
      <itemS.Container>
        <itemS.StyledPageName>새로운 스터디</itemS.StyledPageName>
        <itemS.ContentContainer>
          <itemS.LittleContainer>
            <itemS.StyledTitle>스터디 대표 이미지</itemS.StyledTitle>
            <FileDropzone onFileUpload={setImageUrl} />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>이름</itemS.StyledTitle>
            <itemS.StyledInput
              placeholder="이름을 입력해주세요"
              type="text"
              value={name}
              onChange={onChangeName}
            />
          </itemS.LittleContainer>

          <itemS.LittleContainer>
            <itemS.StyledTitle>내용</itemS.StyledTitle>
            <QuillPractice setContent={setContent} />
          </itemS.LittleContainer>
        </itemS.ContentContainer>
      </itemS.Container>

      <itemS.BtnContainer>
        <itemS.BtnContainer2>
          {/* <itemS.ArbitaryBtn>임시저장</itemS.ArbitaryBtn> */}
          <itemS.Btn onClick={handleSave}>생성하기</itemS.Btn>
        </itemS.BtnContainer2>
      </itemS.BtnContainer>
    </itemS.BackGroundContainer>
  );
}
