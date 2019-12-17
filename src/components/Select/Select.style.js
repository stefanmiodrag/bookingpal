import styled from "styled-components";

export const Select = styled.select`
border: none;
vertical-align: baseline;
cursor: pointer;
text-align: left;
font-size: inherit;
box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
background-color: white;
border-radius: 3px;
height: 40px;
padding: 5px 14px;
-moz-appearance: none;
-webkit-appearance: none;
box-sizing: border-box;

:focus {
    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3), 
      inset 0 1px 1px rgba(16,22,26,.2);
}
`