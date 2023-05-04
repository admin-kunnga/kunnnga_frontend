import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink,
    Label, Form, TabContent, Button, UncontrolledTooltip, Input, Table, InputGroup, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Badge, FormGroup, Dropdown
} from "reactstrap"

import {
    Route, Routes, Link
} from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"


const PropertyManagementSetting = () => {


    // ------==== Dropdown ===---------
    const [singlebtn, setSinglebtn] = useState(false);
    const [singlebtn1, setSinglebtn1] = useState(false)



    //meta title
    document.title = "Kunnga - AssociationsNow";




    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col sm="4">
                                    <Link to="/general-settings">
                                        <button className="btn btn-light w-100">
                                            Account Details
                                        </button>
                                    </Link>
                                </Col>
                                <Col sm="4">
                                    <Dropdown
                                        isOpen={singlebtn}
                                        toggle={() => setSinglebtn(!singlebtn)}
                                    >
                                        <DropdownToggle tag="button" className="w-100 btn btn-light" caret>
                                            Templates {" "}
                                            <i className="mdi mdi-chevron-down" />
                                        </DropdownToggle>
                                        <DropdownMenu className="w-100">
                                            <Link to="/templates-email">
                                                <DropdownItem>Email</DropdownItem>
                                            </Link>
                                            <Link to="/templates-letters">
                                                <DropdownItem>Letters</DropdownItem>
                                            </Link>

                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col sm="4">
                                    <Dropdown
                                        isOpen={singlebtn1}
                                        toggle={() => setSinglebtn1(!singlebtn1)}
                                    >
                                        <DropdownToggle tag="button" className="w-100 btn btn-primary" caret>
                                            Property Managements {" "}
                                            <i className="mdi mdi-chevron-down" />
                                        </DropdownToggle>
                                        <DropdownMenu className="w-100">
                                            <Link to="/manage-lookups-setting">
                                                <DropdownItem> Manage Choices </DropdownItem>
                                            </Link>
                                            <Link to="/amenities-setting">
                                                <DropdownItem> Amenities </DropdownItem>
                                            </Link>
                                            <Link to="/unit-features-setting">
                                                <DropdownItem> Unit Features </DropdownItem>
                                            </Link>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>


                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Templates" breadcrumbItem="Letters" />


                    <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                        <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                        <h5 className="mb-0">  New Users  </h5>
                                    </CardTitle>
                                    <CardText className="pt-2">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                        <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-money-check-alt"></i></span>
                                        <h5 className="mb-0">  Reset Password  </h5>
                                    </CardTitle>
                                    <CardText className="pt-2">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col >
                            <Card>
                                <CardBody>
                                    <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                        <span className="btn btn-circle btn-primary p-0 me-2"><i className="fas fa-align-center"></i> </span>
                                        <h5 className="mb-0 ">  Lease </h5>
                                    </CardTitle>
                                    <CardText className="pt-2">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </Container>
            </div>
        </React.Fragment>
    )
}

export default PropertyManagementSetting
