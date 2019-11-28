import styled from "styled-components";

export const FullColumn = styled.div`
width: 100%;
margin-bottom: 24px;
`

export const Container = styled.div`
margin-left: 10%;
width: 90%;
margin: 0 auto;

@media (max-width: 480px) {
margin-left: none;
}
   
`

export const Form = styled.div`
width: 100%;
max-width: 400px;
`

export const Mark = styled.span`
display: block;
font-family: "Exo", sans-serif;
font-weight: 700;
font-size: 28px;
font-weight: 700;
margin-bottom: 21px;
`

export const Content = styled.div`
margin-top: 42px;
`

export const Fieldset = styled.fieldset`
input {
    width: 100%;
    margin-bottom: 14px;
}
`