import { createGlobalStyle } from "styled-components";


const GlobalStyle=createGlobalStyle`

  :root{
    color-brand-1: orange;
    color-brand-2: yellow;
    color-black: #100F0F;
    color-transparent: rgba(217, 217, 217, 0.36);
    color-success: #7CC39C;
    color-warning: #FBEA85;
    color-error: #EA524F;
  }

  body,html{
    margin:0px;
    padding:0px;
    width: 100vw;
    height: 100vh;
    background-color: #141414;
  }


  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: white;
  }

  li,ul,ol{
    list-style:none
  }

  button {
    cursor: pointer;
    color:black;
    background-color: orange;
    padding:8px;
    border-radius:5px;
    border-style:none
  }

  #root {
    margin: 0 auto;
    padding:0;
    text-align: center;
  }

`


export {GlobalStyle}