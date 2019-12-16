import styled from "styled-components";

export const Divider = styled.div`
border-bottom: 1px solid;
border-bottom-color: #E1E8ED;
padding-bottom: 24px;
margin-bottom: 24px;

h5 {
    margin: 0;
}
`

export const Buttons = styled.div`
text-align: right;

button + button {
    margin-left: 14px;
}
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: flex-start;
margin-bottom: 30px;

p {
    margin: 0;
    max-width: 600px;
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

export const Tags = styled.div`
div {
    margin-right: 8px;

    &:last-child {
        margin-right: 0;
    }
}
`

export const UserHeader = styled.div`
background-color: white;
border-radius: 3px 3px 0 0;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 
    0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
padding: 24px;

span {
    display: block;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.4px;    
    color: #7e8a96;
}
`

export const Users = styled.div`
background-color: white;
padding: 24px;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 
    0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
`

export const User = styled.li`
display: flex;
justify-content: space-between;
align-items: center;

&:not(:last-child) {
    border-bottom: 1px solid;
    border-bottom-color: #E1E8ED;
    margin-bottom: 14px;
    padding-bottom: 14px;
}
`