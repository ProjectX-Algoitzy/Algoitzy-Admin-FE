import request, { ACCESS_TOKEN } from './request';

import axios from 'axios';

export const refreshToken = async () => {
  try {
    const requestData = {
      accessToken: `${window.localStorage.getItem(ACCESS_TOKEN)}`,
    };
    const response = await axios.post('https://admin-dev.kau-koala.com/member/refresh-token', requestData);
    console.log("리프레시 성공 response", response);
    localStorage.setItem(ACCESS_TOKEN, response.data.result.accessToken);
    request.defaults.headers.Authorization = `Bearer ${response.data.result.accessToken}`;
  } catch (error) {
    console.error('토큰 갱신 에러:', error);
    throw error;
  }
};