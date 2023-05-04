import React, { useState, useMemo } from "react";
import { Container } from "reactstrap"
import classnames from "classnames"
import Select from "react-select";
import PropTypes from 'prop-types';
import Dropzone from "react-dropzone"
import Switch from "react-switch";

import NewOwnerTab from './newProperty/tabs/ownerTab';
import TableContainer from '../../../components/Common/TableContainer';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Badge, InputGroup, Col, Modal, Card, CardText, Nav, CardBody, FormGroup, Label, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, CardTitle, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom"



const NewAccountPage = () => {
    // ----switch box  
    const [sq3, setSq3] = useState(true);
    const [sq4, setSq4] = useState(true);


    // modal---
    const [modal_large, setmodal_large] = useState(false);
    function tog_large() {
        setmodal_large(!modal_large);
    }


    const [activeTabVartical, setoggleTabVertical] = useState(1)

    function toggleTabVertical(tab) {
        if (activeTabVartical !== tab) {

            if (tab >= 1 && tab <= 1) {
                setoggleTabVertical(tab)
            }
        }
    }


    const [selectedFiles, setselectedFiles] = useState([])

    // =-------=
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



    const buildingHeader = useMemo(
        () => [
            {
                Header: 'Building Id',
                accessor: 'building',
            },
            {
                Header: 'Building',
                accessor: 'name',
            },
            {
                Header: 'Type',
                accessor: 'type',
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
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                        View
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem
                                    onClick={() => {
                                        const customerData = cellProps.row.original;
                                        handleCustomerClick(customerData);
                                    }}  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                        Edit
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                        Mark as Inactive
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
                    );
                },
            },
        ],
        []
    );

    const buildingData = [
        {
            "name": "Building One",
            "building": "B4",
            "type": "Type-1"

        },
        {
            "name": "Building Two",

            "building": "K8",
            "type": "Type-2"

        },
        {
            "name": "Building Three",

            "building": "M5",
            "type": "Type-3"
        },
        {
            "name": "Building Four",

            "building": "N7",
            "type": "Type-4"
        },
        {
            "name": "Building Five",

            "building": "K9",
            "type": "Type-5"
        },

    ];


    // --------========  horizontal tabs======---------
    // const [activeTab, setactiveTab] = useState(1)

    // const [passedSteps, setPassedSteps] = useState([1])

    // function toggleTab(tab) {
    //     if (activeTab !== tab) {
    //         var modifiedSteps = [...passedSteps, tab]
    //         if (tab >= 1 && tab <= 5) {
    //             setactiveTab(tab)
    //             setPassedSteps(modifiedSteps)
    //         }
    //     }
    // }


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

    // ----==== vertical tabs ===----------
    const [newAccountTabs, setnewAccountTabs] = useState("1");


    // ==== building modal vertical tab ========
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    //meta title
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Property Management / Properties" breadcrumbItem="New Property" />

                    <div className="checkout-tabs">
                        <Row>
                            <Col lg="2">
                                <Nav className="row" pills>
                                    <NavItem className="col-sm-6 col-md-4 col-lg-12">
                                        <NavLink
                                            className={classnames({ active: newAccountTabs === "1" })}
                                            onClick={() => {
                                                setnewAccountTabs("1");
                                            }}
                                        >
                                            <i className="fas fa-info-circle d-block check-nav-icon mt-4 mb-2" />
                                            <p className="font-weight-bold mb-4"> Basic Details </p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="col-sm-6 col-md-4 col-lg-12">
                                        <NavLink
                                            className={classnames({ active: newAccountTabs === "2" })}
                                            onClick={() => {
                                                setnewAccountTabs("2");
                                            }}
                                        >
                                            <i className="fas fa-building d-block check-nav-icon mt-4 mb-2" />
                                            <p className="font-weight-bold mb-4"> Buildings </p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="col-sm-6 col-md-4 col-lg-12">
                                        <NavLink
                                            className={classnames({ active: newAccountTabs === "3" })}
                                            onClick={() => {
                                                setnewAccountTabs("3");
                                            }}
                                        >
                                            <i className="fab fa-unity d-block check-nav-icon mt-4 mb-2" />
                                            <p className="font-weight-bold mb-4"> Units </p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="col-sm-6 col-md-4 col-lg-12">
                                        <NavLink
                                            className={classnames({ active: newAccountTabs === "4" })}
                                            onClick={() => {
                                                setnewAccountTabs("4");
                                            }}
                                        >
                                            <i className="fab fa-superpowers d-block check-nav-icon mt-4 mb-2" />
                                            <p className="font-weight-bold mb-4"> Owners </p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="col-sm-6 col-md-4 col-lg-12">
                                        <NavLink
                                            className={classnames({ active: newAccountTabs === "5" })}
                                            onClick={() => {
                                                setnewAccountTabs("5");
                                            }}
                                        >
                                            <i className="fas fa-map-marker-alt d-block check-nav-icon mt-4 mb-2" />
                                            <p className="font-weight-bold mb-4"> Address </p>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col lg="10">
                                <Card>
                                    <CardBody>
                                        <TabContent activeTab={newAccountTabs}>
                                            <TabPane tabId="1">
                                                <CardTitle className="mb-5">
                                                    Basic Details
                                                </CardTitle>



                                                <Row>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Property Name </Label>
                                                            <Col sm={9} xl={10}>
                                                                <Input type="text" className="form-control" id="horizontal-firstname-Input" placeholder="Enter Property Name" />
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Facing </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="0" className="form-select" readOnly>
                                                                    <option> --Select--</option>
                                                                    <option> North   </option>
                                                                    <option> East  </option>
                                                                    <option> South   </option>
                                                                    <option> West  </option>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Category </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="1" className="form-select">
                                                                    <option>--Select-- </option>
                                                                    <option value="1"> Residential</option>
                                                                    <option value="2">Commercial</option>
                                                                    <option >Mixed (Residential and Commercial)</option>
                                                                    <option> Industrial</option>
                                                                    <option>Land</option>
                                                                    <option> Special Use</option>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  What Type Of Property?  </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="1" className="form-select">
                                                                    <option>--Select-- </option>
                                                                    <optgroup label="Residential">
                                                                        <option value="volvo"> Single Family Homes</option>
                                                                        <option value=""> Condo  </option>
                                                                        <option value="">  Townhouse  </option>
                                                                        <option value=""> Apartment </option>
                                                                        <option value="">  Hotel Apartment </option>
                                                                        <option value="">  Villa  </option>
                                                                        <option value=""> Gated Community  </option>
                                                                        <option value="">   Gated Villa Compound </option>
                                                                        <option value=""> Bungalow </option>
                                                                        <option value=""> Others </option>
                                                                    </optgroup>
                                                                    <optgroup label="Commercial">
                                                                        <option value="volvo">  Office Building </option>
                                                                        <option value=""> Retail Shop   </option>
                                                                        <option value="">  Restaurant  </option>
                                                                        <option value=""> Shopping Mall  </option>
                                                                        <option value="">  Healthcare </option>
                                                                        <option value=""> Others </option>
                                                                    </optgroup>
                                                                    <optgroup label="Mixed">
                                                                        <option value="volvo"> Residential and Commercial types </option>
                                                                    </optgroup>
                                                                    <optgroup label="Industrial">
                                                                        <option value="volvo">Factory </option>
                                                                        <option value="  "> Warehouse </option>
                                                                        <option value=" "> Workshop </option>
                                                                        <option value=" "> Automobiles </option>
                                                                        <option value=" "> Others </option>
                                                                    </optgroup>
                                                                    <optgroup label="Land">
                                                                        <option value="volvo"> Agricultural </option>
                                                                        <option value="  "> Residential   </option>
                                                                        <option value=" "> Commercial </option>
                                                                        <option value=" "> Industrial </option>
                                                                        <option value=" "> Others </option>
                                                                    </optgroup>
                                                                    <optgroup label="Special Use">
                                                                        <option value="volvo">  Parks </option>
                                                                        <option value=""> Parking   </option>
                                                                        <option value=""> Others </option>
                                                                    </optgroup>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Classification </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="1" className="form-select">
                                                                    <option>--Select-- </option>
                                                                    <optgroup label="Residential">
                                                                        <option value="volvo">   Single Dwellings </option>
                                                                        <option value="">  Garden Style   </option>
                                                                        <option value=""> Low-Rise(5) </option>
                                                                        <option value="">  Mid-Rise(12) </option>
                                                                        <option value=""> High-Rise(25) </option>
                                                                        <option value=""> Skyscrapers(40)</option>
                                                                        <option value=""> Super Slender(40+) </option>
                                                                    </optgroup>
                                                                    <optgroup label="Commercial">
                                                                        <option value="volvo"> TBC </option>
                                                                    </optgroup>
                                                                    <optgroup label="Industrial">
                                                                        <option value="volvo"> Heavy Manufacturing </option>
                                                                        <option value="volvo">  Light Assembly </option>
                                                                        <option value="volvo"> Bulk Warehouse </option>
                                                                        <option value="volvo"> Flex Industrial  </option>
                                                                    </optgroup>
                                                                    <option value="volvo"> Land </option>
                                                                    <option value="volvo"> Special Use  </option>

                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Property Class </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="1" className="form-select" readOnly>
                                                                    <option> </option>
                                                                    <option> Class A </option>
                                                                    <option> Class B </option>
                                                                    <option> Class C </option>
                                                                    <option> Class D </option>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Developer </Label>
                                                            <Col sm={9} xl={10}>
                                                                <Input type="text" className="form-control" id="horizontal-firstname-Input" placeholder="Enter Developer" />
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label">  Managed By </Label>
                                                            <Col sm={9} xl={10}>
                                                                <Input type="text" className="form-control" id="horizontal-firstname-Input" placeholder="Enter Managed By" />
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label"> What Type Of Ownership? </Label>
                                                            <Col sm={9} xl={10}>
                                                                <select defaultValue="0" className="form-select" readOnly>
                                                                    <option> --Select--</option>
                                                                    <option> Absolute Owner (Freehold)     </option>
                                                                    <option> Commonhold    </option>
                                                                    <option> Leasehold    </option>
                                                                </select>
                                                            </Col>
                                                        </div>
                                                    </Col>


                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label"> Do you have Owners Association for the property? </Label>
                                                            <Col sm={9} xl={10}>
                                                                <div className="square-switch me-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="square-switch3"
                                                                        // eslint-disable-next-line react/no-unknown-property
                                                                        Switch="none"
                                                                        defaultChecked={sq3}
                                                                        onChange={() => setSq3(!sq3)}
                                                                    />
                                                                    <label
                                                                        htmlFor="square-switch3"
                                                                        data-on-label="Yes"
                                                                        data-off-label="No" className="mb-0"
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </div>
                                                    </Col>


                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label"> Property Website </Label>
                                                            <Col sm={9} xl={10}>
                                                                <Input type="text" className="form-control" id="horizontal-firstname-Input" placeholder="Enter Property Website" />
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="row mb-4">
                                                            <Label
                                                                htmlFor="horizontal-firstname-Input"
                                                                className="col-sm-3 col-xl-2 col-form-label"> Description </Label>
                                                            <Col sm={9} xl={10}>
                                                                <textarea className="form-control" rows="5"></textarea>
                                                            </Col>
                                                        </div>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col className="mt-4 text-end">
                                                        <button className="btn btn-green me-2 w-xs">Save </button>
                                                        <button className="btn btn-orange w-xs">Cancel </button>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="2">
                                                <CardTitle className="mb-5"> Buildings </CardTitle>
                                                <div>
                                                    <Form>
                                                        {/* <Col className="col-12 text-end"> <button className="btn btn-primary me-2" type="button"
                                                                onClick={() => { tog_large(); }} data-toggle="modal"
                                                                data-target=".bs-example-modal-lg" id="SubscriptionDropdown">
                                                                <i className="fas fa-plus" type="button"
                                                                ></i>
                                                                <UncontrolledTooltip placement="top" target="SubscriptionDropdown">
                                                                    Building
                                                                </UncontrolledTooltip>
                                                            </button></Col> */}

                                                        {/*----------------= modal=-------------- */}

                                                        <div>
                                                            <Modal className="full-modal"
                                                                size="lg"
                                                                isOpen={modal_large}
                                                                toggle={() => { tog_large(); }} centered    >
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title mt-0"
                                                                        id="myLargeModalLabel"
                                                                    >
                                                                        Building
                                                                    </h5> 
                                                                    <button onClick={() => {setmodal_large(false); }}
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
                                                                                            active: verticalActiveTab === "1",
                                                                                        })}
                                                                                        onClick={() => {
                                                                                            toggleVertical("1");
                                                                                        }}
                                                                                    >
                                                                                        Building
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
                                                                                    <Row>
                                                                                        <Col sm={12} className="mb-3">
                                                                                            <div className="form-floating">
                                                                                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                <label htmlFor="floatingnameInput">   Building Id </label>
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col sm={12} className="mb-3">
                                                                                            <div className="form-floating">
                                                                                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                <label htmlFor="floatingnameInput"> Name of The Building  </label>
                                                                                            </div>
                                                                                        </Col>
                                                                                        <Col sm={12} className="mb-3">
                                                                                            <div className="form-floating">
                                                                                                <select defaultValue="1" className="form-select">
                                                                                                    <option >--Select-- </option>
                                                                                                    <optgroup label="Residential">
                                                                                                        <option value="2">Residential</option>
                                                                                                        <option value="2">Administration</option>
                                                                                                        <option value="2">Security</option>
                                                                                                        <option value="2">Facilities</option>
                                                                                                    </optgroup>
                                                                                                    <option value="2">Commercial</option>
                                                                                                    <option value="2">Industrial</option>
                                                                                                </select>
                                                                                                <label htmlFor="floatingSelectGrid">What Type Of Building? </label>
                                                                                            </div>
                                                                                        </Col>

                                                                                        {/* <Col sm={12} className="mb-3">
                                                                                                <label>Show building in search results – C4 Portal? </label>
                                                                                                <div className="square-switch">
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        id="square-switch5"
                                                                                                        // eslint-disable-next-line react/no-unknown-property
                                                                                                        Switch="none"
                                                                                                        defaultChecked={sq5}
                                                                                                        onChange={() => setsq5(!sq5)}
                                                                                                    />
                                                                                                    <label
                                                                                                        htmlFor="square-switch5"
                                                                                                        data-on-label="Yes"
                                                                                                        data-off-label="No"
                                                                                                    />
                                                                                                </div>
                                                                                            </Col>

                                                                                            <Col sm={12} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                    <label htmlFor="floatingnameInput">Name of The Developer  </label>
                                                                                                </div>
                                                                                            </Col>

                                                                                            <Col sm={12} className="mb-3">
                                                                                                <div className="form-floating">
                                                                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                    <label htmlFor="floatingnameInput">Name of The Sub-Developer  </label>
                                                                                                </div>
                                                                                            </Col> */}

                                                                                        <Col sm={12} className="mb-3">
                                                                                            <div className="form-floating">
                                                                                                <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                <label htmlFor="floatingnameInput"> Construction Completion Date  </label>
                                                                                            </div>
                                                                                        </Col>

                                                                                        <Col sm={12} className="mb-3">
                                                                                            <div className="form-floating">
                                                                                                <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                                <label htmlFor="floatingnameInput"> Last Renovation Date   </label>
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

                                                        <TableContainer
                                                            columns={buildingHeader}
                                                            data={buildingData}
                                                            isGlobalFilter={true}
                                                            // isAddOptions={true}
                                                            // handleOrderClicks={handleOrderClicks}
                                                            customPageSize={10}
                                                            isAddOptions={false}
                                                            className="custom-header-css"
                                                        />
                                                        <Col className="text-end">
                                                            <a className="text-decoration-underline" onClick={() => { tog_large(); }} data-toggle="modal" data-target=".bs-example-modal-lg">  + New Building </a>
                                                        </Col>
                                                    </Form>
                                                </div>

                                            </TabPane>

                                            <TabPane tabId="3">
                                                <CardTitle className="mb-5"> Units </CardTitle>
                                                <Row>
                                                    <div className="table-responsive">
                                                        <Table className="table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th> Buildings Id </th>
                                                                    <th> Unit Type </th>
                                                                    <th> Unit </th>
                                                                    <th> Facing </th>
                                                                    <th> Beds </th>
                                                                    <th> Baths </th>
                                                                    <th> Size (In sq ft) </th>
                                                                    <th> Rent </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {(rows1 || []).map((formRow, key) => (

                                                                    <tr className="mb-3 py-3 evenBgColor" key={key}>

                                                                        <td>
                                                                            <div className=" ">
                                                                                <input type="text" className="form-control" />
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <select defaultValue="1" className="form-select">
                                                                                <option >--Select-- </option>
                                                                                <option value="1">Type-1</option>
                                                                                <option value="1">Type-2</option>
                                                                                <option value="1">Type-3</option>
                                                                            </select>
                                                                        </td>

                                                                        <td>
                                                                            <div className=" ">
                                                                                <input type="text" className="form-control" id="floatingnameInput" />
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className=" ">
                                                                                <input type="text" className="form-control" id="floatingnameInput" />
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className=" ">
                                                                                <input type="text" className="form-control" id="floatingnameInput" />
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className=" ">
                                                                                <input type="text" className="form-control" id="floatingnameInput" />
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="   me-2">
                                                                                <input type="tel" className="form-control" id="floatingnameInput" />

                                                                            </div>
                                                                        </td>

                                                                        <td className="d-flex">
                                                                            <div className="   me-2">
                                                                                <input type="tel" className="form-control" id="floatingnameInput" />
                                                                            </div>
                                                                            <button
                                                                                className="btn btn-orange border-0"
                                                                                id="unknown-btn"
                                                                                onClick={e => {
                                                                                    handleRemoveRow(formRow.id);
                                                                                }}
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-trash-alt font-size-20" ></i>
                                                                                {" "}
                                                                            </button>
                                                                            <UncontrolledTooltip placement="top" target="unknown-btn">
                                                                                Delete
                                                                            </UncontrolledTooltip>
                                                                        </td>

                                                                    </tr>
                                                                ))}

                                                            </tbody>
                                                        </Table>
                                                    </div>

                                                    <Col xl={12} className="mb-3 mt-3 d-flex">
                                                        <span className="inner-repeater me-2">
                                                            <a
                                                                onClick={() => {
                                                                    handleAddRowNested();
                                                                }}
                                                                className="text-decoration-underline" >
                                                                <i className="fas fa-plus"></i> Add Another Unit
                                                            </a>
                                                        </span>

                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col className="mt-4 text-end">
                                                        <button className="btn btn-green me-2 w-xs">Save </button>
                                                        <button className="btn btn-orange w-xs">Cancel </button>
                                                    </Col>
                                                </Row>
                                            </TabPane>

                                            <TabPane tabId="4">
                                                <CardTitle className="mb-5"> Owners </CardTitle>
                                                <NewOwnerTab />
                                            </TabPane>

                                            <TabPane tabId="5">
                                                <CardTitle className="mb-5"> Address </CardTitle>
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
                                                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="India" disabled />
                                                                <label htmlFor="floatingnameInput"> Country </label>
                                                            </div>
                                                        </Col>

                                                        <Col md={6} lg={4} xl={3} className="mb-3">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                            </div>
                                                        </Col>

                                                        <Col lg={12} className="mb-3">
                                                            <div className="form-floating">
                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941497.4624909253!2d75.61333!3d22.8126715!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1677674268481!5m2!1sen!2sin" width="100%" height="250" className="min-h-250 form-control" id="floatingnameInput"  ></iframe>
                                                                <label htmlFor="floatingnameInput">Location</label>
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


                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>



                </Container>
            </div>

        </React.Fragment>
    )
}

export default NewAccountPage