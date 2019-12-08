import React from "react";

import * as style from "./Select.style";

const Select = props => (
    <style.Select onChange={props.onChange} name={props.name} value={props.value}>
        {props.options.map(option =>
            <option value={option.value}>{option.label}</option>
        )}
    </style.Select>
);

export default Select;