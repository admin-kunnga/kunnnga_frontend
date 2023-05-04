


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


//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";


import {
  OrderId, BillingName, Date, Total, PaymentStatus, PaymentMethod,
} from "./plansTable";

//redux
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
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

// date picker
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// ===
import AddRolesModal from "./addRolesModal"



function AccountCustomers() {
  //meta title
  document.title = "Kunnga - AssociationsNow";

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false); 

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


  // add Customers modal
  const [modal_center, setmodal_center] = useState(false);
  function tog_center() {
    setmodal_center(!modal_center);
    // removeBodyCss();
  }


  // ======= Add Modal ========
  const toggleAddRolesModal = () => setAddRolesModal(!addRolesModal);
  const [addRolesModal, setAddRolesModal] = useState(false); 



  // Filter data
  const optionFilter = [
    {
      options: [
        { label: "Developer", value: "Plan" },
        { label: "Manager", value: "Ticket" },
        { label: "Accountant", value: "Ticket & Phone" },
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
        { label: "Mastercard", value: "Mastercard" },
        { label: "Visa", value: "Visa" },
        { label: "Rupay", value: "Rupay" },
      ],
    },
  ];

  const optionFilter3 = [
    {
      options: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Deleted", value: "Ticket & Phone" },

      ],
    },
  ];

  const optionFilter4 = [
    {
      options: [
        { label: "10 Days", value: "monthly" },
        { label: "20 days", value: "Quarterly" },
        { label: "25 Days", value: "Yearly" },

      ],
    },
  ];




  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }


  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
    // removeBodyCss();
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



  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order && order.orderId) || "",
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

  // useEffect(() => {
  //   if (orders && !orders.length) {
  //     dispatch(onGetOrders());
  //   }
  // }, [dispatch, orders]);

  // useEffect(() => {
  //   setOrderList(orders);
  // }, [orders]);

  // useEffect(() => {
  //   if (!isEmpty(orders) && !!isEdit) {
  //     setOrderList(orders);
  //     setIsEdit(false);
  //   }
  // }, [orders]);

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
  // --=== toggle -===
  const [toggle1, setToggle] = useState(true)

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  // action dot
  const [btnprimary1, setBtnprimary1] = useState(false)


  const onClickDelete = (order) => {
    setOrder(order);
    setDeleteModal(true);
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
        accessor: "Name",  
      },

      {
        Header: "Description",
        accessor: "Description",
        Cell: (cellProps) => {
          return (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorum?
            </>
          );
        },
      },

      {
        Header: "Category",
        accessor: "email",
        Cell: (cellProps) => {
          return (
            <>
              example@gmail.com
            </>
          );
        },
      },
      {
        Header: "Users",
        accessor: "Users",
        Cell: (cellProps) => {
          return (
            <>
             20 users
            </>
          );
        },
      },

      {
        Header: "Status",
        accessor: "Status",
        Cell: (cellProps) => {
          return (
            <>
              <span className="badge bg-warning">Pending</span>
            </>
          );
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

                <DropdownItem  onClick={toggleAddRolesModal} >
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
                  }  }  >
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

    const data = [
    {
      "Name": "Jennifer Chang",
      "position": "Regional Director",
      "email": "example@gmail.com",
      "job": "Developer",
      "startDate": "2010/11/14",
      "salary": "$357,650"
    },
    {
      "Name": "Jennifer Chang",
      "position": "Regional Director",
      "email": "example@gmail.com",
      "job": "Developer",
      "startDate": "2010/11/14",
      "salary": "$357,650"
    },
    {
      "Name": "Jennifer Chang",
      "position": "Regional Director",
      "email": "example@gmail.com",
      "job": "Developer",
      "startDate": "2010/11/14",
      "salary": "$357,650"
    },
    {
      "Name": "Jennifer Chang",
      "position": "Regional Director",
      "email": "example@gmail.com",
      "job": "Developer",
      "startDate": "2010/11/14",
      "salary": "$357,650"
    },

  ];

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Security Management" breadcrumbItem="Roles" />

          <AddRolesModal isOpen={addRolesModal} toggle={toggleAddRolesModal} />

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

                    </Col>


                    <Col className="text-end">
                      <button type="button" id="Viewtooltip" className="btn btn-primary" onClick={toggleAddRolesModal} > <i className="fas fa-plus"></i> </button>
                         <UncontrolledTooltip placement="top" target="Viewtooltip">
                    Add Roles
                  </UncontrolledTooltip>
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
                          isMulti={true}
                          options={optionFilter3}
                          className="select2-selection"
                        />
                      </Col>

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3">
                        <label className="control-label">
                           Category
                        </label>
                        <Select
                          value={selectedMulti}
                          isMulti={true}
                          onChange={() => {
                            handleMulti();
                          }}
                          options={optionFilter}
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
                    data={data}
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