import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset} 

  @import url('https://fonts.googleapis.com/css?family=Exo:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  html {
    font-size: 14px;
  }

  body {
    background-color: #f8fafc;
    color: #343C47;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.45;
  }

  #page {
    margin-left: 250px;
    transition: margin-left 0.2s ease;
  }

  #App.small-nav #page {
    margin-left: 76px;
  }
  
  p {
    margin-bottom: 1.25em;
  }
  
  h1, h2, h3, h4, h5 {
    margin-bottom: 0.65rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.15;
  }
  
  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }
  
  h2 {
    font-size: 2.441em;
  }
  
  h3 {
    font-size: 1.953em;
  }
  
  h4 {
    font-size: 1.563em;
  }
  
  h5 {
    font-size: 1.25em;
  }

  .bold {
    font-weight: 700;
  }

  .semibold {
    font-weight: 500;
  }
  
  small, .text_small {
    font-size: 0.8em;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-20px);}
    60% {transform: translateY(-10px);}
} 
`

export default GlobalStyle;