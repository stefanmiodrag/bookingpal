import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { init } from "../../actions";
import { callFindService, callRemoveService } from "../../api/service";

import Service from "./Service";

const ServiceContainer = props => {
    const dispatch = useDispatch();

    const [services, setServices] = useState("");

    const getServices = () => callFindService().then(data => setServices(data));

    const removeService = (id) => {
        callRemoveService(id).then(alert("complete!"))
            .then(dispatch(init()));
    };

    return <Service removeService={removeService} getServices={getServices} services={services} />
};

export default ServiceContainer;