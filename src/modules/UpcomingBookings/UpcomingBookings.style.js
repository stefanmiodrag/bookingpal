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

export const Title = styled.div`
display: flex;
justify-content: space-between;
`

export const Container = styled.div`
box-shadow: 0 0 0 1px rgba(16,22,26,.15),
    0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
height: 100%;
`

export const Item = styled.div`
background-color: gray;
color: white;
border-radius: 3px;
margin: 14px;
padding: 14px;

p {
    margin: 0;
}
`