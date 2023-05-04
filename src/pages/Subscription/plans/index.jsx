import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import Switch from "react-switch";
import classnames from "classnames"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";



//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import TableContainer from "../../../components/Common/TableContainer";
import DeleteModal from "../../../components/Common/DeleteModal";
import EditModal from "./EditModal";

import {
  Badge, Col, Row, UncontrolledTooltip, Modal, ModalHeader, ModalBody, Form, Input, FormFeedback, Label, Card, FormGroup, CardBody, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavItem, NavLink, TabContent, TabPane, InputGroup
} from "reactstrap";

function SubscriptionPlans() {
  //meta title
  document.title = "Kunnga - Enterprise Portal";

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [toggle1, setToggle] = useState(true)

  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  const [sq2, setsq2] = useState(true);

  const [DropdownBtn1, setDropdownBtn1] = useState(false);


  


  const [modal_large, setmodal_large] = useState(false);
  function tog_large() {
    setmodal_large(!modal_large);
    removeBodyCss();
  }


  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])


  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) { 

      if (tab >= 1 && tab <= 2) {
        setoggleTabVertical(tab) 
      }
    }
  }

  // select dropdown
  const [selectedGroup, setselectedGroup] = useState(null);
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  const optionGroup = [
    {
      // label: "Picnic",
      options: [
        { label: "Chat", value: "Plan" },
        { label: "Ticket", value: "Ticket" },
        { label: "Ticket & Phone", value: "Ticket & Phone" },
      ],
    },
  ];

  const optionFilter1 = [
    {
      options: [
        { label: "Gold", value: "Plan" },
        { label: "Silver", value: "Ticket" },
        { label: "Platinum", value: "Ticket & Phone" },
      ],
    },
  ];

  const optionFilter2 = [
    {
      options: [
        { label: "Bussiness", value: "Mastercard" },
        { label: "Individual", value: "Visa" },
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


  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = () => {
    setDeleteModal(true);
  };

  //edit modal
  const toggleEditModal = () => setModalEdit(!modalEdit);
  const [modalEdit, setModalEdit] = useState(false);


  return (
    <React.Fragment>

      <EditModal isOpen={modalEdit} toggle={toggleEditModal} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => setDeleteModal(false)}
        onCloseClick={() => setDeleteModal(false)}
      />


      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Subscription Management" breadcrumbItem="Plans" />


          <Row>
            <Col xs="12">

              <Card>
                <CardBody className="pb-0">
                  <Row>
                    <Col xs={6} sm={4} md={3}>
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
                    <Col xs={2} sm={2}>
                      <button className="btn btn-primary" onClick={() => setToggle(!toggle1)} >
                        <i className="fas fa-sliders-h"></i>
                      </button>
                    </Col>


                    <Col xs={4} sm={6} md={7} className="text-end">
                      <button className="btn btn-primary me-2" type="button"
                        onClick={() => {
                          tog_large();
                        }}
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg" id="PlanDropdown">
                        <i className="fas fa-plus" type="button"
                        ></i>
                        <UncontrolledTooltip placement="top" target="PlanDropdown">
                          New Plan
                        </UncontrolledTooltip>
                      </button>

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
                          <DropdownItem> <i className="fas fa-file-csv me-2 fs-18"></i> CSV Format </DropdownItem>
                          <DropdownItem> <i className="fas fa-file-pdf me-2 fs-18"></i> PDF Format </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>

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

                      <Col xs={3} sm={3} md={3} xl={2} className="mb-3">
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

                      <Col xs={6} sm={4} lg={3} xl={2} className="mb-3 mt-auto">
                        <button className="btn btn-primary w-100">Filter</button>
                      </Col>
                    </Row>
                  )}



                  {/* modal */}

                  <div>
                    <Modal size="lg" isOpen={modal_large} toggle={() => { tog_large(); }} centered={true}>
                      <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myLargeModalLabel">
                          New Plan
                        </h5>
                        <button onClick={() => {setmodal_large(false); }}
                          type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>
                      </div>
                      <div className="modal-body modal-content-60">
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
                                // disabled={!(passedStepsVertical || []).includes(1)}

                                >
                                  {/* <span className="number">1.</span>  */}
                                  <span className="py-2 d-block">  Plan Details </span>
                                </NavLink>
                              </NavItem>
                              <NavItem
                                className={classnames({
                                  current: activeTabVartical === 2,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTabVartical === 2,
                                  })}
                                  onClick={() => {
                                    toggleTabVertical(2)
                                  }}
                                // disabled={!(passedStepsVertical || []).includes(2)}
                                >
                                  {/* <span className="number">2.</span>  */}
                                  <span className="py-2 d-block">  Features </span>
                                </NavLink>
                              </NavItem>

                            </ul>
                          </div>
                          <div className="content clearfix">
                            <TabContent
                              activeTab={activeTabVartical}
                              className="body">
                              <TabPane tabId={1}>
                                <Form>
                                  <Row>
                                    <Col lg="6">
                                      <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                        <label htmlFor="floatingnameInput">Name <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>
                                    <Col lg="6">
                                      <div className="mb-3">
                                        <div className="form-floating mb-3">
                                          <select defaultValue="0" className="form-select">
                                            <option selected>--Select-- </option>
                                            <option value="1">Business</option>
                                            <option value="2">Individual</option>
                                          </select>
                                          <label htmlFor="floatingSelectGrid">Category <span className="text-danger">*</span> </label>
                                        </div>

                                      </div>
                                    </Col>

                                    <Col lg="12">
                                      <div className="form-floating mb-3">
                                        <select defaultValue="2" className="form-select" disabled>
                                          <option selected >--Select--</option>
                                          <option value="1">Active </option>
                                          <option value="2">Inactive</option>
                                          <option value="2">Deleted</option>

                                        </select>
                                        <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                      </div>
                                    </Col>

                                  </Row>
                                  <Row>
                                    <Col lg="12" className="textarea">
                                      <FormGroup floating className="mb-3">
                                        <Input className="min-h-180"
                                          id="examplePassword"
                                          name="Description"
                                          placeholder="Description"
                                          type="textarea" rows="8" /> 
                                        <Label className="w-100 h-auto" for="examplePassword">
                                         <span className="">  Description <span className="text-danger">*</span></span>
                                        </Label> 
                                      </FormGroup>

                                    </Col>
                                  </Row>
                                </Form>
                              </TabPane>
                              <TabPane tabId={2}>
                                <Form>
                                  <Table className="table mb-0 table-layout-fixed">
                                    <tbody>
                                      <tr>
                                        <td className="table-light fw-bold align-middle">Max No. of Properties
                                          <span className="text-danger">*</span>
                                        </td>
                                        <td>
                                          <Input pattern="[0-9]+"
                                            type="number"
                                            className="form-control"
                                          />
                                        </td>
                                      </tr>

                                      <tr>
                                        <td className="table-light fw-bold align-middle">Max No. of Units <span className="text-danger">*</span> </td>
                                        <td>
                                          <Input type="number" pattern="[0-9]+" className="form-control"
                                          />
                                        </td>
                                      </tr>

                                      <tr>
                                        <td className="table-light fw-bold align-middle">Document Storage <span className="text-danger">*</span> </td>
                                        <td>
                                          <InputGroup>
                                            <input type="number" pattern="[0-9]+" min="1" max="99999" className="form-control" id="inlineFormInputGroupUsername" placeholder=" " />
                                            <div className="input-group-text">GB</div>
                                          </InputGroup>
                                        </td>
                                      </tr>

                                      {/* <tr>
                                        <td className="table-light fw-bold align-middle"> Support <span className="text-danger">*</span> </td>
                                        <td>
                                          <Select value={selectedGroup} onChange={() => { handleSelectGroup(); }}
                                            options={optionGroup} className="select2-selection" />
                                        </td>
                                      </tr> */}

                                      <tr>
                                        <td className="table-light fw-bold align-middle">Max No. of Users <span className="text-danger">*</span> </td>
                                        <td>
                                          <Input type="number" pattern="[0-9]+" className="form-control" />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </Form>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer text-end"> 
                              <button className="btn btn-green me-2 w-xs"> Save </button>
                              <button className="btn btn-orange w-xs"> Cancel </button> 
                        </div>
                    </Modal>
                  </div>


                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  {/* <TableContainer
                    columns={columns}
                    data={orders}
                    isGlobalFilter={false}
                    disableFilters={true} 
                    handleOrderClicks={handleOrderClicks}
                    customPageSize={10}
                    className="custom-header-css"
                  /> */}
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
                            {/* <Th> </Th> */}
                            <Th data-priority="1"> Name </Th>
                            <Th data-priority="3"> Category	</Th>
                            <Th data-priority="1"> Max. no of Units	</Th>
                            <Th data-priority="3"> Status	 </Th>
                            <Th data-priority="3"> Action  </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th> Silver	</Th>
                            <Td> Individual	</Td>
                            <Td> 263	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>

                            <Td>
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

                                  <DropdownItem onClick={toggleEditModal}  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Mark As Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                      Edit
                                    </UncontrolledTooltip>
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
                            <Th> Gold	</Th>
                            <Td> Individual	</Td>
                            <Td> 2633	</Td>
                            <Td> <Badge color="danger"> Inactive </Badge>	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                  <DropdownItem  >
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem onClick={toggleEditModal}  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Mark As Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                      Edit
                                    </UncontrolledTooltip>
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
                            <Th> Silver	</Th>
                            <Td> Individual	</Td>
                            <Td> 263	</Td>
                            <Td> <Badge color="success">Active </Badge>	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                  <DropdownItem   >
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem onClick={toggleEditModal}  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Mark As Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                      Edit
                                    </UncontrolledTooltip>
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
                            <Th> Gold	</Th>
                            <Td> Individual	</Td>
                            <Td> 2633	</Td>
                            <Td> <Badge color="danger"> Inactive </Badge>	</Td>

                            <Td>
                              <UncontrolledDropdown className="text-center">
                                <DropdownToggle tag="a" className="card-drop">
                                  <i className="mdi mdi-dots-horizontal fs-18"></i>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">

                                  <DropdownItem   >
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                      View
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem onClick={toggleEditModal}  >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </DropdownItem>

                                  <DropdownItem >
                                    <i className="fas fa-circle text-danger font-size-16 me-2" id="InactiveTooltip"></i>
                                    Mark As Inactive
                                    <UncontrolledTooltip placement="top" target="InactiveTooltip">
                                      Edit
                                    </UncontrolledTooltip>
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


    </React.Fragment >
  );
}
SubscriptionPlans.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default SubscriptionPlans;



