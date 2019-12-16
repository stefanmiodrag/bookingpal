import styled from "styled-components";

export const Wrapper = styled.div`
display: inline-block;
border-radius: 3px;
box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
background-color: white;
height: 40px;
vertical-align: baseline;
line-height: 28px;

span {
    display: inline-block;
    width: 14px;
    text-align: center;
    font-size: 16px;
}

input {
    outline: 0;
    border: 0;
    box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
    background: transparent;
    width: 40px;
    height: 40px;
    padding: 0;
    text-align: center;
    color: #343C47;
    transition: box-shadow .1s cubic-bezier(.4,1,.75,.9);

    &:first-child {
        border-radius: 3px 0 0 3px;
    }

    &:last-child {
        border-radius: 0 3px 3px 0;
    }

    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
        -webkit-appearance: none; 
    }

    :focus {
        box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3);
    }
}
`