import React, { useEffect } from "react";

import * as style from "./Service.style";

import { Card, Spinner, ButtonLink, Tag } from "../../components";
import { Nav, Container } from "../../modules";

const Service = ({ props, getServices, services }) => {
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
                </Container>
            </>
        );
    } return <Spinner delay={750} />
};

export default Service;