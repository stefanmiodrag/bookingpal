import styled from "styled-components";

const TAG_BORDER = theme => {
    switch (theme) {
        case "primary":
            return "#CED9E0";
        case "secondary":
            return "#5C7080";
        default:
            return "#CED9E0";
    }
};

const TAG_COLOR = theme => {
    switch (theme) {
        case "primary":
            return "#5C7080";
        case "secondary":
            return "#CED9E0";
        default:
            return "#5C7080";
    }
};

export const Tag = styled.div`
border-radius: 3px;
font-size: 0.75rem;
text-align: center;
line-height: 18px;
height: 24px;
display: inline-flex;
align-items: center;
color: ${({ theme }) => TAG_COLOR(theme)};
border: 1px solid ${({ theme }) => TAG_BORDER(theme)};
font-weight: 500;
letter-spacing: 0.6px;
padding: 0 7px;
`