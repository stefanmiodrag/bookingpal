import styled from "styled-components";

export const SideNav = styled.nav`
background-color: #283142;
position: fixed;
left: 0;
height: 100vh;
width: ${props => props.toggle ? "76px" : "250px"};
transition: width, ease-in-out 200ms;

.name {
    display: ${props => props.toggle ? "none" : "block"};
}

li {
    a {
        display: flex;
        align-items: center;
        color: #C3D0E0;
        text-decoration: none;
        padding: 20px;
        border-left: 3px solid;
        border-left-color: transparent;

        svg {
            margin-right: 10px;
            fill: #C3D0E0;
        }

        &:hover {
            background-color: #344258;
            color: white;
            
            svg {
                fill: white;
            }
        }
        
        &.active {
            background-color: #212832;
            border-left: 3px solid;
            border-left-color: #02A7FF;
            color: white;
            
            svg {
                fill: white;
            }
        }
    }
    
    span {
        display: inherit;
        margin: ${props => props.toggle ? "0 auto" : "inherit"};
    }
}
`

export const Container = styled.div`
height: 100%;
`

export const List = styled.ul`
border-bottom: 1px solid;
border-bottom-color: #343E50;
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
        fill: #C3D0E0;
    }
}
`

export const Header = styled.div`
font-family: "Exo", sans-serif;
font-weight: 700;
font-size: 21px;
font-weight: 700;
color: white;
border-bottom: 1px solid;
border-bottom-color: #343E50;
padding: 0 20px;
min-height: 70px;
display: ${props => props.toggle ? "none" : "flex"};
align-items: center;
`