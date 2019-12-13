import React from "react";

import { Tag, Card, Input, Button } from "../../components";

import * as style from "./User.style";

const User = ({
    user,
    companyName,
    handleChange,
    onNewCompanyClick,
    company,
    saveOnClick,
    complete
}) => {
    if (user && company) {
        return (
            <>
                <style.SmallColumn>
                    <h3 className="semibold">Manage your profile</h3>
                    <p>Lorum ipsum dolor</p>

                    <style.CardWrapper>
                        <Card space={true}>
                            <style.Divider>
                                <p>Users:</p>
                            </style.Divider>

                            <style.Users>
                                <p>{user.username}{company.length !== 0 && `, ${company[0].name}`}</p>
                                <Tag label={user.role.toUpperCase()} />
                            </style.Users>
                        </Card>
                    </style.CardWrapper>

                    {company.length === 0 &&
                        <Card bar={true} space={true}>
                            <h5 className="semibold">Connect your company</h5>
                            <p>You haven't connected your company yet.</p>

                            <style.Form onSubmit={onNewCompanyClick}>
                                <Input
                                    type="text"
                                    name="companyName"
                                    onChange={handleChange}
                                    placeholder="Company name..."
                                    value={companyName}
                                />
                                <Button
                                    label={complete ? "Activated" : "Activate your company"}
                                    icon={complete && "small-tick"}
                                />
                            </style.Form>
                        </Card>}
                </style.SmallColumn>

                <style.SmallColumn>
                    <style.ButtonWrapper>
                        <Button theme="success" label="Save changes" onClick={saveOnClick} />
                    </style.ButtonWrapper>
                </style.SmallColumn>
            </>
        );
    } return null;
};

export default User;