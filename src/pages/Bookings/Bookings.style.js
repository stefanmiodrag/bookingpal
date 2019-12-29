import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 20px;
`

export const Item = styled.div`
&:not(:last-child) {
    margin-bottom: 20px;
}
`