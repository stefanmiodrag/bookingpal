import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { fetchCompanyAsCustomer } from "../../actions/company";
import { fetchProductsByCompany } from "../../actions/product";
import { selectProducts, selectCompany } from "../../selectors";

import CustomerBooking from "./CustomerBooking";

const CustomerBookingContainer = () => {
    const { slug } = useParams();

    const init = () => dispatch => {
        return Promise.all([
            dispatch(fetchCompanyAsCustomer(slug)),
            dispatch(fetchProductsByCompany(slug))
        ])
            .catch(err => (err.message))
    };

    const products = useSelector(selectProducts);
    const company = useSelector(selectCompany);

    return <CustomerBooking init={init} products={products} company={company} />;
};

export default CustomerBookingContainer;