import styled from "styled-components";

const BUTTON_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "transparent";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#4bc800";
        default:
            return "transparent";
    }
};

const BUTTON_COLOR = theme => {
    switch (theme) {
        case "primary":
            return "#343C47";
        case "disabled":
            return "#6b7482";
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
            return "#4cb50d";
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
            return "#3c9804";
        default:
            return "transparent";
    }
};

export const Button = styled.button`
all: unset;
cursor: pointer;
text-align: center;
color: ${({ theme }) => BUTTON_COLOR(theme)};
background-color: ${({ theme }) => BUTTON_BACKGROUND(theme)};
box-shadow: ${props => !props.minimal ?
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)" : "none"};
border-radius: 3px;
box-sizing: border-box;
padding: 5px 14px;
min-width: 30px;
height: 100%;
min-height: 40px;
transition: background-color 0.2s ease;

&:hover {
    background-color: ${({ theme }) => BUTTON_HOVER_BACKGROUND(theme)};
    transition: background-color 0.2s ease;
}

&:active, :focus {
    transform: translateY(1px);
    background-color: ${({ theme }) => BUTTON_ACTIVE_BACKGROUND(theme)};
}

&:disabled {
    cursor: not-allowed;
    box-shadow: none;
}
`

export const Label = styled.span`
display: flex;
align-items: center;

span {
    display: flex;
    align-items: center;
    margin-left: 4px;
}
`