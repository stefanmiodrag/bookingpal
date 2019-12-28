import React from "react";

import * as style from "./Catalog.style";

import { Card, Column, Spinner, Button, ButtonLink, Tag } from "../../components";
import { Nav, Container } from "../../modules";

const Catalog = ({
    removeProduct,
    catalogs,
    products,
    filteredItems,
    handleChange,
    search
}) => {
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
                    onSearch={handleChange}
                    searchValue={search}
                />

                <Container>
                    <Column mb={30} width="large">
                        <style.Buttons>
                            <ButtonLink
                                path="/catalog/new-catalog"
                                theme="success"
                                label="New Catalog"
                            />

                            <ButtonLink
                                path="/catalog/new-product"
                                theme="success"
                                label="New Product"
                            />
                        </style.Buttons>
                    </Column>

                    {products.length !== 0 ?
                        <Column width="small">
                            {filteredItems.length !== 0 ? filteredItems.map((product, i) => (
                                <style.Item>
                                    <Card key={i} space={true}>
                                        <Button onClick={() => removeProduct(product._id)} label="Remove" />
                                        {product.catalog.map(catalog => (catalog.label))}

                                        <style.ItemHeader>
                                            <strong>{product.name}</strong>
                                            <Tag label={`DURATION ${product.duration}`} />
                                        </style.ItemHeader>

                                        {product.catalog && product.catalog.map(catalog => (
                                            <p>{catalog.label}</p>
                                        ))}

                                        <p>{product.price} {product.currency}</p>
                                    </Card>
                                </style.Item>
                            )) : <p className="light-color">Nothing's here, try a different searching term.</p>}
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