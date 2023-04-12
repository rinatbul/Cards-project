import React from 'react';
import {Formik} from "formik";
import {loginTC} from "../../state/authReduser";
// import s from "./Forgot.module.css";
import s from "./../../comon/FormWrapper.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Forgot = () => {


    const auth = useSelector<any>(state => state.auth)
    let dispatch = useDispatch<any>()
    return (
        <div className={s.wrapper}>
            <h1 className={s.header}>Forgot your password</h1>
            <Formik
                initialValues={{password: "", email: ""}}
                validate={values => {
                    return {};
                }}
                onSubmit={(values, { setSubmitting }) => {
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
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>

                        {errors.email && touched.email && errors.email}

                        <button className={s.button}>
                            <Link to="/setPass">send</Link>
                        </button>

                        {/*<button className={s.button}>*/}
                            <Link className={s.link} to="/">Login</Link>
                        {/*</button>*/}
                    </form>

                )}
            </Formik>
        </div>
    );
};

export default Forgot;