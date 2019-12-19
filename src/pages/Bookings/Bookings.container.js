import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectBookings } from "../../selectors";

import Bookings from "./Bookings";

const BookingsContainer = props => {
    const bookings = useSelector(selectBookings);

    const [state, setState] = useState({
        search: "",
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const filteredItems = bookings.filter(item => {
        const query = state.search.toLowerCase();

        return (
            item.service.label.toLowerCase().indexOf(query) >= 0 ||
            item.customer.toLowerCase().indexOf(query) >= 0
        )
    });


    return (
        <Bookings
            bookings={bookings}
            handleChange={handleChange}
            search={state.search}
            filteredItems={filteredItems}
        />);
};

export default BookingsContainer;