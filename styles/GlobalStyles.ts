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
    --nba: #1a4284;
    --mlb: #b90d3c;
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

  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 40px auto 40px auto;

    a {
      &:first-of-type {
        margin-right: 30px;
      }
    }
  }

  .button {
    display: inline-block;
    text-decoration: none;
    height: 48px;
    line-height: 48px;
    max-width: 200px;
    width: 100%;
    width: 100%;
    color: #f2f5f5;
    background: var(--dk-grey);
    border-radius: 6px;
    transition: all 0.25s;

    &:hover {
      background: var(--body);
    }

    &__nba {
      background: var(--nba);
    }

    &__mlb {
      background: var(--mlb);
    }
  }
`;

export default GlobalStyles;