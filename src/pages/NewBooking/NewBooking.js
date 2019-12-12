import React, { useEffect } from "react";

import * as style from "./NewBooking.style";

import {
    Card,
    Select,
    TimePicker,
    Label,
    Input,
    Button,
} from "../../components";

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

    return (
        <>
            <div>
                <h3 className="semibold">New Booking</h3>
                <p>Saturday, 7 Dec 2019</p>
            </div>

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
                    </style.Fieldset>

                    <style.Fieldset>
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
        </>
    );
};

export default NewBooking;