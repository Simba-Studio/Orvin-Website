import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
