import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink,
    Label, Form, TabContent, Button, UncontrolledTooltip, Input, Table, InputGroup, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, ModalFooter, Badge, Dropdown, FormGroup
} from "reactstrap"
import classnames from "classnames";
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import Switch from "react-switch";
import Select from "react-select";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import TableContainer from '../../../components/Common/TableContainer';

function Cards(props) {

    //------======= modal ======-----
    const [modal_xlarge, setmodal_xlarge] = useState(false);
    const [modal_xlarge2, setmodal_xlarge2] = useState(false);
    const [modal_xlarge3, setmodal_xlarge3] = useState(false);


    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
        removeBodyCss();
    }

    function tog_xlarge2() {
        setmodal_xlarge2(!modal_xlarge2);
        removeBodyCss();
    }

    function tog_xlarge3() {
        setmodal_xlarge3(!modal_xlarge3);
        removeBodyCss();
    }

    // ---===== tabs =====----
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const [verticalActiveTab2, setverticalActiveTab2] = useState("1");
    const [verticalActiveTab3, setverticalActiveTab3] = useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    const toggleVertical2 = (tab) => {
        if (verticalActiveTab2 !== tab) {
            setverticalActiveTab2(tab);
        }
    };

    const toggleVertical3 = (tab) => {
        if (verticalActiveTab3 !== tab) {
            setverticalActiveTab3(tab);
        }
    };

    // ----===== drag and drop ====------

    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }
    /* Formats the size */
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }



    // ------======= Form Repeater ======--------- 
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


    // ---=== phone input ===-----
    const [value, setValue] = useState()


    // --------========= select options =======----------

    // select option
    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionGroup = [
        {
            // label: "Picnic",
            options: [
                { label: "Plan", value: "Plan" },
                { label: "Ticket", value: "Ticket" },
                { label: "Ticket & Phone", value: "Ticket & Phone" },
            ],
        },
    ];

    const OptionCurrency = [
        {
            options: [
                { label: "INR", value: "India" },
                { label: "USD", value: "UAE" },
                { label: "AED", value: "UAE" },
                { label: "BHD", value: "UAE" },
            ],
        },
    ];
    const optionStatus = [
        {
            options: [
                { label: "Active", value: "India" },
                { label: "Expired", value: "UAE" },
                { label: "Deleted", value: "UAE" },
                { label: "Cancelled", value: "UAE" },

            ],
        },
    ];

    const PaymentMethod = [
        {
            options: [
                { label: "Cheque", value: "India" },
                { label: "Cash", value: "UAE" },
                { label: " Bank Transfer", value: "UAE" },

            ],
        },
    ];


    // ----------======= table Code ========----------
    const columns = useMemo(
        () => [

            {
                Header: 'Subscription Id',
                accessor: 'id',
            },
            {
                Header: 'Plan Name',
                accessor: 'plans',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Start Date',
                accessor: 'startDate',
            },
            {
                Header: 'Expiry Date',
                accessor: 'endDate',
            },
            {
                Header: 'Status',
                accessor: 'Active',
                Cell: (cellProps) => {
                    return <>
                        <Badge pill color="danger" className="">
                            Inactive
                        </Badge>
                    </>
                }
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    return (
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
                                    View Details
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                        View Details
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem
                                    onClick={() => {
                                        const customerData = cellProps.row.original;
                                        handleCustomerClick(customerData);
                                    }}  >

                                    <i className="fas fa-receipt font-size-16 me-2" id="InvoiceTooltip"></i>
                                    Download Invoice
                                    <UncontrolledTooltip placement="top" target="InvoiceTooltip">
                                        Download  Invoice
                                    </UncontrolledTooltip>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    );
                },
            },
        ],
        []
    );
    const columns2 = useMemo(
        () => [

            {
                Header: 'Subscription Id',
                accessor: 'id',
            },
            {
                Header: 'Plan Name',
                accessor: 'plans',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Start Date',
                accessor: 'startDate',
            },
            {
                Header: 'Expiry Date',
                accessor: 'endDate',
            },
            {
                Header: 'Status',
                accessor: 'Active',
                Cell: (cellProps) => {
                    return <>
                        <Badge pill color="danger" className="">
                            Inactive
                        </Badge>
                    </>
                }
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    return (
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
                                    View Details
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                        View Details
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem
                                    onClick={() => {
                                        const customerData = cellProps.row.original;
                                        handleCustomerClick(customerData);
                                    }}  >

                                    <i className="fas fa-receipt font-size-16 me-2" id="InvoiceTooltip"></i>
                                    Download Invoice
                                    <UncontrolledTooltip placement="top" target="InvoiceTooltip">
                                        Download  Invoice
                                    </UncontrolledTooltip>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    );
                },
            },
        ],
        []
    );

    const data = [
        {
            "plans": "Gold",
            "id": "#520",
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$357,650"
        },
        {
            "id": "#521",
            "plans": "Silver",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Individual",
            "salary": "$92,575"
        },
        {
            "id": "#521",
            "plans": "Platinum",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$92,575"
        },

        {
            "id": "#521",
            "plans": "Gold",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Individual",
            "salary": "$92,575"
        },


        {
            "id": "#521",
            "plans": "Silver",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$92,575"
        },

    ];
    const data2 = [
        {
            "plans": "Gold",
            "id": "#520",
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$357,650"
        },];





    // ------=====switch box=====------------------
    // ----switch box 
    const [sq2, setsq2] = useState(true);


    // ------==== Dropdown ===---------
    const [singlebtn, setSinglebtn] = useState(false)
    const [singlebtn1, setSinglebtn1] = useState(false)



    return (
        <React.Fragment>

            <h5 className="mb-4">Account Details </h5>
            <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <Col type="button" onClick={() => { tog_xlarge(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card className="border">
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                <h5 className="mb-0 flex-grow-1 d-flex align-content-center justify-content-between"> <span>Customer</span> <span className="text-primary">2</span> </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Modal size="lg" scrollable={true} centered="true" isOpen={modal_xlarge} toggle={() => { tog_xlarge(); }} className="full-modal">
                    <div className="modal-header">
                        <h5
                            className="modal-title mt-0"
                            id="myExtraLargeModalLabel">
                            Customer
                        </h5> 
                        <button onClick={() => {setmodal_xlarge(false); }}
                          type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>


                    </div>
                    <div className="modal-body">
                        <Row>
                            <Col md="4" xl="3">
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true, active: verticalActiveTab === "1",
                                            })} onClick={() => { toggleVertical("1"); }}  >
                                            Customer Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab === "2", })} onClick={() => { toggleVertical("2"); }}  >
                                            Address
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab === "3", })} onClick={() => { toggleVertical("3"); }}  >  Contact Details
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="8" xl="9">
                                <TabContent
                                    activeTab={verticalActiveTab}
                                    className="text-muted mt-4 mt-md-0"                                        >
                                    <TabPane tabId="1">
                                        <Form>
                                            <Row>
                                                <Col lg={12} className="mb-3">
                                                    <Row>
                                                        <Col sm="6">
                                                            <Label htmlFor="" className="mb-1"> Logo  <span className="text-danger">*</span> </Label>
                                                            <Dropzone
                                                                onDrop={acceptedFiles => {
                                                                    handleAcceptedFiles(acceptedFiles)
                                                                }}
                                                            >
                                                                {({ getRootProps, getInputProps }) => (
                                                                    <div className="dropzone">
                                                                        <div
                                                                            className="dz-message needsclick mt-2"
                                                                            {...getRootProps()}
                                                                        >
                                                                            <input {...getInputProps()} />
                                                                            <div className="mb-3">
                                                                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                                            </div>
                                                                            <h4>Drop Logo here or click to upload.</h4>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Dropzone>
                                                        </Col>
                                                        <Col sm="6">
                                                            <Label htmlFor="" className="mb-1"> Logo Preview </Label>
                                                            <div className="border border-rounded rounded-3">
                                                                <div className="dropzone-previews mt-3 mt-sm-0" id="file-previews">
                                                                    {selectedFiles.map((f, i) => {
                                                                        return (
                                                                            <Card
                                                                                className=" mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                                key={i + "-file"}
                                                                            >
                                                                                <Row className="p-2">
                                                                                    <Col className="col-12 text-center">
                                                                                        <img
                                                                                            data-dz-thumbnail=""
                                                                                            height="180"
                                                                                            className="avatar-xxl rounded bg-light"
                                                                                            alt={f.name}
                                                                                            src={f.preview}
                                                                                        />
                                                                                    </Col>
                                                                                    <Col className="col-12 text-center">
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="text-muted font-weight-bold"
                                                                                        >
                                                                                            {f.name}
                                                                                        </Link>
                                                                                        <p className="mb-0">
                                                                                            <strong>{f.formattedSize}</strong>
                                                                                        </p>
                                                                                    </Col>
                                                                                </Row>
                                                                            </Card>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="number" className="form-control" id="floatingnameInput" value="78958" disabled />
                                                        <label htmlFor="floatingnameInput"> Customer ID <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                        <label htmlFor="floatingnameInput"> Name of the Customer  <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option>--Select-- </option>
                                                            <option value="1">Subscription</option>
                                                            <option value="2">Category</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Type <span className="text-danger">*</span> </label>
                                                    </div>

                                                </Col>

                                                <Col lg={6} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select" disabled>
                                                            <option>--Select-- </option>
                                                            <option value="1">Active</option>
                                                            <option value="2">Expired</option>
                                                            <option value="2">Deleted</option>
                                                            <option value="2">Canceled</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} xl={4} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option>--Select-- </option>
                                                            <option value="1">India</option>
                                                            <option value="2">USA</option>
                                                            <option value="2">UAE</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Country <span className="text-danger">*</span></label>
                                                    </div>
                                                </Col>

                                                <Col lg={6} xl={4} className="mb-3">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USD" disabled />
                                                        <label htmlFor="floatingnameInput">Currency  <span className="text-danger">*</span></label>
                                                    </div>


                                                </Col>

                                                <Col lg={6} xl={4} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option>--Select-- </option>
                                                            <option value="1">INR</option>
                                                            <option value="2">USD</option>
                                                            <option value="2">CAD</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Reporting Currency  <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                            </Row>

                                        </Form>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div>
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


                                                    <Col md={6} lg={4} xl={3} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput"> City <span className="text-danger">*</span></label>
                                                        </div>
                                                    </Col>


                                                    <Col md={6} lg={4} xl={3} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                        </div>
                                                    </Col>


                                                    <Col md={6} lg={4} xl={3} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" disabled />
                                                            <label htmlFor="floatingnameInput"> Country </label>
                                                        </div>
                                                    </Col>

                                                    <Col md={6} lg={4} xl={3} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                            <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                        </div>
                                                    </Col>


                                                </Row>
                                            </Form>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div>
                                            <Form>
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
                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <select defaultValue="1" className="form-select">
                                                                                <option >--Select-- </option>
                                                                                <option value="1">Account Owner</option>
                                                                                <option value="2">Buyer</option>
                                                                                <option value="2">IT Admin</option>

                                                                            </select>
                                                                            <label htmlFor="floatingSelectGrid">Type <span className="text-danger">*</span> </label>
                                                                        </div>
                                                                    </Col>

                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                            <label htmlFor="floatingnameInput"> Name  <span className="text-danger">*</span></label>
                                                                        </div>
                                                                    </Col>

                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                            <label htmlFor="floatingnameInput"> Email Address  <span className="text-danger">*</span></label>
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
                                            </Form>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                    <ModalFooter>
                        <Row>
                            <Col className="mt-4 text-end">
                                <button className="btn btn-green me-2 w-xs">Save </button>
                                <button className="btn btn-orange w-xs">Cancel </button>
                            </Col>
                        </Row>
                    </ModalFooter>
                </Modal>


                <Col type="button" onClick={() => { tog_xlarge2(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card className="border">
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-money-check-alt"></i></span>
                                <h5 className="mb-0"> Subscriptions </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Modal size="xl" scrollable={true} centered="true" isOpen={modal_xlarge2} toggle={() => { tog_xlarge2(); }}>
                    <div className="modal-header">
                        <h5 className="modal-title mt-0">  Subscriptions  </h5>
                        
                        <button onClick={() => {setmodal_xlarge2(false); }}
                          type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>


                    </div>
                    <div className="modal-body">
                        <Row>
                            <Col md="3" xl="2">
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true, active: verticalActiveTab2 === "1",
                                            })} onClick={() => { toggleVertical2("1"); }}  >
                                            Plan Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab2 === "2", })} onClick={() => { toggleVertical2("2"); }}  >
                                            History
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="9" xl="10">
                                <TabContent activeTab={verticalActiveTab2} className="text-muted mt-4 mt-md-0">

                                    <TabPane tabId="1">
                                        <Row>
                                            <Col className="mb-3 col-12">
                                                <TableContainer
                                                    columns={columns2}
                                                    data={data2}
                                                    isGlobalFilter={true}
                                                    isAddOptions={false}
                                                    customPageSize={20}
                                                    className="custom-header-css"
                                                />
                                            </Col>
                                            <Col lg={6} xl={4} className="px-2">
                                                <Card className="border">
                                                    <CardBody>

                                                        <CardTitle className="h4 mb-3 fw-700">
                                                            Billing Address
                                                        </CardTitle>

                                                        <Row className="">
                                                            <Col sm={12} className="">
                                                                <CardText>Buyer name</CardText>
                                                                <CardText>Name Of Ghe Company</CardText>
                                                                <CardText>Address - Billing Address </CardText>

                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col lg={6} xl={4} className="px-2">
                                                <Card className="border">
                                                    <CardBody>
                                                        <CardTitle className="h4 mb-3 fw-700">
                                                            Order Details:
                                                        </CardTitle>

                                                        <div className="table-responsive">
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="text-center">Item escription</th>
                                                                        <th className="text-center"> Quantity </th>
                                                                        <th className="text-center"> Available </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>No. Of Properties</td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>No. Of Units </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> No. Of Users </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <p> Include document storage upto 10GB</p>
                                                        <p> Support Modal - Ticket + Phone</p>

                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col lg={6} xl={4} className="px-2">
                                                <Card className="border">
                                                    <CardBody>

                                                        <CardTitle className="h4 mb-3 fw-700">
                                                            Payment Details:   </CardTitle>
                                                        <div className="table-responsive">
                                                            <table className="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td> Transaction id</td>
                                                                        <td> :A1254659855</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Transaction Date </td>
                                                                        <td> :12/02/2023</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Payment Mehtod </td>
                                                                        <td> :Bank Transfer</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Currency </td>
                                                                        <td> :INR</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Ammount </td>
                                                                        <td className="text-end">: 1,000 </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Discount </td>
                                                                        <td className="text-end">: 10% </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Tax </td>
                                                                        <td className="text-end">: 162 </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Net Payment </td>
                                                                        <td className="text-end">: 1062 </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Status </td>
                                                                        <td className="">: Paid </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </Col>



                                        </Row>
                                    </TabPane>


                                    <TabPane tabId="2">
                                        <TableContainer
                                            columns={columns}
                                            data={data}
                                            isGlobalFilter={true}
                                            isAddOptions={false}
                                            customPageSize={20}
                                            className="custom-header-css"
                                        />
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                </Modal>

                <Col type="button" onClick={() => { tog_xlarge3(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card className="border">
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"><i className="fas fa-align-center"></i> </span>
                                <h5 className="mb-0 ">  Default Settings  </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Modal size="lg" scrollable={true} centered="true" isOpen={modal_xlarge3} toggle={() => { tog_xlarge3(); }} className="full-modal">
                    <div className="modal-header">
                        <h5
                            className="modal-title mt-0"
                            id="myExtraLargeModalLabel">
                            Default Settings
                        </h5> 

                        <button onClick={() => {setmodal_xlarge3(false); }}
                          type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>


                    </div>
                    <div className="modal-body">
                        <Row>
                            <Col md="4" xl="3">
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true, active: verticalActiveTab3 === "1",
                                            })} onClick={() => { toggleVertical3("1"); }}  >
                                            Language
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab3 === "2", })} onClick={() => { toggleVertical3("2"); }}  >
                                            Date & Time
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab3 === "3", })} onClick={() => { toggleVertical3("3"); }}  >
                                            Currency
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({ "mb-2": true, active: verticalActiveTab3 === "4", })} onClick={() => { toggleVertical3("4"); }}  >
                                            Numbers
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="8" xl="9">
                                <TabContent
                                    activeTab={verticalActiveTab3}
                                    className="text-muted mt-4 mt-md-0"
                                >
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="2" className="form-select">
                                                        <option >--Select-- </option>
                                                        <option value="1"> English </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Language <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Form>
                                            <Row>
                                                <Col lg={12} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option >--Select-- </option>
                                                            <option value="1"> DD/MM/YY </option>
                                                            <option value="2"> MM/DD/YY </option>
                                                            <option value="2"> YYYY/MM/DD </option>
                                                            <option value="2"> DD.MM.YY </option>
                                                            <option value="2"> MM.DD.YY </option>
                                                            <option value="2"> YYYY.MM.DD </option>
                                                            <option value="2"> DD.MM.YYYY</option>
                                                            <option value="2"> DD/MM/YYYY </option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid"> Date Format <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                                <Col lg={12} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option>--Select-- </option>
                                                            <option value="1"> 24-Hour Clock</option>
                                                            <option value="2">  12-Hour Clock </option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid"> Time Format <span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                                <Col lg={12} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option value="0">--Select--</option>
                                                            <option value="1">(UTC-03:00) Salvador</option>
                                                            <option value="1">(UTC-02:00) Femando de Noronha</option>
                                                            <option value="1">(UTC-01:00) Azoers</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Time Zone <span className="text-danger">*</span> </label>
                                                    </div>
                                                    <FormGroup className="mt-1">
                                                        <Input type="checkbox" className="me-2" />
                                                        <Label check>
                                                            Set Time Zone Automatically
                                                        </Label>
                                                    </FormGroup>
                                                </Col>

                                                <Col lg={12} className="mb-3">
                                                    <div className="form-floating">
                                                        <select defaultValue="1" className="form-select">
                                                            <option>--Select-- </option>
                                                            <option value="1"> Monday </option>
                                                            <option value="1"> Tuesday </option>
                                                            <option value="1"> Wednesday </option>
                                                            <option value="1"> Thursday </option>
                                                            <option value="1"> Friday </option>
                                                            <option value="1"> Saturday </option>
                                                            <option value="1"> Sunday </option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid"> Week Start Day<span className="text-danger">*</span> </label>
                                                    </div>
                                                </Col>

                                            </Row>

                                        </Form>

                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Row>
                                            <Col sm={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="2" className="form-select">
                                                        <option> --Select-- </option>
                                                        <option value="1"> INR </option>
                                                        <option value="2"> USD </option>
                                                        <option value="2"> AED </option>
                                                        <option value="2"> BHD </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Default Currency <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                            <Col sm={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="2" className="form-select">
                                                        <option> --Select-- </option>
                                                        <option value="1"> INR </option>
                                                        <option value="2"> USD </option>
                                                        <option value="2"> AED </option>
                                                        <option value="2"> BHD </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Reporting Currency <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>
 
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Row>
                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="1" className="form-select">
                                                        <option>--Select-- </option>
                                                        <option value="1"> # </option>
                                                        <option value="2"> ##</option>
                                                        <option value="2"> ###.00  </option>
                                                        <option value="2"> ###,###.00</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Number Format <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                    <ModalFooter className="text-end">
                        <button className="btn btn-green w-xs me-2">Save</button>
                        <button className="btn btn-orange w-xs">Cancel</button>
                    </ModalFooter>
                </Modal>
            </Row>

        </React.Fragment>
    )
}


export default Cards
