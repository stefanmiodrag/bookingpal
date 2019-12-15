import React, { useState, useEffect } from "react";

import * as style from "./Spinner.style";

const Spinner = (props) => {
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        var timer;

        timer = setTimeout(
            () => setSpinner(true),
            props.delay
        )

        return function cleanup() {
            clearTimeout(timer);
        };
    });

    if (spinner) {
        return (
            <style.Container>
                <style.Spinner />
            </style.Container>
        );
    } return null;
};

export default Spinner;