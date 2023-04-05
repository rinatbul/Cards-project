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

export const SignUp = () => {
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
            Register
            <input type="text"/>
            <input type="email"/>
            <input type="password"/>
            <button type='submit'>
                SignUp
            </button>
        </div>
    )
}
