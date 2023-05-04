import React, { useState } from "react";
import classnames from "classnames";
import Dropzone from "react-dropzone"


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom"
import Select from "react-select";


import logo from "../../../assets/images/logo/logo.svg";
import RentalApplicationTab from "./PropertyDetails/Tabs/Rental-Application-Tab.jsx"
import OwnerAssociationTab from './PropertyDetails/Tabs/ownerAssociationTab';
import UnitTab from './PropertyDetails/Tabs/UnitTab';


const NewAccountProfile = () => {
    // toggle ---------
    const [toggle1, setToggle] = useState(true)

    const [selectedGroup, setselectedGroup] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }
    // Filter data 

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

    const optionResident = [
        {
            options: [
                { label: "Resident 1 ", value: "Mastercard" },
                { label: "Resident 2", value: "Visa" },
                { label: "Resident 3", value: "Visa" },

            ],
        },
    ];
    const optionUnitType = [
        {
            options: [
                { label: "Unit Type 1 ", value: "Mastercard" },
                { label: "Unit Type 2", value: "Visa" },
                { label: "Unit Type 3", value: "Visa" },

            ],
        },
    ];


    // ------------========Nav Bar============--------
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const [verticalActiveTabWithIcon, setverticalActiveTabWithIcon] =
        useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    const [activeTab, setactiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };


    //meta title
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Property Management / Properties" breadcrumbItem="Property Detail" />
                    <Row>
                        <Col xs={12}>
                            <Card className="mb-0">
                                <CardBody>
                                    <Nav tabs className="">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })} onClick={() => { toggle("1"); }}> Overview
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "3",
                                                })} onClick={() => { toggle("3"); }}> Units </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTab === "5",
                                                })}
                                                onClick={() => { toggle("5"); }}> Residents
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTab === "4",})}
                                                onClick={() => {toggle("4"); }}> Leases
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({
                                                active: activeTab === "7",})}
                                                onClick={() => {toggle("7"); }}> Rental Applications
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({
                                                    active: activeTab === "6",})}
                                                    onClick={() => {toggle("6");}}> Owners Association
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({ active: activeTab === "2",})}
                                                onClick={() => { toggle("2"); }}> Documents
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({ active: activeTab === "8", })}
                                                onClick={() => { toggle("8"); }}> Notes
                                            </NavLink>
                                        </NavItem> 

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer"}}
                                                className={classnames({ active: activeTab === "9", })}
                                                onClick={() => { toggle("9"); }}>
                                                Settings
                                            </NavLink>
                                        </NavItem>

                                    </Nav>
                                </CardBody>
                            </Card>

                            <div className="cardBody">
                                <TabContent activeTab={activeTab} className="text-muted">

                                    <TabPane tabId="1">
                                    </TabPane>


                                    <TabPane tabId="2">
                                    </TabPane>


                                    <TabPane tabId="3">
                                    <UnitTab />
                                    </TabPane>


                                    <TabPane tabId="4">
                                        <Card  className="mb-0">
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
                                                </Row>
                                                {!toggle1 && (
                                                    <Row>

                                                        <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                                            <Label htmlFor=""> Status   </Label>
                                                            <Select
                                                                value={selectedGroup}
                                                                isMulti={true}
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


                                        <div>
                                            <div className="table-responsive">
                                                <Table className="project-list-table table-nowrap align-middle table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"> Resident	 </th>
                                                            <th scope="col"> Properties	 </th>
                                                            <th scope="col"> Building </th>
                                                            <th scope="col"> Resident	Type </th>
                                                            <th scope="col"> Contact Information</th>
                                                            <th scope="col"> Status	 </th>
                                                            <th scope="col" className="text-center"> Action	 </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property Name {" -> "} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

                                                            <td>
                                                                <UncontrolledDropdown className="text-center">
                                                                    <DropdownToggle tag="a" className="card-drop">
                                                                        <i className="mdi mdi-dots-horizontal fs-18"></i>
                                                                    </DropdownToggle>

                                                                    <DropdownMenu className="dropdown-menu-end">

                                                                        <DropdownItem >
                                                                            <i className="fas fa-times font-size-16 me-2" id="Expiredtooltip"></i>
                                                                            Expired
                                                                            <UncontrolledTooltip placement="top" target="Expiredtooltip">
                                                                                Expired
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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                    </TabPane>

                                    <TabPane tabId="5">
                                        <Card  className="mb-0">
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
                                                </Row>
                                                {!toggle1 && (
                                                    <Row>
                                                        <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                                            <Label htmlFor=""> Building   </Label>
                                                            <Select
                                                                value={selectedGroup}
                                                                isMulti={true}
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
                                                                isMulti={true}
                                                                onChange={() => {
                                                                    handleSelectGroup();
                                                                }}
                                                                options={optionFilter2}
                                                                className="select2-selection"
                                                            />
                                                        </Col>


                                                        <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                                            <Label htmlFor=""> Resident Type  </Label>
                                                            <Select
                                                                value={selectedGroup}
                                                                isMulti={true}
                                                                onChange={() => {
                                                                    handleSelectGroup();
                                                                }}
                                                                options={optionResident}
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


                                        <div>
                                            <div className="table-responsive">
                                                <Table className="project-list-table table-nowrap align-middle table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"> Resident	 </th>
                                                            <th scope="col"> Properties	 </th>
                                                            <th scope="col"> Building </th>
                                                            <th scope="col"> Resident	Type </th>
                                                            <th scope="col"> Contact Information</th>
                                                            <th scope="col"> Status	 </th>
                                                            <th scope="col" className="text-center"> Action	 </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                                            <td className="d-flex align-items-center">  <i className="fas fa-user-circle display-6 me-2"></i>   Resident 1  </td>

                                                            <td>  Property name {"->"} Unit name </td>
                                                            <td>  Building Name </td>
                                                            <td>  Owner </td>
                                                            <td>  Email Address <br /> Phone Number </td>
                                                            <td>  Verified </td>

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
                                    </TabPane>

                                    <TabPane tabId="6">
                                        <OwnerAssociationTab />
                                    </TabPane>


                                    <TabPane tabId="7">
                                        <RentalApplicationTab />
                                    </TabPane>


                                    <TabPane tabId="8">
                                    </TabPane>

                                </TabContent>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>

        </React.Fragment>
    )
}

export default NewAccountProfile
