import styled from "styled-components";

export const SideNav = styled.nav`
background: linear-gradient(101.85deg, #192231 0%, #28354B 78.52%);
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
        pointer-events: none;

        a {
            color: #7e919e;
        }

        svg {
            fill: #7e919e;
        }
    }

    &:last-child {
        margin-bottom: 18px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: ${props => props.toggle ? "center" : "left"};
        color: #bdc8d0;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
        height: ${props => props.toggle ? "40px" : "32px"};
        padding: 0 2px;
        border-radius: 3px;
        transition: color .2s ease;

        svg {
            padding-right: ${props => props.toggle ? "0px" : "3px"};
            fill: #bdc8d0;
        }

        &:hover {
            color: white;
            transition: color .2s ease;
            
            svg {
                fill: white;
            }
        }
        
        &.active {
            background-color: #0c9ee6;
            color: white;
            
            svg {
                fill: white;
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
border-bottom: 1px solid;
border-bottom-color: #151E2D;
box-shadow: 0px 1px 0px #39475d;
margin-bottom: 18px;

:first-of-type {
    margin-top: ${props => props.toggle ? "18px" : "0px"};
}
`

export const Title = styled.span`
display: ${props => props.toggle ? "none" : "block"};
font-size: 11px;
font-weight: 500;
text-transform: uppercase;
color: #9dabb5;
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
min-height: 66px;
padding: 0 15px;
display: ${props => props.toggle ? "none" : "flex"};
align-items: center;
justify-content: space-between;
border-bottom: 1px solid;
border-bottom-color: #151E2D;
box-shadow: 0px 1px 0px #39475d;
margin-bottom: 18px;

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