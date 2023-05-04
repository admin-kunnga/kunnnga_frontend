import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types"
import classnames from "classnames"
import Select from "react-select";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import {
    Button, Col, Row, UncontrolledTooltip, Modal, ModalHeader, Badge, ModalBody, Form, Table, Input, FormFeedback, Label, InputGroup, Card, FormGroup,
    CardBody, Dropdown, ModalFooter,Nav, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink, TabContent, TabPane,
} from "reactstrap";

import TableContainer from "../../../components/Common/TableContainer";
import avatar from "../../../assets/images/users/avatar-1.jpg";


const EditModal = props => {
    const { isOpen, toggle } = props


    // ---==== tab ==-----------------

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab]
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
                setPassedSteps(modifiedSteps)
            }
        }
    }

    // ---==== phone input ====----
    const [value, setValue] = useState()

    // ================= select ========
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionRoles = [
        {
            options: [
                { label: "Manager", value: "Plan" },
                { label: "Developer", value: "Ticket" },
                { label: "Team Lead", value: "Ticket & Phone" },
                { label: "Editor", value: "Ticket & Phone" },

            ],
        },
    ];


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


    const [activeTab, setactiveTab] = useState(1)

    // -----==== table ======----
    const columns2 = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Position',
                accessor: 'position'
            },
            {
                Header: 'Office',
                accessor: 'office'
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Start date',
                accessor: 'startDate'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
        ],
        []
    );

    const data = [
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        },
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        },

    ];


    // ====== vertical tabs ===============
    const [verticalActiveTab, setverticalActiveTab] = useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    return (
        <Modal
            isOpen={isOpen} size="lg" scrollable={true} role="dialog" autoFocus={true} centered={true} className="full-modal exampleModal"
            tabIndex="-1" toggle={toggle}  > 
                <div className="modal-header">
                    <h5
                        className="modal-title mt-0"
                        id="myLargeModalLabel" >
                        Edit User
                    </h5> 
                    <button onClick={toggle}  type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>


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
                                            active: verticalActiveTab === "1",
                                        })}
                                        onClick={() => {
                                            toggleVertical("1");
                                        }}
                                    >
                                        User Details
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
                                    >
                                        Contact Details
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
                                    >
                                        Roles
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
                                        Photo
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="9">
                            <TabContent
                                activeTab={verticalActiveTab}
                                className="text-muted mt-4 mt-md-0"
                            >
                                <TabPane tabId="1">
                                    <Form>
                                        <Row>

                                            <Col lg={6} xl={4} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput">First Name <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} xl={4} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Middle Name </label>
                                                </div>
                                            </Col>

                                            <Col lg={6} xl={4} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Last Name  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Email Id  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>


                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <select defaultValue="1" className="form-select" disabled >
                                                        <option value="1">Active</option>
                                                        <option value="2">Inactive</option>
                                                        <option value="3">Deleted</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Status  <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Company </label>
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Job Title</label>
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
                                                                        <Button
                                                                            className="btn btn-orange border-0 rounded-circle center btn-small"
                                                                            id="unknown-btn"
                                                                            onClick={e => {
                                                                                handleRemoveRow(formRow.id);
                                                                            }}
                                                                        >
                                                                            <i className="fas fa-trash-alt" ></i>
                                                                        </Button>
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
                                    <div>
                                        {/* <Form>
                                            <TableContainer
                                                columns={columns2}
                                                data={data}
                                                isGlobalFilter={true}
                                                isAddOptions={false}
                                                customPageSize={20}
                                                className="custom-header-css"
                                            />
                                        </Form> */}
                                        {/* <Label htmlFor=""> Roles   </Label>
                                        <Select
                                            value={selectedGroup}
                                            isMulti={true}
                                            hideSelectedOptions={true}
                                            onChange={() => {
                                                handleSelectGroup();
                                            }}
                                            options={optionRoles}
                                            className="select2-selection"
                                        /> */}
                                          <Label htmlFor="productdesc">
                            Roles
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                            placeholder=""
                          />

                                        <p className="text-muted mt-2">* Select roles to assign to this user. You may assign up to 50 roles per user.</p>
                                    </div>
                                </TabPane>

                                <TabPane tabId="4">
                                    <Row>
                                        <Col className="col-auto position-relative">
                                            <img src={avatar} className="avatar-xl img-thumbnail" alt="" />
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <button className="btn btn-xs center btn-primary rounded-circle me-2">
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button className="btn btn-xs center btn-orange rounded-circle">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </Col>
                                        <Col className="col-auto position-relative">
                                            <img src={avatar} className="avatar-xl img-thumbnail" alt="" />
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <button className="btn btn-xs center btn-primary rounded-circle me-2">
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button className="btn btn-xs center btn-orange rounded-circle">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>
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