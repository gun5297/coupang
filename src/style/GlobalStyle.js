import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --top-bar-color: #f0f0f0;
    --blue-main: #4285f4;
  }
  html{
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  input{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
