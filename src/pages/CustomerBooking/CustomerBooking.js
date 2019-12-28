import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import SimpleBar from 'simplebar-react';
import Cleave from 'cleave.js/react';
import 'simplebar/dist/simplebar.min.css';

import { Button, Input, Tag, Card } from "../../components";

import * as style from "./CustomerBooking.style";

const CustomerBooking = ({
    init,
    products,
    handleChange,
    onNewBookingClick,
    company,
    customer,
    startTime,
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    if (company && products) {
        return (
            <style.Container>
                {company.length !== 0 ?
                    <>
                        <style.CardWrapper>
                            <style.Header color={company[0].customize_settings && company[0].customize_settings.theme_color}>
                                <div>
                                    {company[0] &&
                                        <h4>{company[0].name}</h4>}

                                    {company[0].customize_settings &&
                                        <p>{company[0].customize_settings.welcome_message}</p>}
                                </div>
                            </style.Header>

                            <style.Title>
                                <small>SCHEDULE A TIME</small>
                            </style.Title>

                            <SimpleBar style={{ maxHeight: 600 }}>
                                <style.Card>
                                    <form onSubmit={onNewBookingClick}>
                                        <Input
                                            type="text"
                                            name="customer"
                                            placeholder="First and last name..."
                                            value={customer}
                                            onChange={handleChange}
                                        />

                                        <Cleave
                                            name="startTime"
                                            placeholder="00:00"
                                            className="input"
                                            options={{
                                                time: true,
                                                timePattern: ['h', 'm']
                                            }}
                                            value={startTime}
                                            onChange={handleChange}
                                        />

                                        <Button
                                            type="submit"
                                            theme="success"
                                            onClick={onNewBookingClick}
                                            label="Confirm booking"
                                        />
                                    </form>
                                </style.Card>
                            </SimpleBar>
                        </style.CardWrapper>

                        <Link to={`/${company[0].slug}/booking`}>Return to products</Link>
                    </> :
                    <>
                        <p className="light-color">No company found</p>
                    </>}
            </style.Container>
        );
    } return null;
};

export default CustomerBooking;