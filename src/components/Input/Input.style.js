import styled from "styled-components";

export const Input = styled.input`
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
`