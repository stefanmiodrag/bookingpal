import React from "react";

import * as style from "./Service.style";

import { ButtonLink } from "../../components";

const Service = props => (
    <>
        <style.FullColumn>
            <h3 className="semibold">Catalog</h3>
            <p>Lorum ipsum dolor itsum</p>

            <ButtonLink path="/catalog/new" label="New service" theme="success" />
        </style.FullColumn>
    </>
);

export default Service;