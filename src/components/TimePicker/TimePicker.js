import React from "react";

import * as style from "./TimerPicker.style";

const onKeyUp = e => {
    if (e.target.value > 99) {
        e.target.value = '';
    } else if (e.target.value < 0) {
        e.target.value = '';
    };
};

const TimePicker = props => (
    <style.Wrapper>
        <input
            type="number"
            name={`${props.name}Hour`}
            onKeyUp={onKeyUp}
            onChange={props.onChange}
            placeholder="00"
            value={props.value}
        />
        <span>:</span>
        <input
            type="number"
            name={`${props.name}Minutes`}
            onKeyUp={onKeyUp}
            onChange={props.onChange}
            placeholder="00"
            value={props.value}
        />
    </style.Wrapper>
);

export default TimePicker;