import React, { useState } from "react"
import Select from "react-select";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";

import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";


function UnitTab(props) {


//  === = =  Filter toggle = = =====
const [toggle1, setToggle] = useState(true)

// =========   select option =========
const [selectedGroup, setselectedGroup] = useState(null);

function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  // Filter data 

  const optionFilter1 = [
    {
      options: [
        { label: "Individual", value: "One" },
        { label: "Business", value: "Two" },
      ],
    },
  ];

  const optionFilter2 = [
    {
      options: [
        { label: "Category", value: "Mastercard" },
        { label: "Subscription", value: "Visa" },
      ],
    },
  ];
  const optionFilter5 = [
    {
      options: [
        { label: "Active", value: "monthly" },
        { label: "Inactive", value: "Quarterly" },
        { label: "Deleted", value: "Quarterly" },


      ],
    },
  ];


    // ---==== redirect function =====------ 

    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/property-properties-details-unit-details`;
      navigate(path);
    }
  
 

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
                                            Search
                                        </span>
                                        <input
                                            id="search-bar-0"  type="text" className="form-control ps-2 pe-5"
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
                                    options={optionFilter5}
                                    className="select2-selection"
                                />
                            </Col>

                            <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                                <Label htmlFor=""> Unit Type   </Label>
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
                                <th scope="col"> Unit	 </th>
                                <th scope="col"> Beds	 </th>
                                <th scope="col"> Bath	 </th>
                                <th scope="col"> Sq Ft	 </th>
                                <th scope="col"> Building </th>
                                <th scope="col"> Status	 </th>
                                <th scope="col" className="text-center"> Action	 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>

                            <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>

                            <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>


                            <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>


                             <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>
                             <tr>
                                <td  onClick={routeChange} className="cursor-pointer">  Unit One </td>
                                <td onClick={routeChange} className="cursor-pointer">  1 Bed </td>
                                <td onClick={routeChange} className="cursor-pointer"> 2 Bath </td>
                                <td onClick={routeChange} className="cursor-pointer"> 1324 sqft/ 125 sqm </td>
                                <td onClick={routeChange} className="cursor-pointer">   Building One   </td>
                                <td onClick={routeChange} className="cursor-pointer"> Occupied   </td>
                                <td>
                                    <UncontrolledDropdown className="text-center">
                                        <DropdownToggle tag="a" className="card-drop btn btn-lg w-100 h-100">
                                            <i className="mdi mdi-dots-horizontal fs-18"></i>
                                        </DropdownToggle>

                                        <DropdownMenu className="dropdown-menu-end">

                                            <DropdownItem>
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
                                </td>
                            </tr>
 
                        </tbody>
                    </Table>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UnitTab