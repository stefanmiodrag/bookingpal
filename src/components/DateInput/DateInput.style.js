import styled from "styled-components";

export const DatePicker = styled.div`
.DayPickerInput-OverlayWrapper {
    top: 14px;
}

.DayPickerInput-Overlay {
    background-color: #f5f5f5;
    box-shadow: 0 0 0 1px rgba(16,22,26,.1), 
        0 2px 4px rgba(16,22,26,.2), 0 8px 24px rgba(16,22,26,.2);
}

.DayPicker-wrapper {
    padding-bottom: 0px;
}

.DayPicker-Caption {
    background: white;
    padding: 14px;
    margin-bottom: 0px;
    border-bottom: 1px solid rgba(16,22,26,.15);

    > div {
        font-size: 16px;
        color: #222;
        font-weight: 400;
    }
}

.DayPicker-NavButton {
    border-radius: 3px;

    &:hover {
       
    }
}

.DayPicker-Month {
    margin-top: 0px;
    margin: 0px;
}

.DayPicker-NavBar {
    position: absolute;
    right: 15px;
    top: 10px;
}

.DayPicker-NavButton {
    position: inherit;
    top: auto;
    right: 0px;
    left: auto;
    margin-top: 0px;
    height: 30px;
    width: 30px;
}

.DayPicker-NavButton--prev {
    margin-right: 35px;
    box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
    background-size: 10px 10px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='8' viewBox='0 0 5 8' class='css-529vwo eqc546g0'%3E%3Cpath d='M2.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L2.414 4z'%3E%3C/path%3E%3C/svg%3E");
}

.DayPicker-NavButton--next {
    box-shadow: rgb(230, 230, 230) 0px 0px 0px 1px inset;
    background-size: 10px 10px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='8' viewBox='0 0 5 8' class='css-529vwo eqc546g0'%3E%3Cpath d='M2.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L2.414 4z'%3E%3C/path%3E%3C/svg%3E");
    transform: rotate(180deg);
}

.DayPicker-Weekday {
    padding: 10px;
    font-weight: 400;
    color: rgb(159, 159, 159);
    font-size: 12px;
}

.DayPicker-Day--today {
    background-color: #e6e6e6 !important;
    color: #222;
    padding: 7px;
    font-weight: 400;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled)
:not(.DayPicker-Day--outside) {
    background-color: #4cc600;
    color: white;
    font-weight: 600;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled)
:not(.DayPicker-Day--outside):hover {
    background-color: #4cb50d;
}

.DayPicker-Body {
    box-shadow: 0 1px 0 hsla(0,0%,50.2%,.2);
}

.DayPicker-Day {
    max-height: 40px;
    max-width: 40px;
    min-width: 40px;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 0px;
    line-height: 1;
    border: 1px solid #e6e6e6;
    background-color: white;

    &[aria-disabled="true"], &.DayPicker-Day--outside {
        color: #DCE0E0;
    }
}

.DayPicker:not(.DayPicker--interactionDisabled) 
.DayPicker-Day:not(.DayPicker-Day--disabled)
:not(.DayPicker-Day--selected)
:not(.DayPicker-Day--outside):hover {
    background-color: #f4f5f8;
    color: #222;
}
`