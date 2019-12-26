import styled from "styled-components";

export const Container = styled.div`
margin: 30px 0;
`

export const Header = styled.div`
color: white;
background-color: #155778;
border-radius: 2px 2px 0 0;
padding: 24px;
min-height: 100px;
display: flex;
align-items: center;

p {
    margin: 0;
    max-width: 500px;
    opacity: 0.8;
}
`

export const Card = styled.div`
border-radius: 0 0 2px 2px;
padding: 24px;
background-color: white;
border-radius: 2px;
border-bottom: 1px solid #D9DEE4;
border-left: 1px solid #D9DEE4;
border-right: 1px solid #D9DEE4;
`

export const Title = styled.div`
background-color: white;
color: #667584;
padding: 8px 24px;
border-left: 1px solid #D9DEE4;
border-right: 1px solid #D9DEE4;
border-bottom: 1px solid #D9DEE4;
font-weight: 500;
letter-spacing: 0.2px;
`

export const Item = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: flex-end;

p {
    max-width: 600px;
}

&:not(:last-child) {
    border-bottom: 1px dotted #D9DEE4;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
`

export const Details = styled.div`
margin-bottom: 14px;

span + span {
    margin-left: 14px;
}
`