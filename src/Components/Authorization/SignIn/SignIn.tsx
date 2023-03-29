import axios from 'axios'
import s from './SignIn.module.css'

export const SignIn = () => {
    const SendLoginToServer = () => {
        axios.get('https://cards-nya-back-production.up.railway.app/')
            .then(() => {
                console.log('Hello')
            })
    }


    return (
        <div className={s.wrapper}>
            <header>Sign In</header>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="password"/>
            </div>
            <div>
                <input type="checkbox"/>
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