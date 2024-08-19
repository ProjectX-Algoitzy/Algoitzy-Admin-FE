import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 24px;
    box-sizing: border-box;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      font-size: 8px;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) and (max-width: 767px) {
      font-size: 12px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 16px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 20px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      font-size: 24px;
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
