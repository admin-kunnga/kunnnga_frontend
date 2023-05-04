import React, { useState, useMemo } from "react";

import Select from "react-select";
import classnames from "classnames";


import {
    Row, Badge, InputGroup, Container, Input, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";




function RentalApplicationTab(props) {

    // -------======= modal ======-------
    const [modal_owner, setmodal_owner] = useState(false);
    function tog_owner() {
        setmodal_owner(!modal_owner);
        // removeBodyCss();
    }

    // ---===== form wizard ===--------
    const [activeTabOwner, setoggleTabOwner] = useState(1)

    function toggleTabOwner(tab) {
        if (activeTabOwner !== tab) {

            if (tab >= 1 && tab <= 1) {
                setoggleTabOwner(tab)
            }
        }
    }


    // ==== owner modal vertical tab ========
    const [ownerActiveTab, setownerActiveTab] = useState("1");
    const toggleNewOwner = (tab) => {
        if (ownerActiveTab !== tab) {
            setownerActiveTab(tab);
        }
    };


    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div>
                        <Modal className="full-modal"
                            size="lg"
                            isOpen={modal_owner}
                            toggle={() => { tog_owner(); }} centered >
                            <div className="modal-header">
                                <h5 className="modal-title mt-0"
                                    id="myLargeModalLabel" >    Owner Details
                                </h5>
                                <button onClick={() => { setmodal_owner(false); }}
                                    type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>
                            </div>
                            <div className="modal-body">
                                <Row>
                                    <Col md="3">
                                        <Nav pills className="flex-column">
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: "pointer" }}
                                                    className={classnames({
                                                        "mb-2": true,
                                                        active: ownerActiveTab === "1",
                                                    })}
                                                    onClick={() => {
                                                        toggleNewOwner("1");
                                                    }}
                                                >
                                                    Owner
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col md="9">
                                        <TabContent
                                            activeTab={ownerActiveTab}
                                            className="text-muted mt-4 mt-md-0"
                                        >
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="number" className="form-control"
                                                                value="5220" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> Person Id </label>
                                                        </div>
                                                    </Col>
                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control"
                                                                value="User name" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput">  Name of the owner </label>
                                                        </div>
                                                    </Col>

                                                    <Col sm={6} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control"
                                                                value="User name" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput">  Start Date</label>
                                                        </div>
                                                    </Col>

                                                    <Col sm={6} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control"
                                                                value="User name" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput">  End Date</label>
                                                        </div>
                                                    </Col>


                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <select defaultValue="1" className="form-select">
                                                                <option >--Select-- </option>
                                                                <option value="2">Owner/Co-owner</option>
                                                                <option value="2"> Ownership Percentage</option>
                                                            </select>
                                                            <label htmlFor="floatingSelectGrid">Ownership </label>
                                                        </div>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <div className="form-check mb-4">
                                                            <Input type="checkbox" className="form-check-Input" id="horizontal-customCheck"
                                                            />
                                                            <Label className="form-check-label" htmlFor="horizontal-customCheck" >  Resident is owner occupied </Label>
                                                        </div> 
                                                    </Col>

                                                    <Col className="col-12 text-end mt-4">
                                                        <button className="btn btn-green me-2 w-xs">Save</button>
                                                        <button className="btn btn-orange w-xs">Cancel</button>

                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>


                            </div>
                        </Modal>
                    </div>
                    <Col className="text-end">
                        <button className="btn btn-primary" onClick={() => { tog_owner(); }} data-toggle="modal"
                            data-target=".bs-example-modal-lg" id="SubscriptionDropdown">  <i className="fas fa-plus"></i>  </button>
                    </Col>

                </CardBody>
            </Card>


        </React.Fragment>
    )
}

export default RentalApplicationTab