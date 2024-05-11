import axios from 'axios';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

//앞으로 토큰은 여기서 사용하시면 됩니다.
// Authorization 에 토큰 자동으로 들어가도록 설정하였습니다.
const request = axios.create({
  //baseURL: 'http://3.39.20.129:8181',
  baseURL: 'https://admin-dev.kau-koala.com',
  headers: {
    withCredentials: true,
    transformRequest: true,
    Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// request.js 파일에서 refreshToken 내보내기 추가
// export const refreshToken = async () => {
//   try {
//     const response = await axios.post('/api/auth/reissue', {
//       accessToken: localStorage.getItem(ACCESS_TOKEN),
//       refreshToken: localStorage.getItem(REFRESH_TOKEN),
//     });
//     const newAccessToken = response.data.accessToken;
//     localStorage.setItem('accessToken', newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     console.error('토큰 갱신 에러:', error);
//     throw error;
//   }
// };

export default request;
