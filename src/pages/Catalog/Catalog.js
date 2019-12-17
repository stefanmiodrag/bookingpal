import React from "react";

import * as style from "./Catalog.style";

import { Card, Column, Spinner, Button, ButtonLink, Tag } from "../../components";
import { Nav, Container } from "../../modules";

const Catalog = ({ removeProduct, catalogs, products }) => {

    if (catalogs && products) {
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
                    <Column mb={30} width="large">
                        <style.Buttons>
                            <ButtonLink path="/catalog/new-catalog" label="New Catalog" theme="success" />
                            <ButtonLink path="/catalog/new-product" label="New Product" theme="success" />
                        </style.Buttons>
                    </Column>

                    {catalogs !== 0 &&
                        catalogs.map(catalog => (
                            <>
                                {catalog.name}
                            </>
                        ))}

                    {products.length !== 0 ?
                        <Column width="small">
                            {products.map((service, i) => (
                                <Card key={i} space={true}>
                                    <Button onClick={() => removeProduct(service._id)} label="Remove" />

                                    <style.Item>
                                        <style.ItemHeader>
                                            <strong>{service.name}</strong><Tag label={`DURATION ${service.duration}`} />
                                        </style.ItemHeader>

                                        <p>{service.price} {service.currency}</p>
                                    </style.Item>
                                </Card>
                            ))}
                        </Column> :
                        <>
                            <h4 className="thin">Just some empty boxes here...</h4>
                            <p className="light-color">Fill your catalog with products.</p>
                        </>}
                </Container>

            </>
        );
    } return <Spinner delay={750} />
};

export default Catalog;