import styled from "styled-components";

export const Spinner = styled.div`
width: 36px;
height: 36px;
box-sizing: border-box;
border-style: solid;
border-color: rgb(205, 205, 205) transparent transparent rgb(205, 205, 205);
border-image: initial;
border-radius: 50%;
border-width: 3px;
animation: 400ms linear 0s infinite normal none running spinner;

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
}
`

export const Container = styled.div`
flex-direction: column;
min-height: 50px;
align-items: center;
justify-content: center;
z-index: 21;
top: 0px;
bottom: 0px;
right: 0px;
display: flex;
position: fixed;
left: 180px;
`