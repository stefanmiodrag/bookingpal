import styled from "styled-components";

export const Container = styled.div`
display: flex;
`

export const Button = styled.button`
all: unset;
cursor: pointer;
box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
min-height: 40px;
padding: 0 10px;
background-color: white;

&:nth-child(2) {
    min-width: 80px;
    text-align: center;
    border-top: 1px solid rgb(230, 230, 230);
    border-bottom: 1px solid rgb(230, 230, 230);
    box-shadow: none;
}

&:first-of-type {
    border-radius: 3px 0 0 3px;
}

&:last-of-type {
    border-radius: 0 3px 3px 0;
}

&:focus {
    background-color: rgba(177, 177, 177, 0.07);

    span {
        fill: #222;
    }
}

&:hover {
    span {
        fill: #222;
    }
}

span {
    display: flex;
    align-items: center;
    fill: #7b7b7b;
}
`