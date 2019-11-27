import styled from "styled-components";
import { Link } from "react-router-dom";

const BUTTON_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "transparent";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#00BB28";
        default:
            return "transparent";
    }
};

const BUTTON_COLOR = theme => {
    switch (theme) {
        case "primary":
            return "#343C47";
        case "disabled":
            return "#343C47";
        case "success":
            return "#FFFFFF";
        default:
            return "#343C47";
    }
};

const BUTTON_HOVER_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "#ebf1f5";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#00A412";
        default:
            return "transparent";
    }
};

const BUTTON_ACTIVE_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "#ebf1f5";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#008B0F";
        default:
            return "transparent";
    }
};

export const ButtonLink = styled(Link)`
all: unset;
cursor: pointer;
text-align: center;
color: ${({ theme }) => BUTTON_COLOR(theme)};
background-color: ${({ theme }) => BUTTON_BACKGROUND(theme)};
box-shadow: inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1);
border-radius: 3px;
padding: 5px 14px;
min-width: 30px;
display: inline-block;
min-height: 30px;
line-height: 30px;
transition: background-color 0.2s ease;

&:hover {
    background-color: ${({ theme }) => BUTTON_HOVER_BACKGROUND(theme)};
    transition: background-color 0.2s ease;
}

&:active {
    transform: translateY(1px);
    background-color: ${({ theme }) => BUTTON_ACTIVE_BACKGROUND(theme)};
}
`