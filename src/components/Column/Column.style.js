import styled from "styled-components";

const SET_WIDTH = width => {
    switch (width) {
        case "large":
            return "100%";
        case "medium":
            return "59%";
        case "small":
            return "39%";
        default:
            return "100%";
    }
};


export const Column = styled.div`
width:  ${({ width }) => SET_WIDTH(width)};
margin-bottom: ${props => props.mb ? `${props.mb}px` : ""};

@media screen and (max-width: 900px) {
    width: 100%;
}
`