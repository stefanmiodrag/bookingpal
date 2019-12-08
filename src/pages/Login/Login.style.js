import styled from "styled-components";

export const Container = styled.div`
margin-left: 10%;
width: 90%;
margin: 0 auto;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`

export const Form = styled.div`
width: 100%;
max-width: 400px;
margin: 0 auto;
`

export const Mark = styled.span`
display: block;
font-family: "Exo", sans-serif;
font-weight: 700;
font-size: 1.563em;
margin-bottom: 24px;
`

export const Content = styled.div`
margin-bottom: 24px;
`

export const Fieldset = styled.fieldset`
input {
    width: 100%;
    margin-bottom: 14px;
}
`

export const Password = styled.div`
position: relative;
`

export const ShowPassword = styled.div`
position: absolute;
cursor: pointer;
top: 1px;
right: 1px;
height: 38px;
width: 40px;
justify-content: center;
display: flex;
align-items: center;
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, 
rgba(255,255,255,1) 26%, rgba(255,255,255,1) 100%);

svg {
    display: flex;
    fill: #343C47;
}
`

export const Footer = styled.button`
all: unset;
box-sizing: border-box;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 14px;
width: 100%;
text-decoration: none;
border-radius: 3px;
color: inherit;
background-color: #edf1f5;
margin-top: 24px;

span {
    display: flex;
}

p {
    margin-bottom: 0px;
}
`