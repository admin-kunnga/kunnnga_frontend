import React, { useState, useMemo } from "react";
import { Container } from "reactstrap"
import classnames from "classnames"
import Select from "react-select";
import PropTypes from 'prop-types';
import Dropzone from "react-dropzone"
import Switch from "react-switch";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import TableContainer from '../../../components/Common/TableContainer';




//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Badge, InputGroup, Col, Modal, Card, CardText, Nav, CardBody, Label, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom"



const PagesStarter = () => {

    // modal---
    const [modal_large, setmodal_large] = useState(false);
    function tog_large() {
        setmodal_large(!modal_large);
        removeBodyCss();
    }

    // --==== filter toggle ====-----
    const [toggle1, setToggle] = useState(true);




    const [activeTabVartical, setoggleTabVertical] = useState(1)
    const [passedStepsVertical, setPassedStepsVertical] = useState([1])


    function toggleTabVertical(tab) {
        if (activeTabVartical !== tab) {
            var modifiedSteps = [...passedStepsVertical, tab]

            if (tab >= 1 && tab <= 3) {
                setoggleTabVertical(tab)
                setPassedStepsVertical(modifiedSteps)
            }
        }
    }



    // ----===== drag and drop ====-----

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

    // ----switch box 
    const [sq2, setsq2] = useState(true);

    // =-------=
    


    const columns = useMemo(
        () => [

            {
                Header: 'Subscription ID',
                accessor: 'id',
            },
            {
                Header: 'Plan Name',
                accessor: 'name',
            },
            {
                Header: 'Category',
                accessor: 'category'
            },

            {
                Header: 'Discount Code',
                accessor: 'age'
            },
            {
                Header: 'Start date',
                accessor: 'startDate'
            },
            {
                Header: 'Expiry date',
                accessor: 'endDate'
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

                                <DropdownItem >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                        View
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                        Edit
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem  >
                                    <i className="fas fa-times  font-size-16 me-2" id="CancelTooltip"></i>
                                    Cancel
                                    <UncontrolledTooltip placement="top" target="CancelTooltip">
                                        Cancel
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

                                {/* <DropdownItem
                                    onClick={() => {
                                        const customerData = cellProps.row.original;
                                        handleCustomerClick(customerData);
                                    }}  >
                                    <i className="fas fa-random font-size-16 me-2" id="Transfertooltip"></i>
                                    Transfer
                                    <UncontrolledTooltip placement="top" target="Transfertooltip">
                                        Transfer
                                    </UncontrolledTooltip>
                                </DropdownItem> */}

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




    const [activeTab, setactiveTab] = useState(1)

    const [passedSteps, setPassedSteps] = useState([1])

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab]
            if (tab >= 1 && tab <= 5) {
                setactiveTab(tab)
                setPassedSteps(modifiedSteps)
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




    // select option
    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionType = [
        {
            options: [
                { label: "Subscription", value: "India" },
                { label: "Category", value: "UAE" },
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

    const optionStatus = [
        {
            options: [
                { label: "Paid", value: "India" },
                { label: "Failed", value: "UAE" },
                { label: "Not Paid", value: "UAE" },

            ],
        },
    ];

    const optionCountries = [
        {
            options: [
                { label: "India", value: "India" },
                { label: "USA", value: "UAE" },
                { label: "UAE", value: "UAE" },

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

    const optionType2 = [
        {
            options: [
                { label: "Account Owner", value: "Account Owner" },
                { label: "Buyer", value: "Buyer" },
                { label: "IT Admin", value: "IT Admin" },

            ],
        },
    ];

    const optionFilter3 = [
        {
            options: [
                { label: "Active", value: "Active" },
                { label: "Expired", value: "Inactive" },
                { label: "Cancelled", value: "Inactive" },
                { label: "Deleted", value: "Inactive" },
            ],
        },
    ];


    // ---=== phone input ===-----
    const [value, setValue] = useState()

    //meta title
    document.title = "Kunnga - Enterprise Portal";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Account Management / Customer" breadcrumbItem="Account Details" />

                    <Row>
                        <Col xs={12}>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-3">New Account</h4>
                                    <div className="wizard clearfix">
                                        <div className="steps clearfix">
                                            <ul>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 1 })} >
                                                    <NavLink
                                                        className={classnames({ current: activeTab === 1 })}
                                                        onClick={() => {
                                                            setactiveTab(1)
                                                        }}
                                                    >
                                                        <span className="number">1.</span>
                                                        <span > Customer Details</span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 2 })} >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 2 })}
                                                        onClick={() => {
                                                            setactiveTab(2)
                                                        }}
                                                    >
                                                        <span className="number">2.</span>
                                                        <span >    Address </span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 3 })}  >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 3 })}
                                                        onClick={() => {
                                                            setactiveTab(3)
                                                        }}
                                                    >
                                                        <span className="number">3.</span>
                                                        <span > Administrator Details </span>
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 4 })} >
                                                    <NavLink className={classnames({ active: activeTab === 4 })}
                                                        onClick={() => { setactiveTab(4) }}
                                                    >
                                                        <span className="number">4.</span>
                                                        <span > Subscription Details </span>
                                                    </NavLink>
                                                </NavItem>
                                            </ul>
                                        </div>
                                        <div className="content clearfix">
                                            <TabContent activeTab={activeTab} className="body">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg={12} className="mb-3">
                                                                <Row>
                                                                    <Col sm="6">
                                                                        <Label htmlFor="" className="mb-1"> Logo </Label>
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
                                                                        <option value="1"> Owners Association </option>
                                                                        <option value="2"> Property Owner </option>
                                                                        <option value="2"> Property Management Company </option>
                                                                        <option value="2"> Property Manager </option>

                                                                    </select>
                                                                    <label htmlFor="floatingSelectGrid">Account Group <span className="text-danger">*</span> </label>
                                                                </div>

                                                            </Col>

                                                            <Col lg={6} className="mb-3">
                                                                <div className="form-floating">
                                                                    <select defaultValue="1" className="form-select">
                                                                        <option>--Select-- </option>
                                                                        <option value="1">Property Management</option>
                                                                    </select>
                                                                    <label htmlFor="floatingSelectGrid">Account Category <span className="text-danger">*</span> </label>
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
                                                                    <label htmlFor="floatingSelectGrid">Account Status <span className="text-danger">*</span> </label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={6} className="mb-3">

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

                                                        </Row>
                                                        <Row>
                                                            <Col className="mt-4 text-end">
                                                                <button className="btn btn-green me-2 w-xs">Save </button>
                                                                <button className="btn btn-orange w-xs">Cancel </button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>

                                                <TabPane tabId={2}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                            <Col lg={12} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Flat/House/Shop No  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>
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
                                                                        <input type="text" className="form-control" id="floatingnameInput" value="India" disabled />
                                                                        <label htmlFor="floatingnameInput"> Country <span className="text-danger">*</span> </label>
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
                                                    <Row>
                                                        <Col className="mt-4 text-end">
                                                            <button className="btn btn-green me-2 w-xs">Save </button>
                                                            <button className="btn btn-orange w-xs">Cancel </button>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId={3}>
                                                    <Form>
                                                        <Row>

                                                            <Col xl={12} className="">
                                                                <div className="inner-repeater">
                                                                    {(rows1 || []).map((formRow, key) => (

                                                                        <Row className="mb-3 bg-light shadow-sm border border-1 border-grey-2" key={key}>
                                                                            <Col className="col-12">
                                                                                <Row className="py-2">
                                                                                    <Col className="col-auto my-auto"> <h5 className="mb-0"> User Details </h5> </Col>
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




                                                                </div>
                                                            </Col>

                                                            <div className="w-100 mt-4"></div>
                                                            <Col className="col-auto">
                                                                <a onClick={() => {
                                                                    handleAddRowNested();
                                                                }} className="text-decoration-underline" >
                                                                    <i className="fas fa-plus"></i>  Add Another Contact
                                                                </a>

                                                            </Col>
                                                            <Col className="col-auto ms-auto text-end">
                                                                <button className="btn btn-green me-2 w-xs">Save </button>
                                                                <button className="btn btn-orange w-xs">Cancel </button>
                                                            </Col>

                                                        </Row>
                                                    </Form>
                                                </TabPane>

                                                <TabPane tabId={4}>
                                                    <div>
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

                                                            <Col className="text-end">
                                                                <button className="btn btn-primary me-2" type="button"
                                                                    onClick={() => {
                                                                        tog_large();
                                                                    }}
                                                                    data-toggle="modal"
                                                                    data-target=".bs-example-modal-lg" id="SubscriptionDropdown">
                                                                    <i className="fas fa-plus" type="button"
                                                                    ></i>
                                                                    <UncontrolledTooltip placement="top" target="SubscriptionDropdown">
                                                                        Add Subscription
                                                                    </UncontrolledTooltip>
                                                                </button>
                                                            </Col>
                                                        </Row>
                                                        {!toggle1 && (
                                                            <Row>
                                                                <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                                                    <Label htmlFor=""> Status   </Label>
                                                                    <Select
                                                                        value={selectedGroup}
                                                                        onChange={() => {
                                                                            handleSelectGroup();
                                                                        }}
                                                                        options={optionFilter3}
                                                                        className="select2-selection"
                                                                    />
                                                                </Col>

                                                                <Col xs={6} sm={4} lg={3} xl={2} className="mb-3 mt-auto">
                                                                    <button className="btn btn-primary w-100">Filter</button>
                                                                </Col>

                                                            </Row>
                                                        )}

                                                        <Form>

                                                            {/*----------------= modal=-------------- */}

                                                            <div>
                                                                <Modal size="lg" isOpen={modal_large} toggle={() => { tog_large(); }} centered>
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title mt-0"
                                                                            id="myLargeModalLabel" >
                                                                            Add Subscription
                                                                        </h5>
                                                                        <button onClick={() => { setmodal_large(false); }} type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>

                                                                    </div>
                                                                    <div className="modal-body modal-content-60">
                                                                        <div className="vertical-wizard wizard clearfix vertical">
                                                                            <div className="steps clearfix">
                                                                                <ul>
                                                                                    <NavItem
                                                                                        className={classnames({
                                                                                            current: activeTabVartical === 1,
                                                                                        })} >
                                                                                        <NavLink
                                                                                            className={classnames({
                                                                                                active: activeTabVartical === 1,
                                                                                            })}
                                                                                            onClick={() => {
                                                                                                toggleTabVertical(1)
                                                                                            }}
                                                                                        // disabled={!(passedStepsVertical || []).includes(1)}
                                                                                        >
                                                                                            <span className="number">1.</span>
                                                                                            <span> Plan Details </span>
                                                                                        </NavLink>
                                                                                    </NavItem>
                                                                                    <NavItem className={classnames({
                                                                                        current: activeTabVartical === 2,
                                                                                    })} >
                                                                                        <NavLink
                                                                                            className={classnames({
                                                                                                active: activeTabVartical === 2,
                                                                                            })} onClick={() => { toggleTabVertical(2) }}
                                                                                        // disabled={!(passedStepsVertical || []).includes(2)}
                                                                                        >
                                                                                            <span className="number">2.</span>
                                                                                            <span> Features </span>
                                                                                        </NavLink>
                                                                                    </NavItem>
                                                                                    <NavItem className={classnames({
                                                                                        current: activeTabVartical === 3,
                                                                                    })} >
                                                                                        <NavLink
                                                                                            className={classnames({
                                                                                                active: activeTabVartical === 3,
                                                                                            })} onClick={() => { toggleTabVertical(3) }}
                                                                                        // disabled={!(passedStepsVertical || []).includes(2)}
                                                                                        >
                                                                                            <span className="number">3.</span>
                                                                                            <span>Payment Details
                                                                                            </span>
                                                                                        </NavLink>
                                                                                    </NavItem>

                                                                                </ul>
                                                                            </div>
                                                                            <div className="content clearfix">
                                                                                <TabContent
                                                                                    activeTab={activeTabVartical}
                                                                                    className="body"
                                                                                >
                                                                                    <TabPane tabId={1}>
                                                                                        <Row>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <input type="number" value="7858569948" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                                                                    <label htmlFor="floatingnameInput">Subscription ID  <span className="text-danger">*</span></label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <select defaultValue="1" className="form-select">
                                                                                                        <option >--Select-- </option>
                                                                                                        <option value="1"> plane 1</option>
                                                                                                        <option value="2"> plane 2</option>
                                                                                                        <option value="2"> plane 3</option>
                                                                                                        <option value="2"> plane 4</option>
                                                                                                    </select>
                                                                                                    <label htmlFor="floatingSelectGrid"> Plane Name <span className="text-danger">*</span> </label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <select defaultValue="1" className="form-select cursor-none">
                                                                                                        <option >--Select-- </option>
                                                                                                        <option value="1"> Business </option>
                                                                                                        <option value="2"> Individual </option>
                                                                                                    </select>
                                                                                                    <label htmlFor="floatingSelectGrid">Category <span className="text-danger">*</span> </label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <select defaultValue="1" className="form-select cursor-none">
                                                                                                        <option >--Select-- </option>
                                                                                                        <option value="1">Active</option>
                                                                                                        <option value="2">Expired</option>
                                                                                                        <option value="2">Cancelled</option>
                                                                                                        <option value="2">Deleted</option>
                                                                                                    </select>
                                                                                                    <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                    <label htmlFor="floatingnameInput">Start Date <span className="text-danger">*</span></label>
                                                                                                </div>
                                                                                            </Col>
                                                                                            <Col sm={6} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                    <label htmlFor="floatingnameInput"> End Date   <span className="text-danger">*</span></label>
                                                                                                </div>
                                                                                            </Col>

                                                                                        </Row>
                                                                                    </TabPane>

                                                                                    <TabPane tabId={2}>
                                                                                        <Form>
                                                                                            <Table className="table mb-0 table-layout-fixed">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">Max No. of Properties
                                                                                                            <span className="text-danger">*</span>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <Input pattern="[0-9]+"
                                                                                                                type="number"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">Max No. of Units <span className="text-danger">*</span> </td>
                                                                                                        <td>
                                                                                                            <Input type="number" pattern="[0-9]+" className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    {/* <tr>
                                                                                                            <td className="table-light fw-bold align-middle">Financial Accounting <span className="text-danger">*</span> </td>
                                                                                                            <td>
                                                                                                                <div className="square-switch">
                                                                                                                    <input
                                                                                                                        type="checkbox"
                                                                                                                        id="square-switch2" 
                                                                                                                        Switch="none"
                                                                                                                        defaultChecked={sq2}
                                                                                                                        onChange={() => setsq2(!sq2)}
                                                                                                                    />
                                                                                                                    <label
                                                                                                                        htmlFor="square-switch2"
                                                                                                                        data-on-label="Yes"
                                                                                                                        data-off-label="No"
                                                                                                                    />
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr> */}

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">Document Storage <span className="text-danger">*</span> </td>
                                                                                                        <td>
                                                                                                            <InputGroup>
                                                                                                                <input type="number" pattern="[0-9]+" min="1" max="99999" className="form-control" id="inlineFormInputGroupUsername" placeholder=" " />
                                                                                                                <div className="input-group-text">GB</div>
                                                                                                            </InputGroup>
                                                                                                        </td>
                                                                                                    </tr>
 
                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">Max No. of Users <span className="text-danger">*</span> </td>
                                                                                                        <td>
                                                                                                            <Input
                                                                                                                type="number" pattern="[0-9]+"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </Table>
                                                                                        </Form>
                                                                                    </TabPane>

                                                                                    <TabPane tabId={3}>
                                                                                        <Row>
                                                                                            <Table className="table mb-0 table-layout-fixed">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold align-middle py-1"> Transaction ID <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">  Transaction Date <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input
                                                                                                                type="date"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle"> Payment Method   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Select
                                                                                                                value={selectedGroup}
                                                                                                                onChange={() => {
                                                                                                                    handleSelectGroup();
                                                                                                                }}
                                                                                                                options={PaymentMethod}
                                                                                                                className="select2-selection"
                                                                                                            />
                                                                                                        </td>

                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle"> Currency   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                        <Select
                                                                                                                value={selectedGroup}
                                                                                                                onChange={() => {
                                                                                                                    handleSelectGroup();
                                                                                                                }}
                                                                                                                options={OptionCurrency}
                                                                                                                className="select2-selection"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="py-1 table-light fw-bold align-middle"> Amount   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>


                                                                                                    <tr>
                                                                                                        <td className="py-1 table-light fw-bold align-middle"> Discount Code  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>


                                                                                                    <tr>
                                                                                                        <td className="py-1 table-light fw-bold align-middle">Discount <span className="text-danger">*</span> </td>
                                                                                                        <td className="py-1">
                                                                                                            <InputGroup>
                                                                                                                <input type="text" pattern="[0-9]+" min="1" max="99999" className="form-control" id="inlineFormInputGroupUsername" placeholder=" " />
                                                                                                                <div className="input-group-text p-0">
                                                                                                                    <select className="form-select rounded-0">
                                                                                                                        <option> % </option>
                                                                                                                        <option> $ </option>
                                                                                                                    </select>

                                                                                                                </div>
                                                                                                            </InputGroup>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle"> Tax   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input pattern="[0-9]+"
                                                                                                                type="number"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle"> Net Payment   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Input pattern="[0-9]+"
                                                                                                                type="number"
                                                                                                                className="form-control"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>

                                                                                                    <tr>
                                                                                                        <td className="table-light fw-bold py-1 align-middle">Payment Status   <span className="text-danger">*</span>  </td>
                                                                                                        <td className="py-1">
                                                                                                            <Select
                                                                                                                value={selectedGroup}
                                                                                                                onChange={() => {
                                                                                                                    handleSelectGroup();
                                                                                                                }}
                                                                                                                options={optionStatus}
                                                                                                                className="select2-selection"
                                                                                                            />
                                                                                                        </td>
                                                                                                    </tr>


                                                                                                </tbody>
                                                                                            </Table>
                                                                                        </Row>
                                                                                    </TabPane>
                                                                                </TabContent>

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button className="btn btn-green me-2 w-xs">Save </button>
                                                                        <button className="btn btn-orange w-xs">Cancel </button>
                                                                    </div>
                                                                </Modal>
                                                            </div>

                                                            <TableContainer
                                                                columns={columns}
                                                                data={data}
                                                                isGlobalFilter={true}
                                                                isAddOptions={false}
                                                                customPageSize={10}
                                                                className="custom-header-css"
                                                            />
                                                        </Form>
                                                    </div>

                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>

        </React.Fragment>
    )
}

export default PagesStarter
