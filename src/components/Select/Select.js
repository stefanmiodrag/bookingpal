import React from "react";

const Select = props => (
    <select>
        {props.options.map(option =>
            <option value={option.value}>{option.label}</option>
        )};
    </select>
);

export default Select;