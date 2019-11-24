import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h4, p {
    margin: 0;
}
`

export const Item = styled(Link)`
display: block;
padding: 14px 24px;
border-bottom: 1px solid #D8E1E8;
color: inherit;

&:hover {
    text-decoration: none;
    background-color: #F6F9FE;
}
`