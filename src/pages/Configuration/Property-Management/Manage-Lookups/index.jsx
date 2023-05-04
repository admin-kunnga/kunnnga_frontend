import React, { useState, useMemo } from "react";
import {
    Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, TabPane, Nav, NavItem, NavLink,
    Label, Form, TabContent, Button, UncontrolledTooltip, Input, Table, InputGroup, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Badge, FormGroup, Dropdown
} from "reactstrap"

import ManageLookupsPropertiesSetting from "./properties"
import ManageLookupsBuildingsSetting from "./buildings"
import ManageLookupsUnitsSetting from "./units"

 

import {
    Route, Routes, Link
} from "react-router-dom";
//Import Breadcrumb
import Breadcrumbs from "../../../../components/Common/Breadcrumb"
import Sidebar from "../../sidebar";
 


const PropertyManagementSetting = () => {


    // ------==== Dropdown ===---------
    const [singlebtn, setSinglebtn] = useState(false);
    const [singlebtn1, setSinglebtn1] = useState(false)


    //meta title
    document.title = "Kunnga - AssociationsNow";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    {/* <Breadcrumbs className="mb-4" title="Property Managements" breadcrumbItem="Manage Choices" /> */}


                <Row>
                <Col lg={4} xl={3} className="">
                            <Sidebar />
                        </Col>

                    <Col lg={8} xl={9} className="">
                    <h5 className="mb-3 text-primary">Properties</h5>
                    <ManageLookupsPropertiesSetting />

                    <h5 className="mt-4 mb-3 text-primary">Buildings</h5>
                    <ManageLookupsBuildingsSetting />


                    <h5 className="mt-4 mb-3 text-primary">Units</h5>
                    <ManageLookupsUnitsSetting />
                    </Col>
                </Row>
 


                </Container>
            </div>
        </React.Fragment>
    )
}

export default PropertyManagementSetting
