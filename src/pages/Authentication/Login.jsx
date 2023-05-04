import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";
import { Row, Col, Form, CardBody, Card, Alert, Container, Input, FormFeedback, Label } from "reactstrap";

import logoTrans from "../../assets/images/logo/logo_light_full.svg";
import logoBack from "../../assets/images/logo/logo-back-full.svg";

// import Amplify, { Auth } from 'aws-amplify';
import { Amplify, Auth } from 'aws-amplify';

// import * as Amplify from 'aws-amplify';
import Awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';

// Amplify.default.configure(awsconfig);
Amplify.configure(Awsconfig);


const Login = (props) => {
  document.title = "Kunnga - Enterprise Portal";

  const navigate = useNavigate();

  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email('Invalid email address')
  //     .required('Email is required'),
  //   password: Yup.string()
  //     .min(8, 'Password must be at least 8 characters')
  //     .required('Password is required'),
  // });

  const [showMessage, setShowMessage] = useState('');


  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   // const { username, password } = event.target.elements;
  //   try {
  //     const { user } = await Auth.login({
  //       username: 'Tarun@itsabacus.com',
  //       password: 'Acs@1234',
  //     });
  //     console.log(user);
  //   } catch (error) {
  //     console.log('error signing up:', error);
  //   }
  // }



  // useEffect(() => {
  //   Amplify.default.configure(awsconfig);
  // }, []);



  // const user = JSON.parse(localStorage.getItem('amplify-authenticator-authState')).user;



  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: ''
    },
    
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid Email").max(255).required("Please Enter Email Id"),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),

    }),

    onSubmit: async (values) => {
      console.log("values", values);


      try {
        const user = await Auth.signIn(values.email, values.password);
        console.log('User successfully signed in', user);
        if (user) {
          setShowMessage('Successfully logged in');
          navigate('/dashboard-saas');
        }
      } catch (error) {
        console.log('Error signing in', error);
        if (error.code === 'UserNotFoundException') {
          setShowMessage('User does not exist');
        } else if (error.code === 'NotAuthorizedException') {
          setShowMessage('Incorrect username or password');
        } else if (error.code === 'UserNotConfirmedException') {
          setShowMessage('Please confirm your account before logging in');
        } else {
          setShowMessage('Something went wrong. Please try again.');
        }
      }
      

      // try {
      //   const user = Auth.signIn(values.email, values.password);
      //   console.log('User successfully signed in', user);
      //   if (data.status && data.status == 200) {
      //           localStorage.setItem("token", JSON.stringify(data.token));
      //           localStorage.setItem("user", JSON.stringify(data));
      //           setShowMessage('Successfully logged In');
      //           navigate('/dashboard-saas');
      //         } else if (data.status && data.status == 400) {
      //           setShowMessage('Username and password are invalid. Please enter correct username and password');
      //         }
      //         else {
      //           if (data.status && data.status == 401) {
      //             setShowMessage('Wrong Password');
      //           } else {
      //             console.log(data);
      //             setShowMessage('Something went wrong');
      //           }
      //         }
      // } catch (error) {
      //   console.log('Error signing in', error);
      // }

      // try {
      //     const response = await fetch('http://localhost:3400/addUsers', {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json',
      //             // Authorization: `Bearer ${user.token}`,
      //         },
      //         body: JSON.stringify(values)
      //     });
      //     const data = await response.json();

      //     if (data.status == 401) {
      //         setToastError(true);
      //     } else if (data.status == 200) {
      //         setToast(true);
      //         handleCancel();
      //     }
      // }
      // catch (error) {
      //     setToastNotSend(true);
      // }

    },
  });



  return (
    <React.Fragment>

      <div className="account-pages">
        <Row className="g-0">
          <Col md={6} lg={8} xl={9}>
          </Col>

          <Col md={6} lg={4} xl={3} className="bg-white">
            <div className="auth-full-page-content p-md-5 p-4">
              <div className="w-100">
                <div className="d-flex flex-column h-100">
                  <div className="mb-4 mb-md-5">
                    <Link to="/login" className="d-block auth-logo">
                      <img
                        src={logoBack}
                        alt=""
                        height="60"
                        className="logo-dark-element mx-auto"
                      />
                      <img src={logoTrans} alt="" height="60" className="logo-light-element mx-auto" />
                    </Link>
                  </div>
                  <div className="my-auto">
                    <div>
                      <h5 className="dark-blue-text"> Welcome Back ! </h5>
                      <p className="text-muted">
                        Sign in to continue to kunnga.
                      </p>
                    </div>

                    <div className="mt-4">
                    {showMessage && (
                              <div className="alert alert-danger">
                                {showMessage}
                              </div>
                            )}

                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                      >
                        <Col lg={12} className="mb-3">
                          <div className="">
                            <label htmlFor="emailId"> Email </label>

                            <Input
                              className="form-control"
                              name="email"
                              type="text"
                              id="emailId"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email &&
                                  validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.email &&
                              validation.errors.email ? (
                              <FormFeedback type="invalid">
                                {validation.errors.email}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>

                        <Col lg={12} className="mb-3">
                          <div className="">
                            <label htmlFor="passwordId"> Password </label>
                            <Input
                              name="password" 
                              type="password"
                              className="form-control"
                              id="passwordId"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              invalid={
                                validation.touched.password &&
                                  validation.errors.password
                                  ? true
                                  : false
                              }
                            />

                            {validation.touched.password &&
                              validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </Col>


                        <Col md={12}>
                          <button type="submit" className="btn btn-primary w-100">Login</button>
                        </Col>
                      </Form>



                      {/* <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {

                          try {
                            const user = Auth.signIn(values.email, values.password);
                            console.log('User successfully signed in', user);
                          } catch (error) {
                            console.log('Error signing in', error);
                          }

                          // fetch('http://localhost:3400/login', {
                          //   method: 'POST',
                          //   headers: {
                          //     'Content-Type': 'application/json',
                          //   },
                          //   body: JSON.stringify(values),
                          // })
                          //   .then(response => response.json())
                          //   .then(data => {
                          //     setSubmitting(false);
                          //     if (data.status && data.status == 200) {
                          //       localStorage.setItem("token", JSON.stringify(data.token));
                          //       localStorage.setItem("user", JSON.stringify(data));
                          //       setShowMessage('Successfully logged In');
                          //       navigate('/dashboard-saas');
                          //     } else if (data.status && data.status == 400) {
                          //       setShowMessage('Username and password are invalid. Please enter correct username and password');
                          //     }
                          //     else {
                          //       if (data.status && data.status == 401) {
                          //         setShowMessage('Wrong Password');
                          //       } else {
                          //         console.log(data);
                          //         setShowMessage('Something went wrong');
                          //       }

                          //     }
                          //   })
                          //   .catch(error => {
                          //     setSubmitting(false);
                          //     setShowMessage('Server error');
                          //     console.log(error);
                          //   });
                        }}
                      >
                        {({ errors, touched, isSubmitting }) => (
                          <Form>

                            {showMessage && (
                              <div className="alert alert-danger">
                                {showMessage}
                              </div>
                            )}


                            <div className="mb-3">
                              <Label className="form-label">Email</Label>
                              <Field
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                type="email"
                                
                              />
                              <div className=" text-danger ">
                                <ErrorMessage className="alert  text-danger alert-danger" name="email" />
                              </div>

                            </div>

                            <div className="mb-3">
                              <Label className="form-label">Password</Label>
                              <Field
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                              />
                              <div className=" text-danger ">
                                <ErrorMessage className="alert  text-danger alert-danger" name="password" />
                              </div>
                            </div>


                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customControlInline"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customControlInline" >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-3 d-grid">
                              <button
                                className="btn btn-dark-blue fw-600 fs-16 btn-block"
                                type="submit" disabled={isSubmitting}>
                                Log In
                              </button>
                            </div>

                          </Form>
                        )}
                      </Formik> */}
                      {/* <button
                        className="btn btn-dark-blue fw-600 fs-16 btn-block"
                        type="submit" onClick={handleSubmit}>
                        Test
                      </button> */}
                      <div className="mt-4 text-center">
                        <Link className="text-muted" to="/forgot-password">
                          <i className="mdi mdi-lock me-1"></i>Forgot your password?</Link>
                      </div>

                    </div>
                  </div>


                  <div className="mt-4 mt-md-5 text-center">
                    <p className="mb-0">
                      © {new Date().getFullYear()} All Right Reserved with Kunnga
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </Col>

        </Row>


      </div>
    </React.Fragment>
  );
};
// withAuthenticator
export default Login;