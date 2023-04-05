import axios from 'axios'
import s from './SignIn.module.css'
import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginAC} from "../../../state/authReduser";

export type SignInType = {
    email: string
    password: string
    rememberMe: boolean
}

export const SignIn = () => {
    const [email, setEmail] = useState('nya-admin@nya.nya');
    const [password, setPassword] = useState('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState(false)

    const data = {
        email: email,
        password: password,
        rememberMe: false
    }
    const todolists = useSelector<any>(state => state.auth)
    let dispatch = useDispatch()
    //
    // function SendLoginToServer() {
    //     dispatch(loginAC())
    // }
    //
    //
    const SendLoginToServer = () => {
        axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/login', data)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <div className={s.wrapper}>
            {/*<Formik*/}
            {/*    initialValues={{name: "", email: ""}}*/}
            {/*    onSubmit={async (values) => {*/}
            {/*        await new Promise((resolve) => setTimeout(resolve, 500));*/}
            {/*        alert(JSON.stringify(values, null, 2));*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Form className={s.form}>*/}
            {/*        <div>*/}
            {/*            login*/}
            {/*            <Field name="name" type="text"/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            email*/}
            {/*            <Field name="email" type="email"/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            password*/}
            {/*            <Field name="password" type="password"/>*/}
            {/*        </div>*/}
            {/*        <button type="submit">Submit</button>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}

            <header>Sign In</header>
            <div>
                <input onChange={() => {
                    console.log('change')
                }} type="text" value={email}/>
            </div>
            <div>
                <input type="password" value={password}/>
            </div>
            <div>
                <input type="checkbox" checked={rememberMe}/>
            </div>
            <div>
                Forgot Password?
            </div>
            <div>
                <button onClick={SendLoginToServer}>Sign In</button>
            </div>
            <div>
                Already have an account?
            </div>
            <div>
                <link rel="stylesheet" href=""/>
                Sign Up
            </div>
        </div>
    )
}
