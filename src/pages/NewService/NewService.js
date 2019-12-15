import React from "react";

import * as style from "./NewService.style";

import {
    Label,
    Input,
    Select,
    Button,
    Card,
    TimePicker
} from "../../components";

import { Nav, Container } from "../../modules";

const NewService = ({
    props,
    handleChange,
    name,
    duration,
    price,
    currency,
    onNewServiceClick,
    isFormValid
}) => (
        <>
            <Nav
                title="Catalog"
                breadcrumbs={[
                    {
                        label: "Catalog",
                        path: "/catalog"
                    },
                    {
                        label: "New Catalog",
                        path: "/catalog/new"
                    }
                ]}
            />

            <Container>
                <div>
                    <h3>New Catalog</h3>
                    <p>Lorum ipsum dolor</p>
                </div>

                <Card space={true}>
                    <form onSubmit>
                        <style.Fieldset>
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
                                    duration={true}
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

                            <Select
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
                            />
                        </style.Fieldset>

                        <style.ButtonWrapper>
                            <Button
                                type="submit"
                                label="Save service"
                                disabled={isFormValid()}
                                theme={isFormValid() ? "disabled" : "success"}
                                onClick={onNewServiceClick}
                            />
                        </style.ButtonWrapper>
                    </form>
                </Card>
            </Container>
        </>
    );

export default NewService;