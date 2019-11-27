import React from "react";

import { dayOfTheWeek } from "../../helpers";
import { UpcomingAppointments, ButtonLink } from "../../components";

import * as style from "./Start.style";

const Start = () => (
    <>
        <style.FullColumn>
            <h3 className="semibold">Hi Richard, happy {dayOfTheWeek()}! <span role="img" aria-label="wave">👋</span></h3>
            <p>Here's what's happening today.</p>

            <ButtonLink path="/booking/new" label="New booking" theme="success" />
        </style.FullColumn>

        <style.SmallColumn>
            <UpcomingAppointments />
        </style.SmallColumn>
    </>
);

export default Start;