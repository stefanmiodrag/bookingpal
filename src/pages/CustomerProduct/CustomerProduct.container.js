import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { fetchCompanyAsCustomer } from "../../actions/company";
import { fetchProductsByCompany } from "../../actions/product";
import { selectProducts, selectCompany } from "../../selectors";

import CustomerProduct from "./CustomerProduct";

const CustomerProductContainer = () => {
    const { slug } = useParams();

    const init = () => dispatch => {
        dispatch(fetchCompanyAsCustomer(slug))
            .then(data => dispatch(fetchProductsByCompany(data.company[0]._id)))
    };

    const company = useSelector(selectCompany);
    const products = useSelector(selectProducts);

    return <CustomerProduct init={init} products={products} company={company} />;
};

export default CustomerProductContainer;