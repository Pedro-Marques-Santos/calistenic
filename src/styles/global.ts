import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000000;
    --black-light: #00000040;
    --black-main:  #27323a;
    --white: #FFFFFF;
    --gray: #BDB9B9;
    --gray-fundo: #e9e9e9;
    --gray-black: #474747;
    --white-gray: #FFFFFFCC;
    --gray-white: #F0F1F8;
    --gray-light: #c0c0c0;
    --gray-border: #808080;
    --gray-dark: #232931;
    --purple-light: #545871;
    --purple-dark: #131836;
    --purple: #3D4AAB;
    --dark: #00000040;
    --blue-light: #92acc7;
    --blue-dark: #242456;
    --blue-extreme-dark: #0E0E30;
    --blue: rgba(0, 56, 255, 0.42);
    --red: rgba(255, 0, 0, 0.42);
    --yellow: #ffb500;
    --overlay: rgba(0,0,0,0.5);
  }

  body {
    font-family: 'Poppins';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .slick-next:before, .slick-prev:before {
    font-size: 28px;
    line-height: 1;
    color: var(--yellow);
    opacity: 0.88;
  }

  .react-modal-overlay {
    background: var(--overlay);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%; 
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    background: var(--white);
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 19px;
    border: 0;
    background: transparent;
  }

  button {
    cursor: pointer;
  }

`;
