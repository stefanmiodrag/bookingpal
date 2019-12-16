import React, { useEffect } from "react";

import * as style from "./Service.style";

import { Card, Spinner, Button, ButtonLink, Tag } from "../../components";
import { Nav, Container } from "../../modules";

const Service = ({ props, removeService, getServices, services }) => {
    useEffect(() => {
        getServices();
    }, []);

    if (services) {
        return (
            <>
                <Nav
                    title="Catalog"
                    breadcrumbs={[
                        {
                            label: "Catalog",
                            path: "/catalog"
                        }
                    ]}
                />

                <Container>
                    <style.FullColumn>
                        <ButtonLink path="/catalog/new" label="New service" theme="success" />
                    </style.FullColumn>

                    {services.length !== 0 ?
                        <style.SmallColumn>
                            {services.map((service, i) => (
                                <Card key={i} space={true}>
                                    <Button onClick={() => removeService(service._id)} label="Remove" />

                                    <style.Item>
                                        <style.ItemHeader>
                                            <strong>{service.name}</strong><Tag label={`DURATION ${service.duration}`} />
                                        </style.ItemHeader>

                                        <p>{service.price} {service.currency}</p>
                                    </style.Item>
                                </Card>
                            ))}
                        </style.SmallColumn> :
                        <>
                            <h4 className="thin">Just some empty boxes here...</h4>
                            <p className="light-color">Fill your catalog with services.</p>
                        </>}
                </Container>

            </>
        );
    } return <Spinner delay={750} />
};

export default Service;