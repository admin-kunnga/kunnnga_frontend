import React, { useState, useMemo } from "react";

import Select from "react-select";
import classnames from "classnames";


import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";


import TableContainer from '../../../../../components/Common/TableContainer';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function RentalApplicationTab(props) {

    // -------======= modal ======-------
    const [modal_owner, setmodal_owner] = useState(false);
    function tog_owner() {
        setmodal_owner(!modal_owner);
        // removeBodyCss();
    }

    // ---===== form wizard ===--------
    const [activeTabOwnerAssco, setoggleTabOwnerAssco] = useState(1)

    function toggleTabOwner(tab) {
        if (activeTabOwnerAssco !== tab) {

            if (tab >= 1 && tab <= 1) {
                setoggleTabOwnerAssco(tab)
            }
        }
    }


    // ---=== phone input ===-----
    const [value, setValue] = useState()



    //------======= Table =======---------

    const columnsOwner = useMemo(
        () => [
            {
                Header: 'Board Member',
                accessor: 'building',
            },
            {
                Header: 'Position',
                accessor: 'type',
            },
            {
                Header: "Email",
                accessor: 'Email',
            },
            {
                Header: "Phone",
                accessor: 'Phone',
            },
            {
                Header: "Term Start",
                accessor: 'Start',
            },
            {
                Header: " Term End ",
                accessor: 'End',
            },
        ],
        []
    );

    const dataOwner = [
        {
            "building": "Member-1",
            "type": "Position-1",
            "Start": "20/02/2023",
            "End": "22/02/2023",
            "Phone": 7596896526,
            "Email": "Example@gmail.com"
        },
        {
            "building": "Member-2",
            "type": "Position-2",
            "Start": "10/02/2023",
            "End": "22/02/2023",
            "Phone": 7596786526,
            "Email": "Example2@gmail.com"
        },

        {
            "building": "Member-3",
            "type": "Position-3",
            "Start": "20/02/2023",
            "End": "23/02/2023",
            "Phone": 7596896526,
            "Email": "Example3@gmail.com"
        },
        {
            "building": "Member-4",
            "type": "Position-4",
            "Start": "20/02/2022",
            "End": "09/02/2024",
            "Phone": 759678965,
            "Email": "Example4@gmail.com"
        },

    ];




    return (
        <React.Fragment>
            <Card>
                <CardBody>

                    {/*----------------= modal=-------------- */}

                    <div>
                        <Modal
                            size="lg"
                            isOpen={modal_owner}
                            toggle={() => { tog_owner(); }} centered >
                            <div className="modal-header">
                                <h5 className="modal-title mt-0"
                                    id="myLargeModalLabel"
                                >
                                    Add Board Member
                                </h5>
                                <button onClick={() => {
                                    setmodal_owner(false);
                                }}
                                    type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>


                            </div>
                            <div className="modal-body">


                                <div className="vertical-wizard wizard clearfix vertical">
                                    <div className="steps clearfix">
                                        <ul>
                                            <NavItem
                                                className={classnames({
                                                    current: activeTabOwnerAssco === 1,
                                                })}
                                            >
                                                <NavLink
                                                    className={classnames({
                                                        active: activeTabOwnerAssco === 1,
                                                    })}
                                                    onClick={() => { toggleTabOwner(1) }} >

                                                    <span className="py-2 d-block">  Board Member </span>
                                                </NavLink>
                                            </NavItem>

                                        </ul>
                                    </div>
                                    <div className="content clearfix">
                                        <TabContent
                                            activeTab={activeTabOwnerAssco}
                                            className="body"
                                        >
                                            <TabPane tabId={1}>
                                                <Row>
                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput">   Board Member	  </label>
                                                        </div>
                                                    </Col>
                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput"> Position	   </label>
                                                        </div>
                                                    </Col>


                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput">  Email  </label>
                                                        </div>
                                                    </Col>

                                                    <Col sm={12} className="float mb-3">
                                                        <PhoneInput
                                                            placeholder="Enter phone number"
                                                            value={value}
                                                            defaultCountry="IN"
                                                            onChange={setValue} />
                                                    </Col>

                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput">  Term Start  </label>
                                                        </div>
                                                    </Col>

                                                    <Col sm={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput">  	Term End   </label>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-12 text-end mt-4">
                                                        <button className="btn btn-green me-2 w-xs">Save</button>
                                                        <button className="btn btn-orange w-xs">Cancel</button>

                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <TableContainer
                        columns={columnsOwner}
                        data={dataOwner}
                        isGlobalFilter={true}
                        customPageSize={10}
                        isAddOptions={false}
                        className="custom-header-css"
                    />
                    <Col className="text-end">
                        <a className="text-decoration-underline" onClick={() => { tog_owner(); }} data-toggle="modal" data-target=".bs-example-modal-lg" id="SubscriptionDropdown">  + Add Board Member </a>
                    </Col>
                </CardBody>
            </Card>


        </React.Fragment>
    )
}

export default RentalApplicationTab