
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000000;
    --black-light: #00000040;
    --white: #FFFFFF;
    --gray: #BDB9B9;
    --white-gray: #FFFFFFCC;
    --gray-white: #F0F1F8;
    --purple-light: #545871;
    --purple-dark: #131836;
    --purple: #3D4AAB;
    --dark: #00000040;
    --blue-light: #92acc7;
    --blue-dark: #242456;
    --blue-extreme-dark: #0E0E30;
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