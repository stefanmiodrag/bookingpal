import React from "react";
import { Icon } from "@blueprintjs/core";
import moment from "moment";

import * as style from "./DayPicker.style";

const DayPicker = () => {

    return (
        <>
            <style.Container>
                <style.Button><Icon icon="chevron-left" /></style.Button>
                <style.Button>Today</style.Button>
                <style.Button><Icon icon="chevron-right" /></style.Button>
            </style.Container>
        </>
    );
};

export default DayPicker;
