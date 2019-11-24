import styled from "styled-components";
import { Card } from "@blueprintjs/core";

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 14px;

h4 {
    margin: 0;
}
`

export const Container = styled(Card)`
padding: 0px !important;
`