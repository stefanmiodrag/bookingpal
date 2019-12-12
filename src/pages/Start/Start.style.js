import styled from "styled-components";

export const FullColumn = styled.div`
width: 100%;
margin-bottom: 24px;
`

export const MediumColumn = styled.div`
width: 70%;

@media (max-width: 961px) {
    width: 100%;
}
`

export const SmallColumn = styled.div`
width: 30%;

@media (max-width: 1281px) {
    width: 50%;
}

@media (max-width: 961px) {
    width: 100%;
}
`