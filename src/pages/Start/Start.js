import React from "react";

import { dayOfTheWeek } from "../../helpers";
import { UpcomingAppointments, EstimateIncome } from "../../components";
import { Nav } from "../../modules";

import * as style from "./Start.style";

const Start = () => (
    <>
        <style.Container>
            <style.FullColumn>
                <h3 className="bp3-heading">Hi Richard, happy {dayOfTheWeek()}! <span role="img" aria-label="wave">👋</span></h3>
                <p className="bp3-text-large">Here's what's happening today.</p>
            </style.FullColumn>

            <style.MediumColumn>
                <UpcomingAppointments />
            </style.MediumColumn>
        </style.Container>
    </>
);

export default Start;