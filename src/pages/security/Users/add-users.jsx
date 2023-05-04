

import React, { useState, useEffect } from "react";

import * as Yup from "yup";
import { useFormik } from 'formik';


import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityServiceProvider, config, Credentials } from 'aws-sdk';
// Set the region
config.update({ region: 'me-south-1' });

import PropTypes from "prop-types"
import {
    Col, Row, UncontrolledTooltip, Toast, ToastHeader, ToastBody, Modal, ModalBody, Form, Input, FormFeedback, Label, Card, FormGroup, CardBody, NavItem, NavLink, TabContent, TabPane, ModalFooter
} from "reactstrap";

import PhoneInput from 'react-phone-number-input';
import classnames from "classnames"
import { min } from "lodash";

const AddModal = props => {
    const { isOpen, toggle } = props

    // ---==== phone input ====----
    const [phone, setValue] = useState()

    // -----===== tabs ====------
    const [activeTab, setactiveTab] = useState(1)

    function toggleTab(tab) {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
            }
        }
    }

    // --------Form repeater------
    const [rows1, setrows1] = useState([{ id: 1 }]);

    // form add row
    function handleAddRowNested() {
        const modifiedRows = [...rows1];
        modifiedRows.push({ id: modifiedRows.length + 1 });
        setrows1(modifiedRows);
    }

    // delete row
    function handleRemoveRow(id) {
        if (id !== 1) {
            var modifiedRows = [...rows1];
            modifiedRows = modifiedRows.filter(x => x["id"] !== id);
            setrows1(modifiedRows);
        }
    }
    // ====  Toaster =====
    const [toast, setToast] = useState(false);
    const [toastError, setToastError] = useState(false);
    const [toastNotSend, setToastNotSend] = useState(false);

    useEffect(() => {
        if (toast || toastError || toastNotSend) {
            const timeout = setTimeout(() => {
                setToast(false);
                setToastError(false);
                setToastNotSend(false);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [toast, toastError, toastNotSend]);

    // ====== checkbox =============
    const [customchkPrimary, setcustomchkPrimary] = useState(true);

    // ===== user details Form validation ======

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name_title:"",
            first_name: "",
            last_name: "",
            username: "",
            age: "",
            dob: "",
            status: "Active",
            gender: "",
            phone: "",

        },

        validationSchema: Yup.object().shape({
            name_title: Yup.string().required("Please select name Status").notOneOf(['select'], 'Please Select '),
            first_name: Yup.string().required("Please Enter First Name").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
            last_name: Yup.string().required("Please Enter Last Name").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
            username: Yup.string().email("Must be a valid Email").max(255).required("Please Enter Email Id"),
            age: Yup.number().required("Please enter your age").min(18, "You must be at least 18 years old")
                .max(100, "You are too old"),
            dob: Yup.string().required("Please Enter Date of Birth"),
            phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must contain only numbers')
                .min(10, "Phone number must be at least 8 digits")
                .max(15, "Phone number must be at most 11 digits")
                .required("Phone number is required"),
            gender: Yup.string().required("Please select gender").notOneOf(['select'], 'Please Select '),
            status: Yup.string().required("Please select status"),
            // company: Yup.string().required("Please Enter Company").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
            // job_title: Yup.string().required("Please Enter Job Title").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
        }),

        onSubmit: async (values) => {
            console.log("values", values);
            try {
                const signUpResult = await Auth.signUp({
                    username: values.username,
                    password: "Acs@1234",
                });
                console.log('User successfully signed up!', signUpResult);
                // Initialize the CognitoIdentityServiceProvider object
                const cognitoISP = new CognitoIdentityServiceProvider({
                    credentials: new Credentials({
                        accessKeyId: 'AKIA5N47BULWZUJQK77Z',
                        secretAccessKey: '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',
                    }),
                });

                // Construct the params object for the adminAddUserToGroup method
                const params = {
                    UserPoolId: 'me-south-1_xySfyitWY',
                    GroupName: 'enterprise_portal',
                    Username: values.username,
                };

                // Call the adminAddUserToGroup method with the params object
                await cognitoISP.adminAddUserToGroup(params).promise();


            } catch (error) {
                console.log('Error signing up user:', error);
            }


            //   }



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

    // ======== work details form validation ======
    const workValidations = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            entries: [{ company: "", job_title: "", start_date: "", end_date: "" }],
        },

        validationSchema: Yup.object().shape({
            company: Yup.string().required("Please Enter Company").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
            job_title: Yup.string().required("Please Enter Job Title").matches(/^[a-zA-Z\s]*$/, 'Invalid name'),
            start_date: Yup.string().required("Please Enter Start Date"),
            end_date: Yup.string().required("Please Enter End Date"),
        }),

        onSubmit: async (values) => {
            console.log("values", values);
            try {
                console.log("try success", values);

            } catch (error) {
                console.log('Error signing up user:', error);
            }

        },

    });


    // ==== clear form ===
    const handleCancel = () => {
        validation.resetForm();
        workValidations.resetForm();
        toggle(true);
    };


    //  =====  dob and age ======
    const calculateAge = (dob) => {
        const diff = Date.now() - new Date(dob).getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const calculateDob = (age) => {
        const dob = new Date();
        dob.setFullYear(dob.getFullYear() - age);
        return dob.toISOString().slice(0, 10);
    };

    const handleAgeChange = (e) => {
        const age = parseInt(e.target.value);
        validation.setFieldValue('age', age);
        validation.setFieldValue('dob', calculateDob(age));
    };

    const handleDobChange = (e) => {
        const dob = e.target.value;
        validation.setFieldValue('dob', dob);
        validation.setFieldValue('age', calculateAge(dob));
    };

    return (
        <>
            <span>
                <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
                    <Toast
                        isOpen={toast}
                        className="align-items-center text-white bg-success border-0"
                        role="alert"
                    >
                        <div className="d-flex">
                            <ToastBody>
                                Data Submit Successfully
                            </ToastBody>
                            <button onClick={() => setToast(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
                            ></button>
                        </div>
                    </Toast>
                </div>
                <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
                    <Toast
                        isOpen={toastError}
                        className="align-items-center text-dark bg-warning border-0"
                        role="alert"   >
                        <div className="d-flex">
                            <ToastBody>
                                Email Already Exist
                            </ToastBody>
                            <button onClick={() => setToastError(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
                            ></button>
                        </div>
                    </Toast>
                </div>

                <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "99999" }}>
                    <Toast
                        isOpen={toastNotSend}
                        className="align-items-center text-white bg-danger border-0"
                        role="alert"  >
                        <div className="d-flex">
                            <ToastBody>
                                Data Not Submit
                            </ToastBody>
                            <button onClick={() => setToastNotSend(false)} type="button" className="btn-close btn-close-white me-2 m-auto"
                            ></button>
                        </div>
                    </Toast>
                </div>

            </span>


            <Modal
                size="lg" scrollable={true} isOpen={isOpen} role="dialog" autoFocus={true} centered={true} className="full-modal exampleModal" tabIndex="-1"
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">
                        Add User
                    </h5>
                    <button type="button" className="btn btn-xs btn-orange rounded-circle p-1 center" onClick={handleCancel}> <i className="fas fa-times"></i> </button>
                </div>

                <ModalBody>

                    <div className="vertical-wizard wizard clearfix vertical">
                        <div className="steps clearfix">
                            <ul>

                                <NavItem
                                    className={classnames({ current: activeTab === 1 })}  >
                                    <NavLink
                                        className={classnames({ current: activeTab === 1 })}
                                        onClick={() => {
                                            setactiveTab(1)
                                        }}
                                    >
                                        <span className="number">1.</span>
                                        <span> User Details </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem
                                    className={classnames({ current: activeTab === 2 })} >
                                    <NavLink
                                        className={classnames({ active: activeTab === 2 })}
                                        onClick={() => {
                                            setactiveTab(2)
                                        }}
                                    >
                                        <span className="number">2.</span>
                                        <span> Work Details </span>
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </div>

                        <div className="content clearfix">
                            <TabContent activeTab={activeTab} className="body">

                                <TabPane tabId={1}>
                                    <Form
                                        className="needs-validation"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                    >
                                        <Row>
                                            <Col md={6} lg={4} className="mb-3">
                                                <div className="form-floating">

                                                    <Input type="select" className="form-select"
                                                        id="name_titleInput" defaultValue="1" name="name_title"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.name_title || ""}
                                                    >
                                                        <option value="select"> --Select--  </option>
                                                        <option value="mr"> MR.  </option>
                                                        <option value="miss"> Miss.  </option>
                                                        <option value="mrs"> Mrs.  </option>

                                                    </Input>
                                                    {validation.touched.name_title &&
                                                        validation.errors.name_title ? (
                                                        <FormFeedback type="invalid" className="d-block">
                                                            {validation.errors.name_title}
                                                        </FormFeedback>
                                                    ) : null}

                                                    <label htmlFor="name_titleInput">  Name Title </label>

                                                </div>
                                            </Col>

                                            <Col md={6} lg={4} className="mb-3">
                                                <div className="form-floating">
                                                    <Input
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        name="first_name"
                                                        type="text"
                                                        id="firstName"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.first_name || ""}
                                                        invalid={
                                                            validation.touched.first_name &&
                                                                validation.errors.first_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <label htmlFor="firstName"> First Name <span className="text-danger">*</span></label>
                                                    {validation.touched.first_name &&
                                                        validation.errors.first_name ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.first_name}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col md={6} lg={4} className="mb-3">
                                                <div className="form-floating">
                                                    <Input
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.last_name || ""}
                                                        invalid={
                                                            validation.touched.last_name &&
                                                                validation.errors.last_name
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <label htmlFor="lastName"> Last Name <span className="text-danger">*</span></label>
                                                    {validation.touched.last_name &&
                                                        validation.errors.last_name ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.last_name}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <Input
                                                        name="username"
                                                        placeholder="Email"
                                                        type="email"
                                                        className="form-control"
                                                        id="emailId"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.username || ""}
                                                        invalid={
                                                            validation.touched.username &&
                                                                validation.errors.username
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <label htmlFor="emailId"> Email Id <span className="text-danger">*</span></label>
                                                    {validation.touched.username &&
                                                        validation.errors.username ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.username}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <Input
                                                        name="age"
                                                        placeholder="Age"
                                                        type="text"
                                                        className="form-control"
                                                        id="AgeId"
                                                        min={1}
                                                        max={100}
                                                        onChange={handleAgeChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.age || ""}
                                                        invalid={
                                                            validation.touched.age &&
                                                                validation.errors.age
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <label htmlFor="ageId"> Age <span className="text-danger">*</span></label>
                                                    {validation.touched.age &&
                                                        validation.errors.age ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.age}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">
                                                    <Input
                                                        name="dob"
                                                        placeholder="Date of birth"
                                                        type="date"
                                                        className="form-control"
                                                        id="dob"
                                                        onChange={handleDobChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.dob || ""}
                                                        invalid={
                                                            validation.touched.dob &&
                                                                validation.errors.dob
                                                                ? true
                                                                : false
                                                        }
                                                        min={new Date().getFullYear() - 100 + "-01-01"}
                                                        max={new Date().toISOString().split("T")[0]}
                                                    />
                                                    <label htmlFor="dob"> Date Of Birth <span className="text-danger">*</span></label>
                                                    {validation.touched.dob &&
                                                        validation.errors.dob ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.dob}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>


                                            <Col lg={6} className="mb-3">
                                                <div className="form-floating">

                                                    <Input type="select" className="form-select"
                                                        id="genderInput" defaultValue="1" name="gender"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.gender || ""}
                                                    >
                                                        <option value="select"> --Select--  </option>
                                                        <option value="male"> Male  </option>
                                                        <option value="female"> Female  </option>
                                                    </Input>
                                                    {validation.touched.gender &&
                                                        validation.errors.gender ? (
                                                        <FormFeedback type="invalid" className="d-block">
                                                            {validation.errors.gender}
                                                        </FormFeedback>
                                                    ) : null}

                                                    <label htmlFor="genderInput">  Gender </label>

                                                </div>
                                            </Col>

                                            <Col lg={6} className="mb-3">
                                                <div className="cursor-none form-floating">
                                                    <Input
                                                        type="select"
                                                        className="cursor-none form-select"
                                                        id="statusInput" name="status"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.status || ""}
                                                    >
                                                        <option value="active"> Active </option>
                                                        <option value="inactive"> Inactive  </option>
                                                        <option value="deleted"> Deleted </option>
                                                    </Input>
                                                    <Label htmlFor="statusInput">  Status </Label>
                                                    {validation.touched.status &&
                                                        validation.errors.status ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.status}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>

                                            </Col>


                                            <Col md={6} className="float mb-3">
                                                {/* <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={phone}
                                                    defaultCountry="IN"
                                                    onChange={setValue} 
                                                /> */}

                                                <div className="form-floating">
                                                    <Input
                                                        name="phone"
                                                        placeholder="Phone"
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.phone || ""}
                                                        invalid={
                                                            validation.touched.phone &&
                                                                validation.errors.phone
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                    <label htmlFor="phone"> Phone No. <span className="text-danger">*</span></label>
                                                    {validation.touched.phone &&
                                                        validation.errors.phone ? (
                                                        <FormFeedback type="invalid">
                                                            {validation.errors.phone}
                                                        </FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col md={12} className="float">
                                                <div className="form-check form-check-primary mb-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="customCheckcolor1"
                                                        checked={customchkPrimary}
                                                        onChange={() => {
                                                            setcustomchkPrimary(true)
                                                        }}
                                                    />

                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="customCheckcolor1"
                                                    >
                                                        This is an Enterprise User Account
                                                    </label>
                                                </div>
                                            </Col>

                                        </Row>
                                        <ModalFooter>
                                            <button className="btn btn-green me-2 w-xs" type="submit">Save</button>
                                            <button className="btn btn-orange w-xs" type="reset" onClick={handleCancel}>Cancel</button>
                                        </ModalFooter>
                                    </Form>
                                </TabPane>

                                <TabPane tabId={2}>
                                    <Form
                                        className="needs-validation"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            workValidations.handleSubmit();
                                            return false;
                                        }}
                                    >
                                        <Row >
                                            <div className="col-12 inner-repeater">
                                                {(rows1 || []).map((formRow, key) => (
                                                    <Row className="mb-3 bg-light shadow-sm border border-1 border-grey-2" key={key}>
                                                        <Col className="col-12">
                                                            <Row className="py-2">
                                                                <Col className="col-auto my-auto">
                                                                    <h5 className="mb-0">Work Detail</h5>
                                                                </Col>
                                                                <Col className="col-auto ms-auto text-end">
                                                                    <button
                                                                        className="btn btn-orange border-0 rounded-circle center btn-small"
                                                                        id="unknown-btn"
                                                                        onClick={e => {
                                                                            handleRemoveRow(formRow.id);
                                                                        }}
                                                                    >
                                                                        <i className="fas fa-trash-alt" ></i>
                                                                    </button>
                                                                    <UncontrolledTooltip placement="top" target="unknown-btn">
                                                                        Delete
                                                                    </UncontrolledTooltip> </Col>
                                                            </Row>

                                                        </Col>
                                                        <div className="col-12 mb-3 px-0 hr-1 w-100"></div>

                                                        <Col lg={6} className="mb-3">
                                                            <div className="form-floating">
                                                                <Input
                                                                    name="company"
                                                                    placeholder="company"
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="company"
                                                                    onChange={workValidations.handleChange}
                                                                    onBlur={workValidations.handleBlur}
                                                                    value={workValidations.values.company || ""}
                                                                    invalid={
                                                                        workValidations.touched.company && workValidations.errors.company
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                                <label htmlFor="company"> Company <span className="text-danger">*</span></label>
                                                                {workValidations.touched.company && workValidations.errors.company ? (
                                                                    <FormFeedback type="invalid">
                                                                        {workValidations.errors.company}
                                                                    </FormFeedback>
                                                                ) : null}
                                                            </div>
                                                        </Col>


                                                        <Col lg={6} className="mb-3">
                                                            <div className="form-floating">
                                                                <Input
                                                                    name="job_title"
                                                                    placeholder="Job Title"
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="jobTitle"
                                                                    onChange={workValidations.handleChange}
                                                                    onBlur={workValidations.handleBlur}
                                                                    value={workValidations.values.job_title || ""}
                                                                    invalid={
                                                                        workValidations.touched.job_title && workValidations.errors.job_title
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                                <label htmlFor="jobTitle"> Job Title <span className="text-danger">*</span></label>
                                                                {workValidations.touched.job_title && workValidations.errors.job_title ? (
                                                                    <FormFeedback type="invalid">
                                                                        {workValidations.errors.job_title}
                                                                    </FormFeedback>
                                                                ) : null}
                                                            </div>
                                                        </Col>

                                                        <Col lg={6} className="mb-3">
                                                            <div className="form-floating">
                                                                <Input
                                                                    name="start_date"
                                                                    type="date"
                                                                    className="form-control"
                                                                    id="startDate"
                                                                    onChange={workValidations.handleChange}
                                                                    onBlur={workValidations.handleBlur}
                                                                    value={workValidations.values.start_date || ""}
                                                                    invalid={
                                                                        workValidations.touched.start_date && workValidations.errors.start_date
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                                <label htmlFor="startDate"> Start Date <span className="text-danger">*</span></label>
                                                                {workValidations.touched.start_date && workValidations.errors.start_date ? (
                                                                    <FormFeedback type="invalid">
                                                                        {workValidations.errors.start_date}
                                                                    </FormFeedback>
                                                                ) : null}
                                                            </div>
                                                        </Col>
                                                        <Col lg={6} className="mb-3">
                                                            <div className="form-floating">
                                                                <Input
                                                                    name="end_date"
                                                                    type="date"
                                                                    className="form-control"
                                                                    id="endDate"
                                                                    onChange={workValidations.handleChange}
                                                                    onBlur={workValidations.handleBlur}
                                                                    value={workValidations.values.end_date || ""}
                                                                    invalid={
                                                                        workValidations.touched.end_date && workValidations.errors.end_date
                                                                            ? true
                                                                            : false
                                                                    }
                                                                />
                                                                <label htmlFor="endDate"> End Date <span className="text-danger">*</span></label>
                                                                {workValidations.touched.end_date && workValidations.errors.end_date ? (
                                                                    <FormFeedback type="invalid">
                                                                        {workValidations.errors.end_date}
                                                                    </FormFeedback>
                                                                ) : null}
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                ))}


                                                <Col className="col-12 text-end">
                                                    <a onClick={() => {
                                                        handleAddRowNested();
                                                    }} className="text-decoration-underline" >
                                                        {/* <i className="fas fa-plus"></i> */}
                                                        + Add Another Work Detail
                                                    </a>
                                                </Col>

                                            </div>
                                        </Row>

                                        <ModalFooter>
                                            <button className="btn btn-green me-2 w-xs" type="submit">Save</button>
                                            <button className="btn btn-orange w-xs" type="reset" onClick={handleCancel}>Cancel</button>
                                        </ModalFooter>
                                    </Form>
                                </TabPane>

                            </TabContent>
                        </div>

                    </div>
                </ModalBody>


            </Modal>
        </>
    )
}

AddModal.propTypes = {
    toggle: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default AddModal











