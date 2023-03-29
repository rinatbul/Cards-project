import axios from 'axios'
import s from './SignIn.module.css'
import {useState} from "react";

export const SignIn = () => {
    const [email, setEmail] = useState('nya-admin@nya.nya');
    const [password, setPassword] = useState('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState(false)

    const data= {
        email: email,
        password: password,
        rememberMe: false
    }

    const SendLoginToServer = () => {
        axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/login',data)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <div className={s.wrapper}>
            <header>Sign In</header>
            <div>
                <input type="text" value={email}/>
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