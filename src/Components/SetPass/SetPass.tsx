import React from 'react';
import s from "./SetPass.module.css";
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
                <Formik
                    initialValues={{password: "", email: ""}}
                    validate={values => {
                        return {};
                    }}
                    onSubmit={(values, {setSubmitting}) => {
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
                            enter new password
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            Re-enter your password
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
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