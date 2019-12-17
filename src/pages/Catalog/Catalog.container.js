import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../../actions";
import { callRemoveProduct } from "../../api/product";
import { selectProducts, selectCatalogs } from "../../selectors";

import Catalog from "./Catalog";

const CatalogContainer = () => {
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);
    const catalogs = useSelector(selectCatalogs);

    const removeProduct = (id) => {
        callRemoveProduct(id).then(alert("complete!"))
            .then(dispatch(init()));
    };

    return <Catalog removeProduct={removeProduct} catalogs={catalogs} products={products} />
};

export default CatalogContainer;