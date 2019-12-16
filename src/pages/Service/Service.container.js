import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { init } from "../../actions";
import { callRemoveService } from "../../api/service";
import { selectServices } from "../../selectors";

import Service from "./Service";

const ServiceContainer = props => {
    const dispatch = useDispatch();

    const services = useSelector(selectServices);

    const removeService = (id) => {
        callRemoveService(id).then(alert("complete!"))
            .then(dispatch(init()));
    };

    return <Service removeService={removeService} services={services} />
};

export default ServiceContainer;