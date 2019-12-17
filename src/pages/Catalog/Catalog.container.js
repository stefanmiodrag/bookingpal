import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../../actions";
import { callRemoveProduct } from "../../api/product";
import { selectProducts, selectCatalogs } from "../../selectors";

import Catalog from "./Catalog";

const CatalogContainer = () => {
    const dispatch = useDispatch();

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

    const products = useSelector(selectProducts);
    const catalogs = useSelector(selectCatalogs);

    const filteredItems = products.filter(item => {
        const query = state.search.toLowerCase();

        return (
            item.name.toLowerCase().indexOf(query) >= 0 ||
            item.price.toLowerCase().indexOf(query) >= 0 ||
            item.currency.toLowerCase().indexOf(query) >= 0
        )
    });

    const removeProduct = (id) => {
        callRemoveProduct(id).then(alert("complete!"))
            .then(dispatch(init()));
    };

    return (
        <Catalog
            search={state.search}
            handleChange={handleChange}
            removeProduct={removeProduct}
            catalogs={catalogs}
            products={products}
            filteredItems={filteredItems}
        />);
};

export default CatalogContainer;