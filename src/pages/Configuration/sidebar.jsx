import React, { useState, useMemo } from "react";
import { Card, CardBody } from "reactstrap"
import { NavLink } from "react-router-dom";

function Cards(props) {

    return (
        <React.Fragment>
            <Card>
                <CardBody className="navActive">
                    <h3 className="text-dark fw-600"> Configuration </h3>
                    <hr className="divider row mt-3 mb-4" />

                    <p className="text-secondary fw-600 fs-17"> Account Details </p>
                    <p> <NavLink to="/configuration" className="ps-3 text-secondary fs-16"> Account Details </NavLink></p>
                    <hr className="divider row my-3" />

                    <p className="text-secondary fw-600 fs-17"> Templates </p>
                    <p> <NavLink to="/templates-email" className="ps-3 text-secondary fs-16"> Email </NavLink></p>
                    <p> <NavLink to="/templates-letters" className="ps-3 text-secondary fs-16"> Letters </NavLink></p>
                    <hr className="divider row my-3" />

                    <p className="text-secondary fw-600 fs-17"> Property Management </p>
                    <p> <NavLink to="/manage-lookups-setting" className="ps-3 text-secondary fs-16"> Manage Choices </NavLink></p>
                    <p> <NavLink to="/amenities-setting" className="ps-3 text-secondary fs-16"> Amenities </NavLink></p>
                    <p> <NavLink to="/unit-features-setting" className="ps-3 text-secondary fs-16"> Unit Features </NavLink></p>

                    <hr className="divider row my-3" />

                </CardBody>
            </Card>

        </React.Fragment>
    )
}


export default Cards
