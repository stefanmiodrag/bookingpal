import styled from "styled-components";

export const SideNav = styled.nav`
background-color: #212B39;
position: fixed;
left: 0;
height: 100vh;
width: ${props => props.toggle ? "76px" : "300px"};
transition: width, ease-in-out 200ms;

.name {
    display: ${props => props.toggle ? "none" : "block"};
}

li {
    a {
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        margin: 10px 0;
        padding: 14px;
        border-radius: 2px;

        svg {
            margin-right: 10px;
            fill: #596475;
        }

        &:hover {
            background-color: #2a3546;
            
            svg {
                fill: white;
            }
        }
        
        &.active {
            background-color: #177EE6;
            
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
padding: 14px;
height: 100%;
`

export const List = styled.ul`
border-bottom: 1px solid;
border-bottom-color: #343E50;
padding: 10px 0;
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
        fill: #58687D !important;
    }
}
`

export const Header = styled.div`
color: white;
margin-bottom: 24px;
height: 40px;
display: ${props => props.toggle ? "none" : "flex"};
align-items: center;
justify-content: center;
font-size: 21px;
font-weight: 700;
`