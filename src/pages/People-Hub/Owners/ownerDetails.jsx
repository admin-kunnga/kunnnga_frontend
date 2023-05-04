import React, { useState } from "react";
import {
  Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import classnames from "classnames";

import AddUserDetails from "./modals/addUserModal"

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const PagesStarter = () => {

  //meta title
  document.title = "Kunnga - AssociationsNow";

  // ------------========Nav Bar============--------
  const [verticalActiveTab, setverticalActiveTab] = useState("1");
  const [verticalActiveTabWithIcon, setverticalActiveTabWithIcon] =
    useState("1");

  const toggleVertical = (tab) => {
    if (verticalActiveTab !== tab) {
      setverticalActiveTab(tab);
    }
  };

  const [activeTab, setactiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };


  // ---=== phone input ===-----
  const [value, setValue] = useState()


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

  // -----===== add user modal ======-----
  const toggleAddUserDetailModal = () => setAddUserDetailModal(!AddUserDetailModal);
  const [AddUserDetailModal, setAddUserDetailModal] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="People Hub" breadcrumbItem="Owner" />
        </Container>
        <AddUserDetails isOpen={AddUserDetailModal} toggle={toggleAddUserDetailModal} />

        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <Nav tabs className="">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      User Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Contact Details
                    </NavLink>
                  </NavItem>

                </Nav>
              </CardBody>
            </Card>

            <TabContent activeTab={activeTab} className="text-muted">

              <TabPane tabId="1">
                <Card>
                  <CardBody>
                    <Col className="col-12 text-end mb-3"> <button className="btn btn-primary me-2" type="button"
                      onClick={toggleAddUserDetailModal} data-toggle="modal"
                      data-target=".bs-example-modal-lg" id="SubscriptionDropdown">
                      <i className="fas fa-plus" type="button"
                      ></i>
                      <UncontrolledTooltip placement="top" target="SubscriptionDropdown">
                        Add Owner 
                      </UncontrolledTooltip>
                    </button></Col>
                    <Row>

                      <Col lg={6} xl={4} className="mb-4">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput">First Name <span className="text-danger">*</span></label>
                        </div>
                      </Col>

                      <Col lg={6} xl={4} className="mb-4">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput"> Middle Name </label>
                        </div>
                      </Col>

                      <Col lg={6} xl={4} className="mb-4">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput"> Last Name  <span className="text-danger">*</span></label>
                        </div>
                      </Col>

                      <Col lg={6} className="mb-4">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput"> Username  <span className="text-danger">*</span></label>
                        </div>
                      </Col>


                      <Col lg={6}>
                        <div className="form-floating mb-3">
                          <select defaultValue="1" className="form-select">
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                            <option value="3">Deleted</option>
                          </select>
                          <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                        </div>
                      </Col>

                      <Col lg={6} className="mb-4">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput"> Company </label>
                        </div>
                      </Col>


                      <Col lg={6} className="mb-4">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                          <label htmlFor="floatingnameInput"> Job Title</label>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="form-floating mb-3">
                          <select defaultValue="1" className="form-select">
                            <option value="1"> Owner</option>
                            <option value="2"> Co-Owner </option>
                            <option value="3"> Owners Family </option>
                          </select>
                          <label htmlFor="floatingSelectGrid"> Member Type <span className="text-danger">*</span> </label>
                        </div>
                      </Col>

                      <Col xs={12} className="text-end mt-4">
                        <button className="btn btn-green w-xs me-2">Save</button>
                        <button className="btn btn-orange w-xs">Cancel</button>
                      </Col>
                    </Row>



                  </CardBody>
                </Card>
              </TabPane>


              <TabPane tabId="2">
                <Card>
                  <CardBody>
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
                              <Col md={6} className="float mb-3">  
                                <PhoneInput
                                  placeholder="Enter phone number"
                                  value={value}
                                  defaultCountry="IN"
                                  onChange={setValue} />
                              </Col>

                            </Row>
                          ))}




                        </div>
                      </Col>

                      <div className="w-100 mt-4"></div>
                      <Col className="col-auto">
                        <a onClick={() => {
                          handleAddRowNested();
                        }} className="text-decoration-underline" >
                          <i className="fas fa-plus"></i>  Add Another Contact
                        </a>

                      </Col>

                      <Col  className="col-auto ms-auto text-end">
                        <button className="btn btn-green w-xs me-2">Save</button>
                        <button className="btn btn-orange w-xs">Cancel</button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </TabPane>

            </TabContent>
          </Col>

        </Row>


      </div>
    </React.Fragment>
  )
}

export default PagesStarter
