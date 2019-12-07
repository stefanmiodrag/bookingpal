import React from "react";

import { Card, Input, Button } from "../../components";

const NewBooking = ({ handleChange, onNewBookingClick, isFormValid, service, customer, startTime, endTime }) => (
    <>
        <div>
            <h3 className="semibold">New Booking</h3>
            <p>Saturday, 7 Dec 2019</p>
        </div>

        <Card space={true}>
            <form onSubmit={onNewBookingClick}>
                <fieldset>
                    <Input
                        type="text"
                        name="service"
                        placeholder="Service"
                        value={service}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="customer"
                        placeholder="Customer"
                        value={customer}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="startTime"
                        placeholder="Start time"
                        value={startTime}
                        onChange={handleChange}
                    />

                    <Input
                        type="text"
                        name="endTime"
                        placeholder="End time"
                        value={endTime}
                        onChange={handleChange}
                    />
                </fieldset>

                <Button
                    type="submit"
                    label="Save booking"
                    disabled={isFormValid()}
                    theme={isFormValid() ? "disabled" : "success"}
                    onClick={onNewBookingClick}
                />
            </form>
        </Card>
    </>
);

export default NewBooking;