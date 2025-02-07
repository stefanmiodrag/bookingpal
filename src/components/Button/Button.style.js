import styled from "styled-components";

const BUTTON_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "linear-gradient(180deg, #FEFEFE 0%, #F7F7FA 100%)";
        case "secondary":
            return "#0c9ee6";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#4bc800";
        default:
            return "linear-gradient(180deg, #FEFEFE 0%, #F7F7FA 100%)";
    }
};

const BUTTON_COLOR = theme => {
    switch (theme) {
        case "primary":
            return "#343C47";
        case "secondary":
            return "#FFFFFF";
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
            return "linear-gradient(180deg, #FDFEFE 0%, #EEF0F4 100%)";
        case "secondary":
            return "#0b90d2";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#4cb50d";
        default:
            return "linear-gradient(180deg, #FDFEFE 0%, #EEF0F4 100%)";
    }
};

const BUTTON_ACTIVE_BACKGROUND = theme => {
    switch (theme) {
        case "primary":
            return "linear-gradient(180deg, #FDFDFE 0%, #EAEEF8 100%)";
        case "secondary":
            return "#098aca";
        case "disabled":
            return "#CBD1DB";
        case "success":
            return "#3c9804";
        default:
            return "linear-gradient(180deg, #FDFDFE 0%, #EAEEF8 100%)";
    }
};

export const Button = styled.button`
all: unset;
cursor: pointer;
vertical-align: bottom;
text-align: center;
color: ${({ theme }) => BUTTON_COLOR(theme)};
background: ${({ theme }) => BUTTON_BACKGROUND(theme)};
box-shadow: ${props => !props.minimal ?
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)" : "none"};
border-radius: 3px;
box-sizing: border-box;
padding: 5px 14px;
min-width: 30px;
height: 100%;
min-height: 40px;
transition: background 0.2s ease;

&:hover {
    background: ${({ theme }) => BUTTON_HOVER_BACKGROUND(theme)};
    transition: background 0.2s ease;
}

&:active, :focus {
    transform: translateY(1px);
    background: ${({ theme }) => BUTTON_ACTIVE_BACKGROUND(theme)};
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
    margin-left: ${props => props.label ? "4px" : "0px"};

    svg {
        fill: ${({ theme }) => BUTTON_COLOR(theme)};
    }
}
`