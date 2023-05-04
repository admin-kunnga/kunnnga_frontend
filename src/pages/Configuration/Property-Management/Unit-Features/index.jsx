import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, DropdownToggle,
    DropdownMenu, DropdownItem, Dropdown, Collapse, UncontrolledTooltip, Modal,CardTitle
} from "reactstrap"
import classnames from "classnames";
import Switch from "react-switch";
import Select from "react-select";
import makeAnimated from "react-select/animated";


import {
    Route, Routes, Link
} from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../../../components/Common/Breadcrumb"

import Sidebar from "../../sidebar";

const PropertyUnitFeaturesSetting = () => {

    // ---====== Modal =====--------

    const [modal_standard, setmodal_standard] = useState(false);
    function AmenitiesAdd() {
        setmodal_standard(!modal_standard);
        removeBodyCss();
    }

    // ------==== Dropdown ===---------
    const [singlebtn, setSinglebtn] = useState(false);
    const [singlebtn1, setSinglebtn1] = useState(false)

    // ----====== Accordion =====-------
    const [col9, setcol9] = useState(true);
    const [col10, setcol10] = useState(true);

    const t_col9 = () => {
        setcol9(!col9);
    };

    const t_col10 = () => {
        setcol10(!col10);
    };

    // ------=====switch box=====------------------
    const [sq2, setsq2] = useState(true);

    // =======select option =======
    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
    const iconList = [
        {
            value: 1,
            text: 'Logo Icon',
            icon: <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24.1605" y="21" width="21" height="5.03344" transform="rotate(-90 24.1605 21)" fill="#FF1100" />
                <rect x="32.214" y="21" width="21" height="5.03344" transform="rotate(-90 32.214 21)" fill="#FF1100" />
                <rect x="40.2676" y="21" width="21" height="5.03344" transform="rotate(-90 40.2676 21)" fill="#FF1100" />
                <rect x="16.107" y="46" width="21" height="5.03344" transform="rotate(-90 16.107 46)" fill="#215E21" />
                <rect x="8.05347" y="46" width="21" height="5.03344" transform="rotate(-90 8.05347 46)" fill="#215E21" />
                <rect y="46" width="21" height="5.03344" transform="rotate(-90 0 46)" fill="#215E21" />
                <rect width="21.1405" height="5" fill="#A0030E" />
                <rect y="8" width="21.1405" height="5" fill="#A0030E" />
                <rect y="16" width="21.1405" height="5" fill="#A0030E" />
                <rect x="24.1605" y="25" width="21.1405" height="5" fill="#C2C264" />
                <rect x="24.1605" y="33" width="21.1405" height="5" fill="#C2C264" />
                <rect x="24.1605" y="41" width="21.1405" height="5" fill="#C2C264" />
            </svg>

        },
        {
            value: 2,
            text: 'Logo Icon - 2',
            icon: <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="24.1605" y="21" width="21" height="5.03344" transform="rotate(-90 24.1605 21)" fill="#FF1100" />
                <rect x="32.214" y="21" width="21" height="5.03344" transform="rotate(-90 32.214 21)" fill="#FF1100" />
                <rect x="40.2676" y="21" width="21" height="5.03344" transform="rotate(-90 40.2676 21)" fill="#FF1100" />
                <rect x="16.107" y="46" width="21" height="5.03344" transform="rotate(-90 16.107 46)" fill="#215E21" />
                <rect x="8.05347" y="46" width="21" height="5.03344" transform="rotate(-90 8.05347 46)" fill="#215E21" />
                <rect y="46" width="21" height="5.03344" transform="rotate(-90 0 46)" fill="#215E21" />
                <rect width="21.1405" height="5" fill="#A0030E" />
                <rect y="8" width="21.1405" height="5" fill="#A0030E" />
                <rect y="16" width="21.1405" height="5" fill="#A0030E" />
                <rect x="24.1605" y="25" width="21.1405" height="5" fill="#C2C264" />
                <rect x="24.1605" y="33" width="21.1405" height="5" fill="#C2C264" />
                <rect x="24.1605" y="41" width="21.1405" height="5" fill="#C2C264" />
            </svg>
        }
    ];


    // ------=====switch box=====------------------
    const [switch1, setswitch1] = useState(false);
    const [switch2, setswitch2] = useState(false);
    const [switch3, setswitch3] = useState(false);
    const [switch4, setswitch4] = useState(false);
    const [switch5, setswitch5] = useState(false);
    const [switch6, setswitch6] = useState(false);
    const [switch7, setswitch7] = useState(false);
    const [switch8, setswitch8] = useState(false);
    const [switch9, setswitch9] = useState(false);
    const [switch10, setswitch10] = useState(false);
    const [switch11, setswitch11] = useState(false);
    const [switch12, setswitch12] = useState(false);
    const [switch13, setswitch13] = useState(false);
    const [switch14, setswitch14] = useState(false);
    const [switch15, setswitch15] = useState(false);

    const [switchAreas1, setswitchAreas1] = useState(false);
    const [switchAreas2, setswitchAreas2] = useState(false);
    const [switchAreas3, setswitchAreas3] = useState(false);
    const [switchAreas4, setswitchAreas4] = useState(false);
    const [switchAreas5, setswitchAreas5] = useState(false);
    const [switchAreas6, setswitchAreas6] = useState(false);
    const [switchAreas7, setswitchAreas7] = useState(false);
    const [switchAreas8, setswitchAreas8] = useState(false);
    const [switchAreas9, setswitchAreas9] = useState(false);
    const [switchAreas10, setswitchAreas10] = useState(false);
    const [switchAreas11, setswitchAreas11] = useState(false);
    const [switchAreas12, setswitchAreas12] = useState(false);
    const [switchAreas13, setswitchAreas13] = useState(false);
    const [switchAreas14, setswitchAreas14] = useState(false);
    const [switchAreas15, setswitchAreas15] = useState(false);




    const Offsymbol = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 10,
                    color: "#fff",
                    paddingRight: 1,
                }}
            >
                {" "}
            </div>
        );
    };

    const OnSymbol = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 10,
                    color: "#fff",
                    paddingRight: 1,
                }}
            >
                {" "}
            </div>
        );
    };


        // ----====== checkbox ===-----


    // ==== Accordion ======
    const [col1, setcol1] = useState(true);
    const [col2, setcol2] = useState(false);
    const [col3, setcol3] = useState(false);

    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
        setcol3(false);
    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
        setcol3(false);
    };


    //meta title
    document.title = "Kunnga - AssociationsNow";




    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    {/* <Breadcrumbs title="Property Management Settings" breadcrumbItem="Unit Features" /> */}

                    <Row>
                        <Col lg={4} xl={3} className="">
                            <Sidebar />
                        </Col>


                        <Col lg={8} xl={9} className="">

                        <h5 className="mb-4"> Unit Features</h5>
                            <div className="accordion" id="accordion">

                                <Card>
                                    <div className="card-body accordion-item p-0">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className={classnames(
                                                    "accordion-button", "fs-16",
                                                    "fw-medium",
                                                    { collapsed: !col1 }
                                                )} type="button"
                                                onClick={t_col1} style={{ cursor: "pointer" }}                                        >
                                                Unit Features Category 1
                                            </button>
                                        </h2>

                                        <Collapse isOpen={col1} className="accordion-collapse">
                                            <div className="accordion-body">

                                                <CardTitle className="h5 mb-4">    Select amenities from the list: </CardTitle>


                                                <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2 text-muted">
                                                    <div className="col form-check mb-3">
                                                        <input
                                                            className="form-check-input btn-20 me-2"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label fs-16"
                                                            htmlFor="defaultCheck1"
                                                        >
                                                            Unit Features 1
                                                        </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input
                                                            className="form-check-input btn-20 me-2"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck2"
                                                        />
                                                        <label
                                                            className="form-check-label fs-16"
                                                            htmlFor="defaultCheck2"
                                                        >
                                                            Unit Features 2
                                                        </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck3"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck3"
                                                        >   Unit Features 3 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck4"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck4"
                                                        >   Unit Features 4 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck5"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck5"
                                                        >   Unit Features 5 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck6"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck6"
                                                        >   Unit Features 6 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck7"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck7"
                                                        >   Unit Features 7 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck8"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck8"
                                                        >   Unit Features 8 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck9"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck9"
                                                        >   Unit Features 9 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck10"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck10"
                                                        >   Unit Features 10 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck11"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck11"
                                                        >   Unit Features 11 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="defaultCheck12"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="defaultCheck12"
                                                        >   Unit Features 12 </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                </Card>

                                <Card>
                                    <div className="card-body accordion-item p-0">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className={classnames(
                                                    "accordion-button", "fs-16",
                                                    "fw-medium",
                                                    { collapsed: !col2 }
                                                )}
                                                type="button"
                                                onClick={t_col2}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Unit Features Category 2
                                            </button>
                                        </h2>

                                        <Collapse isOpen={col2} className="accordion-collapse">
                                            <div className="accordion-body">

                                                <CardTitle className="h5 mb-4">  Select amenities from the list: </CardTitle>


                                                <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2 text-muted">
                                                    <div className="col form-check mb-3">
                                                        <input
                                                            className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label fs-16" htmlFor="secondCheck1"
                                                        > Unit Features 1 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2" type="checkbox" value=""
                                                            id="secondCheck2" />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck2"  >
                                                            Unit Features 2  </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2" type="checkbox" value="" id="secondCheck3"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck3"
                                                        >   Unit Features 3 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck4"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck4"
                                                        >   Unit Features 4 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck5"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck5"
                                                        >   Unit Features 5 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck6"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck6"
                                                        >   Unit Features 6 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck7"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck7"
                                                        >   Unit Features 7 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck8"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck8"
                                                        >   Unit Features 8 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck9"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck9"
                                                        >   Unit Features 9 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck10"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck10"
                                                        >   Unit Features 10 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck11"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck11"
                                                        >   Unit Features 11 </label>
                                                    </div>

                                                    <div className="col form-check mb-3">
                                                        <input className="form-check-input btn-20 me-2"
                                                            type="checkbox" value="" id="secondCheck12"
                                                        />
                                                        <label className="form-check-label fs-16" htmlFor="secondCheck12"
                                                        >   Unit Features 12 </label>
                                                    </div>

                                                </div>

                                            </div>
                                        </Collapse>
                                    </div>
                                </Card>
                            </div>

                            {/* <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item mb-5">
                                    <h2 className="accordion-header accordion-1 position-relative" id="headingFlushOne">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col9 }
                                            )}
                                            type="button"
                                            onClick={t_col9}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Community Facilities
                                        </button>
                                        <button className="btn btn-primary position-absolute top-0 right-0 z-index-99 m-2" type="button" id="PlanDropdown" onClick={() => { AmenitiesAdd(); }} data-toggle="modal" data-target="#myModal">
                                            <i className="fas fa-plus" type="button"></i>
                                            <UncontrolledTooltip placement="top" target="PlanDropdown">
                                                Add Unit Features
                                            </UncontrolledTooltip>
                                        </button>
                                    </h2>
                                    <Modal
                                        centered="true"
                                        isOpen={modal_standard}
                                        toggle={() => {
                                            AmenitiesAdd();
                                        }} >
                                        <div className="modal-header">
                                            <h5 className="modal-title mt-0" id="myModalLabel">
                                                Add Amenities
                                            </h5>
                                            <button type="button" onClick={() => { setmodal_standard(false); }} className="close" data-dismiss="modal" aria-label="Close" >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">

                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label"> Unit Features Name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="floatingSelectGrid">Unit Features Icons</label>
                                                <Select
                                                    placeholder="Select Option"
                                                    value={selectedOption}
                                                    options={iconList}
                                                    onChange={handleChange}
                                                    getOptionLabel={e => (
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            {e.icon}
                                                            <span style={{ marginLeft: 5 }}>{e.text}</span>
                                                        </div>
                                                    )} />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label"> Unit Features Description </label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>


                                            <div>
                                                <label>Unit Features Status</label>
                                                <div className="square-switch">
                                                    <input
                                                        type="checkbox"
                                                        id="square-switch2"
                                                        // eslint-disable-next-line react/no-unknown-property
                                                        Switch="none"
                                                        defaultChecked={sq2}
                                                        onChange={() => setsq2(!sq2)}
                                                    />
                                                    <label
                                                        htmlFor="square-switch2"
                                                        data-on-label="Yes"
                                                        data-off-label="No"
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-green w-xs"> Save </button>
                                            <button className="btn btn-orange w-xs" type="button" onClick={() => { tog_standard(); }} data-dismiss="modal"> Cancel </button>
                                        </div>
                                    </Modal>
                                    <Collapse isOpen={col9} className="accordion-collapse">
                                        <div className="accordion-body">
                                            <Row className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-0S">
                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch1(!switch1);
                                                                }}
                                                                checked={switch1}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch2(!switch2);
                                                                }}
                                                                checked={switch2}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch3(!switch3);
                                                                }}
                                                                checked={switch3}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch4(!switch4);
                                                                }}
                                                                checked={switch4}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch5(!switch5);
                                                                }}
                                                                checked={switch5}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch6(!switch6);
                                                                }}
                                                                checked={switch6}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch7(!switch7);
                                                                }}
                                                                checked={switch7}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch9(!switch9);
                                                                }}
                                                                checked={switch9}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch8(!switch8);
                                                                }}
                                                                checked={switch8}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch10(!switch10);
                                                                }}
                                                                checked={switch10}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch11(!switch11);
                                                                }}
                                                                checked={switch11}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch12(!switch12);
                                                                }}
                                                                checked={switch12}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch13(!switch13);
                                                                }}
                                                                checked={switch13}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch14(!switch14);
                                                                }}
                                                                checked={switch14}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitch15(!switch15);
                                                                }}
                                                                checked={switch15}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Collapse>
                                </div>

                                <div className="accordion-item">

                                    <h2 className="accordion-header accordion-1 position-relative" id="headingFlushTwo">
                                        <button
                                            className={classnames(
                                                "accordion-button",
                                                "fw-medium",
                                                { collapsed: !col10 }
                                            )}
                                            type="button"
                                            onClick={t_col10}
                                            style={{ cursor: "pointer" }}
                                        >
                                            Common Area
                                        </button>
                                        <button className="btn btn-primary position-absolute top-0 right-0 z-index-99 m-2" type="button" id="PlanDropdown" onClick={() => { AmenitiesAdd(); }} data-toggle="modal" data-target="#myModal">
                                            <i className="fas fa-plus" type="button"></i>
                                            <UncontrolledTooltip placement="top" target="PlanDropdown">
                                                Add Unit Features
                                            </UncontrolledTooltip>
                                        </button>
                                    </h2>
                                    <Collapse
                                        isOpen={col10} className="accordion-collapse">
                                        <div className="accordion-body">
                                            <Row className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-0">
                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas1(!switchAreas1);
                                                                }}
                                                                checked={switchAreas1}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas2(!switchAreas2);
                                                                }}
                                                                checked={switchAreas2}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas3(!switchAreas3);
                                                                }}
                                                                checked={switchAreas3}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas4(!switchAreas4);
                                                                }}
                                                                checked={switchAreas4}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas5(!switchAreas5);
                                                                }}
                                                                checked={switchAreas5}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas6(!switchAreas6);
                                                                }}
                                                                checked={switchAreas6}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas7(!switchAreas7);
                                                                }}
                                                                checked={switchAreas7}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas9(!switchAreas9);
                                                                }}
                                                                checked={switchAreas9}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas8(!switchAreas8);
                                                                }}
                                                                checked={switchAreas8}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas10(!switchAreas10);
                                                                }}
                                                                checked={switchAreas10}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas11(!switchAreas11);
                                                                }}
                                                                checked={switchAreas11}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas12(!switchAreas12);
                                                                }}
                                                                checked={switchAreas12}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas13(!switchAreas13);
                                                                }}
                                                                checked={switchAreas13}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>


                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas14(!switchAreas14);
                                                                }}
                                                                checked={switchAreas14}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col>
                                                    <Card>
                                                        <CardBody className="d-flex align-items-center justify-content-between">
                                                            <div className="h4 mb-0">
                                                                <i className="fas fa-umbrella-beach me-2"></i> Beach
                                                            </div>

                                                            <Switch
                                                                uncheckedIcon={<Offsymbol />}
                                                                checkedIcon={<OnSymbol />}
                                                                className="me-1 mb-sm-8 bg-primary"
                                                                onColor="#626ed4"
                                                                onChange={() => {
                                                                    setswitchAreas15(!switchAreas15);
                                                                }}
                                                                checked={switchAreas15}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Collapse>
                                </div>
                            </div> */}
                        </Col>
                    </Row>


                </Container>
            </div>
        </React.Fragment>
    )
}

export default PropertyUnitFeaturesSetting