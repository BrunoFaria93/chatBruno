import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #242526;
    overflow: hidden !important;
  }

`;

export default GlobalStyle;
