import axios from 'axios';
import { getAlertFunction } from '../Common/Alert/alertSingleton';

export const ACCESS_TOKEN = 'accessToken';

const excludedPathPatterns = [
  /^\/board(?:\?.*)?$/, // 검색 쿼리 있는 게시물 조회 api 경로 
  /^\/institution(?:\?.*)?$/, // 검색 쿼리 있는 기관 조회 api 경로 
  /^\/problem(?:\?.*)?$/, // 검색 쿼리 있는 문제집 조회 api 경로 
  /^\/member\/user(?:\?.*)?$/, // 검색 쿼리 있는 게시물 조회 api 경로 
];

// Authorization에 토큰 자동으로 설정
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  // 환경 변수를 사용하여 API 주소 설정 'https://admin-dev.kau-koala.com',
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

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    const isExcludedPath = excludedPathPatterns.some((pattern) => pattern.test(config.url));

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
    const isExcludedPath = excludedPathPatterns.some((pattern) => pattern.test(response.config.url));

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
        case 'NOTICE':
          await alert(message);
          break;
        case 'TOKEN_EXPIRED':
          window.localStorage.clear();
          window.location.href = '/login';
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