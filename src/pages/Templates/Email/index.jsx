import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink,
    Label, Form, TabContent, Button, UncontrolledTooltip, Input, Table, InputGroup, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Badge, FormGroup, Dropdown
} from "reactstrap"
import {
    Route, Routes, Link
} from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableContainer from "../../../components/Common/TableContainer";
import AddTemplateModal from "./addTemplateModal"
import Sidebar from "../../Configuration/sidebar"


const TemplatesEmail = () => {

    // ------======== table =======-----------
    const columns2 = useMemo(
        () => [
            {
                Header: 'Template Name',
                accessor: 'name',
            },
            {
                Header: 'Subject Type',
                accessor: 'position'
            },
            {
                Header: 'Description',
                accessor: 'office'
            },
            {
                Header: 'Created',
                accessor: 'age'
            },
            {
                Header: 'Modified',
                accessor: 'startDate'
            },
            {
                Header: 'Action',
                accessor: 'salary',
                Cell: (cellProps) => {
                    return (
                        <UncontrolledDropdown className="text-center">
                            <DropdownToggle tag="a" className="card-drop">
                                <i className="mdi mdi-dots-horizontal fs-18"></i>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem  >
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                        View
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem >
                                    <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                                    Edit
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                        Edit
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                                    Delete
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                        Delete
                                    </UncontrolledTooltip>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    );
                },
            },
        ],
        []
    );

    const data = [
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": "10/04/2023",
            "office": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ut.",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": "10/08/2024",
            "office": "adipisicing elit. Labore ratione consequuntur saepe rem, qui incidunt.",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        },
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": "10/04/2023",
            "office": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "startDate": "2010/11/14",
            "salary": "$357,650"
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": "08/02/2023",
            "office": "Illo, reprehenderit ipsam praesentium asperiores, molestias nemo atque fugiat dolore assumenda dolor inventore!",
            "startDate": "2010/12/22",
            "salary": "$92,575"
        },

    ];


    // ------==== Dropdown ===---------
    const [singlebtn, setSinglebtn] = useState(false)
    const [singlebtn1, setSinglebtn1] = useState(false)


    //meta title
    document.title = "Kunnga - AssociationsNow";


    // ----- ===== add modal ====-----

    const toggleAddModal = () => setModalAdd(!modalAdd);
    const [modalAdd, setModalAdd] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <AddTemplateModal isOpen={modalAdd} toggle={toggleAddModal} /> 

                    {/* Render Breadcrumbs */}
                    {/* <Breadcrumbs title="Templates" breadcrumbItem="Email" /> */}

                    <Row>
                        <Col lg={4} xl={3} className="">
                        <Sidebar />
                        </Col>
                        <Col lg={8} xl={9} className="">

                            <Card>
                                <CardBody className="pb-0">
                                    <Row>
                                        <Col sm={4} md={3} xl={3}>
                                            <div className="search-box me-2 mb-2 d-inline-block w-100">
                                                <div className="position-relative">
                                                    <label htmlFor="search-bar-0" className="search-label w-100">
                                                        <span id="search-bar-0-label" className="sr-only">
                                                            Search this table
                                                        </span>
                                                        <input id="search-bar-0" type="text" className="form-control ps-2 pe-5" placeholder="Search here..."
                                                        />
                                                    </label>
                                                    <i className="bx bx-search-alt search-icon-1"></i>
                                                </div>
                                            </div>
                                        </Col>


                                        <Col className="text-end">
                                            <button type="button" className="btn btn-primary" id="AddNew" onClick={toggleAddModal}>  <i className="fas fa-plus"></i>
                                                <UncontrolledTooltip placement="top" target="AddNew">
                                                    Add Template
                                                </UncontrolledTooltip>
                                            </button>
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <TableContainer
                                        columns={columns2}
                                        data={data}
                                        isGlobalFilter={true}
                                        isAddOptions={false}
                                        customPageSize={20}
                                        className="custom-header-css"
                                    />
                                </CardBody>
                            </Card></Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default TemplatesEmail
