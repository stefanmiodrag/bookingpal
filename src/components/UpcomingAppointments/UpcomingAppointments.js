import React from "react";
import { Button, ButtonGroup, Card } from "@blueprintjs/core";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { AppointmentSmall } from "..";

import * as style from "./UpcomingAppointments.style";

const UpcomingAppointments = props => {
    return (
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

            <Card>
                <SimpleBar style={{ height: '320px' }}>
                    <AppointmentSmall />
                    <AppointmentSmall />
                    <AppointmentSmall />
                    <AppointmentSmall />
                    <AppointmentSmall />
                    <AppointmentSmall />
                </SimpleBar>
            </Card>
        </>
    );
};

export default UpcomingAppointments