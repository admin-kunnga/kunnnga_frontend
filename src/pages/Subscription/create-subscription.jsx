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
import { createSubscription } from "react-redux/es/utils/Subscription";

const CreateSubscription = () => {
  //meta title
  document.title = "Create Subscription | Kunnga";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Subscription" breadcrumbItem="Create Subscription" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Create Subscription Form</CardTitle>

                  <Form>
                    <Row>
                      <Col md={12}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">Subscription Name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="Enter Subscription Name"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Subscription Type</Label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>--Select--</option>
                            <option value="1">Platinum</option>
                            <option value="2">Gold</option> 
                            <option value="2">Silver</option> 
                            <option value="2">Bronze</option> 
                          </select>
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <Label htmlFor="formrow-firstname-Input">Pricing</Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="formrow-firstname-Input"
                            placeholder="$"
                          />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                        <Label htmlFor="formrow-email-Input">Status</Label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>--Select--</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>  
                          </select>
                        </div>
                      </Col>

                    </Row>
                    <div>
                      <button type="submit" className="btn btn-light w-md me-2 border"> Cancel </button>
                      <button type="submit" className="btn btn-primary w-md">  Submit </button>
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

export default withRouter(CreateSubscription);
