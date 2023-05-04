import React, { useState } from "react";
import { Container } from "reactstrap"
import classnames from "classnames"
import Select from "react-select";


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Col, Card, CardBody, Label, Input, NavItem, NavLink, Form, TabContent, TabPane, Button, UncontrolledTooltip 
} from "reactstrap";

import { Link } from "react-router-dom"



const PagesStarter = () => {

    const [activeTab, setactiveTab] = useState(1)

    const [passedSteps, setPassedSteps] = useState([1])

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab]
            if (tab >= 1 && tab <= 5) {
                setactiveTab(tab)
                setPassedSteps(modifiedSteps)
            }
        }
    }


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




    // select option
    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionType = [
        {
            options: [
                { label: "Subscription", value: "India" },
                { label: "Category", value: "UAE" },
            ],
        },
    ];

    const optionStatus = [
        {
            options: [
                { label: "Active", value: "India" },
                { label: "Expired", value: "UAE" },
                { label: "Deleted", value: "UAE" },
                { label: "Cancelled", value: "UAE" },

            ],
        },
    ];

    const optionCountries = [
        {
            options: [
                { label: "India", value: "India" },
                { label: "USA", value: "UAE" },
                { label: "UAE", value: "UAE" },

            ],
        },
    ];

    const optionCurrency = [
        {
            options: [
                { label: "USD", value: "India" },
                { label: "INR", value: "UAE" },
                { label: "CAD", value: "UAE" },

            ],
        },
    ];

    const optionType2 = [
        {
            options: [
                { label: "Account Owner", value: "Account Owner" },
                { label: "Buyer", value: "Buyer" },
                { label: "IT Admin", value: "IT Admin" },

            ],
        },
    ];



    //meta title
    document.title = "Customers New Account | Kunnga";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Account Management / Customer" breadcrumbItem="Customers New Account" />

                    <Row>
                        <Col xs={12}>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-4">New Account</h4>
                                    <div className="wizard clearfix">
                                        <div className="steps clearfix">
                                            <ul>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 1 })}
                                                >
                                                    <NavLink
                                                        className={classnames({ current: activeTab === 1 })}
                                                        onClick={() => {
                                                            setactiveTab(1)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(1)}
                                                    >
                                                        <span className="number">1.</span> Customer Details
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 2 })} >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 2 })}
                                                        onClick={() => {
                                                            setactiveTab(2)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(2)}
                                                    >
                                                        <span className="number">2.</span>  Address
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 3 })}  >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 3 })}
                                                        onClick={() => {
                                                            setactiveTab(3)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(3)} 
                                                    >
                                                        <span className="number">3.</span> Contact Details
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 4 })}
                                                >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 4 })}
                                                        onClick={() => {
                                                            setactiveTab(4)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(4)}
                                                    >
                                                        <span className="number">4.</span> Subscription Details
                                                    </NavLink>
                                                </NavItem>

                                                <NavItem
                                                    className={classnames({ current: activeTab === 5 })}
                                                >
                                                    <NavLink
                                                        className={classnames({ active: activeTab === 5 })}
                                                        onClick={() => {
                                                            setactiveTab(5)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(5)}
                                                    >
                                                        <span className="number">5.</span> Account Information
                                                    </NavLink>
                                                </NavItem>
                                            </ul>
                                        </div>
                                        <div className="content clearfix">
                                            <TabContent activeTab={activeTab} className="body">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg={12} className="mb-4">
                                                                <div className="">
                                                                    <Label htmlFor="formFile" className="form-label mb-1">Logo</Label>
                                                                    <Input className="form-control" type="file" id="formFile" />
                                                                </div>
                                                            </Col>

                                                            <Col lg={6} className="mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                    <label htmlFor="floatingnameInput">Customer ID  <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={6} className="mb-4">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                    <label htmlFor="floatingnameInput"> Name of the Customer  <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={6} className="mb-4">
                                                                <Label htmlFor="" className="mb-1"> Type   <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionType}
                                                                    className="select2-selection"
                                                                />
                                                            </Col>

                                                            <Col lg={6} className="mb-4">
                                                                <Label htmlFor="" className="mb-1"> Status  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionStatus}
                                                                    className="select2-selection"
                                                                />
                                                            </Col>

                                                            <Col lg={6} xl={4} className="mb-4">
                                                                <Label htmlFor="" className="mb-1"> Country  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionCountries}
                                                                    className="select2-selection"
                                                                />
                                                            </Col>

                                                            <Col lg={6} xl={4} className="mb-3">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USD" readOnly />
                                                                    <label htmlFor="floatingnameInput">Currency  <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={6} xl={4} className="mb-3">
                                                                <Label htmlFor="" className="mb-1"> Reporting Currency  <span className="text-danger">*</span> </Label>
                                                                <Select
                                                                    value={selectedGroup}
                                                                    onChange={() => {
                                                                        handleSelectGroup();
                                                                    }}
                                                                    options={optionCurrency}
                                                                    className="select2-selection"
                                                                />
                                                            </Col>

                                                        </Row>

                                                    </Form>
                                                </TabPane>

                                                <TabPane tabId={2}>
                                                    <div>
                                                        <Form>
                                                            <Row>

                                                                <Col lg={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Address Line 1  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Address Line 2 </label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="textarea" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Address Line 3 </label>
                                                                    </div>
                                                                </Col>


                                                                <Col lg={6} xl={4} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> City <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>


                                                                <Col lg={6} xl={4} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> State/Province <span className="text-danger">*</span> </label>
                                                                    </div>
                                                                </Col>


                                                                <Col lg={6} xl={4} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" readOnly />
                                                                        <label htmlFor="floatingnameInput"> Country </label>
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6} xl={4} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="number" className="form-control" id="floatingnameInput" placeholder="Enter Name" value="USA" />
                                                                        <label htmlFor="floatingnameInput"> ZIP / Postal Code <span className="text-danger">*</span> </label>
                                                                    </div>
                                                                </Col>


                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={3}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                                <Col xl={12} className="mb-4">
                                                                    <Label htmlFor=""> Type  <span className="text-danger">*</span> </Label>
                                                                    <Select
                                                                        value={selectedGroup}
                                                                        onChange={() => {
                                                                            handleSelectGroup();
                                                                        }}
                                                                        options={optionType2}
                                                                        className="select2-selection"
                                                                    />
                                                                </Col>

                                                                <Col xl={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Name  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>

                                                                <Col xl={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Email Address  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>


                                                                <Col xl={12} className="mb-4">
                                                                    <div className="form-floating">
                                                                        <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                        <label htmlFor="floatingnameInput"> Email Address  <span className="text-danger">*</span></label>
                                                                    </div>
                                                                </Col>


                                                                <Col xl={12} classNmae="mb-4">
                                                                    <div className="inner-repeater mb-4">
                                                                        {(rows1 || []).map((formRow, key) => (

                                                                            <Row className="mb-3" key={key}>

                                                                                <Col md={10} xl={11}>
                                                                                    <div className="form-floating">
                                                                                        <input type="tel" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                                        <label htmlFor="floatingnameInput"> Phone  <span className="text-danger">*</span></label>
                                                                                    </div>
                                                                                </Col>  
                                                                                <Col md={2} xl={1} >
                                                                                    <Button  
                                                                                        color="primary"
                                                                                        className="btn-block inner w-100 h-100"
                                                                                        id="unknown-btn"
                                                                                        style={{ width: "100%" }}
                                                                                        onClick={e => {
                                                                                            handleRemoveRow(formRow.id);
                                                                                        }}
                                                                                    >
                                                                                        {" "}
                                                                                        <i className="fas fa-trash-alt font-size-20" ></i>
                      {" "}
                                                                                    </Button>
                                                                                    <UncontrolledTooltip placement="top" target="unknown-btn">
                    Delete
                  </UncontrolledTooltip> 
                                                                                </Col>
                                                                            </Row>
                                                                        ))}

 



                                                                        <Button
                                                                            onClick={() => {
                                                                                handleAddRowNested();
                                                                            }}
                                                                            color="success"
                                                                            className="mt-2"
                                                                        >
                                                                            Add Phone
                                                                        </Button>
                                                                    </div>
                                                                </Col>



                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">
                                                                        If several languages coalesce, the grammar
                                                                        of the resulting
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={5}>
                                                    <Row>
                                                        <Col lg="12">
                                                            <div className="">
                                                                  <p className="mb-3 text-secondary fw-500">
                                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem rerum esse repellendus fuga fugit, velit voluptates in quas. Reprehenderit magnam vel provident debitis minus perspiciatis, dolores sint laborum beatae omnis? Soluta amet molestiae quam tempora incidunt repudiandae mollitia voluptatibus dolorem ipsam esse alias unde sunt minima, provident quas ut neque illo, vero sequi at perferendis rem. Aspernatur expedita facilis accusamus. Quasi eligendi nostrum nesciunt molestias, quam ex ab fugiat libero iusto reprehenderit doloremque necessitatibus perferendis veniam! Saepe facere nihil quam. Tempore modi perspiciatis repellendus magni perferendis porro a tenetur, minus blanditiis labore vel vitae animi, delectus temporibus consectetur! Porro?
                                                                  </p>
                                                                  <p className="mb-3 text-secondary fw-500">
                                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem rerum esse repellendus fuga fugit, velit voluptates in quas. Reprehenderit magnam vel provident debitis minus perspiciatis, dolores sint laborum beatae omnis? Soluta amet molestiae quam tempora incidunt repudiandae mollitia voluptatibus dolorem ipsam esse alias unde sunt minima, provident quas ut neque illo, vero sequi at perferendis rem. Aspernatur expedita facilis accusamus. Quasi eligendi nostrum nesciunt molestias, quam ex ab fugiat libero iusto reprehenderit doloremque necessitatibus perferendis veniam! Saepe facere nihil quam. Tempore modi perspiciatis repellendus magni perferendis porro a tenetur, minus blanditiis labore vel vitae animi, delectus temporibus consectetur! Porro?
                                                                  </p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </TabPane>
                                            </TabContent>
                                        </div>

                                        <div className="actions clearfix">
                                            <button className="btn btn-primary w-xs me-2">Save</button>
                                            <button className="btn btn-light border-primary w-xs">Cancel</button>

                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>

        </React.Fragment>
    )
}

export default PagesStarter
