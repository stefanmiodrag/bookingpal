import styled from "styled-components";

export const Header = styled.div`
background-color: white;
border-bottom: 1px solid;
border-bottom-color: #D9DEE4;
padding: 14px;

p {
    margin: 0;
}
`

export const Container = styled.div`
box-shadow: 0 0 0 1px rgba(16,22,26,.15),
    0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
height: 100%;
`

export const Item = styled.div`
background-color: #FEFEFE;
color: #1B2428;

&:not(:last-child) {
    border-bottom: 1px solid #D9DEE4;
}

p {
    margin: 0;
}
`

export const ItemDate = styled.div`
background-color: #F3F9FD;
color: #0E72D0;
padding: 8px 14px;
border-bottom: 1px solid #D9DEE4;
`

export const ItemContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap-reverse;
padding: 17px 14px;
`

export const Tags = styled.div`
div + div {
    margin-left: 8px;
}
`