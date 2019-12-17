import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
align-items: center;
background-color: white;
min-height: 66px;
border-bottom: 1px solid;
border-bottom-color: #D9DEE4;
`

export const Container = styled.div`
display: flex;
align-items: center;
margin: 0 20px;
`

export const Title = styled.h1`
font-size: 1.15em;
margin-right: 14px;
margin-bottom: 4px;
`

export const Breadcrumb = styled.div`
background-color: white;
padding: 14px 20px;
border-bottom: 1px solid;
border-bottom-color: #D9DEE4;

ul {
    display: inline-flex;
}

li {
    display: inline-flex;

    a {
        color: #a3a3a3;
        text-decoration: none;

        &:hover {
            color: #4cc600;
            text-decoration: underline;
        }
    }

    span {
        margin-left: 4px;
        display: flex;
        align-items: center;

        svg {
            fill: #a3a3a3;
        }
    }
}

li:last-child {
    span svg {
        display: none;
    }
}

li:not(:last-child) {
    margin-right: 4px;
}
`