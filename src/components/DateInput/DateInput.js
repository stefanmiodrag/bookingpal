import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';

import {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

import * as style from "./DateInput.style";

const DateInput = (props) => {
    const today = new Date();

    return (
        <style.DatePicker>
            <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(today)}`}
                onDayChange={props.handleChange}
                selectedDays={props.selected}
                inputProps={{ name: props.name }}
                dayPickerProps={{
                    showOutsideDays: true,
                    disabledDays: {
                        before: today
                    },
                }}
            />
        </style.DatePicker>
    );
};

export default DateInput;