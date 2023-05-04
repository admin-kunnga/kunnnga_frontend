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
 

const CreateBill = () => {
  //meta title
  document.title = "Create Bill | Kunnga";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Billing" breadcrumbItem="Create Bill" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Create Bill Form</CardTitle>

                  <Form>



                    <Row>

                      <Col md={12}>
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
                          <Label htmlFor="formrow-firstname-Input"> Bill Date</Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input"> Expiry Date</Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Payment Status</Label>
                          <select className="form-select" defaultValue="1" aria-label="Default select example">
                            <option >--Select--</option>
                            <option value="1">Paid </option>
                            <option value="2">Unpaid</option> 
                          </select>
                        </div>
                      </Col>


                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-email-Input">Payment Date</Label>
                          <Input
                            type="date"
                            className="form-control"
                            id="formrow-email-Input"
                            placeholder="Enter Your Email ID"
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

export default withRouter(CreateBill);
