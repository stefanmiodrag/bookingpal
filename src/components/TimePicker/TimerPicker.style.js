import styled from "styled-components";

export const Wrapper = styled.div`
display: inline-block;
border-radius: 3px;
box-shadow: inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
background-color: white;
height: 40px;
padding: 0 1px;
vertical-align: middle;
line-height: 28px;

span {
    display: inline-block;
    width: 11px;
    text-align: center;
    color: #5c7080;
    font-size: 16px;
}

input {
    outline: 0;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(19,124,189,0), 0 0 0 0 rgba(19,124,189,0);
    background: transparent;
    width: 40px;
    height: 40px;
    padding: 0;
    text-align: center;
    color: #343C47;
    transition: box-shadow .1s cubic-bezier(.4,1,.75,.9);

    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
        -webkit-appearance: none; 
    }

    :focus {
        box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3);
    }
}
`