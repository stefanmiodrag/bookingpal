import styled from "styled-components";

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h4 {
    margin: 0;
}

p {
    margin-bottom: 4px;
}
`

export const Item = styled.div`
padding: 17px 24px;
border-bottom: 1px solid #D8E1E8;

:last-child {
    border-bottom: none;
}
`