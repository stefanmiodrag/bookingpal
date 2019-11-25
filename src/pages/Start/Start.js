import React from "react";

import { dayOfTheWeek } from "../../helpers";
import { UpcomingAppointments, Button } from "../../components";

import * as style from "./Start.style";

const Start = () => (
    <>
        <style.Container>
            <style.FullColumn>
                <h3 className="semibold">Hi Richard, happy {dayOfTheWeek()}! <span role="img" aria-label="wave">👋</span></h3>
                <p>Here's what's happening today.</p>

                <Button label="New booking" theme="success" />
            </style.FullColumn>

            <style.MediumColumn>
                <UpcomingAppointments />
            </style.MediumColumn>
        </style.Container>
    </>
);

export default Start;