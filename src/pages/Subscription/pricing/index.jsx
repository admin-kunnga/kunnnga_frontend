


import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import Switch from "react-switch";

import classnames from "classnames"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";
import EditModal from './editModal';

import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "/src/store/actions";

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
  PaymentMethod,
} from "./plansTable";


import {
  Button, Badge,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  FormGroup,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";




function SubscriptionPricing() {
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



  //edit modal
  const toggleEditModal = () => setModalEdit(!modalEdit);
  const [modalEdit, setModalEdit] = useState(false);



  // add pricing modal
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
        { label: "UAE", value: "Ticket" },
        { label: "USA", value: "Ticket & Phone" },
      ],
    },
  ];

  const optionFilter1 = [
    {
      options: [
        { label: "Platinum", value: "One" },
        { label: "Gold", value: "Two" },
        { label: "Silver", value: "Three" },
      ],
    },
  ];

  const optionFilter2 = [
    {
      options: [
        { label: "Business", value: "Mastercard" },
        { label: "Individual", value: "Visa" },
      ],
    },
  ];

  const optionFilter3 = [
    {
      options: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Deleted", value: "Active" },
      ],
    },
  ];

  const optionFilter4 = [
    {
      options: [
        // { label: "Monthly", value: "monthly" },
        // { label: "Quarterly", value: "Quarterly" },
        { label: "Yearly", value: "Yearly" },

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

  // =====---- form wizard ----======

  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

    }
  }


  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const onClickDelete = () => {
    setDeleteModal(true);
  };




  return (
    <React.Fragment>
      {/* ------- Edit Modal --------- */}
      <EditModal isOpen={modalEdit} toggle={toggleEditModal} />


      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Subscription Management" breadcrumbItem="Pricing" />


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


                      <Modal size="lg"
                        isOpen={modal_center}
                        toggle={() => {
                          tog_center();
                        }}
                        centered
                      >
                        <div className="modal-header">

                          <h5 className="modal-title mt-0"> RateCard Details</h5>
                          <button onClick={() => { setmodal_center(false); }}
                            type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>

                        </div>
                        <div className="modal-body">
                          <div className="vertical-wizard wizard clearfix vertical">
                            <div className="steps clearfix">
                              <ul>
                                <NavItem
                                  className={classnames({
                                    current: activeTabVartical === 1,
                                  })}
                                >
                                  <NavLink
                                    className={classnames({
                                      active: activeTabVartical === 1,
                                    })}
                                    onClick={() => {
                                      toggleTabVertical(1)
                                    }}
                                  >  RateCard
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

                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <select defaultValue="1" className="form-select">
                                          <option>--Select-- </option>
                                          <option value="1">Platinum</option>
                                          <option value="2">Gold</option>
                                          <option value="2">Silver</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Plan <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>

                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <select defaultValue="1" className="form-select" disabled>
                                          <option value="1">Business</option>
                                          <option value="2">Individual</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Category  <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>


                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                        <label htmlFor="floatingnameInput">Bundle  <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>

                                    {/* <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                        <label htmlFor="floatingnameInput">Max Units <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col> */}

                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <select defaultValue="1" className="form-select">
                                          <option>--Select-- </option>
                                          <option value="1">India</option>
                                          <option value="2">USA</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Country  <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>

                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <select defaultValue="1" className="form-select" disabled>
                                          <option value="1" >USD</option>
                                          <option value="2">INR</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Currency  <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>

                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <select defaultValue="1" className="form-select" >
                                          <option value="1">Yearly</option>
                                          <option value="2">Monthly</option>
                                          <option value="2">Weekly</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Frequency  <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>


                                    <Col xs="6" className="mb-3">
                                      <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                        <label htmlFor="floatingnameInput">Price  <span className="text-danger">*</span>  </label>
                                      </div>
                                    </Col>
                                  </Row>
                                </TabPane>
                              </TabContent>
                            </div>
                          </div>

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-green w-xs">Save</button>
                          <button type="button" className="btn btn-orange w-xs" data-bs-dismiss="modal">Cancel</button>
                        </div>
                      </Modal>


                    </Col>
                    <Col className="text-end">
                      <button className="btn btn-primary me-2" type="button"
                        onClick={() => {
                          tog_center();
                        }}
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg" id="PlanDropdown">
                        <i className="fas fa-plus" type="button"></i>
                        <UncontrolledTooltip placement="top" target="PlanDropdown">
                          RateCard
                        </UncontrolledTooltip>
                      </button>


                    </Col>
                  </Row>
                  {!toggle1 && (
                    <Row>
                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
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

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <Label htmlFor=""> Category   </Label>
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

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <label className="control-label">
                          Country
                        </label>
                        <Select
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
                        <Label htmlFor=""> Frequency	   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter4}
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
                            <Th data-priority="1"> Plan </Th>
                            <Th data-priority="3"> Category	</Th>
                            <Th data-priority="1"> Bundle	</Th>
                            {/* <Th data-priority="3"> Max Units </Th> */}
                            <Th data-priority="3"> Country </Th>
                            <Th data-priority="3"> Frequency </Th>
                            <Th data-priority="3"> Price 	 </Th>
                            <Th data-priority="3"> Status</Th>
                            <Th data-priority="3"> Action  </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
                            <Th> Gold </Th>
                            <Th> Business	 </Th>
                            <Th> 25 </Th>
                            {/* <Th> 625 </Th> */}
                            <Th> India </Th>
                            <Td> Yearly		</Td>
                            <Td> $100	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>
                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="Viewtooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={toggleEditModal}
                                  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem  >
                                    <i className="fas fa-circle text-danger  font-size-16 me-2" id="inActive"></i>
                                    Mark as Inactive
                                    <UncontrolledTooltip placement="top" target="inActive">
                                      Mark as Inactive
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem
                                    onClick={onClickDelete}>
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
SubscriptionPricing.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default SubscriptionPricing;



