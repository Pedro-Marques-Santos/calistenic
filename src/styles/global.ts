
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000000;
    --white: #FFFFFF;
    --gray: #BDB9B9;
  }

  body {
    font-family: 'Poppins';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;