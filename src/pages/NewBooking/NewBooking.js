import React from "react";
import Select from 'react-select'

import {
    Card,
    Column,
    DayPicker,
    Spinner,
    TimePicker,
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
    const customStyles = {
        option: (state) => ({
            color: state.isSelected ? '#4cc600' : '#222',
            height: "40px",
            padding: "0px 14px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
        }),

        control: () => ({
            display: "flex",
            borderRadius: "3px",
            boxShadow: "rgb(230,230,230) 0px 0px 0px 1px inset",
            height: "40px",
            padding: "0px 6px",
        }),

        placeholder: () => ({
            position: "absolute",
            top: "50%",
            marginLeft: "2px",
            marginRight: "2px",
            boxSizing: "border-box",
            fontSize: "inherit",
            color: "#828282",
            transform: "translateY(-50%)",
        }),
    }

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
                                            styles={customStyles}
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