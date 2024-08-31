import request, { ACCESS_TOKEN } from './request';

export const checkToken = async () => {
  try {
    const requestData = {
      accessToken: `${window.localStorage.getItem(ACCESS_TOKEN)}`,
    };
    const response = await request.post('https://admin-dev.kau-koala.com/member/check-token', requestData);
    console.log("토큰 체크 성공", response);
    const isTokenValid = response.result;
    return isTokenValid;
  } catch (error) {
    console.error('토큰 체크 에러:', error);
    return false; // return false if there's an error
  }
};
