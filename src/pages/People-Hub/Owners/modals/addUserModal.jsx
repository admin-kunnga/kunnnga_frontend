import React, { useState, useMemo } from "react";
import PropTypes from "prop-types"
import {
    Col, Row, UncontrolledTooltip, Modal, ModalHeader, Badge, ModalBody, Form, Table, Input, FormFeedback, Label, InputGroup,
    Card, FormGroup, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink,
    TabContent, TabPane, ModalFooter, Nav
} from "reactstrap";
import PhoneInput from 'react-phone-number-input';
import classnames from "classnames"

import TableContainer from "../../../../components/Common/TableContainer";



const EditModal = props => {
    const { isOpen, toggle } = props

    // ---==== phone input ====----
    const [value, setValue] = useState()



    // -----===== tabs ====------
    const [activeTab, setactiveTab] = useState(1)

    function toggleTab(tab) {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
            }
        }
    }

    // --------Form repeater------
    const [rows1, setrows1] = useState([{ id: 1 }]);

    // form add row
    function handleAddRowNested() {
        const modifiedRows = [...rows1];
        modifiedRows.push({ id: modifiedRows.length + 1 });
        setrows1(modifiedRows);
    }

    // delete row
    function handleRemoveRow(id) {
        if (id !== 1) {
            var modifiedRows = [...rows1];
            modifiedRows = modifiedRows.filter(x => x["id"] !== id);
            setrows1(modifiedRows);
        }
    }

    // ----==== table associate unit ===----
    const columns1 = useMemo(
        () => [
            {
                Header: 'Property',
                accessor: 'Property',
            },
            {
                Header: 'Unit',
                accessor: 'Unit'
            },
            {
                Header: 'Status',
                accessor: 'Status'
            }
        ],
        []
    );

    const data1 = [
        {
            "Property": "Property 1",
            "Unit": "Unit 1",
            "Status": "Status 1",
        },
        {
            "Property": "Property 2",
            "Unit": "Unit 2",
            "Status": "Status 2",
        },
        {
            "Property": "Property 3",
            "Unit": "Unit 3",
            "Status": "Status 3",
        },
        {
            "Property": "Property 4",
            "Unit": "Unit 4",
            "Status": "Status 4",
        },
    ];

    // ----==== table other member ===----
    const columns2 = useMemo(
        () => [
            {
                Header: 'Member Name',
                accessor: 'Name',
            },
            {
                Header: 'Type',
                accessor: 'Type'
            },
            {
                Header: ' Property',
                accessor: 'Property'
            },
            {
                Header: 'Unit',
                accessor: 'Unit'
            }
        ],
        []
    );

    const data2 = [
        {
            "Name": "Member one",
            "Property": "Property 1",
            "Type": "Type One",
            "Unit": "Unit 1",
            "Status": "Status 1",
        },
        {
            "Name": "Member one",
            "Property": "Property 1",
            "Type": "Type One",
            "Unit": "Unit 1",
            "Status": "Status 1",
        },
        {
            "Name": "Member one",
            "Property": "Property 1",
            "Type": "Type One",
            "Unit": "Unit 1",
            "Status": "Status 1",
        },
    ];

    // ===== -----  Vertical tab =====------
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };


    return (
        <Modal
            size="lg" isOpen={isOpen} role="dialog" scrollable={true} autoFocus={true} centered={true} className="exampleModal full-modal" tabIndex="-1" 
            toggle={toggle} >
               <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">
                        Add Owner 
                    </h5>
                    <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" onClick={toggle}> <i className="fas fa-times"></i> </button>
                </div>

                <ModalBody>
                    <div className="modal-body">

                        <Row>
                            <Col md={3}>
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true,
                                                active: verticalActiveTab === "1",
                                            })}
                                            onClick={() => {
                                                toggleVertical("1");
                                            }}
                                        >  Owner Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true,
                                                active: verticalActiveTab === "2",
                                            })}
                                            onClick={() => {
                                                toggleVertical("2");
                                            }}
                                        >  Contact Details 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true,
                                                active: verticalActiveTab === "3",
                                            })}
                                            onClick={() => {
                                                toggleVertical("3");
                                            }}
                                        >  Associated Units 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: verticalActiveTab === "4",
                                            })}
                                            onClick={() => {
                                                toggleVertical("4");
                                            }}
                                        >
                                             Other Members
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                               
                            </Col>
                            <Col md={9}>
                                <TabContent
                                    activeTab={verticalActiveTab}
                                    className="text-muted mt-4 mt-md-0"
                                >
                                    <TabPane tabId="1">
                                        <Form>
                                            <Row>
                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter First Name" />
                                                        <label htmlFor="floatingnameInput"> First Name <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Last Name" />
                                                        <label htmlFor="floatingnameInput"> Last Name  <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Email Id" />
                                                        <label htmlFor="floatingnameInput"> Email Id  <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option value="1">Active</option>
                                                            <option value="2">Inactive</option>
                                                            <option value="3">Deleted</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Company" />
                                                        <label htmlFor="floatingnameInput"> Company </label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Job Title" />
                                                        <label htmlFor="floatingnameInput"> Job Title </label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option value="1">Owner </option> 
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid"> Member Type <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>


                                            </Row>

                                        </Form>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div>
                                            <Row>
                                            <Col xl={12} className="">
                                          <div className="inner-repeater">
                                            {(rows1 || []).map((formRow, key) => (

                                              <Row className="mb-3 bg-light shadow-sm border border-1 border-grey-2" key={key}>
                                                <Col className="col-12">
                                                  <Row className="py-2">
                                                    <Col className="col-auto my-auto"> <h5 className="mb-0">Contact Detail</h5> </Col>
                                                    <Col className="col-auto ms-auto text-end">
                                                      <button
                                                        className="btn btn-orange border-0 rounded-circle center btn-small"
                                                        id="unknown-btn"
                                                        onClick={e => {
                                                          handleRemoveRow(formRow.id);
                                                        }}
                                                      >
                                                        <i className="fas fa-trash-alt" ></i>
                                                      </button>
                                                      <UncontrolledTooltip placement="top" target="unknown-btn">
                                                        Delete
                                                      </UncontrolledTooltip> </Col>
                                                  </Row>

                                                </Col>
                                                <div className="col-12 mb-3 px-0 hr-1 w-100"></div>
                                                <Col md={6}>
                                                  <div className="form-floating mb-3">
                                                    <select defaultValue="0" className="form-select">
                                                      <option value="0">--Select--</option>
                                                      <option value="1">Home</option>
                                                      <option value="2">Work</option>
                                                      <option value="3">Mobile</option>
                                                      <option value="3">Fax</option>
                                                      <option value="3">Other</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Type <span className="text-danger">*</span></label>
                                                  </div>
                                                </Col>

                                                <Col md={6} className="float">
                                                  {/* <label htmlFor="floatingnameInput"> Phone  <span className="text-danger">*</span></label> */}
                                                  <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={value}
                                                    defaultCountry="IN"
                                                    onChange={setValue} />
                                                </Col>

                                              </Row>
                                            ))}


                                            <Col className="col-12 text-end">
                                              <a onClick={() => {
                                                handleAddRowNested();
                                              }} className="text-decoration-underline" >
                                                <i className="fas fa-plus"></i>  Add Another Contact
                                              </a>

                                            </Col>

                                          </div>
                                        </Col>
                                         
                                            </Row>
                                        </div>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <TableContainer
                                            columns={columns1}
                                            data={data1}
                                            isGlobalFilter={true}
                                            customPageSize={10}
                                            isAddOptions={false}
                                            className="custom-header-css"
                                        />
                                    </TabPane>

                                    <TabPane tabId="4">
                                        <TableContainer
                                            columns={columns2}
                                            data={data2}
                                            isGlobalFilter={true}
                                            customPageSize={10}
                                            isAddOptions={false}
                                            className="custom-header-css"
                                        />
                                    </TabPane>

                                </TabContent>
                            </Col>
                        </Row>
 
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-green me-2 w-xs">Save</button>
                    <button className="btn btn-orange w-xs" onClick={toggle}>Cancel</button>
                </ModalFooter>
        </Modal>
    )
}

EditModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default EditModal