import React from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { AppointmentSmall } from "..";

import * as style from "./UpcomingAppointments.style";

const UpcomingAppointments = props => (
    <>
        <style.Header>
            <div>
                <h4 className="bp3-heading">Today</h4>
            </div>

            <ButtonGroup>
                <Button icon="chevron-left" />
                <Button icon="chevron-right" />
            </ButtonGroup>
        </style.Header>

        <style.Container>
            <SimpleBar style={{ height: '260px' }}>
                <AppointmentSmall />
                <AppointmentSmall />
                <AppointmentSmall />
                <AppointmentSmall />
            </SimpleBar>
        </style.Container>
    </>
);

export default UpcomingAppointments