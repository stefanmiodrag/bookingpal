import styled from "styled-components";

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 14px;

h4 {
    margin: 0;
}
`

export const InnerContainer = styled.div`
margin-left: 40px;
`

export const Hours = styled.div`
position: absolute;
top: 40px;
width: 40px;
border-right: 1px solid #CEDBDF;

span {
    display: block;
    margin-bottom: 40px;
}
`

export const Dates = styled.div`
display: flex;

div {
    box-sizing: border-box;
    background: white;
    padding: 10px 14px;
    min-height: 40px;
    border-right: 1px solid #CEDBDF;
    border-bottom: 1px solid #CEDBDF;
    min-width: 20%;
    width: 100%;

    &:first-child {
        border-left: 1px solid #CEDBDF;
    }

    &:last-child {
        border-right: none;
    }
}
`

export const Lanes = styled.div`
display: flex;
width: 100%;
height: 100%;
`

export const Lane = styled.div`
box-sizing: border-box;
min-width: 20%;
width: 100%;
min-height: 700px;
height: 100%;
background-color: white;
border-right: 1px solid #CEDBDF;

&:last-child {
    border-right: none;
}

&:hover {
    background-color: #f5fbff;
}
`

export const Container = styled.div`
position: relative;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
border-radius: 3px;
padding: 14px;
`

export const Event = styled.div`
display: block;
margin-bottom: 14px;
`

export const Card = styled.div`
background-color: #02A7FF;
border-radius: 3px;
padding: 14px;
height: ${props => `${props.width}px`};
max-width: 140px;
`

export const Date = styled.span`
background-color: white;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
border-radius: 3px;
display: inline-block;
padding: 4px 8px;
margin: 8px 1px;
font-weight: 500;
font-size: 12px;
`