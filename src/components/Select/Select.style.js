import styled from "styled-components";

export const Select = styled.select`
border: none;
vertical-align: baseline;
cursor: pointer;
text-align: left;
box-shadow: inset 0 0 0 1px rgba(16,22,26,.2), 
   inset 0 -1px 0 rgba(16,22,26,.1);
background-color: #f5f8fa;
background-image: linear-gradient(180deg,
   hsla(0,0%,100%,.8), hsla(0,0%,100%,0));
color: #182026;
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