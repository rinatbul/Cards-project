import axios from 'axios'
import s from './SignIn.module.css'
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

    const todolists = useSelector<any>(state => state.auth)
    let dispatch = useDispatch<any>()

    return (
        <div className={s.wrapper}>
            <header className={s.header}>Sign In</header>
            <Formik
                initialValues={{password: "", email: ""}}
                validate={values => {
                   return {};
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(loginTC(values.email, values.password))
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
                        e-mail
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        password
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button className={s.button} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                        <button className={s.button}>
                            <Link className={s.link} to="/registration">Register</Link>
                        </button>
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
    )
}