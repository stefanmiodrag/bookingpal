import React from "react";
import 'react-day-picker/lib/style.css';
import Select from 'react-select'
import Cleave from 'cleave.js/react';

import {
    Card,
    Column,
    Spinner,
    Label,
    Input,
    DateInput,
    Button,
} from "../../components";

import { Nav, Container } from "../../modules";

import * as style from "./NewBooking.style";

const NewBooking = ({
    handleSelect,
    handleDayClick,
    selectedDay,
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
                        <Card space={true}>
                            <form onSubmit={onNewBookingClick}>
                                <style.Fieldset>
                                    <Label label="Customer">
                                        <Input
                                            type="text"
                                            name="customer"
                                            placeholder="Customer"
                                            onChange={handleChange}
                                            value={customer}
                                        />
                                    </Label>

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
                                </style.Fieldset>

                                <style.Fieldset>
                                    <Label label="Date">
                                        <DateInput
                                            name="startDate"
                                            handleChange={handleDayClick}
                                            selected={selectedDay}
                                        />
                                    </Label>

                                    <Label label="Start time">
                                        <Cleave
                                            type="text"
                                            className="input"
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