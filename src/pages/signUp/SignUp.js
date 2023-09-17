import React from 'react';
import {Box, Button} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import {string} from "yup";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import './style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../components/layout/layout";
import {addNewUser} from "../../redux/action/action";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SignUpPage = () => {
    const dispatch = useDispatch()

    const notify = () => toast("Wow success registration!");

    const handleSubmit = (values) => {
        dispatch(addNewUser(values))
        notify()
    }

    return (
        <Layout>
            <div className="container">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <Box sx={style}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "20px"

                    }}>
                        <h2>Register</h2>
                    </div>
                    <Formik
                        initialValues={{
                            username: '',
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                            password1: '',
                        }}
                        validationSchema={userSchema}
                        onSubmit={(values,action) => {
                            handleSubmit(values)
                            action.resetForm()
                        }}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className={'customForm'}>
                                <div className={'boxField'}>
                                    <label>Your User Name</label>
                                    <Field
                                        component={TextField}
                                        label="UserName"
                                        name="username"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your First name</label>
                                    <Field
                                        component={TextField}
                                        label="First Name"
                                        name="first_name"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your Last name</label>
                                    <Field
                                        component={TextField}
                                        label="Last Name"
                                        name="last_name"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your Email</label>
                                    <Field
                                        component={TextField}
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your Password</label>
                                    <Field
                                        component={TextField}
                                        label="Password"
                                        name="password"
                                        variant="outlined"
                                        type={'password'}
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Repeate password</label>
                                    <Field
                                        component={TextField}
                                        label="Repeate password"
                                        name="password1"
                                        variant="outlined"
                                        type={'password'}
                                        disabled={false}
                                    />
                                </div>
                                <Button type="submit" >Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
        </Layout>
    );
};

let userSchema = Yup.object().shape({
    username: string().required().min(2),
    first_name: string().required().min(2),
    last_name: string().required().min(2),
    email: string().email().required(),
    password: string().required().min(4).max(35),
    password1: string().required().min(4).max(35).oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});

export default SignUpPage;