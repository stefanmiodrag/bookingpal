import styled from "styled-components";

export const FullColumn = styled.div`
width: 100%;
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

export const Divider = styled.div`
border-bottom: 1px solid;
border-bottom-color: #E1E8ED;
margin-bottom: 20px;
`

export const ButtonWrapper = styled.div`
margin: 20px 0;
text-align: right;
`

export const CardWrapper = styled.div`
margin-bottom: 20px;
`

export const Form = styled.form`
`

export const Users = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

p {
    margin: 0;
}
`