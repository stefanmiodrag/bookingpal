import styled from "styled-components";

export const Page = styled.div`
position: absolute;
width: 100%;
height: 100%;
left: 0;
color: white;
background-color: #1D1D2E;
`

export const Container = styled.div`
margin-left: 10%;
width: 90%;
margin: 0 auto;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`

export const Card = styled.div`
border-radius: 8px;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 
    0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
box-sizing: border-box;
background-color: white;
padding: 24px;
width: 100%;
border-top: none;
border-top: 6px solid #ffa400;
`

export const Form = styled.div`
width: 100%;
max-width: 400px;
margin: 0 auto;
`

export const Content = styled.div`
margin-bottom: 24px;

p {
    color: #7c7c94;
}
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

export const Footer = styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 3px;
margin-top: 24px;
text-decoration: none;
color: inherit;
background-color: #303046;
padding: 8px 14px;

a {
    color: inherit;
    text-decoration: none;
}
`