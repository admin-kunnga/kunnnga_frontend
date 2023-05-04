import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink, TabContent,
    FormGroup, Input, Label,ModalFooter, UncontrolledTooltip, Button
} from "reactstrap"
import classnames from "classnames";
import Select from "react-select";

const ManageLookupsUnitsSetting = () => {

    //meta title
    document.title = "Kunnga - AssociationsNow";

    //------======= modal ======-----
    const [modal_xlarge, setmodal_xlarge] = useState(false);
    const [modal_xlarge1, setmodal_xlarge1] = useState(false);


    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
        removeBodyCss();
    }

    function tog_xlarge1() {
        setmodal_xlarge1(!modal_xlarge1);
        removeBodyCss();
    }


    // ---===== tabs =====----
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const [verticalActiveTab2, setverticalActiveTab2] = useState("1");

    const toggleVertical = (tab) => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    const toggleVertical2 = (tab) => {
        if (verticalActiveTab2 !== tab) {
            setverticalActiveTab2(tab);
        }
    };



    // ------======= Form Repeater ======--------- 
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


    // ----==== select option ====-------
    const [selectedGroup, setselectedGroup] = useState(null);


    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionGroup = [
        {
            options: [
                { label: "Account", value: "Relish" },
                { label: "Property Management", value: "Mustard" },
                { label: "Security", value: "Ketchup" },
            ],
        }
    ];

    // ----======== checkbox =======---------
    const [customchkPrimary21, setcustomchkPrimary21] = useState(true);
    const [customchkPrimary22, setcustomchkPrimary22] = useState(true);
    const [customchkPrimary23, setcustomchkPrimary23] = useState(true);
    const [customchkPrimary24, setcustomchkPrimary24] = useState(true);
    const [customchkPrimary25, setcustomchkPrimary25] = useState(true);
    const [customchkPrimary26, setcustomchkPrimary26] = useState(true);
    const [customchkPrimary27, setcustomchkPrimary27] = useState(true);
    const [customchkPrimary28, setcustomchkPrimary28] = useState(true);
    const [customchkPrimary29, setcustomchkPrimary29] = useState(true);
    const [customchkPrimary30, setcustomchkPrimary30] = useState(true);
    const [customchkPrimary31, setcustomchkPrimary31] = useState(true);



    return (
        <React.Fragment>
            <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <Col type="button" onClick={() => { tog_xlarge(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card>
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                <h5 className="mb-0 flex-grow-1 d-flex align-content-center justify-content-between"> <span> Unit Type </span>  </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Modal size="lg" centered={true} scrollable={true} isOpen={modal_xlarge} toggle={() => { tog_xlarge(); }}>
                    <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">  Manage Choices   </h5>
                        <button onClick={() => { setmodal_xlarge(false); }} type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>
                    </div>
                    <div className="modal-body">
                        <Row>
                            <Col md="3">
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true, active: verticalActiveTab === "1",
                                            })} onClick={() => { toggleVertical("1"); }}  >
                                            Manage Choices
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
                                        <Row className="bg-light py-2 mx-0 mb-3">
                                            <Col className="lg-4">
                                                <label> Module </label>
                                                <Select
                                                    value={selectedGroup}
                                                    onChange={() => {
                                                        handleSelectGroup();
                                                    }}
                                                    options={optionGroup}
                                                    className="select2-selection"
                                                />
                                            </Col>
                                            <Col className="lg-4">
                                                <div className="mb-0">
                                                    <Label for="exampleEmail"> Lookup Name </Label>
                                                    <Input type="text" id="exampleEmail" placeholder="Category" />
                                                </div>
                                            </Col>
                                            <Col className="lg-4 d-flex align-items-end justify-content-end">
                                                {/* <div className="form-check form-check-primary me-2">
                                                                        <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary31}
                                                                            onChange={() => { setcustomchkPrimary31(!customchkPrimary31) }} />
                                                                    </div>
                                                <Button color="danger" id="unknown-btn" className="btn-small"
                                                >
                                                    <i className="fas fa-trash-alt" ></i>
                                                    <UncontrolledTooltip placement="top" target="unknown-btn">
                                                        Delete
                                                    </UncontrolledTooltip>
                                                </Button> */}
                                            </Col>
                                        </Row>

                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead >
                                                    <tr>
                                                        <th>   Value </th>
                                                        <th> Display Text </th>
                                                        <th> Active </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="w-80">  2 </td>
                                                        <td>
                                                            Commercial
                                                        </td>
                                                        <td className="w-80">
                                                            <div className="form-check form-check-primary">
                                                                <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary21}
                                                                    onChange={() => { setcustomchkPrimary21(!customchkPrimary21) }} />
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    {(rows1 || []).map((formRow, key) => (

                                                        <tr key={key}>
                                                            <td>2</td>
                                                            <td>
                                                                Non Commercial
                                                            </td>
                                                            <td className="w-80">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="form-check form-check-primary me-2">
                                                                        <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary24}
                                                                            onChange={() => { setcustomchkPrimary24(!customchkPrimary24) }} />
                                                                    </div>
                                                                    <Button
                                                                        color="danger"
                                                                        className="p-0 inner btn-small"
                                                                        id="unknown-btn2"
                                                                        onClick={e => {
                                                                            handleRemoveRow(formRow.id);
                                                                        }}
                                                                    >
                                                                        {" "}
                                                                        <i className="fas fa-minus font-size-20" ></i>
                                                                        {" "}
                                                                        <UncontrolledTooltip placement="top" target="unknown-btn2">
                                                                            Delete
                                                                        </UncontrolledTooltip>
                                                                    </Button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                    <ModalFooter> 
                            <Col className="col-auto">
                                <a
                                    onClick={() => {
                                        handleAddRowNested();
                                    }} className="text-decoration-underline">
                                    <i className="fas fa-plus"></i>  New Option
                                </a>
                            </Col>
                            <Col className="ms-auto col-auto text-end">
                                <button className="btn btn-green me-2 w-xs">Save </button>
                                <button className="btn btn-orange w-xs">Cancel </button>
                            </Col> 
                    </ModalFooter>
                </Modal>


                <Col type="button" onClick={() => { tog_xlarge(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card>
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-money-check-alt"></i></span>
                                <h5 className="mb-0">  Facing </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col type="button">
                    <Card>
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                <h5 className="mb-0 flex-grow-1 d-flex align-content-center justify-content-between"> <span>
                                    Property Photo Category  </span>  </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col type="button">
                    <Card>
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                <h5 className="mb-0 flex-grow-1 d-flex align-content-center justify-content-between"> <span>
                                    Property Video Category  </span>  </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </React.Fragment >
    )
}

export default ManageLookupsUnitsSetting