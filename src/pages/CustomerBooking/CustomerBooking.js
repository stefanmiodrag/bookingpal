import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { ButtonLink, Tag, Card } from "../../components";

import * as style from "./CustomerBooking.style";

const CustomerBooking = ({ init, products, company }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    if (company && products) {
        return (
            <style.Container>
                {company.length !== 0 ?
                    <>
                        <style.Header>
                            <div>
                                {company[0] &&
                                    <h4>{company[0].name}</h4>}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </style.Header>

                        <style.Title>
                            <small>SERVICES:</small>
                        </style.Title>

                        <SimpleBar style={{ maxHeight: 600 }}>
                            <style.Card>
                                {products && products.map(product => (
                                    <style.Item key={product._id}>
                                        <div>
                                            <h5 className="semibold">{product.name}</h5>
                                            <style.Details>
                                                <span>Duration:{' '}{product.duration}</span>
                                                <span>Price:{' '}{`${product.price} ${product.currency.toUpperCase()}`}</span>
                                            </style.Details>

                                            <p className="light-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>

                                        <ButtonLink label="Book Now" />
                                    </style.Item>
                                ))}
                            </style.Card>
                        </SimpleBar>
                    </> :
                    <>
                        <p className="light-color">No company found</p>
                    </>}
            </style.Container>
        );
    } return null;
};

export default CustomerBooking;