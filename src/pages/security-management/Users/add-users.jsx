import React, { useState, useMemo } from "react";
import { Container } from "reactstrap"
import classnames from "classnames"
import Select from "react-select";

import PropTypes from 'prop-types';
 


import TableContainer from '../../../components/Common/TableContainer';


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Col, Card, CardBody, Label, Input, NavItem, NavLink, Form, TabContent, TabPane, Button, UncontrolledTooltip
} from "reactstrap";


const PagesStarter = () => {



    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Position',
                accessor: 'position'
            },
            {
                Header: 'Office',
                accessor: 'office'
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Start date',
                accessor: 'startDate'
            },
            {
                Header: 'Salary',
                accessor: 'salary'
            },
        ],
        []
    );

    const data = [
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        }, 
    ];





    const [passedSteps, setPassedSteps] = useState([1])

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab]
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
                setPassedSteps(modifiedSteps)
            }
        }
    }


    const [activeTab, setactiveTab] = useState(1)


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
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Security Management / Users" breadcrumbItem="Add User" />

                    <Row>
                        <Col xs={12}>

                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-4"> Add User </h4>
                                    
                                    <div className="vertical-wizard wizard clearfix vertical">
                                        <div className="steps clearfix">
                                            <ul>
                                                <NavItem
                                                    className={classnames({ current: activeTab === 1 })}  >
                                                    <NavLink
                                                        className={classnames({ current: activeTab === 1 })}
                                                        onClick={() => {
                                                            setactiveTab(1)
                                                        }}
                                                    // disabled={!(passedSteps || []).includes(1)}
                                                    >
                                                        <span className="number">1.</span> User Details
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
                                                        <span className="number">2.</span>  Contact Details
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
                                                        <span className="number">3.</span> Roles
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
                                                        <span className="number">4.</span> Settings
                                                    </NavLink>
                                                </NavItem>
                                            </ul>
                                        </div>
                                        <div className="content clearfix">
                                            <TabContent activeTab={activeTab} className="body">

                                                <TabPane tabId={1}>
                                                    <Form>
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
                                                                    <select defaultValue="0" className="form-select">
                                                                        <option value="0">--Select--</option>
                                                                        <option value="1">Active</option>
                                                                        <option value="2">Inactive</option>
                                                                        <option value="3">Deleted</option>
                                                                    </select>
                                                                    <label htmlFor="floatingSelectGrid">Status</label>
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


                                                        </Row>

                                                    </Form>
                                                </TabPane>

                                                <TabPane tabId={2}>
                                                    <div>
                                                        <Form>
                                                            <Row>

                                                                <Col lg={12}>
                                                                    <div className="form-floating mb-3">
                                                                        <select defaultValue="0" className="form-select">
                                                                            <option value="0">--Select--</option>
                                                                            <option value="1">Home</option>
                                                                            <option value="2">Work</option>
                                                                            <option value="3">Mobile</option>
                                                                            <option value="3">Fax</option>
                                                                            <option value="3">Other</option>
                                                                        </select>
                                                                        <label htmlFor="floatingSelectGrid">Type</label>
                                                                    </div>
                                                                </Col>

                                                                <Col xl={12} className="mb-4">
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

                                                <TabPane tabId={3}>
                                                    <div>
                                                        <Form>
                                                        <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    customPageSize={10}
                    className="custom-header-css"
                />
                                                        </Form>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={4}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg={12} className="mb-4">
                                                                <div className="form-floating">
                                                                    <input type="date" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                    <label htmlFor="floatingnameInput">Date <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={12} className="mb-4">
                                                                <div className="form-floating">
                                                                    <input type="tel" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                    <label htmlFor="floatingnameInput"> Number <span className="text-danger">*</span> </label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={12} className="mb-4">
                                                                <div className="form-floating">
                                                                    <input type="time" className="form-control" id="floatingnameInput" placeholder="Enter Name" />
                                                                    <label htmlFor="floatingnameInput"> Time  <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col> 

                                                            <Col lg={12}>
                                                                <div className="form-floating mb-3">
                                                                    <select defaultValue="0" className="form-select">
                                                                        <option value="0">--Select--</option>
                                                                        <option value="1">IST </option>
                                                                        <option value="2">UTC</option>
                                                                        <option value="3">LMT </option>
                                                                    </select>
                                                                    <label htmlFor="floatingSelectGrid">Time Zone <span className="text-danger">*</span> </label>
                                                                </div>
                                                            </Col>

                                                            <Col lg={12}>
                                                                <div className="form-floating mb-3">
                                                                    <select defaultValue="0" className="form-select">
                                                                        <option value="0">--Select--</option>
                                                                        <option value="0">--Select--</option>
                                                                        <option value="1">Hindi </option>
                                                                        <option value="2">English</option>
                                                                        <option value="3">German </option>
                                                                    </select>
                                                                    <label htmlFor="floatingSelectGrid"> Language <span className="text-danger">*</span></label>
                                                                </div>
                                                            </Col>

                                                        </Row>

                                                    </Form>
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
