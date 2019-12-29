import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset} 

  @import url('https://fonts.googleapis.com/css?family=Exo:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  html {
    font-size: 14px;
  }

  body {
    background-color: #F4F5F8;
    color: #222;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.45;
  }

  #page {
    transition: margin-left 0.2s ease;

    &.is-auth {
      margin-left: 200px;
    }

    &.not-auth {
      max-width: 900px;
      width: 90%;
      margin: 0 auto;
    }
  }

  #App.small-nav #page {
    margin-left: 60px;
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

  p {
    margin-bottom: 1.25em;
  }

  a {
    color: #4cc600;
  }

  .bold {
    font-weight: 700;
  }

  .thin {
    font-weight: 300;
  }

  .light-color {
    color: #555d75;
  }

  .semibold, strong {
    font-weight: 500;
  }
  
  small, .text_small {
    font-size: 0.8em;
  }
  
  .input, .DayPickerInput input {
    outline: none;
    vertical-align: baseline;
    border: none;
    border-radius: 3px;
    box-shadow: rgb(200, 205, 208) 0px 0px 0px 1px inset;
    background: white;
    height: 40px;
    padding: 5px 14px;
    line-height: 40px;
    color: #182026;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    transition: box-shadow .1s cubic-bezier(.4,1,.75,.9);
    appearance: none;
    
    :focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3),
      inset 0 1px 1px rgba(16,22,26,.2);
      }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-20px);}
    60% {transform: translateY(-10px);}
  } 
`

export default GlobalStyle;