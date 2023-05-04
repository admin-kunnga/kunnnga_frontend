import React, { useState } from "react"
import Select from "react-select";
import classnames from "classnames";


import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";


function RentalApplicationTab(props) {

    //------======= filter bar Toggle =======---------
    const [toggle1, setToggle] = useState(true)


    // ------======= Add modal  =======---------
    const [modal_large, setmodal_large] = useState(false);
    function tog_large07() {
        setmodal_large(!modal_large); 
    }

    // ------====== navbar =======---------------
    const [verticalActiveTab, setverticalActiveTab] = useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };


    // ------======= select options =======---------
    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionFilter1 = [
        {
            options: [
                { label: "Building One", value: "One" },
                { label: "Building One", value: "Two" },
            ],
        },
    ];

    const optionFilter2 = [
        {
            options: [
                { label: "Occupied", value: "Mastercard" },
                { label: "None Occupied", value: "Visa" },
            ],
        },
    ];

    // -------====== Form Repeater ======------
    const [formRows, setFormRows] = useState([{ id: 1 }]);
    // form add row
    const onAddFormRow = () => {
        const modifiedRows = [...formRows];
        modifiedRows.push({ id: modifiedRows.length + 1 });
        setFormRows(modifiedRows);
    };

    // delete row
    const onDeleteFormRow = id => {
        if (id !== 1) {
            var modifiedRows = [...formRows];
            modifiedRows = modifiedRows.filter(x => x["id"] !== id);
            setFormRows(modifiedRows);
        }
    };



    return (
        <React.Fragment>
            <Card className="mb-0">
                <CardBody className="pb-0">
                    <Row>
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
                        <Col sm={2}>
                            <button className="btn btn-primary" onClick={() => setToggle(!toggle1)} >
                                <i className="fas fa-sliders-h"></i>
                            </button>

                        </Col>
                        <Col className="col-auto ms-auto">
                            <button className="btn btn-primary me-2" type="button" onClick={() => { tog_large07(); }} data-toggle="modal" data-target=".bs-example-modal-lg" id="AddNewApplication">
                                <i className="fas fa-plus" type="button"
                                ></i>
                                <UncontrolledTooltip placement="top" target="AddNewApplication">
                                    New Application
                                </UncontrolledTooltip>
                            </button>
                        </Col>
                    </Row>
                    {!toggle1 && (
                        <Row>
                            <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                <Label htmlFor=""> Building   </Label>
                                <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                        handleSelectGroup();
                                    }}
                                    options={optionFilter1}
                                    className="select2-selection"
                                />
                            </Col>

                            <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                <Label htmlFor=""> Status   </Label>
                                <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                        handleSelectGroup();
                                    }}
                                    options={optionFilter2}
                                    className="select2-selection"
                                />
                            </Col>


                            <Col xs={6} sm={4} lg={3} xl={2} className="mb-3 mt-auto">
                                <button className="btn btn-primary w-100">Filter</button>
                            </Col>

                        </Row>
                    )}


                </CardBody>
            </Card>


            {/* modal  */}
            <Modal
                centered={true}
                size="lg"
                isOpen={modal_large}
                toggle={() => {
                    tog_large07();
                }}
            >
                <div className="modal-header">
                    <h5
                        className="modal-title mt-0"
                        id="myLargeModalLabel"
                    >
                        New Application
                    </h5>
                    <button
                        onClick={() => {
                            setmodal_large(false);
                        }}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Row>
                        <Col md="3">
                            <Nav pills className="flex-column">
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({ "mb-2": true, active: verticalActiveTab === "1", })} onClick={() => { toggleVertical("1"); }}  >
                                        Personal Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "2",
                                        })} onClick={() => { toggleVertical("2"); }}  > Identification Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({ "mb-2": true, active: verticalActiveTab === "3", })} onClick={() => { toggleVertical("3"); }}  >    Address
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "4",
                                        })} onClick={() => { toggleVertical("4"); }} >  Emergency Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "5",
                                        })} onClick={() => { toggleVertical("5"); }} >  Employment
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "6",
                                        })} onClick={() => { toggleVertical("6"); }} >  References
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "7",
                                        })} onClick={() => { toggleVertical("7"); }} >  Miscellaneous
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "8",
                                        })} onClick={() => { toggleVertical("8"); }} >  Vehicle
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            active: verticalActiveTab === "9",
                                        })} onClick={() => { toggleVertical("9"); }} >  Persons
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="9">
                            <TabContent
                                activeTab={verticalActiveTab}
                                className="text-muted mt-4 mt-md-0">

                                <TabPane tabId="1">
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
                                                <label htmlFor="floatingnameInput"> Username  <span className="text-danger">*</span></label>
                                            </div>
                                        </Col>


                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
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

                                        <Col lg={12} className="text-end mt-4">
                                            <button className="btn btn-primary me-2 w-xs">Save</button>
                                            <button className="btn btn-light border-primary w-xs">Cancel</button>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="2">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
                                                <select defaultValue="1" className="form-select">
                                                    <option value="1">India</option>
                                                    <option value="2">UAE</option>
                                                    <option value="3">USA</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Country<span className="text-danger">*</span> </label>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
                                                <select defaultValue="1" className="form-select">
                                                    <option value="1">Active</option>
                                                    <option value="2">Inactive</option>
                                                    <option value="3">Deleted</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Identification type <span className="text-danger">*</span> </label>
                                            </div>
                                        </Col>

                                        <Col lg={6} className="mb-3">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                <label htmlFor="floatingnameInput"> Number <span className="text-danger">*</span></label>
                                            </div>
                                        </Col>

                                        <Col lg={6} className="mb-3">
                                            <div className="form-floating">
                                                <input type="file" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                <label htmlFor="floatingnameInput"> Document <span className="text-danger">*</span></label>
                                            </div>
                                        </Col>

                                        <Col lg={12} className="mt-4 text-end">
                                            <button className="btn btn-primary me-2 w-xs">Save</button>
                                            <button className="btn btn-light border-primary w-xs">Cancel</button>
                                        </Col>

                                    </Row>
                                </TabPane>

                                <TabPane tabId="3">
                                    <Form>
                                        <Row>

                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 1  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 2 </label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 3 </label>
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> City <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" />
                                                    <label htmlFor="floatingnameInput"> Country </label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" />
                                                    <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                            <Row className="text-end">
                                                <Col>
                                                    <button className="btn btn-primary w-xs me-2">Save</button>
                                                    <button className="btn btn-light border-primary w-xs">Cancel</button>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Form>
                                </TabPane>

                                <TabPane tabId="4" className="delete-repeater">
                                    {(formRows || []).map((formRow, key) => (
                                        <Row key={key}>
                                            <Col className="delete-button col-12 mb-3 text-end"> <button type="button" className="btn btn-danger" value="Delete"
                                                onClick={() => onDeleteFormRow(formRow.id)}>  <i className="fas fa-trash-alt font-size-20" ></i> </button></Col>
                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter First Name" />
                                                    <label htmlFor="floatingnameInput">First Name <span className="text-danger">*</span></label>
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
                                                    <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Email" />
                                                    <label htmlFor="floatingnameInput"> Email  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Phone" />
                                                    <label htmlFor="floatingnameInput"> Phone  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Relationship" />
                                                    <label htmlFor="floatingnameInput">Relationship  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Address" />
                                                    <label htmlFor="floatingnameInput"> Address  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Row className="mt-4">
                                        <Col className="col-auto">
                                            <button type="button"
                                                className="btn btn-success"
                                                value="Add"
                                                onClick={() => onAddFormRow()}> Add Contact</button>
                                        </Col>
                                        <Col className="col-auto ms-auto text-end">
                                            <button className="btn btn-primary me-2 w-xs">Save</button>
                                            <button className="btn btn-light border-primary w-xs">Cancel</button>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId="5">
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <select defaultValue="1" className="form-select">
                                                        <option value="1">DD</option>
                                                        <option value="2"> DD - 1 </option>
                                                        <option value="3"> DD - 2 </option>
                                                        <option value="3"> DD - 3  </option>
                                                        <option value="3">  DD - 4  </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Occupation Type </label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name of the Employer" />
                                                    <label htmlFor="floatingnameInput"> Name of the Employer <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Job Title" />
                                                    <label htmlFor="floatingnameInput"> Job Title <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Joining Date" />
                                                    <label htmlFor="floatingnameInput">  Joining Date <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>
                                            

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" />
                                                    <label htmlFor="floatingnameInput"> Country </label>
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" />
                                                    <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                            <Row className="text-end">
                                                <Col>
                                                    <button className="btn btn-primary w-xs me-2">Save</button>
                                                    <button className="btn btn-light border-primary w-xs">Cancel</button>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Form>
                                </TabPane>

                                <TabPane tabId="6">
                                </TabPane>

                                <TabPane tabId="7">
                                </TabPane>

                                <TabPane tabId="8">
                                </TabPane>

                                <TabPane tabId="9">
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>
            </Modal>


            <div>
                <div className="table-responsive">
                    <Table className="project-list-table table-nowrap align-middle table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"> Applicant Name	 </th>
                                <th scope="col"> Properties	 </th>
                                <th scope="col"> Desired Move In Date </th>
                                <th scope="col"> Contact Information</th>
                                <th scope="col"> Status	</th>
                                <th scope="col" className="text-center"> Action	 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name  </td>
                                <td>  Building Name </td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="primary">Submitted</Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name 2  </td>
                                <td>  Building Name 2</td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="danger"> Cancelled</Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name 3  </td>
                                <td>  Building Name 3</td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="success"> Approved </Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name  </td>
                                <td>  Building Name </td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="primary">Submitted</Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name 2  </td>
                                <td>  Building Name 2</td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="danger"> Cancelled</Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>

                            <tr>
                                <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Applicant Name 3  </td>
                                <td>  Building Name 3</td>
                                <td>  12-03-2023 </td>
                                <td>  Email Address <br /> Phone Number </td>
                                <td>  <Badge color="success"> Approved </Badge> </td>

                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem onClick={() => {
                                                const customerData = cellProps.row.original;
                                                handleCustomerClick(customerData);
                                            }} >
                                                <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                                View
                                                <UncontrolledTooltip placement="top" target="ViewTooltip">
                                                    View
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem                                                                         >
                                                <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                                Edit
                                                <UncontrolledTooltip placement="top" target="edittooltip">
                                                    Edit
                                                </UncontrolledTooltip>
                                            </DropdownItem>

                                            <DropdownItem >
                                                <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                                Inactive
                                                <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                                    Inactive
                                                </UncontrolledTooltip>
                                            </DropdownItem>


                                            <DropdownItem href="#"
                                                onClick={() => {
                                                    const customerData = cellProps.row.original;
                                                    onClickDelete(customerData);
                                                }}>
                                                <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                                Delete
                                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                                    Delete
                                                </UncontrolledTooltip>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </div>

        </React.Fragment>
    )
}

export default RentalApplicationTab