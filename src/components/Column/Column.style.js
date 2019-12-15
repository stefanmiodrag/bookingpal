import styled from "styled-components";

const SET_WIDTH = width => {
    switch (width) {
        case "large":
            return "100%";
        case "medium":
            return "70%";
        case "small":
            return "40%";
        default:
            return "100%";
    }
};


export const Column = styled.div`
width:  ${({ width }) => SET_WIDTH(width)};

@media (max-width: 1381px) {
    width: 70%;
}

@media (max-width: 961px) {
    width: 100%;
}
`