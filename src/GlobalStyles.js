import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;

    @media (min-width: 2500px) {
      font-size: 24px;
    }

    @media (min-width: 2000px) and (max-width: 2499px) {
      font-size: 22px;
    }

    @media (min-width: 1800px) and (max-width: 1999px) {
      font-size: 20px;
    }

    @media (min-width: 1600px) and (max-width: 1799px) {
      font-size: 18px;
    }

    @media (min-width: 1400px) and (max-width: 1599px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) and (max-width: 1399px) {
      font-size: 15px;
    }

    @media (min-width: 1000px) and (max-width: 1199px) {
      font-size: 14px;
    }

    @media (min-width: 900px) and (max-width: 999px) {
      font-size: 13px;
    }

    @media (min-width: 768px) and (max-width: 899px) {
      font-size: 12px;
    }

    @media (min-width: 600px) and (max-width: 767px) {
      font-size: 11px;
    }

    @media (min-width: 480px) and (max-width: 599px) {
      font-size: 10px;
    }

    @media (max-width: 479px) {
      font-size: 8px;
    }
  }

  body {
    font-family: 'Pretendard', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
