import React from "react";
import Select from 'react-select'

import * as style from "./NewProduct.style";

import {
    Label,
    Input,
    Button,
    Card,
    TimePicker
} from "../../components";

import { Nav, Container } from "../../modules";

const NewProduct = ({
    catalogs,
    handleChange,
    handleSelect,
    name,
    duration,
    catalog,
    price,
    currency,
    onNewProductClick,
    isFormValid
}) => {
    const options = catalogs.map(catalog => {
        return {
            value: catalog.slug,
            label: catalog.name
        }
    })

    return (
        <>
            <Nav
                title="New Product"
                breadcrumbs={[
                    {
                        label: "Catalog",
                        path: "/catalog"
                    },
                    {
                        label: "New Product",
                        path: "/catalog/new-product"
                    }
                ]}
            />

            <Container>
                <Card space={true}>
                    <form onSubmit>
                        <style.Fieldset>
                            <Select
                                value={catalog}
                                onChange={handleSelect}
                                isMulti
                                options={options}
                            />

                            <Label label="Name">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name of your service..."
                                    onChange={handleChange}
                                    value={name}
                                />
                            </Label>

                            <Label label="Duration">
                                <TimePicker
                                    name="duration"
                                    onChange={handleChange}
                                    value={duration}
                                />
                            </Label>
                        </style.Fieldset>

                        <style.Fieldset>
                            <Label label="Price">
                                <Input
                                    type="number"
                                    name="price"
                                    placeholder="Price of your service..."
                                    onChange={handleChange}
                                    value={price}
                                />
                            </Label>

                            {/* <Select
                                name="currency"
                                value={currency}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: "sek",
                                        label: "SEK"
                                    },
                                    {
                                        value: "usd",
                                        label: "USD"
                                    }
                                ]}
                            /> */}
                        </style.Fieldset>

                        <style.ButtonWrapper>
                            <Button
                                type="submit"
                                label="Save service"
                                disabled={isFormValid()}
                                theme={isFormValid() ? "disabled" : "success"}
                                onClick={onNewProductClick}
                            />
                        </style.ButtonWrapper>
                    </form>
                </Card>
            </Container>
        </>
    );
};

export default NewProduct;