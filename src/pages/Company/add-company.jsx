import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";


//redux
import { useSelector, useDispatch } from "react-redux";

import { getUsers as onGetUsers } from "/src/store/contacts/actions";

const AddCompany = () => {
  //meta title
  document.title = "Add Company | Kunnga";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Company" breadcrumbItem="Add Company" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Add Company Form</CardTitle>

                  



                    <Row>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">Company Name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Company Name"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">Contact Name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Contact Name"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input">Email</Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="formrow-email-Input"
                            placeholder="Enter Email ID"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Status</Label>
                          <select className="form-select" defaultValue="1" aria-label="Default select example">
                            <option >--Select--</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option> 
                          </select>
                        </div>
                      </Col>


                      <Col md={12}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input">Billing Address </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-email-Input"
                            placeholder="Enter Billing Address"
                          />
                        </div>
                      </Col>
 
 
  
                    </Row>
 

                    <div>
                      <button type="submit" className="btn btn-light w-md me-2 border">
                        Cancel
                      </button>

                      <button type="submit" className="btn btn-primary w-md">
                        Submit
                      </button>
                    </div> 

                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AddCompany);
