import React, { useState } from "react";
import classnames from "classnames";
import Dropzone from "react-dropzone"

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, CardText, Nav, CardBody, Label, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, Button, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom"



const NewAccountProfile = () => {


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



    // --------====== Drag and Drop =========----------

    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }
    //   * Formats the size
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }


    // --------=============== Form repeater ========------------
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

  // ---=== phone input ===-----
  const [value, setValue] = useState()


    //meta title
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Account / Profile" breadcrumbItem="New Account Profile" />
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                    {/* <CardTitle className="h4">  New Account Profile  </CardTitle> */}

                                    <Nav tabs className="mb-3">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })} onClick={() => { toggle("1"); }}  >   Customer Details
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "2",
                                                })} onClick={() => { toggle("2"); }} >  Address
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "3",
                                                })} onClick={() => { toggle("3"); }} >
                                                Contact Details
                                            </NavLink>
                                        </NavItem>

                                        {/* <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "4",
                                                })} onClick={() => { toggle("4"); }} >
                                                Account Information
                                            </NavLink>
                                        </NavItem> */}
                                    </Nav>

                                    <TabContent activeTab={activeTab} className="p-3 text-muted">

                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <Form>
                                                            <Row>
                                                                <Col lg={12} className="mb-3">
                                                                    <Row>
                                                                        <Col sm="6">
                                                                            <Label htmlFor="" className="mb-1"> Logo Preview </Label>
                                                                            <div className="border border-rounded rounded-3">
                                                                                <div className="min-h-80 mt-3 mt-sm-0" id="file-previews">
                                                                                    {selectedFiles.map((f, i) => {
                                                                                        return (
                                                                                            <Card
                                                                                                className=" mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                                                key={i + "-file"}
                                                                                            >
                                                                                                <Row className="p-2">
                                                                                                    <Col className="col-12 text-center">
                                                                                                        <img
                                                                                                            data-dz-thumbnail=""
                                                                                                            height="80"
                                                                                                            className="avatar-xxl rounded bg-light"
                                                                                                            alt={f.name}
                                                                                                            src={f.preview}
                                                                                                        />
                                                                                                    </Col>
                                                                                                    <Col className="col-12 text-center">
                                                                                                        <Link
                                                                                                            to="#"
                                                                                                            className="text-muted font-weight-bold"
                                                                                                        >
                                                                                                            {f.name}
                                                                                                        </Link>
                                                                                                        <p className="mb-0">
                                                                                                            <strong>{f.formattedSize}</strong>
                                                                                                        </p>
                                                                                                    </Col>
                                                                                                </Row>
                                                                                            </Card>
                                                                                        )
                                                                                    })}
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>

                                                                </Col>

                                                                <Col lg={6} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                                        <label htmlFor="floatingnameInput">Customer ID  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                                        <label htmlFor="floatingnameInput"> Name of the Customer  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <select defaultValue="1" className="form-select" disabled>
                                                                            <option>--Select-- </option>
                                                                            <option value="1">Subscription</option>
                                                                            <option value="2">Category</option>
                                                                        </select>
                                                                        <label htmlFor="floatingSelectGrid">Type</label>
                                                                    </div>

                                                                </Col>

                                                                <Col lg={6} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <select defaultValue="1" className="form-select" disabled>
                                                                            <option>--Select-- </option>
                                                                            <option value="1">Active</option>
                                                                            <option value="2">Expired</option>
                                                                            <option value="2">Deleted</option>
                                                                            <option value="2">Canceled</option>
                                                                        </select>
                                                                        <label htmlFor="floatingSelectGrid">Status</label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6} xl={4} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <select defaultValue="1" className="form-select" disabled>
                                                                            <option>--Select-- </option>
                                                                            <option value="1">India</option>
                                                                            <option value="2">USA</option>
                                                                            <option value="2">UAE</option>
                                                                        </select>
                                                                        <label htmlFor="floatingSelectGrid">Country</label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6} xl={4} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USD" readOnly />
                                                                        <label htmlFor="floatingnameInput">Currency  <span className="text-danger">*</span></label>
                                                                    </div>


                                                                </Col>

                                                                <Col lg={6} xl={4} className="mb-3">
                                                                    <div className="form-floating">
                                                                        <select defaultValue="1" className="form-select" disabled>
                                                                            <option>--Select-- </option>
                                                                            <option value="1">INR</option>
                                                                            <option value="2">USD</option>
                                                                            <option value="2">CAD</option>
                                                                        </select>
                                                                        <label htmlFor="floatingSelectGrid">Currency</label>
                                                                    </div>
                                                                </Col>

                                                            </Row>
                                                            <Row className="text-end">
                                                                <Col>
                                                                    <button className="btn btn-green w-xs me-2">Save</button>
                                                                    <button className="btn btn-orange w-xs">Cancel</button>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>


                                        <TabPane tabId="2">
                                            <Form>
                                                <Row>

                                                    <Col lg={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> Address Line 1  <span className="text-danger">*</span></label>
                                                        </div>
                                                    </Col>

                                                    <Col lg={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> Address Line 2 </label>
                                                        </div>
                                                    </Col>

                                                    <Col lg={12} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> Address Line 3 </label>
                                                        </div>
                                                    </Col>


                                                    <Col lg={6} xl={4} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> City <span className="text-danger">*</span></label>
                                                        </div>
                                                    </Col>


                                                    <Col lg={6} xl={4} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                            <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                        </div>
                                                    </Col>


                                                    <Col lg={6} xl={4} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" readOnly />
                                                            <label htmlFor="floatingnameInput"> Country </label>
                                                        </div>
                                                    </Col>

                                                    <Col lg={6} xl={4} className="mb-3">
                                                        <div className="form-floating">
                                                            <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" readOnly />
                                                            <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                        </div>
                                                    </Col>

                                                    <Row className="text-end">
                                                        <Col>
                                                            <button className="btn btn-green w-xs me-2">Save</button>
                                                            <button className="btn btn-orange w-xs">Cancel</button>
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            </Form>
                                        </TabPane>


                                        <TabPane tabId="3">
                                            <Form>
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
                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <select defaultValue="1" className="form-select">
                                                                                <option >--Select-- </option>
                                                                                <option value="1">Account Owner</option>
                                                                                <option value="2">Buyer</option>
                                                                                <option value="2">IT Admin</option>

                                                                            </select>
                                                                            <label htmlFor="floatingSelectGrid">Type <span className="text-danger">*</span> </label>
                                                                        </div>
                                                                    </Col>

                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                            <label htmlFor="floatingnameInput"> Name  <span className="text-danger">*</span></label>
                                                                        </div>
                                                                    </Col>

                                                                    <Col md={6} className="mb-3">
                                                                        <div className="form-floating">
                                                                            <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                            <label htmlFor="floatingnameInput"> Email Address  <span className="text-danger">*</span></label>
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
                                                    <Col className="col-auto ms-auto text-end">
                                                        <button className="btn btn-green me-2 w-xs">Save </button>
                                                        <button className="btn btn-orange w-xs">Cancel </button>
                                                    </Col>

                                                </Row>
                                            </Form>
                                        </TabPane>


                                        <TabPane tabId="4">

                                        </TabPane>

                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>

        </React.Fragment>
    )
}

export default NewAccountProfile
