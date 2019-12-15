import styled from "styled-components";

export const SideNav = styled.nav`
background-color: #333;
position: fixed;
left: 0;
height: 100vh;
width: ${props => props.toggle ? "52px" : "180px"};
transition: width, ease-in-out 200ms;

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
        justify-content:  ${props => props.toggle ? "center" : "left"};
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
        height: 32px;
        padding: 0 2px;
        border-radius: ${props => props.toggle ? "8px" : "3px"};
        opacity: 0.8;

        svg {
            opacity: 0.64;
            padding-right: 3px;
            fill: white;
        }

        &:hover {
            opacity: 1;
            
            svg {
               opacity: 1;
            }
        }
        
        &.active {
            background-color: #494949;
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
color: #7b7b7b;
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
padding: 0 15px;
min-height: 70px;
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