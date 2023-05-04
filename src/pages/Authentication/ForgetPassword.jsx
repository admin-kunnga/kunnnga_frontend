import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form, } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";


// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

import logoBack from "../../assets/images/logo/logo-back-full.svg";



const ForgetPasswordPage = (props) => {
  //meta title
  document.title = "Kunnga - Enterprise Portal";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").max(255).required("Email is required")
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3400/resetPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
        const data = await response.json();

        if (data.status == 200) {
          handleCancel();
          setShowMessage("Mail Send Successfully");
        } else {
          setShowErrorMessage("Email Not Exits");
        }
      }
      catch (error) {
        console.log("Error");
      }

    },
  });
 
  const [showMessage, setShowMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');

  useEffect(() => {
    if (showMessage || showErrorMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(false);
        setShowErrorMessage(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [showMessage, showErrorMessage]);




  // ==== clear form ===
  const handleCancel = () => {
    validation.resetForm();
  };


  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-dark-blue bg-softbg-soft-primary">
                  <Row>
                    <Col xs={7}>
                      <div className="text-light p-4">
                        <h5 className="text-light">Welcome Back !</h5>
                        <p>Sign in to continue to Kunnga.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/forgot-password">
                      <div className="my-4">
                        <img src={logoBack} alt="" height="60" className="logo-dark-element mx-auto" />
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">

                    {showMessage && (
                      <div className="alert alert-success">
                        {showMessage}
                      </div>
                    )}

                    {showErrorMessage && (
                      <div className="alert alert-danger">
                        {showErrorMessage}
                      </div>
                    )}

                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="form-floating mb-3">
                        <Input
                          name="email"
                          className="form-control"
                          type="email"
                          id="emailInput"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        <label htmlFor="emailInput">Email</label>
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>


                      <Row className="mb-3">
                        <Col className="text-end">
                          <button className="btn btn-dark-blue w-md" type="submit">
                            Reset
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Go back to  {""}
                  <Link to="/login" className="font-weight-medium text-primary">
                    Login
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} All Right Reserved with Kunnga
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
