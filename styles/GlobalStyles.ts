import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f2f5f5;
    --body: #4A4A4A;
    --grey: #afafaf;
    --dk-grey: #666666;
    --lt-grey: #e2e1e1;
    --black: #222;
    --border-color: #cbccce;
  }
  * {
    box-sizing: border-box;
  }
  html, body, #root, #__next {
    height: 100%;
  }
  html {
    font-size: 16px;
  }
  body {
    background-color: var(--background);
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
    color: var(--body);
  }
  .uppercase {
    text-transform: uppercase;
  }
`;

export default GlobalStyles;