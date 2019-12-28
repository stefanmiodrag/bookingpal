import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { fetchCompanyAsCustomer } from "../../actions/company";
import { fetchProductsByCompany } from "../../actions/product";
import { callNewBookingByCustomer } from "../../api/booking";
import { selectProducts, selectCompany } from "../../selectors";

import CustomerBooking from "./CustomerBooking";

const CustomerBookingContainer = () => {
    const { slug, product } = useParams();

    const [state, setState] = useState({
        customer: "",
        startTime: "",
    });

    const init = () => dispatch => {
        dispatch(fetchCompanyAsCustomer(slug))
            .then(data => dispatch(fetchProductsByCompany(data.company[0]._id)))
    };

    const products = useSelector(selectProducts);
    const company = useSelector(selectCompany);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const setProduct = () => {
        const result = products && products.filter(x => x.slug === product);
        return result;
    };

    const onNewBookingClick = e => {
        e.preventDefault();

        const { customer, startTime } = state;

        if (customer && startTime) {
            callNewBookingByCustomer(setProduct(), customer, startTime, null, company)
                .then(alert("complete!"))
                .catch(err => {
                    if (err.status === 401) {
                        alert("401")
                    }
                })
        } else {
            alert("Missing fields");
        };
    };

    return (
        <CustomerBooking
            init={init}
            products={products}
            company={company}
            handleChange={handleChange}
            customer={state.customer}
            startTime={state.startTime}
            onNewBookingClick={onNewBookingClick}
        />);
};

export default CustomerBookingContainer;