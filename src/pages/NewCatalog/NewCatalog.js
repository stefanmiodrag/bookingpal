import React from "react";

import * as style from "./NewCatalog.style";

import {
    Label,
    Input,
    Button,
    Card,
} from "../../components";

import { Column } from "../../components";
import { Nav, Container } from "../../modules";

const NewCatalog = ({
    handleChange,
    name,
    onNewCatalogClick,
    isFormValid
}) => (
        <>
            <Nav
                title="New Catalog"
                breadcrumbs={[
                    {
                        label: "Catalog",
                        path: "/catalog"
                    },
                    {
                        label: "New Catalog",
                        path: "/catalog/new-catalog"
                    }
                ]}
            />

            <Container>
                <Column width="medium">
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
                            </style.Fieldset>

                            <style.ButtonWrapper>
                                <Button
                                    type="submit"
                                    label="Save service"
                                    disabled={isFormValid()}
                                    theme={isFormValid() ? "disabled" : "success"}
                                    onClick={onNewCatalogClick}
                                />
                            </style.ButtonWrapper>
                        </form>
                    </Card>
                </Column>
            </Container>
        </>
    );

export default NewCatalog;