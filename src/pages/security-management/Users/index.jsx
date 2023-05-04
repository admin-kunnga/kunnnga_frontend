


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
import ResetPassword from "./resetPassword";
import EditModal from "./EditModal"

import avatar from "../../../assets/images/users/avatar-1.jpg";

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

//redux
import { useSelector, useDispatch } from "react-redux";

import {
  Button, Col, Row, UncontrolledTooltip, Nav, Modal,ModalFooter, ModalHeader, Badge, ModalBody, Form, Table, Input, FormFeedback, Label, InputGroup, Card, FormGroup,
  CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink, TabContent, TabPane,
} from "reactstrap";

// date picker
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";




function AccountCustomers() {
  //meta title
  document.title = "Kunnga - AssociationsNow";

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [toggle1, setToggle] = useState(true)



  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  const [sq1, setsq1] = useState(true);
  const [sq2, setsq2] = useState(true);
  const [sq3, setsq3] = useState(true);


  const [selectedGroup, setselectedGroup] = useState(null); 



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

  // ---==== phone input ====----
  const [value, setValue] = useState()

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
  const optionRoles = [
    {
      options: [
        { label: "Manager", value: "Plan" },
        { label: "Developer", value: "Ticket" },
        { label: "Team Lead", value: "Ticket & Phone" },
        { label: "Editor", value: "Ticket & Phone" },

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

      if (tab >= 1 && tab <= 4) {
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

  const data = [
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



    // ====== vertical tabs ===============
    const [verticalActiveTab, setverticalActiveTab] = useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };



  const [passedSteps, setPassedSteps] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 4) {
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







  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      billingName: (order && order.billingName) || "",
      orderdate: (order && order.orderdate) || "",
      total: (order && order.total) || "",
      paymentStatus: (order && order.paymentStatus) || "Paid",
      badgeclass: (order && order.badgeclass) || "success",
      paymentMethod: (order && order.paymentMethod) || "Mastercard",
    },
    validationSchema: Yup.object({
      orderId: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Order Id")
        .required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      orderdate: Yup.string().required("Please Enter Your Order Date"),
      total: Yup.string()
        .matches(/[0-9\.\-\s+\/()]+/, "Please Enter Valid Amount")
        .required("Total Amount"),
      paymentStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
      paymentMethod: Yup.string().required("Please Enter Your Payment Method"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateOrder = {
          id: order ? order.id : 0,
          orderId: values.orderId,
          billingName: values.billingName,
          orderdate: values.orderdate,
          total: values.total,
          paymentStatus: values.paymentStatus,
          paymentMethod: values.paymentMethod,
          badgeclass: values.badgeclass,
        };
        // update order
        dispatch(onUpdateOrder(updateOrder));
        validation.resetForm();
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          billingName: values["billingName"],
          orderdate: values["orderdate"],
          total: values["total"],
          paymentStatus: values["paymentStatus"],
          paymentMethod: values["paymentMethod"],
          badgeclass: values["badgeclass"],
        };
        // save new order
        dispatch(onAddNewOrder(newOrder));
        validation.resetForm();
      }
      toggle();
    },
  });

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => ({
    orders: state.ecommerce.orders,
  }));

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    setOrderList(orders);
  }, [orders]);

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders);
      setIsEdit(false);
    }
  }, [orders]);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setOrder(null);
    } else {
      setModal(true);
    }
  };

  const handleOrderClick = (arg) => {
    const order = arg;
    setOrder({
      id: order.id,
      orderId: order.orderId,
      billingName: order.billingName,
      orderdate: order.orderdate,
      total: order.total,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      badgeclass: order.badgeclass,
    });

    setIsEdit(true);

    toggle();
  };

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



  const columns = useMemo(
    () => [

      {
        Header: "Name",
        accessor: "billingName",
        filterable: true,
        disableFilters: true,
        Cell: (cellProps) => {
          return <BillingName {...cellProps} />;
        },
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

                <DropdownItem
                  onClick={toggleEditModal}>
                  <i className="fas fa-pen font-size-16 me-2" id="editTooltip"></i>
                  Edit
                  <UncontrolledTooltip placement="top" target="editTooltip">
                    Edit
                  </UncontrolledTooltip>
                </DropdownItem>


                <DropdownItem onClick={() => {
                  const customerData = cellProps.row.original;
                  onClickResetpassword(customerData);
                }}>
                  <i className="fas fa-unlock-alt font-size-16 me-2" id="resetTooltip"></i>
                  Reset Password
                  <UncontrolledTooltip placement="top" target="resetTooltip">
                    Reset Password
                  </UncontrolledTooltip>
                </DropdownItem>

                <DropdownItem onClick={() => {
                  const customerData = cellProps.row.original;
                  handleCustomerClick(customerData);
                }} >
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

  return (
    <React.Fragment>
      {/* edit modal */}
      <EditModal isOpen={modalEdit} toggle={toggleEditModal} />

      {/*  Delete modal */}
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />

      {/* reset password modal */}
      <ResetPassword
        show={resetPassword}
        onCloseClick={() => setResetPassword(false)}
      />

      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Security Management" breadcrumbItem="users" />


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
                        isOpen={modal_center} scrollable={true}
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
                          <button type="button" className="btn btn-orange w-xs" data-bs-dismiss="modal">Cancel</button>
                          <button type="button" className="btn btn-green w-xs">Save</button>
                        </div>
                      </Modal>


                    </Col>

                    <Col className="text-end">

                      {/* <Link to="/security-Users-add-users"> */}
                      <button className="btn btn-primary me-2" type="button" id="PlanDropdown"
                        onClick={() => {
                          tog_large();
                        }}
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg">
                        <i className="fas fa-plus" type="button"></i>
                        <UncontrolledTooltip placement="top" target="PlanDropdown">
                          Add User
                        </UncontrolledTooltip>
                      </button>
                      {/* </Link> */}


                      {/* modal */}

                      <div>
                        <Modal
                          size="lg" scrollable={true}
                          isOpen={modal_large}
                          toggle={() => {
                            tog_large();
                          }}
                          centered className="full-modal"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="myLargeModalLabel"
                            >
                              Add User
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
                                        User Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "2",
                                        })}
                                        onClick={() => {
                                            toggleVertical("2");
                                        }}
                                    >
                                        Contact Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            "mb-2": true,
                                            active: verticalActiveTab === "3",
                                        })}
                                        onClick={() => {
                                            toggleVertical("3");
                                        }}
                                    >
                                        Roles
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                            active: verticalActiveTab === "4",
                                        })}
                                        onClick={() => {
                                            toggleVertical("4");
                                        }}
                                    >
                                        Photo
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
                                    <Form>
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
                                                    <label htmlFor="floatingnameInput"> Email Id  <span className="text-danger">*</span></label>
                                                </div>
                                            </Col>


                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <select defaultValue="1" className="form-select" disabled >
                                                        <option value="1">Active</option>
                                                        <option value="2">Inactive</option>
                                                        <option value="3">Deleted</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Status  <span className="text-danger">*</span> </label>
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


                                        </Row>

                                    </Form>
                                </TabPane>

                                <TabPane tabId="2">
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

                                <TabPane tabId="3">
                                    <div>
                                        {/* <Form>
                                            <TableContainer
                                                columns={columns2}
                                                data={data}
                                                isGlobalFilter={true}
                                                isAddOptions={false}
                                                customPageSize={20}
                                                className="custom-header-css"
                                            />
                                        </Form> */}
                                        {/* <Label htmlFor=""> Roles   </Label>
                                        <Select
                                            value={selectedGroup}
                                            isMulti={true}
                                            hideSelectedOptions={true}
                                            onChange={() => {
                                                handleSelectGroup();
                                            }}
                                            options={optionRoles}
                                            className="select2-selection"
                                        /> */}
                                          <Label htmlFor="productdesc">
                            Roles
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="productdesc"
                            rows="5"
                            placeholder=""
                          />
                                        <p className="text-muted mt-2">* Select roles to assign to this user. You may assign up to 50 roles per user.</p>
                                    </div>
                                </TabPane>

                                <TabPane tabId="4">
                                    <Row>
                                        <Col className="col-auto position-relative">
                                            <img src={avatar} className="avatar-xl img-thumbnail" alt="" />
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <button className="btn btn-xs center btn-primary rounded-circle me-2">
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button className="btn btn-xs center btn-orange rounded-circle">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </Col>
                                        <Col className="col-auto position-relative">
                                            <img src={avatar} className="avatar-xl img-thumbnail" alt="" />
                                            <div className="d-flex align-items-center justify-content-center mb-1">
                                                <button className="btn btn-xs center btn-primary rounded-circle me-2">
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button className="btn btn-xs center btn-orange rounded-circle">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>  <ModalFooter>
                    <button className="btn btn-green me-2 w-xs">Save</button>
                    <button className="btn btn-orange w-xs" onClick={toggle}>Cancel</button>
                </ModalFooter>
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
                          isMulti={true}
                          hideSelectedOptions={true}
                          onChange={() => {
                            handleSelectGroup();
                          }}
                          options={optionFilter1}
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
                  <TableContainer
                    columns={columns}
                    data={orders}
                    isGlobalFilter={true}
                    // isAddOptions={true}
                    handleOrderClicks={handleOrderClicks}
                    customPageSize={10}
                    isAddOptions={false}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Order" : "Add Order"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      <Label className="form-label">Order Id</Label>
                      <Input
                        name="orderId"
                        type="text"
                        placeholder="Insert Order Id"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderId || ""}
                        invalid={
                          validation.touched.orderId &&
                            validation.errors.orderId
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderId &&
                        validation.errors.orderId ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderId}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Billing Name</Label>
                      <Input
                        name="billingName"
                        type="text"
                        placeholder="Insert Billing Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.billingName || ""}
                        invalid={
                          validation.touched.billingName &&
                            validation.errors.billingName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.billingName &&
                        validation.errors.billingName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.billingName}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Order Date</Label>
                      <Input
                        name="orderdate"
                        type="date"
                        // value={orderList.orderdate || ""}
                        placeholder="Insert Order Date"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderdate || ""}
                        invalid={
                          validation.touched.orderdate &&
                            validation.errors.orderdate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderdate &&
                        validation.errors.orderdate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderdate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Total</Label>
                      <Input
                        name="total"
                        placeholder="Insert Total Amount"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.total || ""}
                        invalid={
                          validation.touched.total && validation.errors.total
                            ? true
                            : false
                        }
                      />
                      {validation.touched.total && validation.errors.total ? (
                        <FormFeedback type="invalid">
                          {validation.errors.total}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Payment Status</Label>
                      <Input
                        name="paymentStatus"
                        type="select"
                        placeholder="Insert Payment Status"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Paid</option>
                        <option>Chargeback</option>
                        <option>Refund</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                        validation.errors.paymentStatus ? (
                        <FormFeedback type="invalid">
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Payment Method</Label>
                      <Input
                        name="paymentMethod"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentMethod || ""}
                      >
                        <option>Mastercard</option>
                        <option>Visa</option>
                        <option>Paypal</option>
                        <option>COD</option>
                      </Input>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                      >
                        Save
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>


    </React.Fragment>
  );
}
AccountCustomers.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default AccountCustomers;