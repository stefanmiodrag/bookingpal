import React, { useEffect } from "react";
import * as style from "./NewBooking.style";

import {
    Card,
    Column,
    Spinner,
    TimePicker,
    Select,
    Label,
    Input,
    Button,
} from "../../components";

import { Nav, Container } from "../../modules";

const NewBooking = ({
    handleChange,
    onNewBookingClick,
    isFormValid,
    service,
    customer,
    startTime,
    services,
    getServices,
}) => {
    useEffect(() => {
        getServices();
    }, []);

    if (services) {
        return (
            <>
                <Nav
                    title="New Booking"
                    breadcrumbs={[
                        {
                            label: "Bookings",
                            path: "/booking"
                        },
                        {
                            label: "New Booking",
                            path: "/booking/new"
                        }
                    ]}
                />

                <Container>
                    <Column width="small">
                        <Card space={true}>
                            <form onSubmit={onNewBookingClick}>
                                <style.Fieldset>
                                    {services &&
                                        <Label label="Service">
                                            <Select
                                                name="service"
                                                value={service}
                                                onChange={handleChange}
                                                options={
                                                    services.map(service => {
                                                        return {
                                                            value: service.slug,
                                                            label: service.name
                                                        }
                                                    })}
                                            />
                                        </Label>}

                                    <Label label="Customer">
                                        <Input
                                            type="text"
                                            name="customer"
                                            placeholder="Customer"
                                            onChange={handleChange}
                                            value={customer}
                                        />
                                    </Label>

                                    <Label label="Start time">
                                        <TimePicker
                                            name="startTime"
                                            onChange={handleChange}
                                            value={startTime}
                                        />
                                    </Label>
                                </style.Fieldset>

                                <style.ButtonWrapper>
                                    <Button
                                        type="submit"
                                        label="Save booking"
                                        disabled={isFormValid()}
                                        theme={isFormValid() ? "disabled" : "success"}
                                        onClick={onNewBookingClick}
                                    />
                                </style.ButtonWrapper>
                            </form>
                        </Card>
                    </Column>
                </Container>
            </>
        );
    } return <Spinner delay={750} />;
};

export default NewBooking;