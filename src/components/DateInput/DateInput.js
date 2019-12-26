import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';

import {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

import * as style from "./DateInput.style";

const DateInput = (props) => (
    <style.DatePicker>
        <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
            onDayChange={props.handleChange}
            selectedDays={props.selected}
            showOutsideDays
        />
    </style.DatePicker>
);

export default DateInput;