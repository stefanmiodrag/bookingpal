import React from "react";

import { Card, Button } from "../../components";

const NewBooking = props => (
    <>
        <div>
            <h3 className="semibold">New Booking</h3>
            <p>Lorum ipsum dolor</p>
        </div>

        <Card space={true}>
            <form onSubmit>

                <Button
                    type="submit"
                    label="Create new booking"
                    disabled={true}
                    theme="disabled"
                />
            </form>
        </Card>
    </>
);

export default NewBooking;