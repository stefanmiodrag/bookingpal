import styled from "styled-components";

export const SideNav = styled.nav`
background-color: #203543;
position: fixed;
left: 0;
height: 100vh;
width: ${props => props.toggle ? "76px" : "250px"};
transition: width, ease-in-out 200ms;

.name {
    display: ${props => props.toggle ? "none" : "block"};
    margin-left: 10px;
}

li {
    a {
        display: flex;
        align-items: center;
        justify-content:  ${props => props.toggle ? "center" : "left"};
        color: #E7E9EB;
        text-decoration: none;
        padding: 20px;
        border-left: 3px solid;
        border-left-color: transparent;

        svg {
            padding-right: 3px;
            fill: #E7E9EB;
        }

        &:hover {
            background-color: #2A4150;
            color: white;
            
            svg {
                fill: white;
            }
        }
        
        &.active {
            background-color: #151f25;
            border-left: 3px solid;
            border-left-color: #00ad9e;
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
border-bottom-color: #2a4354;
`

export const Toggle = styled.div`
position: absolute;
right: 0px;
bottom: 20px;

button {
    all: unset;
    cursor: pointer;
    width: ${props => props.toggle ? "76px" : "40px"};
    height: 40px;
    text-align: ${props => props.toggle ? "center" : "inherit"};
    
    svg {
        fill: #E7E9EB;
    }
}
`

export const Header = styled.div`
color: white;
border-bottom: 1px solid;
border-bottom-color: #2a4354;
padding: 0 20px;
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