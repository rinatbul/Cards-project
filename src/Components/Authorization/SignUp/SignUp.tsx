import axios from 'axios'
import s from './SignUp.module.css'
import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginAC, loginTC} from "../../../state/authReduser";

export type SignInType = {
    email: string
    password: string
    rememberMe: boolean
}

export const SignUp = () => {
    const [email, setEmail] = useState('nya-admin@nya.nya');
    const [password, setPassword] = useState('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState(false)

    const auth = useSelector<any>(state => state.auth)
    let dispatch = useDispatch<any>()
    //
    //
    // const SendLoginToServer = () => {
    //     axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/register', data)
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    // }

    return (
        <div className={s.wrapper}>
            <header>Sign In</header>
            <Formik
                initialValues={{login: "", password: "", email: ""}}
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
                        login
                        <input
                            type="text"
                            name="login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {/*{errors.email && touched.email && errors.email}*/}
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
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </div>
    )
}
