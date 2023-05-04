import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link, Route, Routes, Outlet } from "react-router-dom"

import { Card, CardBody, Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

import Sidebar from "./sidebar";
import AccountDetails from "./Account-details/index";
import Templates from "../Templates/Email/index";
import Amenities from "./Property-Management/Amenities/index";


const PagesStarter = () => {
    const [singlebtn, setSinglebtn] = useState(false)


    //meta title
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content vh-100">
                <Container fluid>

                    <Row className="">
                        <Col lg={4} xl={3} className="">
                            <Sidebar />
                        </Col>
                        <Col lg={8} xl={9} className=" ">
                            <Routes>
                                <Route path="/" element={<AccountDetails />} />
                                <Route path="general-settings" element={<AccountDetails />} />
                            </Routes>
                            <Outlet />
                        </Col>

                    </Row>


                </Container>
            </div>
        </React.Fragment>
    )
}

export default PagesStarter
