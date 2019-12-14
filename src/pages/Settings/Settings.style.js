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
width: 40%;

@media (max-width: 1381px) {
    width: 60%;
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

export const Buttons = styled.div`
margin: 20px 0;
text-align: right;

button + button {
    margin-left: 14px;
}
`

export const CardWrapper = styled.div`
margin-bottom: 20px;
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;

button {
    margin-bottom: 8px;
}

input {
    margin-right: 8px;
    margin-bottom: 8px;
}
`

export const Fieldset = styled.fieldset`
margin-bottom: 20px;
`

export const Users = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;

p {
    margin: 0;
}
`

export const Tags = styled.div`
div {
    margin-right: 8px;

    &:last-child {
        margin-right: 0;
    }
}
`