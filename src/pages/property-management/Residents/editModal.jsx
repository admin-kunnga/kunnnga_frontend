import React, { useState,useMemo } from "react";
import PropTypes from "prop-types"

import {
    Col, Row, Modal, Form, ModalHeader, ModalBody, Label, ModalFooter, FormGroup, Input, Button, UncontrolledTooltip, TabPane,
    Table, NavItem, NavLink, TabContent, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle
} from "reactstrap";


import Switch from "react-switch";
import classnames from "classnames"


import TableContainer from '../../../components/Common/TableContainer';





const EditModal = props => {
    const { isOpen, toggle } = props

    // switch box
    const [sq4, setSq4] = useState(true);
    const [sq3, setSq3] = useState(true);
    const [sq5, setSq5] = useState(true);


      // modal---
      const [modal_large, setmodal_large] = useState(false);
      function tog_large() {
          setmodal_large(!modal_large);
          removeBodyCss();
      }

      const [activeTabVartical, setoggleTabVertical] = useState(1)

      function toggleTabVertical(tab) {
          if (activeTabVartical !== tab) {
              var modifiedSteps = [...passedStepsVertical, tab]
  
              if (tab >= 1 && tab <= 1) {
                  setoggleTabVertical(tab)
                  setPassedStepsVertical(modifiedSteps)
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




    // --------========  horizontal tabs======---------
    const [activeTab, setactiveTab] = useState(1)

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab]
            if (tab >= 1 && tab <= 5) {
                setactiveTab(tab)
                setPassedSteps(modifiedSteps)
            }
        }
    }

    // table-data-
    const columns = useMemo(
        () => [

            {
                Header: 'Building Id',
                accessor: 'building',
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

                                <DropdownItem onClick={() => {
                                    const customerData = cellProps.row.original;
                                    handleCustomerClick(customerData);
                                }} >
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

                                <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                        Inactive
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
            "building": "K-2588",
            "type": "Type-1"

        },
        {
            "building": "K-2859",
            "type": "Type-2"

        },
        {
            "building": "K-2589",
            "type": "Type-3"
        },
        {
            "building": "K-2574",
            "type": "Type-4"
        },
        {
            "building": "K-2512",
            "type": "Type-5"
        },

    ];


    return (
        <Modal
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            className="exampleModal"
            tabIndex="-1"
            size="lg"
            toggle={toggle}
        >
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Edit Properties</ModalHeader>
                <ModalBody>

                    <div className="wizard clearfix">
                        <div className="steps clearfix">
                            <ul>

                                <NavItem
                                    className={classnames({ current: activeTab === 1 })}
                                >
                                    <NavLink
                                        className={classnames({ current: activeTab === 1 })}
                                        onClick={() => {
                                            setactiveTab(1)
                                        }}  >
                                        <span className="py-2 d-block">   Basic Details </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem
                                    className={classnames({ current: activeTab === 2 })} >
                                    <NavLink
                                        className={classnames({ active: activeTab === 2 })}
                                        onClick={() => {
                                            setactiveTab(2)
                                        }} >
                                        <span className="py-2 d-block"> Buildings </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem
                                    className={classnames({ current: activeTab === 3 })}  >
                                    <NavLink
                                        className={classnames({ active: activeTab === 3 })}
                                        onClick={() => {
                                            setactiveTab(3)
                                        }}   >
                                        <span className="py-2 d-block"> Units </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem
                                    className={classnames({ current: activeTab === 4 })}
                                >
                                    <NavLink
                                        className={classnames({ active: activeTab === 4 })}
                                        onClick={() => {
                                            setactiveTab(4)
                                        }} >
                                        <span className="py-2 d-block"> Owners </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem
                                    className={classnames({ current: activeTab === 5 })}
                                >
                                    <NavLink
                                        className={classnames({ active: activeTab === 5 })}
                                        onClick={() => {
                                            setactiveTab(5)
                                        }}
                                    >
                                        <span className="py-2 d-block"> Address & Map </span>
                                    </NavLink>
                                </NavItem>

                            </ul>
                        </div>
                        <div className="content clearfix">

                            <TabContent activeTab={activeTab} className="body">

                                <TabPane tabId={1}>
                                    <Form>
                                        <Row>
                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" />
                                                    <label htmlFor="floatingnameInput"> Property Name</label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="url" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput">Property Website</label>
                                                </div>
                                            </Col>



                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <select defaultValue="1" className="form-select">
                                                        <option>--Select-- </option>
                                                        <option value="1"> Residential</option>
                                                        <option value="2">Commercial</option>
                                                        <option >Mixed (Residential and Commercial)</option>
                                                        <option> Industrial</option>
                                                        <option>Land</option>
                                                        <option> Special Use</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Category   </label>
                                                </div>

                                            </Col>

                                            <Col lg={12} className="mb-4">
                                                {/* <Label htmlFor="" className="mb-1"> Status  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionStatus}
                                                                    className="select2-selection"
                                                                /> */}
                                                <div className="form-floating">
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
                                                    <label htmlFor="floatingSelectGrid">What Type Of Property? </label>
                                                </div>
                                            </Col>


                                            <Col lg={12} className="mb-4">
                                                {/* <Label htmlFor="" className="mb-1"> Country  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionCountries}
                                                                    className="select2-selection"
                                                                /> */}
                                                <div className="form-floating">
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
                                                    <label htmlFor="floatingSelectGrid"> Classification </label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                {/* <Label htmlFor="" className="mb-1"> Reporting Currency  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionCurrency}
                                                                    className="select2-selection"
                                                                /> */}
                                                <div className="form-floating">
                                                    <select defaultValue="1" className="form-select" readOnly>
                                                        <option> </option>
                                                        <option> Class A </option>
                                                        <option> Class B </option>
                                                        <option> Class C </option>
                                                        <option> Class D </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Property Class </label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="0" className="form-select" readOnly>
                                                        <option> --Select--</option>
                                                        <option> North   </option>
                                                        <option> East  </option>
                                                        <option> South   </option>
                                                        <option> West  </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid"> Facing </label>
                                                </div>
                                            </Col>


                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Developer</label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                <div className="form-floating">
                                                    <select defaultValue="0" className="form-select" readOnly>
                                                        <option> --Select--</option>
                                                        <option> Absolute Owner (Freehold)     </option>
                                                        <option> Commonhold    </option>
                                                        <option> Leasehold    </option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">What Type Of Ownership? </label>
                                                </div>
                                            </Col>

                                            <div className="w-100"></div>



                                            <Col lg={12} className="mb-3">
                                                <label>Do you have Owners Association for the property? </label>
                                                <div className="square-switch">
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
                                                        data-off-label="No"
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-3">
                                                <label> Allow C4 users to search based on Property Name? </label>
                                                <div className="square-switch">
                                                    <input
                                                        type="checkbox"
                                                        id="square-switch4"
                                                        // eslint-disable-next-line react/no-unknown-property
                                                        Switch="none"
                                                        defaultChecked={sq4}
                                                        onChange={() => setSq4(!sq4)}
                                                    />
                                                    <label
                                                        htmlFor="square-switch4"
                                                        data-on-label="Yes"
                                                        data-off-label="No"
                                                    />
                                                </div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col className="mt-4 text-end">
                                                <button className="btn btn-primary me-2 w-xs">Save </button>
                                                <button className="btn btn-light border-primary w-xs">Cancel </button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </TabPane>

                                <TabPane tabId={2}>
                                    <div>
                                        <Form>
                                            <Col className="col-12 text-end"> <button className="btn btn-primary me-2" type="button"
                                                onClick={() => {
                                                    tog_large();
                                                }}
                                                data-toggle="modal"
                                                data-target=".bs-example-modal-lg" id="SubscriptionDropdown">
                                                <i className="fas fa-plus" type="button"
                                                ></i>
                                                <UncontrolledTooltip placement="top" target="SubscriptionDropdown">
                                                    Add Building
                                                </UncontrolledTooltip>
                                            </button></Col>

                                            {/*----------------= modal=-------------- */}

                                            <div>
                                                <Modal
                                                    size="lg"
                                                    isOpen={modal_large}
                                                    toggle={() => { tog_large(); }} centered >
                                                    <div className="modal-header">
                                                        <h5 className="modal-title mt-0"
                                                            id="myLargeModalLabel"                                                        >
                                                            Add Building
                                                        </h5>
                                                        <button
                                                            onClick={() => { setmodal_large(false);}} type="button" className="close"                                                            data-dismiss="modal"                                                            aria-label="Close"                                                        >
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">


                                                        <div className="vertical-wizard wizard clearfix vertical">
                                                            <div className="steps clearfix">
                                                                <ul>
                                                                    <NavItem
                                                                        className={classnames({
                                                                            current: activeTabVartical === 1,
                                                                        })}                                                                    >
                                                                        <NavLink
                                                                            className={classnames({ active: activeTabVartical === 1,
                                                                            })}
                                                                            onClick={() => { toggleTabVertical(1) }} >
                                                                            <span className="py-2 d-block"> Add Building </span>
                                                                        </NavLink>
                                                                    </NavItem>

                                                                </ul>
                                                            </div>
                                                            <div className="content clearfix">
                                                                <TabContent
                                                                    activeTab={activeTabVartical}
                                                                    className="body"  >
                                                                    <TabPane tabId={1}>
                                                                        <Row>
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

                                                                            <Col sm={12} className="mb-3">
                                                                                <label>Show building in search results – C4 Portal? </label>
                                                                                <div className="square-switch">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id="square-switch5"
                                                                                        // eslint-disable-next-line react/no-unknown-property
                                                                                        Switch="none"
                                                                                        defaultChecked={sq5}
                                                                                        onChange={() => setSq5(!sq5)}
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
                                                                            </Col>

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
                                                                                <button className="btn btn-primary me-2 w-xs">Save</button>
                                                                                <button className="btn btn-light border-primary -xs">Cancel</button>

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

                                <TabPane tabId={3}>
                                    <div>
                                        <Form>
                                            <Row>


                                                <div className="table-responsive">
                                                    <Table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th> Buildings </th>
                                                                <th> Unit Type </th>
                                                                <th> Unit </th>
                                                                <th> Facing </th>
                                                                <th> Beds </th>
                                                                <th> Baths </th>
                                                                <th> Size </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {(rows1 || []).map((formRow, key) => (

                                                                <tr className="mb-4 py-3 evenBgColor" key={key}>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" />
                                                                            <label htmlFor="floatingnameInput"> Buildings </label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <select defaultValue="1" className="form-select">
                                                                                <option >--Select-- </option>
                                                                                <option value="1">Type-1</option>
                                                                                <option value="1">Type-2</option>
                                                                                <option value="1">Type-3</option>
                                                                            </select>
                                                                            <label htmlFor="floatingSelectGrid"> Unit Type   </label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" />
                                                                            <label htmlFor="floatingnameInput"> Unit </label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" />
                                                                            <label htmlFor="floatingnameInput"> Facing </label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" />
                                                                            <label htmlFor="floatingnameInput"> Beds </label>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Unit" />
                                                                            <label htmlFor="floatingnameInput"> Baths </label>
                                                                        </div>
                                                                    </td>

                                                                    <td className="d-flex">
                                                                        <div className="form-floating  me-2">
                                                                            <input type="tel" className="form-control" id="floatingnameInput" placeholder="Enter Size" />
                                                                            <label htmlFor="floatingnameInput"> Size</label>
                                                                        </div>
                                                                        <Button
                                                                            color="primary"
                                                                            className="inner"
                                                                            id="unknown-btn"
                                                                            onClick={e => {
                                                                                handleRemoveRow(formRow.id);
                                                                            }}
                                                                        >
                                                                            {" "}
                                                                            <i className="fas fa-trash-alt font-size-20" ></i>
                                                                            {" "}
                                                                        </Button>
                                                                        <UncontrolledTooltip placement="top" target="unknown-btn">
                                                                            Delete
                                                                        </UncontrolledTooltip>
                                                                    </td>

                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </Table>
                                                </div>

                                                <Col xl={12} className="mb-4 mt-3 d-flex">
                                                    <span>
                                                        <input type="number" className="form-control me-2 w-auto" />
                                                    </span>
                                                    <span className="inner-repeater me-2">
                                                        <button
                                                            onClick={() => {
                                                                handleAddRowNested();
                                                            }}
                                                            className="btn btn-success" >
                                                            Add Another Unit
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <label className="btn btn-primary mb-0" htmlFor="uploadExcel">Upload Excel File </label>
                                                        <input type="file" id="uploadExcel" hidden />
                                                    </span>

                                                </Col>



                                            </Row>
                                        </Form>
                                    </div>
                                    <Row>
                                        <Col className="mt-4 text-end">
                                            <button className="btn btn-primary me-2 w-xs">Save </button>
                                            <button className="btn btn-light border-primary w-xs">Cancel </button>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane tabId={4}>
                                </TabPane>

                                <TabPane tabId={5}>
                                    <Form>
                                        <Row>

                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 1  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 2 </label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> Address Line 3 </label>
                                                </div>
                                            </Col>


                                            <Col md={6} lg={4} xl={3} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> City <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>


                                            <Col md={6} lg={4} xl={3} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>


                                            <Col md={6} lg={4} xl={3} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                    <label htmlFor="floatingnameInput"> Country </label>
                                                </div>
                                            </Col>

                                            <Col md={6} lg={4} xl={3} className="mb-4">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                    <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-4">
                                                <div className="form-floating">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941497.4624909253!2d75.61333!3d22.8126715!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1677674268481!5m2!1sen!2sin" width="100%" height="250" className="min-h-250 form-control" id="floatingnameInput"  ></iframe>
                                                    <label htmlFor="floatingnameInput">Location</label>
                                                </div>
                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col className="mt-4 text-end">
                                                <button className="btn btn-primary me-2 w-xs">Save </button>
                                                <button className="btn btn-light border-primary w-xs">Cancel </button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </TabPane>

                            </TabContent>
                        </div>
                    </div>
                </ModalBody> 
            </div>
        </Modal>
    )
}

EditModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default EditModal