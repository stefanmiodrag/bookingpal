import styled from "styled-components";

export const Loading = styled.div`
position: absolute;
background-color: #1D1D33;
width: 100%;
height: 100vh;
`

export const Spinner = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 18px;
height: 18px;
box-sizing: border-box;
border: solid 2px transparent;
border-top-color: #00FFFF;
border-left-color: #00FFFF;
border-radius: 50%;
animation: spinner .4s linear infinite;

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
}
`