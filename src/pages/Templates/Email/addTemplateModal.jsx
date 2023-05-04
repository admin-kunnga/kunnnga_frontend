import React from "react";
import PropTypes from "prop-types"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import {
    Col, Row, Modal, ModalHeader, ModalBody, Label, ModalFooter, UncontrolledTooltip, Button
} from "reactstrap";

const AddTemplateModal = props => {
    const { isOpen, toggle } = props

    return (
        <Modal isOpen={isOpen} role="dialog" autoFocus={true} centered={true} scrollable={true} className="exampleModal" tabIndex="-1" toggle={toggle}>

            <div className="modal-content">
                <ModalHeader toggle={toggle}> Add Template </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg={6} className="mb-3">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Template Name" />
                                <label htmlFor="floatingnameInput"> Template Name  <span className="text-danger">*</span></label>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="form-floating mb-3">
                                <select defaultValue="1" className="form-select">
                                    <option value="1"> Email </option>
                                    <option value="2"> Push Notification </option>
                                    <option value="3"> Payload </option>
                                </select>
                                <label htmlFor="floatingSelectGrid">Email  <span className="text-danger">*</span> </label>
                            </div>
                        </Col>

                        <Col lg={12} className="mb-3">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Subject" />
                                <label htmlFor="floatingnameInput"> Subject </label>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <Row className="mb-2 mx-0">
                                <label className="col-auto my-auto" htmlFor="floatingSelectGrid"> Message <span className="text-danger">*</span> </label>
                                <button className="col-auto ms-auto btn btn-primary">
                                    Data Dictionary
                                </button>
                            </Row>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Enter Text Here...</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                }}
                            />
                        </Col>

                    </Row>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-green me-2 w-xs">Save</button>
                    <button className="btn btn-orange w-xs" onClick={toggle}>Cancel</button>
                </ModalFooter>
            </div>
        </Modal>
    )
}

AddTemplateModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default AddTemplateModal