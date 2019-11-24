import React from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";

import * as style from "./AppointmentSmall.style";

const AppointmentSmall = props => (
    <style.Item>
        <style.Header>
            <div>
                <p>Sun 24, Nov 2019, 21:30</p>
                <h4 className="bp3-heading">Haircut</h4>
            </div>

            <Button icon="more" />
        </style.Header>
    </style.Item>
);

export default AppointmentSmall;