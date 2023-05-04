


import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-switch";
import Select from "react-select";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";


import classnames from "classnames"

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";


import {
  Button, Badge, Col, Row, UncontrolledTooltip, Modal, ModalHeader, ModalBody, Form, Input, FormFeedback, Label, InputGroup,
  Card, FormGroup, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink, TabContent,
  TabPane
} from "reactstrap";

// date picker
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";




function AccountCustomers() {
  //meta title
  document.title = "Kunnga - Enterprise Portal";

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [toggle1, setToggle] = useState(true)

  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  const [sq1, setsq1] = useState(true);
  const [sq2, setsq2] = useState(true);
  const [sq3, setsq3] = useState(true);


  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);


  // ----=== dropdown  btn ====-----
  const [DropdownBtn1, setDropdownBtn1] = useState(false);


// --=== select option ====---
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  const optionGroup = [
    {
      options: [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "U.S.A", value: "usa" },
      ],
    },
  ];


  // add Customers modal
  const [modal_center, setmodal_center] = useState(false);
  function tog_center() {
    setmodal_center(!modal_center);
    removeBodyCss();
  }





  // Filter data
  const optionFilter = [
    {
      options: [
        { label: "India", value: "Plan" },
        { label: "USA", value: "Ticket" },
        { label: "UAE", value: "Ticket & Phone" },
      ],
    },
  ];

  const optionFilter1 = [
    {
      options: [
        { label: "One", value: "One" },
        { label: "Two", value: "Two" },
        { label: "Three", value: "Three" },
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

  const optionFilter3 = [
    {
      options: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Deleted", value: "Inactive" },

      ],
    },
  ];

  const optionFilter4 = [
    {
      options: [
        { label: "<30 days", value: "monthly" },
        { label: "30-60 days", value: "Quarterly" },
        { label: "60-90 days", value: "Yearly" },

      ],
    },
  ];




  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }


  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
    removeBodyCss();
  }


  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])


  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
      }
    }
  }



  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  // action dot
  const [btnprimary1, setBtnprimary1] = useState(false)


  const onClickDelete = (order) => {
    setOrder(order);
    setDeleteModal(true);
  };


  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Account Management" breadcrumbItem="Customers" />


          <Row>
            <Col xs="12">

              <Card>
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
                              // onChange={(e) => {
                              //   setValue(e.target.value);
                              //   onChange(e.target.value);
                              // }}
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

                      {/* Add Modal */}

                      <Modal
                        isOpen={modal_center}
                        toggle={() => {
                          tog_center();
                        }}
                        centered
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">Add Customers</h5>
                          <button
                            type="button"
                            onClick={() => {
                              setmodal_center(false);
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <Row>
                            {/* <Col xs="6" className="mb-3">
                              <Label htmlFor=""> Plan   </Label>
                              <Select
                                value={selectedGroup}
                                onChange={() => {
                                  handleSelectGroup();
                                }}
                                options={optionFilter1}
                                className="select2-selection"
                              />
                            </Col>
                            <Col xs="6" className="mb-3">
                              <Label htmlFor=""> Category   </Label>
                              <Select
                                value={selectedGroup}
                                onChange={() => {
                                  handleSelectGroup();
                                }}
                                options={optionFilter2}
                                className="select2-selection"
                              />
                            </Col> */}


                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option>--Select-- </option>
                                  <option value="1">Plan 1 </option>
                                  <option value="2">Plan 2</option>
                                  <option value="2">Plan 3</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Plan</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option >--Select-- </option>
                                  <option value="1">Mastercard</option>
                                  <option value="2">Visa</option>
                                  <option value="2">Rupay</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Category</label>
                              </div>
                            </Col>


                            <Col xs="6" className="mb-3">
                              <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                <label htmlFor="floatingnameInput">Min</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                <label htmlFor="floatingnameInput">Max</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option >--Select-- </option>
                                  <option value="1">India</option>
                                  <option value="2">USA</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Country</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option>--Select-- </option>
                                  <option value="1">USD</option>
                                  <option value="2">INR</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Currency</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option>--Select-- </option>
                                  <option value="1">Yearly</option>
                                  <option value="2">Quarterly</option>
                                  <option value="2">Monthly</option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Frequency</label>
                              </div>
                            </Col>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                <label htmlFor="floatingnameInput">Currency</label>
                              </div>
                            </Col>
                            <Col xs="6" className="mb-3">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                <label htmlFor="floatingnameInput">Rate</label>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-green w-xs">Save</button>
                          <button type="button" className="btn btn-orange w-xs" data-bs-dismiss="modal">Cancel</button>
                        </div>
                      </Modal>


                    </Col>

                    <Col className="text-end">

                      <Link to="/account-Customers-new-account">
                        <button className="btn btn-primary me-2" type="button" id="PlanDropdown">
                          <i className="fas fa-plus" type="button"></i>
                          <UncontrolledTooltip placement="top" target="PlanDropdown">
                            Add New Account
                          </UncontrolledTooltip>
                        </button>
                      </Link>

                      <Dropdown className="d-inline-block"
                        isOpen={DropdownBtn1}
                        toggle={() => setDropdownBtn1(!DropdownBtn1)}>
                        <DropdownToggle className="btn btn-light" caret id="DownloadTooltip">
                          <i className="fas fa-download"></i>
                          <UncontrolledTooltip placement="top" target="DownloadTooltip">
                            Download
                          </UncontrolledTooltip>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem> <i className="fas fa-file-excel me-2 fs-18"></i> XLS Format </DropdownItem>
                          <DropdownItem> <i className="fas fa-file-pdf me-2 fs-18"></i> PDF Format </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>

                    {/* <Col className="text-end">
                      <button type="button" className="btn btn-primary" onClick={() => {
                        tog_center();
                      }}> <i className="fas fa-plus me-1"></i> Add Customers </button>
                    </Col> */}
                  </Row>
                  {!toggle1 && (
                    <Row>
                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <Label htmlFor=""> Account Type   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter2}
                          className="select2-selection"
                        />
                      </Col>

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <Label htmlFor=""> Account Status   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter3}
                          className="select2-selection"
                        />
                      </Col>

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <label className="control-label">
                          Country
                        </label>
                        <Select
                          hideSelectedOptions={false}
                          value={selectedMulti}
                          isMulti={false}
                          onChange={() => {
                            handleMulti();
                          }}
                          options={optionFilter}
                          className="select2-selection"
                        />
                      </Col>

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <Label htmlFor=""> Days left   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter4}
                          className="select2-selection"
                        />

                        {/* <FormGroup className="mb-4">
                      <Label>Days left</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="DD  M, YYYY"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </InputGroup>
                    </FormGroup> */}
                      </Col>

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3 mt-auto">
                        <button className="btn btn-primary w-100">Filter</button>
                      </Col>

                    </Row>
                  )}


                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th data-priority="1"> Customer ID </Th>
                            <Th data-priority="3"> Name	</Th>
                            <Th data-priority="1"> Account Type	</Th>
                            <Th data-priority="3"> Country </Th>
                            <Th data-priority="1"> Account  Status </Th>
                            <Th data-priority="1"> Days left	</Th>
                            <Th data-priority="3"> Action  </Th>
                          </Tr>
                        </Thead>
                        <Tbody>

                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>

                      
                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>


                          <Tr>
                            <Th> 78958	 	</Th>
                            <Td> Barry Dick	 	</Td>	
                            <Td> Subscription 	</Td>
                            <Td> USA 	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td> 20 days 	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem>
                                  <Link to="/account-Customers-new-account">
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem >
                                     <Link to="/account-Customers-new-account">
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                    </Link>
                                  </DropdownItem>

                                  <DropdownItem onClick={onClickDelete}>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                      Delete
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </Td>
                          </Tr>

                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>


    </React.Fragment>
  );
}
AccountCustomers.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default AccountCustomers;