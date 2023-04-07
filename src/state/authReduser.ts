import {Dispatch} from "redux";
import axios from "axios";


export type LoginActionType = {
    type: 'LOGIN',
    email: string
    publicCardPacksCount: number
    name: string
    created: string
    updated: string
}

const initialState = {
    loginData: {
        email: '',
        publicCardPacksCount: 0,
        name: '',
        created: '',
        updated: ''
    }
}

export const authReducer = (state = initialState, action: LoginActionType) => {
    switch (action.type) {
        case 'LOGIN': {
            return   {...state, loginData: {...state.loginData, created: action.created, email: action.email, name: action.name, publicCardPacksCount: action.publicCardPacksCount, updated: action.updated} }
        }

        default:
            return state;
    }
}

export const loginAC = (email: string, publicCardPacksCount: number, name: string, created: string, updated: string): LoginActionType => {
    return {type: 'LOGIN', email, publicCardPacksCount, name, created, updated}
}

export const loginTC = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        try {
            axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/login', {email, password})
                .then((response) => {
                    console.log(response.data)
                    const {email, publicCardPacksCount, name, created, updated} = response.data
                    dispatch(loginAC(email, publicCardPacksCount, name, created, updated))
                })
        } catch (e) {
            console.log(e);
        }
    }
}