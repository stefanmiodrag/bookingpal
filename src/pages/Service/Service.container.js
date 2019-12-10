import React, { useState } from "react";

import { callFindService } from "../../api/service";

import Service from "./Service";

const ServiceContainer = props => {
    const [services, setServices] = useState("");

    const getServices = () => {
        const userId = "5de4817b-fd46-4b9e-bc1b-9afb5de6e7b8";

        callFindService(userId).then(data => setServices(data));
    };

    return <Service getServices={getServices} services={services} />
};

export default ServiceContainer;