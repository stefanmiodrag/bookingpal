import React, { useState } from "react";

import { callFindService } from "../../api/service";

import Service from "./Service";

const ServiceContainer = props => {
    const [services, setServices] = useState("");

    const getServices = () => {
        callFindService().then(data => setServices(data));
    };

    return <Service getServices={getServices} services={services} />
};

export default ServiceContainer;