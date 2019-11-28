import styled from "styled-components";

const TOASTER_BACKGROUND = theme => {
    switch (theme) {
        case "success":
            return "#00BB28";
        case "danger":
            return "#db3737";
        default:
            return "#00BB28";
    }
};

export const Toaster = styled.div`
position: relative;
padding: 14px;
top: 1em;
border-radius: 3px;
background-color: ${({ theme }) => TOASTER_BACKGROUND(theme)};
font-weight: 500;
color: white;
min-width: 300px;
max-width: 500px;
transform: ${props => props.visible ? "translateY(0px)" : "translateY(-100px)"};
opacity: ${props => props.visible ? "1" : "0"};
transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
pointer-events: all;
`

export const Container = styled.div`
position: fixed;
right: 0;
z-index: 9999;
left: 0;
top: 0;
overflow: hidden;
pointer-events: none;
padding: 0 20px 20px;
`

export const Button = styled.button`
all: unset;
cursor: pointer;
width: 30px;
height: 30px;
background-color: hsla(0,0%,100%,.15);
border-radius: 3px;
transition: background-color 0.2s ease;

:hover {
    background-color: hsla(0,0%,100%,.3);
    transition: background-color 0.2s ease;
}

:active {
    background-color: hsla(0,0%,100%,.4);
}

svg {
    display: flex;
    fill: white;
    margin: 0 auto;
}
`