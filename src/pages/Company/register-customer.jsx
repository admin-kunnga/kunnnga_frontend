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


const RegisterCustomer = () => {
  //meta title
  document.title = "Register Customer | Kunnga";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Company" breadcrumbItem="Register Customer" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Register Customer Form</CardTitle>

                  <Form>



                    <Row>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">First Name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">Last Name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Your First Name"
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
                            placeholder="Enter Your Email ID"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input">Phone</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-email-Input"
                            placeholder="Enter Your Email ID"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Role</Label>
                          <select className="form-select" defaultValue="1" aria-label="Default select example">
                            <option >--Select--</option>
                            <option value="1">Manager</option>
                            <option value="2">Team</option> 
                          </select>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input"> Gender </Label>
                          <select className="form-select"  defaultValue="1" aria-label="Default select example">
                            <option >--Select--</option>
                            <option value="1">Men</option>
                            <option value="2">Women</option> 
                          </select>
                        </div>
                      </Col>

                      <Col md={12}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-password-Input">address</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-password-Input"
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputCity"> Country </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputCity"
                            placeholder="Enter Your Living City"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input"> Status </Label>
                          <select className="form-select" defaultValue="1" aria-label="Default select example">
                            <option >--Select--</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option> 
                          </select>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputCity">Password</Label>
                          <Input
                            type="password"
                            className="form-control"
                            id="formrow-InputCity"
                            placeholder="Enter Your Living City"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-InputCity">Confirm Password</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-InputCity"
                            placeholder="Enter Your Living City"
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
                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(RegisterCustomer);
