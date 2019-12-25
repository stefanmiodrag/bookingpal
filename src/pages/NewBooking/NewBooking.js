import React from "react";
import Cleave from 'cleave.js/react';
import Select from 'react-select'

import {
    Card,
    Column,
    DayPicker,
    Spinner,
    Label,
    Input,
    Button,
} from "../../components";

import { Nav, Container } from "../../modules";

import * as style from "./NewBooking.style";

const NewBooking = ({
    handleSelect,
    handleChange,
    onNewBookingClick,
    isFormValid,
    service,
    customer,
    startTime,
    products,
}) => {
    if (products) {
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
                    <Column width="medium">
                        <style.Container>
                            <DayPicker />
                        </style.Container>

                        <Card space={true}>
                            <form onSubmit={onNewBookingClick}>
                                <style.Fieldset>
                                    {products.length !== 0 &&
                                        <Select
                                            value={service}
                                            onChange={handleSelect}
                                            options={
                                                products.map(service => {
                                                    return {
                                                        value: service.slug,
                                                        label: service.name
                                                    }
                                                })}
                                        />}

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
                                        <Cleave
                                            name="startTime"
                                            placeholder="00:00"
                                            options={{
                                                time: true,
                                                timePattern: ['h', 'm']
                                            }}
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