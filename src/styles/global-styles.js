import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
  }

  &#root{
    width: 100%;
    display: grid;
    align-items: start;
    justify-items: center;
  }

  main{
    margin-top: 80px;
    width: 100%;
    max-width: 1300px;
    display: grid;
    grid-auto-rows: min-content;
    align-items: start;
    justify-items: center;
  }
`;