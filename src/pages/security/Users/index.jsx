


import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
// import Switch from "react-switch";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import axios from 'axios';
// import { useTable } from 'react-table';

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";
import ResetPassword from "./resetPassword";
import EditModal from "./EditModal"
import AddModal from "./add-users"


import {
  Col, Row, UncontrolledTooltip, Form, Toast, ToastBody, Table, Input, Label, InputGroup, Card, FormGroup, CardBody, Dropdown, DropdownMenu,
  DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink, TabContent, TabPane
} from "reactstrap";


function AccountCustomers() {
  //meta title
  document.title = "Kunnga - Enterprise Portal";
  window.user_id = '1';


  // const [modal, setModal] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  const [toggle1, setToggle] = useState(true)


// ======================
  var user = JSON.parse(localStorage.getItem("user"));
      // var user_id = user.id;
      var user_id = '1';


  // ===== filter toggle ====
  const [selectedGroup, setselectedGroup] = useState(null);
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  //  ==== Filter data ====
  const optionFilter1 = [
    {
      options: [
        { label: "Active", value: "Plan" },
        { label: "Inactive", value: "Ticket" },
        { label: "Deleted", value: "Ticket & Phone" },
      ],
    },
  ];

  // // add Customers modal
  // const [modal_center, setmodal_center] = useState(false);
  // function tog_center() {
  //   setmodal_center(!modal_center);
  //   removeBodyCss();
  // }



  // ===== === Tabs ======/
  // const [activeTabVartical, setoggleTabVertical] = useState(1)
  // const [passedStepsVertical, setPassedStepsVertical] = useState([1])


  // function toggleTabVertical(tab) {
  //   if (activeTabVartical !== tab) {
  //     var modifiedSteps = [...passedStepsVertical, tab]

  //     if (tab >= 1 && tab <= 2) {
  //       setoggleTabVertical(tab)
  //       setPassedStepsVertical(modifiedSteps)
  //     }
  //   }
  // }



  // ====  Toaster =====
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [toastNotSend, setToastNotSend] = useState(false);

  useEffect(() => {
    //=== refresh list ====
    fetchUsers(API);

    // ====Toaster time =====
    if (toastSuccess || toastError || toastNotSend) {
      const timeout = setTimeout(() => {
        setToastSuccess(false);
        setToastError(false);
        setToastNotSend(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [toastSuccess, toastError, toastNotSend]);





  // ===== edit modal ======
  const toggleEditModal = () => setModalEdit(!modalEdit);
  const [modalEdit, setModalEdit] = useState(false);

  // ====== Add modal =======
  const toggleAddModal = () => setModalAdd(!modalAdd);
  const [modalAdd, setModalAdd] = useState(false);

  // ======= reset password ======= 
  const [resetPassword, setResetPassword] = useState(false);
  const onClickResetpassword = () => {
    setResetPassword(true);
  };

  // ====== delete user ======== 
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState('');


  const onClickDelete = (value) => {
    window.user_id = `${value}`;
    setUserId(window.user_id);
    setDeleteModal(true);
  };

  const onCloseClick = () => {
    setDeleteModal(false)
  }



  // ---==== phone input ====----
  const [value, setValue] = useState()


  // --====== user list =======--------  

  const API = 'http://localhost:3400/getUsers';
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
     
      let result = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
            // Authorization: `Bearer ${user.token}`, 
        },
      });

      let data = await result.json();
      if (data.status === 200) {
        setUsers(data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteUser = async () => {
    try {
       await fetch(`http://localhost:3400/deleteUsersById?id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${user.token}`,
      },

      }).then(response => response.json())
        .then(data => {
          if (data.status && data.status == 200) {
            fetchUsers(API);
            setDeleteModal(false);
            setToastSuccess(true)
          } else if (data.status && data.status == 404) {
            setToastError(true)
          }
          else {
            setToastNotSend(true)
          }
        })
    }
    catch (error) {
      console.error(error);
      setToastNotSend(true)
    }
  };



  const columns = useMemo(() => [
    {
      Header: 'Name',
      // accessor: 'first_name, last_name',
      accessor: (row) => `${row.first_name} ${row.last_name}`,
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Job Title',
      accessor: 'job_title',
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Email Address	',
      accessor: 'email',
      Cell: ({ value }) => <span>{value}</span>,
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => {
        return value === 'Active' ? (
          <span className="badge bg-success">{value}</span>
        ) : value === 'Inactive' ? (
          <span className="badge bg-warning">{value}</span>
        ) : (
          <span className="badge bg-danger">{value}</span>
        );
      },

    },
    {
      Header: "Action",
      accessor: 'id',
      Cell: ({ value }) => {
        return (
          <UncontrolledDropdown className="text-center">
            <DropdownToggle tag="a" className="card-drop">
              <i className="mdi mdi-dots-horizontal fs-18"></i>
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem onClick={toggleEditModal}>
                <i className="fas fa-eye font-size-16 me-2" id="Viewtooltip"></i>
                View
                <UncontrolledTooltip placement="top" target="Viewtooltip">
                  View
                </UncontrolledTooltip>
              </DropdownItem>
              <DropdownItem onClick={toggleEditModal}>
                <i className="fas fa-pen font-size-16 me-2" id="editTooltip"></i>
                Edit
                <UncontrolledTooltip placement="top" target="editTooltip">
                  Edit
                </UncontrolledTooltip>
              </DropdownItem>

              <DropdownItem onClick={() => {
                const value = cellProps.row.original;
                onClickResetpassword(value);
              }}>
                <i className="fas fa-unlock-alt font-size-16 me-2" id="resetTooltip"></i>
                Reset Password
                <UncontrolledTooltip placement="top" target="resetTooltip">
                  Reset Password
                </UncontrolledTooltip>
              </DropdownItem>

              <DropdownItem>
                <i className="fas fa-circle text-danger font-size-16 me-2" id="inactiveTooltip"></i>
                Mark as Inactive
                <UncontrolledTooltip placement="top" target="inactiveTooltip">
                  Mark as Inactive
                </UncontrolledTooltip>
              </DropdownItem>
              {/* onClick={() => onClickDelete(value.id)}  */}
              <DropdownItem onClick={() => onClickDelete(value)} >
                <i className="fas fa-trash-alt font-size-16 me-2" id="deleteTooltip"></i>
                Delete
                <UncontrolledTooltip placement="top" target="deleteTooltip">
                  Delete
                </UncontrolledTooltip>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ], []);


  return (
    <React.Fragment>
      {/* ===== edit modal ====== */}
      <EditModal isOpen={modalEdit} toggle={toggleEditModal} />

      {/* ===== add modal ========== */}
      <AddModal isOpen={modalAdd} toggle={toggleAddModal} />

      {/* ====== Delete modal ========= */}
      <DeleteModal show={deleteModal} onDeleteClick={deleteUser} onCloseClick={() => setDeleteModal(false)} />

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

                      <button className="btn btn-primary me-2" type="button" id="PlanDropdown"
                        onClick={toggleAddModal} data-toggle="modal" data-target=".bs-example-modal-lg">
                        <i className="fas fa-plus" type="button"></i>
                        <UncontrolledTooltip placement="top" target="PlanDropdown">
                          Add User
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
                          isMulti={true}
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
                    data={users}
                    isGlobalFilter={true}
                    customPageSize={10}
                    isAddOptions={false}
                    isPagination={true}
                    Z className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* ==========  toasters ============*/}
      <span>
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
          <Toast
            isOpen={toastSuccess}
            className="align-items-center text-white bg-success border-0"
            role="alert"
          >
            <div className="d-flex">
              <ToastBody>
                User Delete Successfully
              </ToastBody>
              <button onClick={() => setToastSuccess(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
              ></button>
            </div>
          </Toast>
        </div>
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
          <Toast
            isOpen={toastError}
            className="align-items-center text-dark bg-warning border-0"
            role="alert"   >
            <div className="d-flex">
              <ToastBody>
                User Not Found
              </ToastBody>
              <button onClick={() => setToastError(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
              ></button>
            </div>
          </Toast>
        </div>

        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
          <Toast
            isOpen={toastNotSend}
            className="align-items-center text-white bg-danger border-0"
            role="alert"  >
            <div className="d-flex">
              <ToastBody>
                Data Not Submit
              </ToastBody>
              <button onClick={() => setToastNotSend(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
              ></button>
            </div>
          </Toast>
        </div>

      </span>


    </React.Fragment>
  );
}
AccountCustomers.propTypes = {
  value: PropTypes.string,
};

export default AccountCustomers;