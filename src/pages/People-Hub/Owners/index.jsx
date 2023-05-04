 


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
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


import classnames from "classnames"

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";
// import EditModal from "./EditModal"

import AddUserDetails from "./modals/addUserModal"

import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "/src/store/actions";
 

import {
  Button,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader, Badge,
  ModalBody,
  Form,
  Table,
  Input,
  FormFeedback,
  Label,
  InputGroup,
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



  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
    removeBodyCss();
  }




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
  const optionFilter1 = [
    {
      options: [
        { label: "Active", value: "Plan" },
        { label: "Inactive", value: "Ticket" },
        { label: "Deleted", value: "Ticket & Phone" },
      ],
    },
  ];

  const optionFilter2 = [
    {
      options: [
        { label: "Software Developer", value: "One" },
        { label: "Doctor", value: "Two" },
        { label: "Mechanic", value: "Three" },
      ],
    },
  ];

  const optionType1 = [
    {
      options: [
        { label: "Home", value: "One" },
        { label: "Work", value: "Two" },
        { label: "Mobile", value: "Three" },
        { label: "Fax", value: "Three" },
        { label: "Other", value: "Three" },
      ],
    },
  ];


  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }


  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])


  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 2) {
        setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
      }
    }
  }
  // ------------ modal code start---------------------



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

  const tenantsData = [
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



  const [passedSteps, setPassedSteps] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 3) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }


  const [activeTab, setactiveTab] = useState(1)


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



  const optionType = [
    {
      options: [
        { label: "Subscription", value: "India" },
        { label: "Category", value: "UAE" },
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

  const optionCountries = [
    {
      options: [
        { label: "India", value: "India" },
        { label: "USA", value: "UAE" },
        { label: "UAE", value: "UAE" },

      ],
    },
  ];

  const optionCurrency = [
    {
      options: [
        { label: "USD", value: "India" },
        { label: "INR", value: "UAE" },
        { label: "CAD", value: "UAE" },

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


  // modal code end





  // edit modal
  const toggleEditModal = () => setModalEdit(!modalEdit);
  const [modalEdit, setModalEdit] = useState(false);

 
  //delete order
  const [deleteModal, setDeleteModal] = useState(false);



  // action dot
  const [btnprimary1, setBtnprimary1] = useState(false)


  const onClickDelete = (order) => {
    setOrder(order);
    setDeleteModal(true);
  };


  // reset password 
  const [resetPassword, setResetPassword] = useState(false);

  const onClickResetpassword = () => {
    setResetPassword(true);
  };


  const handleDeleteOrder = () => {
    if (order && order.id) {
      dispatch(onDeleteOrder(order.id));
      setDeleteModal(false);
      setOrder("");
    }
  };
  const handleOrderClicks = () => {
    setOrderList("");
    setIsEdit(false);
    toggle();
  };


  // ---==== phone input ====----
  const [value, setValue] = useState()

  const columns = useMemo(
    () => [

      {
        Header: "Name",
        accessor: "name",
        filterable: true,
        disableFilters: true,
        // Cell: (cellProps) => {
        //   return <>  </>;
        // },
      },

      {
        Header: "Job Title ",
        accessor: "Job Title ",
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return < >
            Software Developer
          </>;
        },
      },

      {
        Header: "Email Address ",
        accessor: "email",
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return < >
            example@gmail.com
          </>;
        },
      },

      {
        Header: "Status",
        accessor: "paymentStatus",
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return <>  <Badge pill color="success" className="me-1">
            Active
          </Badge> </>;
        },
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
                {/* <DropdownItem  >
                  <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                  View
                  <UncontrolledTooltip placement="top" target="Viewtooltip">
                    View
                  </UncontrolledTooltip>
                </DropdownItem> */}

                <DropdownItem
                  onClick={toggleEditModal}>
                  <i className="fas fa-pen font-size-16 me-2" id="editTooltip"></i>
                  Edit
                  <UncontrolledTooltip placement="top" target="editTooltip">
                    Edit
                  </UncontrolledTooltip>
                </DropdownItem> 

                <DropdownItem>
                  <i className="fas fa-circle text-danger font-size-16 me-2" id="inactiveTooltip"></i>
                  Mark as Inactive
                  <UncontrolledTooltip placement="top" target="inactiveTooltip">
                    Mark as Inactive
                  </UncontrolledTooltip>
                </DropdownItem>

                <DropdownItem
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

  const data = [
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



    // -----===== add user modal ======-----
    const toggleAddUserDetailModal = () => setAddUserDetailModal(!AddUserDetailModal);
    const [AddUserDetailModal, setAddUserDetailModal] = useState(false);



  return (
    <React.Fragment>
        <AddUserDetails isOpen={AddUserDetailModal} toggle={toggleAddUserDetailModal} />
      {/* edit modal */}
      {/* <EditModal isOpen={modalEdit} toggle={toggleEditModal} /> */}

      {/*  Delete modal */}
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />

      {/* reset password modal */}
      {/* <ResetPassword
        show={resetPassword}
        onCloseClick={() => setResetPassword(false)}
      /> */}

      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="People hub" breadcrumbItem="Owner" />


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
                          <h5 className="modal-title mt-0" id="myLargeModalLabel"> Add Customers </h5>
                          <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal"
                            aria-label="Close" onClick={() => { setmodal_center(false); }}> <i className="fas fa-times"> </i> </button>
                        </div>

                        <div className="modal-body">
                          <Row>

                            <Col xs="6" className="mb-3">
                              <div className="form-floating">
                                <select defaultValue="1" className="form-select">
                                  <option >--Select-- </option>
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
                                  <option>--Select-- </option>
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
                      <Col className="col-12 text-end mb-3"> <button className="btn btn-primary me-2" type="button"
                                            onClick={toggleAddUserDetailModal} data-toggle="modal"
                                            data-target=".bs-example-modal-lg" id="SubscriptionDropdown">
                                            <i className="fas fa-plus" type="button"
                                            ></i>
                                            <UncontrolledTooltip placement="top" target="SubscriptionDropdown">
                                                Add Owner
                                            </UncontrolledTooltip>
                                        </button></Col>

                      {/* </Link> */}


                      {/* modal */}

                      <div>
                        <Modal
                          size="lg"
                          scrollable={true}
                          isOpen={modal_large}
                          toggle={() => {
                            tog_large();
                          }}
                          centered
                        >
                          <div className="modal-header">
                            <h5 className="modal-title mt-0">   Add User
                            </h5>
                            <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal"
                              aria-label="Close" onClick={() => { setmodal_large(false); }}> <i className="fas fa-times"></i> </button>
                          </div>
                          <div className="modal-body modal-content-60">

                            <div className="vertical-wizard wizard clearfix vertical">
                              <div className="steps clearfix">
                                <ul>

                                  <NavItem
                                    className={classnames({ current: activeTab === 1 })}  >
                                    <NavLink
                                      className={classnames({ current: activeTab === 1 })}
                                      onClick={() => {
                                        setactiveTab(1)
                                      }}
                                    // disabled={!(passedSteps || []).includes(1)}
                                    >
                                      <span className="number">1.</span>
                                      <span> User Details </span>
                                    </NavLink>
                                  </NavItem>

                                  <NavItem
                                    className={classnames({ current: activeTab === 2 })} >
                                    <NavLink
                                      className={classnames({ active: activeTab === 2 })}
                                      onClick={() => {
                                        setactiveTab(2)
                                      }}
                                    // disabled={!(passedSteps || []).includes(2)}
                                    >
                                      <span className="number">2.</span>
                                      <span> Contact Details</span>
                                    </NavLink>
                                  </NavItem>

                                  {/* <NavItem
                                    className={classnames({ current: activeTab === 3 })}  >
                                    <NavLink
                                      className={classnames({ active: activeTab === 3 })}
                                      onClick={() => {
                                        setactiveTab(3)
                                      }}
                                    // disabled={!(passedSteps || []).includes(3)} 
                                    >
                                      
                                      <span className="py-2 d-block">  Roles </span>
 
                                    </NavLink>
                                  </NavItem> */}

                                  {/* <NavItem
                                    className={classnames({ current: activeTab === 3 })}
                                  >
                                    <NavLink
                                      className={classnames({ active: activeTab === 3 })}
                                      onClick={() => {
                                        setactiveTab(3)
                                      }}
                                    // disabled={!(passedSteps || []).includes(3)}
                                    >
                                      <span className="number">3.</span> 
                                      <span>  Settings </span>
                                       
                                    </NavLink>
                                  </NavItem> */}
                                </ul>
                              </div>
                              <div className="content clearfix">
                                <TabContent activeTab={activeTab} className="body">

                                  <TabPane tabId={1}>
                                    <Form>
                                      <Row>

                                        <Col lg={6} className="mb-3">
                                          <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter First Name" />
                                            <label htmlFor="floatingnameInput"> First Name <span className="text-danger">*</span></label>
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
                                            <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Email Id" />
                                            <label htmlFor="floatingnameInput"> Email Id  <span className="text-danger">*</span></label>
                                          </div>
                                        </Col>

                                        <Col lg={6} className="mb-3">
                                          <div className="form-floating">
                                            <select defaultValue="1" className="form-select" disabled>
                                              <option value="1">Active</option>
                                              <option value="2">Inactive</option>
                                              <option value="3">Deleted</option>
                                            </select>
                                            <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                          </div>
                                        </Col>

                                        <Col lg={6} className="mb-3">
                                          <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Company" />
                                            <label htmlFor="floatingnameInput"> Company </label>
                                          </div>
                                        </Col>

                                        <Col lg={6} className="mb-3">
                                          <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Job Title" />
                                            <label htmlFor="floatingnameInput"> Job Title </label>
                                          </div>
                                        </Col>

                                      </Row>

                                    </Form>
                                  </TabPane>

                                  <TabPane tabId={2}>
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
                                                      <button
                                                        className="btn btn-orange border-0 rounded-circle center btn-small"
                                                        id="unknown-btn"
                                                        onClick={e => {
                                                          handleRemoveRow(formRow.id);
                                                        }}
                                                      >
                                                        <i className="fas fa-trash-alt" ></i>
                                                      </button>
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
 

                                </TabContent>
                              </div>


                            </div>
                          </div>
                          <div className="modal-footer text-end">
                            <button className="btn btn-green w-xs me-2">Save</button>
                            <button className="btn btn-orange w-xs">Cancel</button>
                          </div>
                        </Modal>
                      </div>




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
                        <Label htmlFor=""> Status   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          isMulti={true}
                          options={optionFilter1}
                          className="select2-selection"
                        />
                      </Col>

                      {/* <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <Label htmlFor=""> Job Type   </Label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter2}
                          className="select2-selection"
                        />
                      </Col> */}



                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3 mt-auto">
                        <button className="btn btn-primary w-100">Filter</button>
                      </Col>

                    </Row>
                  )}


                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={tenantsData}
                    isGlobalFilter={true}
                    // isAddOptions={true} 
                    customPageSize={10}
                    isAddOptions={false}
                    className="custom-header-css"
                  />
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