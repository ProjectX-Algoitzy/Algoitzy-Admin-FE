import request, { ACCESS_TOKEN } from './request';
import axios from 'axios';

export const checkToken = async () => {
  try {
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    const requestData = {
      accessToken: token,
    };

    const response = await axios.post(
      'https://admin-dev.kau-koala.com/member/check-token',
      requestData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("토큰 체크 성공", response);
    const isTokenValid = response.data.result; 
    return isTokenValid;
  } catch (error) {
    console.error('토큰 체크 에러:', error);
    return false; 
  }
};
