import React, { useState, useEffect } from "react";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  Container, Row, Col, Card, CardBody, Toast, ToastBody, Form, Input, Label, NavItem, NavLink, TabContent, TabPane, FormFeedback
} from "reactstrap";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Link, useNavigate } from "react-router-dom";

import classnames from "classnames"


// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../components/Common/withRouter";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-1.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const mock = new MockAdapter(axios)

const UserProfile = (props) => {

  //meta title
  document.title = "Profile | Kunnga";

  // const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [first_name, set_first_name] = useState("");
  const [middle_name, set_middle_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [company, setcompany] = useState("");
  const [job_title, set_job_title] = useState("");
  const [phone, setphone] = useState("");
  const [type, settype] = useState("");
  const [status, setstatus] = useState("");
  const [idx, setidx] = useState(1);

  //for change password
  // const [currentPassword, setCurrentPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [error1, setError] = useState(null);

  //for image uplaod
  const [filename, setFile] = useState('');
  const navigate = useNavigate();
  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));

  useEffect(() => {
    getUserDetails();
  }, []);


  // ====  Toaster =====
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastSame, setToastSame] = useState(false);
  const [toastWrong, setToastWrong] = useState(false);
  const [toastNotFound, setToastNotFound] = useState(false);
  const [toastWentWrong, setToastWentWrong] = useState(false);


  // ---=== form wizard ===-----
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {

      if (tab >= 1 && tab <= 3) {
        setoggleTabVertical(tab)
      }
    }
  }

  // select dropdown
  // const [selectedGroup, setselectedGroup] = useState(null);
  // function handleSelectGroup(selectedGroup) {
  //   setselectedGroup(selectedGroup);
  // }

  // const optionType1 = [
  //   {
  //     options: [
  //       { label: "Home", value: "One" },
  //       { label: "Work", value: "Two" },
  //       { label: "Mobile", value: "Three" },
  //       { label: "Fax", value: "Three" },
  //       { label: "Other", value: "Three" },

  //     ],
  //   },
  // ];

  const [value, setValue] = useState()

  // const [selected, setSelected] = useState("Select")




  const getUserDetails = async () => {
    var user = JSON.parse(localStorage.getItem("user"));
    var user_id = user.id;
    let result = await fetch('http://localhost:3400/getprofileDetails', {
      method: 'post',
      body: JSON.stringify({ user_id }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    setemail(result[0].email);
    setname(result[0].first_name + ' ' + result[0].last_name);
    set_first_name(result[0].first_name);
    set_middle_name(result[0].middle_name);
    set_last_name(result[0].last_name);
    setcompany(result[0].company);
    settype(result[0].type);
    setphone(result[0].phone);
    setstatus(result[0].status);
    set_job_title(result[0].job_title);
    setFile(result[0].profile_pic);
    console.log(result);

  }

  const handleFileChange = async (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
    var files = event.target.files[0];
    console.log(files);
    const formdata = new FormData();
    formdata.append('filename', 'aa');
    console.log(formdata);

    // formData.append('image', file);

    var user = JSON.parse(localStorage.getItem("user"));
    var user_id = user.id;

    let result = await fetch('http://localhost:3400/uploadProfilePic', {
      method: 'post',
      body: JSON.stringify({ files }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();

    // axios.post("http://localhost:3400/uploadProfilePic",formData)
    //           .then(response => {
    //               console.log(response.data, "Data Submitted");
    //           })
    //           .catch(error => {
    //               console.error(error, "Data can not send");
    //           });
  };



  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || '',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });



  // ============= submit data ==================
  const validationType = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      currentPassword: Yup.string().required("This value is required"),

      newPassword: Yup.string().required("This value is required").when("currentPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().notOneOf([Yup.ref('currentPassword')], 'Passwords should not be match')
      }),

      // newPassword: Yup.string().required("This value is required"),
      confirmPassword: Yup.string().required("This value is required").when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("newPassword")],
          "Both password need to be the same"
        ),
      }),
    }),

    onSubmit: async (values) => {
      console.log("values", values);

      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const user_id = user.id;
        const data = {
          "user_id": user.id,
          "currentPassword": values.currentPassword,
          "newPassword": values.newPassword,
        }
        console.log("data", data);

        const response = await fetch('http://localhost:3400/changePassword', {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        console.log(response.status);

        // result = await response.json();
        // console.log(result);

        if (response.status == 200) {
          // navigate('/dashboard-saas');
          setToastSuccess(true);
        } else if (response.status == 404) {
          setToastNotFound(true);
        } else if (response.status == 402) {
          setToastSame(true);
        }
        else if (response.status == 401) {
          setToastWrong(true);
        }
        else {
          setToastWentWrong(true);
        }
      } catch (error) {
        setToastWentWrong(true);
      }

    },
  });

  const [profilePicture, setProfilePicture] = useState('../../assets/images/users/avatar-1.jpg');

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    event.preventDefault();
    setFile(event.target.files[0]);
    var files = event.target.files[0];
    console.log(files);
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id;

    formData.append('filename', files);
    formData.append('user_id', user_id);

    console.log(formData);
    try {
      const response = await fetch('http://localhost:3400/uploadProfilePic', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Profile picture successfully updated
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };
  return (
    <React.Fragment>

      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
        <Toast
          isOpen={toastSuccess}
          className="align-items-center text-white bg-success border-0"
          role="alert"
        >
          <div className="d-flex">
            <ToastBody>
              Password Change Successfully
            </ToastBody>
            <button onClick={() => setToastSuccess(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
            ></button>
          </div>
        </Toast>
      </div>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
        <Toast
          isOpen={toastSame}
          className="align-items-center text-dark bg-warning border-0"
          role="alert"   >
          <div className="d-flex">
            <ToastBody>
              Same Password
            </ToastBody>
            <button onClick={() => setToastSame(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
            ></button>
          </div>
        </Toast>
      </div>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
        <Toast
          isOpen={toastWrong}
          className="align-items-center text-white bg-danger border-0"
          role="alert"  >
          <div className="d-flex">
            <ToastBody>
              Wrong Current Password
            </ToastBody>
            <button onClick={() => setToastWrong(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
            ></button>
          </div>
        </Toast>
      </div>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
        <Toast
          isOpen={toastNotFound}
          className="align-items-center text-white bg-danger border-0"
          role="alert"  >
          <div className="d-flex">
            <ToastBody>
              User Not Found
            </ToastBody>
            <button onClick={() => setToastNotFound(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
            ></button>
          </div>
        </Toast>
      </div>

      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
        <Toast
          isOpen={toastWentWrong}
          className="align-items-center text-white bg-danger border-0"
          role="alert"  >
          <div className="d-flex">
            <ToastBody>
              Something went wrong
            </ToastBody>
            <button onClick={() => setToastWentWrong(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
            ></button>
          </div>
        </Toast>
      </div>

      <div className="page-content">
        <Container fluid>

          <Breadcrumb title="Kunnga" breadcrumbItem="Profile" />

          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3 me-2 position-relative">
                      {filename ? (
                        <img src={filename} alt="Profile picture" className="avatar-xl rounded-circle img-thumbnail" />
                      ) : (
                        <img src={avatar} alt="Profile picture" className="avatar-xl rounded-circle img-thumbnail" />
                      )}
                      <label htmlFor="editProfile" className="btn btn-primary edit-btn m-1 rounded-circle center position-absolute top-0 right-0 edit-btn">
                        <i className="fas fa-pen"></i>
                      </label>
                      <input type="file" name="filename" id="editProfile" hidden onChange={handleFileUpload} />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>{name} </h5>
                        <p className="mb-0">{idx}</p>
                        <p className="mb-1">{job_title} </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-3"> User Profile</h4>

          <Card>
            <CardBody>
              <div className="vertical-wizard wizard clearfix vertical">
                <div className="steps clearfix">
                  <ul>
                    <NavItem
                      className={classnames({
                        current: activeTabVartical === 1,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTabVartical === 1,
                        })}
                        onClick={() => {
                          toggleTabVertical(1)
                        }}
                      >
                        <span className="number">1.</span> User Detail
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({
                        current: activeTabVartical === 2,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTabVartical === 2,
                        })}
                        onClick={() => {
                          toggleTabVertical(2)
                        }}
                      >
                        <span className="number">2.</span>{" "}
                        <span>Contact Detail</span>
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className={classnames({
                        current: activeTabVartical === 3,
                      })}
                    >
                      <NavLink
                        className={classnames({
                          active: activeTabVartical === 3,
                        })}
                        onClick={() => {
                          toggleTabVertical(3)
                        }}
                      >
                        <span className="number">3.</span>{" "}
                        <span>Change Password</span>
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
                <div className="content clearfix">

                  <TabContent
                    activeTab={activeTabVartical}
                    className="body"
                  >
                    <TabPane tabId={1}>

                      <Row>


                        <Col lg={6} xl={4} className="mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={first_name} readOnly />
                            <label htmlFor="floatingnameInput">First Name <span className="text-danger">*</span></label>
                          </div>
                        </Col>
                        <Col lg={6} xl={4} className="mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={middle_name} readOnly />
                            <label htmlFor="floatingnameInput"> Middle Name </label>
                          </div>
                        </Col>

                        <Col lg={6} xl={4} className="mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={last_name} readOnly />
                            <label htmlFor="floatingnameInput"> Last Name  <span className="text-danger">*</span></label>
                          </div>
                        </Col>

                        <Col lg={6} className="mb-3">
                          <div className="form-floating">
                            <input type="email" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={email} readOnly />
                            <label htmlFor="floatingnameInput"> Email  <span className="text-danger">*</span></label>
                          </div>
                        </Col>


                        <Col lg={6}>
                          <div className="form-floating mb-3">
                            <select defaultValue="1" className="form-select" disabled value={status}>
                              <option value="1">Active</option>
                              <option value="2">Inactive</option>
                              <option value="3">Deleted</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Status <span className="text-danger">*</span> </label>
                          </div>
                        </Col>

                        <Col lg={6} className="mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={company} readOnly />
                            <label htmlFor="floatingnameInput"> Company </label>
                          </div>
                        </Col>


                        <Col lg={6} className="mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control" id="floatingnameInput" placeholder="Enter Name" value={job_title} readOnly />
                            <label htmlFor="floatingnameInput"> Job Title</label>
                          </div>
                        </Col>





                      </Row>
                    </TabPane>
                    <TabPane tabId={2}>

                      <Row>

                        <Col lg={6}>
                          <div className="form-floating mb-3">
                            <select defaultValue="1" className="form-select" value={type}>
                              <option value="1">Home </option>
                              <option value="2">Fax</option>
                              <option value="3"> Mobile</option>
                              <option value="3"> Work</option>

                              <option value="3"> Other</option>

                            </select>
                            <label htmlFor="floatingSelectGrid"> Type <span className="text-danger">*</span> </label>
                          </div>
                        </Col>

                        <Col lg={6} className="mb-3 mb-md-0">
                          <label htmlFor="floatingnameInput"> Phone  <span className="text-danger">*</span></label>
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            defaultCountry="IN"
                            onChange={setValue} />
                        </Col>

                      </Row>
                    </TabPane>
                    <TabPane tabId={3}>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validationType.handleSubmit();
                          return false;
                        }}
                      >
                        <Row>

                          <h5>Change Password</h5>

                          <Col lg={6} className="mb-3">
                            <div className="form-floating">
                              <Input
                                className="form-control"
                                name="currentPassword"
                                type="password"
                                onChange={validationType.handleChange}
                                onBlur={validationType.handleBlur}
                                invalid={
                                  validationType.touched.currentPassword &&
                                    validationType.errors.currentPassword
                                    ? true
                                    : false
                                }
                              />
                              <Label>  Current Password  <span className="text-danger">*</span></Label>
                              {validationType.touched.currentPassword &&
                                validationType.errors.currentPassword ? (
                                <FormFeedback type="invalid">
                                  {validationType.errors.currentPassword}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>

                          <div className="w-100"></div>

                          <Col lg={6} className="mb-3">
                            <div className="form-floating">
                              <Input
                                className="form-control"
                                name="newPassword"
                                type="password"
                                onChange={validationType.handleChange}
                                onBlur={validationType.handleBlur}
                                value={validationType.values.newPassword || ""}
                                invalid={
                                  validationType.touched.newPassword &&
                                    validationType.errors.newPassword
                                    ? true
                                    : false
                                }
                              />
                              <Label>  New Password  <span className="text-danger">*</span></Label>
                              {validationType.touched.newPassword &&
                                validationType.errors.newPassword ? (
                                <FormFeedback type="invalid">
                                  {validationType.errors.newPassword}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>


                          <Col lg={6} className="mb-3">
                            <div className="form-floating">
                              <Input
                                className="form-control"
                                name="confirmPassword"
                                type="password"
                                placeholder="Re-type Password"
                                onChange={validationType.handleChange}
                                onBlur={validationType.handleBlur}
                                value={validationType.values.confirmPassword || ""}
                                invalid={
                                  validationType.touched.confirmPassword &&
                                    validationType.errors.confirmPassword
                                    ? true
                                    : false
                                }
                              />
                              <Label> Confirm New Password  <span className="text-danger">*</span></Label>
                              {validationType.touched.confirmPassword &&
                                validationType.errors.confirmPassword ? (
                                <FormFeedback type="invalid">
                                  {validationType.errors.confirmPassword}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>

                        </Row>
                        <div className="text-end mt-4">
                          <button type="submit" className="btn btn-green w-xs me-2" >Save</button>
                          <button type="reset" className="btn btn-orange w-xs">Cancel</button>
                        </div>
                      </Form>

                    </TabPane>
                  </TabContent>
                </div>
              </div>


            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
