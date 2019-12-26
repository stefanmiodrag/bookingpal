import styled from "styled-components";

export const Bar = styled.div`
height: 4px;
width: 100%;
background: #8282f5;
margin-bottom: 18px;
`

export const SideNav = styled.nav`
background-color: #1D1D2E;
position: fixed;
left: 0;
height: 100vh;
width: ${props => props.toggle ? "60px" : "200px"};
transition: width 0.2s ease;

.name {
    display: ${props => props.toggle ? "none" : "block"};
    margin-left: 5px;
}

.icon {
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
}

li {
    padding: 0 10px;
    list-style: none;
    margin-bottom: 8px;

    &.disabled {
        opacity: 0.64;
        pointer-events: none;
    }

    &:last-child {
        margin-bottom: 18px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: ${props => props.toggle ? "center" : "left"};
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
        height: ${props => props.toggle ? "40px" : "32px"};
        padding: 0 2px;
        border-radius: ${props => props.toggle ? "8px" : "3px"};
        opacity: 0.8;

        svg {
            opacity: 0.64;
            padding-right: ${props => props.toggle ? "0px" : "3px"};
            fill: white;
        }

        &:hover {
            opacity: 1;
            
            svg {
                opacity: 1;
            }
        }
        
        &.active {
            background-color: #303050;
            opacity: 1;
            
            svg {
                opacity: 1;
            }
        }
    }
    
    span {
        display: inherit;
    }
}
`

export const Container = styled.div`
height: 100%;
`

export const List = styled.ul`
border-bottom: ${props => props.toggle ? "1px solid" : "none"};
border-bottom-color: #424242;
margin-bottom: ${props => props.toggle ? "18px" : "0px"};
`

export const Title = styled.span`
display: ${props => props.toggle ? "none" : "block"};
font-size: 11px;
font-weight: 500;
text-transform: uppercase;
color: #8f8fa7;
letter-spacing: 0.4px;
margin-bottom: 8px;
padding: 0 18px;
`

export const Toggle = styled.div`
position: absolute;
right: 0px;
bottom: 20px;

button {
    all: unset;
    cursor: pointer;
    width: ${props => props.toggle ? "52px" : "30px"};
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        fill: #E7E9EB;
    }
}
`

export const Header = styled.div`
color: white;
margin-bottom: 25px;
padding: 0 15px;
display: ${props => props.toggle ? "none" : "flex"};
align-items: center;
justify-content: space-between;

button {
    all: unset;
    cursor: pointer;
    width: 28px;
    height: 28px;
    background-color: #2A4150;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
    border: 1px solid #3b5261;
    border-radius: 3px;

    :hover {
        background-color: #1d2a31;
        transition: background-color 0.2s ease;
    }
    
    svg {
        fill: #E7E9EB;
        display: flex;
    }
}
`

export const Mark = styled.div`
display: flex;
align-items: center;

span {
    font-family: "Exo", sans-serif;
    font-weight: 700;
    font-size: 21px;
    font-weight: 700;
    margin-right: 10px;
}
`

export const User = styled.button`
all: unset;
cursor: pointer;
bottom: 23px;
position: absolute;
padding: 0 10px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`

export const SlideOut = styled.div`
position: absolute;
right: -25px;
top: 50%;
height: 50px;
margin-top: -25px;
cursor: pointer;
padding: 15px;

&:hover  {
    &:before {
        transform: ${props => props.active ? "rotate(-25deg) translate3d(0px, 1px, 0px)"
        : "rotate(25deg) translate3d(0px, 1px, 0px)"};
    }
    
    &:after {
        transform: ${props => props.active ? "rotate(25deg) translate3d(0px, -1px, 0px)"
        : "rotate(-25deg) translate3d(0px, -1px, 0px)"};
    }
}

&:before {
    display: flex;
    content: "";
    height: 10px;
    width: 2px;
    transition: transform 0.3s ease 0s;
    background-color: #93a2b1;
}

&:after {
    display: flex;
    content: "";
    height: 10px;
    width: 2px;
    transition: transform 0.3s ease 0s;
    background-color: #93a2b1;
}
`