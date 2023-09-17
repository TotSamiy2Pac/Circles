import React from 'react';
import {toast, ToastContainer} from "react-toastify";
import {Box, Button, Modal, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {string} from "yup";
import {Navigate} from "react-router-dom";
import {CLOSE, OPEN} from "../../redux/types/type";


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

const SignIn = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.circlesReducer.isAuth)
    const open = useSelector(state => state.circlesReducer.isOpen)

    const notify = () => toast("Wow success registration!");
    const handleOpen = () => dispatch({type: OPEN});
    const handleClose = () => dispatch({type: CLOSE});
    const handleSubmit = (values) => {
        // dispatch(signInUser(values))
        notify()
        // console.log(isAuth)
    }

    console.log(open)

    return (
            <>
                {isAuth && (
                    <Navigate to="/user-page" replace={true} />
                )}
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
                <Button className={'btnCreate'} onClick={handleOpen}>sign in</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
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
                                email: '',
                                password: ''
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
                                    <Button type="submit" >Submit</Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Modal>
            </>
    )};


let userSchema = Yup.object().shape({
    email: string().email().required(),
    password: string().required().min(4).max(35),
});

export default SignIn;