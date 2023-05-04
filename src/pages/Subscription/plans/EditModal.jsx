import React, {useState} from "react";
import PropTypes from "prop-types"
import Select from "react-select";
import classnames from "classnames"


import {
    Col, Row, Modal, ModalHeader,TabPane,Form,Table, ModalBody, NavLink, NavItem, Label, ModalFooter, FormGroup, Input,
    TabContent, InputGroup
} from "reactstrap";




const EditModal = props => {
    const { isOpen, toggle } = props

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




// ---===== Form Wizard ====-------0
const [activeTabVartical, setoggleTabVertical] = useState(1) 


function toggleTabVertical(tab) {
  if (activeTabVartical !== tab) { 

    if (tab >= 1 && tab <= 2) {
      setoggleTabVertical(tab) 
    }
  }
}

    return (
        <Modal
            isOpen={isOpen} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}
        size="lg">
            <div className="modal-content"> 
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">
                    Edit Plan
                    </h5>
                    <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" onClick={toggle}> <i className="fas fa-times"></i> </button>
                </div>

                <ModalBody className="modal-content-60">
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
                                  }}  > 
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
                                  }}   > 
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
                                    <Col lg="12">
                                      <FormGroup floating className="mb-3">
                                        <Input className="min-h-180"
                                          id="examplePassword"
                                          name="Description"
                                          placeholder="Description"
                                          type="textarea" rows="8"
                                        />
                                        <Label for="examplePassword">
                                         <span className=""> Description <span className="text-danger">*</span></span>
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

                                      <tr>
                                        <td className="table-light fw-bold align-middle"> Support <span className="text-danger">*</span> </td>
                                        <td>
                                          <Select value={selectedGroup} onChange={() => { handleSelectGroup(); }}
                                            options={optionGroup} className="select2-selection" />
                                        </td>
                                      </tr>

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
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-green me-2 w-xs">Save</button>
                    <button className="btn btn-orange w-xs" onClick={toggle}>Cancel</button>
                </ModalFooter>
            </div>
        </Modal>
    )
}

EditModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default EditModal
