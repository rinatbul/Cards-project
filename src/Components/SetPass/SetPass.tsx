import React from 'react';
import s from "./../../comon/FormWrapper.module.css";
import {Formik} from "formik";
import {loginTC} from "../../state/authReduser";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SetPass = () => {

    const auth = useSelector<any>(state => state.auth)
    let dispatch = useDispatch<any>()
    return (
        <div>
            <div className={s.wrapper}>
                <h1 className={s.header}>Set new password</h1>
                <Formik
                    initialValues={{password: "", email: ""}}
                    validate={values => {
                        return {};
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        // dispatch(loginTC(values.email, values.password))
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
                                <label htmlFor="password">enter new password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>

                            {errors.email && touched.email && errors.email}

                            <div className={s.inputWrapper}>
                                <label htmlFor="password">Re-enter your new password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            {errors.password && touched.password && errors.password}

                            <button className={s.button}>
                                set password
                            </button>

                            {/*<button className={s.button}>*/}
                            <Link className={s.link} to="/">Login</Link>
                            {/*</button>*/}
                        </form>

                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SetPass;