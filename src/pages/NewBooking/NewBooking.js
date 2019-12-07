import React from "react";

import * as style from "./NewBooking.style";

import {
    Card,
    Label,
    Input,
    Button,
    TimePicker
} from "../../components";

const NewBooking = ({
    handleChange,
    onNewBookingClick,
    isFormValid,
    service,
    customer,
    startTime,
    endTime
}) => (
        <>
            <div>
                <h3 className="semibold">New Booking</h3>
                <p>Saturday, 7 Dec 2019</p>
            </div>

            <Card space={true}>
                <form onSubmit={onNewBookingClick}>
                    <style.Fieldset>
                        <Label label="Service">
                            <Input
                                type="text"
                                name="service"
                                placeholder="Service"
                                value={service}
                                onChange={handleChange}
                            />
                        </Label>

                        <Label label="Customer">
                            <Input
                                type="text"
                                name="customer"
                                placeholder="Customer"
                                value={customer}
                                onChange={handleChange}
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

                        <Label label="End time">
                            <TimePicker
                                name="endTime"
                                onChange={handleChange}
                                value={endTime}
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

export default NewBooking;