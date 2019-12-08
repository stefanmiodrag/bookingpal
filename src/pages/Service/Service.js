import React, { useEffect } from "react";

import * as style from "./Service.style";

import { Card, ButtonLink, Tag } from "../../components";

const Service = ({ props, getServices, services }) => {
    useEffect(() => {
        getServices();
    }, []);

    return (
        <>
            <style.FullColumn>
                <h3 className="semibold">Catalog</h3>
                <p>Lorum ipsum dolor itsum</p>

                <ButtonLink path="/catalog/new" label="New service" theme="success" />
            </style.FullColumn>

            {services &&
                <style.SmallColumn>
                    {services.map(service => (
                        <Card key={service.id} space={true}>
                            <style.Item>
                                <style.ItemHeader>
                                    <strong>{service.name}</strong><Tag label={`DURATION ${service.duration}`} />
                                </style.ItemHeader>

                                <p>{service.price} {service.currency}</p>
                            </style.Item>
                        </Card>
                    ))}
                </style.SmallColumn>}
        </>
    );
};

export default Service;