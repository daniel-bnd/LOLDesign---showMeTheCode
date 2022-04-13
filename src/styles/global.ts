import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    color: #000;
    font: 400 1.6rem Roboto, sans-serif;
  }

  @media (max-width: 768px) {
    html {
      font-size: 40%;
    }
  }
`;
