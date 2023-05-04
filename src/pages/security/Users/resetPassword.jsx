import PropTypes from 'prop-types'
import React from "react"
import { Modal, ModalBody } from "reactstrap"

const resetPassword = ({ show, onCloseClick }) => {
    return (
        <Modal size="md" isOpen={show} toggle={onCloseClick} centered={true}>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="text-muted"> Reset Password</h4>
                    <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center position-absolute end-0 top-0 m-3" onClick={onCloseClick}> <i className="fas fa-times"></i> </button>
                </div>
                <ModalBody className="p-4">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                        <label htmlFor="floatingnameInput">Old Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                        <label htmlFor="floatingnameInput">New Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                        <label htmlFor="floatingnameInput">Current Password</label>
                    </div>

                    <div>
                        <p className="fw-500 text-center text-muted">Or</p>
                    </div>

                    <p className="text-center text-muted font-size-16 mb-4">Send Link  On <a href="#"> Email </a> </p>

                    <div className="text-end">
                        <button type="button" className="btn btn-green me-2 w-xs">Save</button>
                        <button type="button" className="btn btn-orange w-xs" onClick={onCloseClick}>Cancel</button>
                    </div>
                </ModalBody>
            </div>
        </Modal>
    )
}

resetPassword.propTypes = {
    onCloseClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    show: PropTypes.any
}

export default resetPassword
