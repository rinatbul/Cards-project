import axios from 'axios'
// import s from './SignIn.module.css'
import s from "./../../comon/FormWrapper.module.css";
import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../state/authReduser";
import {Link} from "react-router-dom";

export type SignInType = {
    email: string
    password: string
    rememberMe: boolean
}

export const SignIn = () => {
    const [email, setEmail] = useState('nya-admin@nya.nya');
    const [password, setPassword] = useState('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState(false)

    const auth = useSelector<any>(state => state.auth)
    let dispatch = useDispatch<any>()

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={s.header}>Sign In</h1>
                <Formik
                    initialValues={{password: "", email: "", rememberMe: false}}
                    validate={values => {
                        return {};
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(loginTC(values.email, values.password, values.rememberMe))
                        setSubmitting(false)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form className={s.form} onSubmit={handleSubmit}>
                            <div className={s.inputWrapper}>
                                <label htmlFor="email">email</label>
                                <input
                                    className={s.input}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>

                            {errors.email && touched.email && errors.email}

                            <div className={s.inputWrapper}>
                                <label htmlFor="password">password</label>
                                <input
                                    className={s.input}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            {errors.password && touched.password && errors.password}
                            <div>
                                <input
                                    className={s.checkbox}
                                    type="checkbox"
                                    name="rememberMe"
                                    id="rememberMe"
                                    onChange={handleChange}
                                    defaultChecked={values.rememberMe}
                                />
                                <label htmlFor="rememberMe">
                                    remember me
                                </label>
                            </div>

                            <Link className={s.link} to="/forgot">forgot password?</Link>

                            <button className={s.button} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>

                            {/*<button className={s.button}>*/}
                            <Link className={s.link} to="/registration">Register</Link>
                            {/*</button>*/}
                        </form>

                    )}
                </Formik>


                {/*<div>*/}
                {/*    <input onChange={() => {*/}
                {/*        console.log('change')*/}
                {/*    }} type="text" value={email}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type="password" value={password}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <input type="checkbox" checked={rememberMe}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Forgot Password?*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={SendLoginToServer}>Sign In</button>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Already have an account?*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <link rel="stylesheet" href=""/>*/}
                {/*    Sign Up*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
