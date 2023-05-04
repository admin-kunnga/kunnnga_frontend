import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink, TabContent,
    FormGroup, Input, ModalFooter, Label, UncontrolledTooltip, Button
} from "reactstrap"
import classnames from "classnames";
import Select from "react-select";

const ManageLookupsBuildingsSetting = () => {

    //------======= modal ======----- 
    const [modal_xlarge4, setmodal_xlarge4] = useState(false);

    function tog_xlarge4() {
        setmodal_xlarge4(!modal_xlarge4);
        removeBodyCss();
    }


    // ---===== tabs =====----
    const [verticalActiveTabBuildings, setverticalActiveTabBuildings] = useState("1");

    const toggleVerticalBuildings = (tab) => {
        if (verticalActiveTabBuildings !== tab) {
            setverticalActiveTabBuildings(tab);
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
    const [customchkPrimary51, setcustomchkPrimary51] = useState(true);
    const [customchkPrimary52, setcustomchkPrimary52] = useState(true);
    const [customchkPrimary53, setcustomchkPrimary53] = useState(true);
    const [customchkPrimary54, setcustomchkPrimary54] = useState(true);
    const [customchkPrimary55, setcustomchkPrimary55] = useState(true);
    const [customchkPrimary56, setcustomchkPrimary56] = useState(true);
    const [customchkPrimary57, setcustomchkPrimary57] = useState(true);
    const [customchkPrimary58, setcustomchkPrimary58] = useState(true);
    const [customchkPrimary59, setcustomchkPrimary59] = useState(true);


    return (
        <React.Fragment>
            <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                <Col type="button" onClick={() => { tog_xlarge4(); }} data-toggle="modal" data-target=".bs-example-modal-xl">
                    <Card>
                        <CardBody>
                            <CardTitle className="d-flex align-items-center card-title border-bottom border-2 pb-3">
                                <span className="btn btn-circle btn-primary p-0 me-2"> <i className="fas fa-user-alt"></i> </span>
                                <h5 className="mb-0 flex-grow-1 d-flex align-content-center justify-content-between"> <span> Type Of Buildings </span>  </h5>
                            </CardTitle>
                            <CardText className="pt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aspernatur dolorum, deleniti dignissimos ad optio!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Modal size="lg" centered={true} scrollable={true} isOpen={modal_xlarge4} toggle={() => { tog_xlarge4(); }}>
                    <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">  Type Of Buildings  </h5>

                        <button onClick={() => { setmodal_xlarge4(false); }}
                            type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" data-dismiss="modal" aria-label="Close"> <i className="fas fa-times"></i> </button>
                    </div>
                    <div className="modal-body">
                        <Row>
                            <Col md="3">
                                <Nav pills className="flex-column">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                "mb-2": true, active: verticalActiveTabBuildings === "1",
                                            })} onClick={() => { toggleVerticalBuildings("1"); }}  >
                                            Type Of Buildings
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="9">
                                <TabContent
                                    activeTab={verticalActiveTabBuildings}
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
                                                    <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary51}
                                                        onChange={() => { setcustomchkPrimary51(!customchkPrimary51) }} />
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
                                                <thead>
                                                    {/* <tr className="bg-light">
                                                        <th colSpan={5}> <h6 className="mb-0">Manage Lookup Choices</h6> </th>
                                                    </tr> */}
                                                    <tr>
                                                        <th> Value </th>
                                                        <th> Display Text </th>
                                                        <th>  Category </th>
                                                        <th> Active </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td className="w-80">1</td>
                                                        <td> Residential </td>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>-- Select --</option>
                                                                <option value="1">Category 1</option>
                                                                <option value="2">Category 2</option>
                                                                <option value="3">Category 3</option>
                                                            </select>
                                                        </td>
                                                        <td className="w-80">
                                                            <div className="form-check form-check-primary">
                                                                <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary52}
                                                                    onChange={() => { setcustomchkPrimary52(!customchkPrimary52) }} />
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    {(rows1 || []).map((formRow, key) => (

                                                        <tr key={key}>
                                                            <td className="w-80">4</td>
                                                            <td> Residential </td>
                                                            <td>
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>-- Select --</option>
                                                                    <option value="1">Category 1</option>
                                                                    <option value="2">Category 2</option>
                                                                    <option value="3">Category 3</option>
                                                                </select>
                                                            </td>
                                                            <td className="w-80">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="form-check form-check-primary me-2">
                                                                        <input type="checkbox" className="form-check-input btn-small" id="checkbox789" checked={customchkPrimary55}
                                                                            onChange={() => { setcustomchkPrimary55(!customchkPrimary55) }} />
                                                                    </div>
                                                                    <Button
                                                                        color="danger"
                                                                        className="p-0 inner btn-small"
                                                                        id="unknown-btn2"
                                                                        onClick={e => {
                                                                            handleRemoveRow(formRow.id);
                                                                        }}   >
                                                                        <i className="fas fa-minus"></i>
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


            </Row>
        </React.Fragment >
    )
}

export default ManageLookupsBuildingsSetting