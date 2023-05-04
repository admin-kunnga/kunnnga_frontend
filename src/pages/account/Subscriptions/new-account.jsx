import React, { useState, useMemo } from "react";
import classnames from "classnames";
import Select from "react-select";
import Switch from "react-switch";
import Dropzone from "react-dropzone"

import TableContainer from '../../../components/Common/TableContainer';


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
    Row, Badge, InputGroup, Container, CardTitle, Col, Modal, Card, Nav, CardBody, Input, NavItem, NavLink, Form, Table, TabContent, TabPane, UncontrolledDropdown, DropdownItem, UncontrolledTooltip, DropdownMenu, DropdownToggle
} from "reactstrap";




const NewAccountSubscriptions = () => {


    // ------------========Nav Bar============--------
    const [activeTab, setactiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };



    // --------========= select options =======----------

    // select option
    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    const optionGroup = [
        {
            // label: "Picnic",
            options: [
                { label: "Plan", value: "Plan" },
                { label: "Ticket", value: "Ticket" },
                { label: "Ticket & Phone", value: "Ticket & Phone" },
            ],
        },
    ];

    const OptionCurrency = [
        {
            options: [
                { label: "INR", value: "India" },
                { label: "USD", value: "UAE" },
                { label: "AED", value: "UAE" },
                { label: "BHD", value: "UAE" },
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

    const PaymentMethod = [
        {
            options: [
                { label: "Cheque", value: "India" },
                { label: "Cash", value: "UAE" },
                { label: " Bank Transfer", value: "UAE" },

            ],
        },
    ];


    // ----------======= table Code ========----------
    const columns = useMemo(
        () => [

            {
                Header: 'Name',
                accessor: 'plans',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Status',
                accessor: 'Active',
                Cell: (cellProps) => {
                    return <>
                        <Badge pill color="danger" className="">
                            Inactive
                        </Badge>
                    </>
                }
            },
            {
                Header: "Action",
                Cell: (cellProps) => {
                    return (
                        <UncontrolledDropdown className="text-center">
                            <DropdownToggle tag="a" className="card-drop">
                                <i className="mdi mdi-dots-horizontal fs-18"></i>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end">

                                <DropdownItem onClick={() => {
                                    const customerData = cellProps.row.original;
                                    handleCustomerClick(customerData);
                                }} >
                                    <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                                    View Details
                                    <UncontrolledTooltip placement="top" target="ViewTooltip">
                                        View Details
                                    </UncontrolledTooltip>
                                </DropdownItem>

                                <DropdownItem
                                    onClick={() => {
                                        const customerData = cellProps.row.original;
                                        handleCustomerClick(customerData);
                                    }}  >

                                    <i className="fas fa-receipt font-size-16 me-2" id="InvoiceTooltip"></i>
                                    Invoice
                                    <UncontrolledTooltip placement="top" target="InvoiceTooltip">
                                        Invoice
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
            "plans": "Gold",
            "id": "#520",
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "age": 28,
            "office": "Singapore",
            "startDate": "2010/11/14",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$357,650"
        },
        {
            "id": "#521",
            "plans": "Silver",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Individual",
            "salary": "$92,575"
        },
        {
            "id": "#521",
            "plans": "Platinum",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$92,575"
        },

        {
            "id": "#521",
            "plans": "Gold",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Individual",
            "salary": "$92,575"
        },


        {
            "id": "#521",
            "plans": "Silver",
            "name": "Gavin Joyce",
            "position": "Developer",
            "age": 42,
            "office": "Edinburgh",
            "startDate": "2010/12/22",
            "endDate": "2010/11/15",
            "category": "Business",
            "salary": "$92,575"
        },

    ];






    // ------=====switch box=====------------------
    const [sq2, setsq2] = useState(true);


    //meta title
    document.title = "Kunnga - AssociationsNow";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Account / Subscription" breadcrumbItem="New Account Subscriptions" />
                    <Row>
                        <Col xs={12}>
                            {/* <CardTitle className="h4">  New Account Subscription  </CardTitle> */}
                            <Card>
                                <CardBody>
                                    <Nav tabs className="mb-4">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })}
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                Plans
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "2",
                                                })} onClick={() => { toggle("2"); }}  >
                                                History
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                </CardBody>
                            </Card>

                            <TabContent activeTab={activeTab} className="text-muted">

                                <TabPane tabId="1">
                                    <Row>
                                        <Col md={6} xl={4}>
                                            <Card>
                                                <CardBody>

                                                    <CardTitle className="h4 mb-4 fw-700">
                                                        Plans
                                                    </CardTitle>

                                                    <Row className="mb-3">
                                                        <Col sm={12} className="mb-3">
                                                            <div className="form-floating">
                                                                <input type="number" value="785948" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                                <label htmlFor="floatingnameInput">Customer ID  <span className="text-danger">*</span></label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} className="mb-3">
                                                            <div className="form-floating">
                                                                <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" readOnly />
                                                                <label htmlFor="floatingnameInput">Plan Name  <span className="text-danger">*</span></label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} className="mb-3">
                                                            <div className="form-floating">
                                                                <select defaultValue="2" className="form-select" disabled>
                                                                    <option >--Select-- </option>
                                                                    <option value="1"> Business </option>
                                                                    <option value="2"> Individual </option>
                                                                </select>
                                                                <label htmlFor="floatingSelectGrid">Category <span className="text-danger">*</span> </label>
                                                            </div>
                                                        </Col>
                                                        <Col sm={12} className="mb-3">
                                                            <div className="form-floating">
                                                                <select defaultValue="2" className="form-select" disabled>
                                                                    <option >--Select-- </option>
                                                                    <option value="1">Active</option>
                                                                    <option value="2">Inactive</option>
                                                                    <option value="2">Cancelled</option>
                                                                    <option value="2">Deleted</option>
                                                                </select>
                                                                <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>


                                        <Col md={6} xl={4}>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle className="h4 mb-4 fw-700">
                                                        Features
                                                    </CardTitle>

                                                    <Row>
                                                        <Table className="table mb-0 table-layout-fixed mb-3">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">Max No. of Properties
                                                                        <span className="text-danger">*</span>
                                                                    </td>
                                                                    <td>
                                                                        <Input pattern="[0-9]+"
                                                                            type="number"
                                                                            className="form-control" value="452" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">Max No. of Units <span className="text-danger">*</span> </td>
                                                                    <td>
                                                                        <Input type="number" pattern="[0-9]+" className="form-control" value="500" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                {/* <tr>
                                                                    <td className="table-light fw-bold align-middle">Financial Accounting <span className="text-danger">*</span> </td>
                                                                    <td>
                                                                        <div className="square-switch">
                                                                            <input
                                                                                type="checkbox"
                                                                                id="square-switch2"
                                                                                // eslint-disable-next-line react/no-unknown-property
                                                                                Switch="none"
                                                                                defaultChecked={sq2}
                                                                                onChange={() => setsq2(!sq2)}
                                                                                disabled
                                                                            />
                                                                            <label
                                                                                htmlFor="square-switch2"
                                                                                data-on-label="Yes"
                                                                                data-off-label="No"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                </tr> */}

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">Document Storage <span className="text-danger">*</span> </td>
                                                                    <td>
                                                                        <InputGroup>
                                                                            <input type="number" pattern="[0-9]+" min="1" max="99999" className="form-control" id="inlineFormInputGroupUsername" placeholder=" " value="52" readOnly />
                                                                            <div className="input-group-text">GB</div>
                                                                        </InputGroup>
                                                                    </td>
                                                                </tr>

                                                                {/* <tr>
                                                                    <td className="table-light fw-bold align-middle">Support <span className="text-danger">*</span> </td>
                                                                    <td>

                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={() => {
                                                                                handleSelectGroup();
                                                                            }}
                                                                            options={optionGroup}
                                                                            className="select2-selection"
                                                                            disabled
                                                                        />
                                                                    </td>
                                                                </tr> */}

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">Max No. of Users <span className="text-danger">*</span> </td>
                                                                    <td>
                                                                        <Input
                                                                            type="number" pattern="[0-9]+" value="5"
                                                                            className="form-control" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Row>


                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col md={6} xl={4}>
                                            <Card>
                                                <CardBody>

                                                    <CardTitle className="h4 mb-4 fw-700">
                                                        Payment Details                                                    </CardTitle>

                                                    <Row className="mb-3">
                                                        <Table className="col-12 table mb-0 table-layout-fixed">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Transaction ID <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control" value="#8556" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">  Transaction Date <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Input
                                                                            type="date"
                                                                            className="form-control"
                                                                            value="12/05/2023" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Payment Method   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={() => {
                                                                                handleSelectGroup();
                                                                            }}
                                                                            options={PaymentMethod}
                                                                            className="select2-selection"
                                                                            disabled
                                                                        />
                                                                    </td>

                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Currency   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={() => {
                                                                                handleSelectGroup();
                                                                            }}
                                                                            options={OptionCurrency}
                                                                            className="select2-selection"

                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Amount   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control" value="7856" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle">Discount <span className="text-danger">*</span> </td>
                                                                    <td>
                                                                        <InputGroup>
                                                                            <input type="text" pattern="[0-9]+" min="1" max="99999" className="form-control" id="inlineFormInputGroupUsername" placeholder=" " value="52" readOnly />
                                                                            <div className="input-group-text p-0">
                                                                                <select defaultValue="2" className="form-select rounded-0" disabled>
                                                                                    <option> % </option>
                                                                                    <option> $ </option>
                                                                                </select>

                                                                            </div>
                                                                        </InputGroup>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Tax   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control" value="7856" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Net Payment   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control" value="785856" readOnly
                                                                        />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td className="table-light fw-bold align-middle"> Status   <span className="text-danger">*</span>  </td>
                                                                    <td>
                                                                        <Select
                                                                            value={selectedGroup}
                                                                            onChange={() => {
                                                                                handleSelectGroup();
                                                                            }}
                                                                            options={optionStatus}
                                                                            className="select2-selection"
                                                                        />
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </Table>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>



                                    </Row>
                                </TabPane>


                                <TabPane tabId="2">
                                    <TableContainer
                                        columns={columns}
                                        data={data}
                                        isGlobalFilter={true}
                                        isAddOptions={false}
                                        customPageSize={20}
                                        className="custom-header-css"
                                    />
                                </TabPane>

                            </TabContent>

                        </Col>

                    </Row>

                </Container>
            </div>

        </React.Fragment>
    )
}

export default NewAccountSubscriptions