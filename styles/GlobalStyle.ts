import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --bg: #f0f6ff;
  --gra-button: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  --grey: #666666;
  --grey-10: #cfcfcf;
  --gray-20: #ccd5e3;
  --gray-60: #9fa6b2;
  --grey-70: #676767;
  --gray-100: #373740;
  --grey-light: #f5f5f5;
  --the-julge-black: #111322;
  --primary-color: #6d6afe;
  --red: #ff5b56;
  --stroke-light: #dee2e6;
}

* {
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 62.5%;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}
`;

export default GlobalStyles;
