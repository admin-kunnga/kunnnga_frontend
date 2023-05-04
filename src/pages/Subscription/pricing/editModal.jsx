import React, { useState } from "react"
import classnames from "classnames"

import PropTypes from "prop-types"

import {
    Col, Row, Modal, ModalBody, ModalFooter, TabContent, TabPane, NavLink, NavItem
} from "reactstrap";


const EditModal = props => {
    const { isOpen, toggle } = props


    // ----===== form wizard ======----------------------------------------------------------------
    const [activeTabVarticalEdit, setoggleTabVerticalEdit] = useState(1)


    function toggleTabVertical(tab) {
        if (activeTabVarticalEdit !== tab) {
            var modifiedSteps = [...passedStepsVertical, tab]


        }
    }


    return (
        <Modal
            size="lg"
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            className="exampleModal"
            tabIndex="-1"
            toggle={toggle}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">
                        Edit RateCard
                    </h5>
                    <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" onClick={toggle}> <i className="fas fa-times"></i> </button>
                </div>

                <ModalBody>
                    <div className="vertical-wizard wizard clearfix vertical">
                        <div className="steps clearfix">
                            <ul>
                                <NavItem
                                    className={classnames({
                                        current: activeTabVarticalEdit === 1,
                                    })} >
                                    <NavLink
                                        className={classnames({
                                            active: activeTabVarticalEdit === 1,
                                        })}
                                        onClick={() => {
                                            toggleTabVertical(1)
                                        }}
                                    > Edit RateCard
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </div>
                        <div className="content clearfix">
                            <TabContent
                                activeTab={activeTabVarticalEdit}
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
                                                <label htmlFor="floatingSelectGrid">Plan</label>
                                            </div>
                                        </Col>

                                        <Col xs="6" className="mb-3">
                                            <div className="form-floating">
                                                <select defaultValue="1" className="form-select" disabled>
                                                    <option value="1">Business</option>
                                                    <option value="2">Individual</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Category</label>
                                            </div>
                                        </Col>


                                        <Col xs="6" className="mb-3">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                <label htmlFor="floatingnameInput">Bundle</label>
                                            </div>
                                        </Col>

                                        {/* <Col xs="6" className="mb-3">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                <label htmlFor="floatingnameInput">Max Units</label>
                                            </div>
                                        </Col> */}

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
                                                <select defaultValue="1" className="form-select" disabled>
                                                    <option value="1" >USD</option>
                                                    <option value="2">INR</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Currency</label>
                                            </div>
                                        </Col>

                                        <Col xs="6" className="mb-3">
                                            <div className="form-floating">
                                                <select defaultValue="1" className="form-select" >
                                                    <option value="1">Yearly</option>
                                                    <option value="2">Quarterly</option>
                                                    <option value="2">Monthly</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Frequency</label>
                                            </div>
                                        </Col>


                                        <Col xs="6" className="mb-3">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                <label htmlFor="floatingnameInput">Price</label>
                                            </div>
                                        </Col>
                                    </Row>
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