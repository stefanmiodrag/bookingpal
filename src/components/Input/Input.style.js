import styled from "styled-components";

export const Input = styled.input`
outline: none;
border: none;
border-radius: 3px;
box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0), 
inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
background: white;
min-height: 40px;
height: 100%;
padding: 5px 14px;
vertical-align: middle;
line-height: 30px;
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