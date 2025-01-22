import axios from "axios";
import { getAlertFunction } from "../Common/Alert/alertSingleton";

export const ACCESS_TOKEN = "accessToken";

const excludedPathPatterns = [
  // /^\/board(?:\?.*)?$/, // 검색 쿼리 있는 게시물 조회 api 경로
  // /^\/institution(?:\?.*)?$/, // 검색 쿼리 있는 기관 조회 api 경로
  /^\/problem(?:\?.*)?$/, // 검색 쿼리 있는 문제집 조회 api 경로
  // /^\/member\/user(?:\?.*)?$/, // 검색 쿼리 있는 게시물 조회 api 경로
];

// Authorization에 토큰 자동으로 설정
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 환경 변수를 사용하여 API 주소 설정 'https://admin-dev.kau-koala.com',
  headers: {
    withCredentials: true,
    transformRequest: true,
    Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

// LoadingContext를 사용해서 로딩 상태 제어 (로딩 상태 함수는 호출 시점에서 정의)
let loadingFunctions = { showLoading: () => {}, hideLoading: () => {} };

export const setLoadingFunctions = (show, hide) => {
  loadingFunctions = { showLoading: show, hideLoading: hide };
};

// 전체 화면 이미지 관리 함수
let imgOverlay = null;

const showFullScreenImage = (imageUrl) => {
  if (!imgOverlay) {
    imgOverlay = document.createElement("div");
    imgOverlay.style.position = "fixed";
    imgOverlay.style.top = 0;
    imgOverlay.style.left = 0;
    imgOverlay.style.width = "100%";
    imgOverlay.style.height = "100%";
    imgOverlay.style.backgroundImage = `url(${imageUrl})`;
    imgOverlay.style.backgroundSize = "cover";
    imgOverlay.style.backgroundPosition = "center";
    imgOverlay.style.zIndex = 9999;
    imgOverlay.style.cursor = "pointer";

    // // 이미지 제거를 위한 클릭 이벤트
    // imgOverlay.onclick = removeFullScreenImage;

    document.body.appendChild(imgOverlay);

    // 뒤로가기로 URL이 변경되면 이미지 제거
    window.addEventListener("popstate", removeFullScreenImage);
  }
};

const removeFullScreenImage = () => {
  if (imgOverlay) {
    document.body.removeChild(imgOverlay);
    imgOverlay = null;

    // popstate 이벤트 리스너 제거
    window.removeEventListener("popstate", removeFullScreenImage);
  }
};

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    const isExcludedPath = excludedPathPatterns.some((pattern) =>
      pattern.test(config.url)
    );

    // 요청 시작 시 로딩 상태 표시
    if (!isExcludedPath) {
      loadingFunctions.showLoading();
    }
    return config;
  },
  (error) => {
    loadingFunctions.hideLoading(); // 요청 실패 시 로딩 상태 숨김
    return Promise.reject(error);
  }
);

// 응답 인터셉터
request.interceptors.response.use(
  (response) => {
    const isExcludedPath = excludedPathPatterns.some((pattern) =>
      pattern.test(response.config.url)
    );

    // 응답이 오면 로딩 상태 숨김
    if (!isExcludedPath) {
      loadingFunctions.hideLoading();
    }
    return response.data;
  },
  async (error) => {
    loadingFunctions.hideLoading(); // 에러 발생 시 로딩 상태 숨김

    const alert = getAlertFunction(); // 알림 함수 가져오기

    if (error.response && error.response.data) {
      const { data, status } = error.response;
      const code = data.code;
      const message = data.message;

      switch (code) {
        case "NOTICE":
          await alert(message);
          break;
        case "TOKEN_EXPIRED":
          window.localStorage.clear();
          window.location.href = "/login";
          break;
        case "401_PAGE":
          showFullScreenImage(
            "https://kau-koala.s3.ap-northeast-2.amazonaws.com/dev/4a99767b-9163-48.png"
          );
          break;
        case "404_PAGE":
          showFullScreenImage(
            "https://kau-koala.s3.ap-northeast-2.amazonaws.com/dev/b4441a49-9a46-45.png"
          );
          break;
        default:
          console.error(`Unexpected error: ${message}`, error);
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default request;
