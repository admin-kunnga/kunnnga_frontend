import React, { useState, useMemo } from "react";

import Select from "react-select";
import classnames from "classnames";


import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";


import TableContainer from '../../../../../components/Common/TableContainer';


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


    //------======= Table =======---------

    const columnsOwner = useMemo(
        () => [

            {
                Header: 'Person ID',
                accessor: 'building',
            },
            {
                Header: 'Owner Name',
                accessor: 'type',
            },
            {
                Header: "Percentage",
                accessor: 'Percentage',
            },
        ],
        []
    );

    const dataOwner = [
        {
            "building": "K-2588",
            "type": "Type-1",
            "Percentage": "50%",

        },
        {
            "building": "K-2588",
            "type": "Type-1",
            "Percentage": "50%",
        },
        {
            "building": "K-2588",
            "type": "Type-1",
            "Percentage": "50%",
        },
        {
            "building": "K-2588",
            "type": "Type-1",
            "Percentage": "50%",
        },
        {
            "building": "K-2588",
            "type": "Type-1",
            "Percentage": "50%",
        },

    ];


    // ==== owner modal vertical tab ========
    const [ownerActiveTab, setownerActiveTab] = useState("1");
    const toggleNewOwner = (tab) => {
        if (ownerActiveTab !== tab) {
            setownerActiveTab(tab);
        }
    };


    return (
        <React.Fragment>
            <Row>


                {/*----------------= modal=-------------- */}

                <div>
                    <Modal className="full-modal"
                        size="lg"
                        isOpen={modal_owner}
                        toggle={() => { tog_owner(); }} centered >
                        <div className="modal-header">
                            <h5 className="modal-title mt-0"
                                id="myLargeModalLabel" >  New Owner
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

                <Col sm={4} md={3} xl={3}>
                    <div className="search-box me-2 mb-2 d-inline-block w-100">
                        <div className="position-relative">
                            <label htmlFor="search-bar-0" className="search-label w-100">
                                <span id="search-bar-0-label" className="sr-only">
                                    Search this table
                                </span>
                                <input
                                    id="search-bar-0"
                                    type="text"
                                    className="form-control ps-2 pe-5"
                                    placeholder="Search here..."
                                />
                            </label>
                            <i className="bx bx-search-alt search-icon-1"></i>
                        </div>
                    </div>
                </Col>

                <TableContainer
                    columns={columnsOwner}
                    data={dataOwner}
                    isGlobalFilter={true}
                    customPageSize={10}
                    isAddOptions={false}
                    className="custom-header-css"
                />
                <Col className="text-end">
                    <a className="text-decoration-underline" onClick={() => { tog_owner(); }} data-toggle="modal"
                        data-target=".bs-example-modal-lg" id="SubscriptionDropdown">  + New Owner </a>
                </Col>

            </Row>
        </React.Fragment>
    )
}

export default RentalApplicationTab