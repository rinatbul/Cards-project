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

export const registerReducer = (state = initialState, action: LoginActionType) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    created: action.created,
                    email: action.email,
                    name: action.name,
                    publicCardPacksCount: action.publicCardPacksCount,
                    updated: action.updated
                }
            }
        }

        default:
            return state;
    }
}

export const registerAC = (email: string, publicCardPacksCount: number, name: string, created: string, updated: string): LoginActionType => {
    return {type: 'LOGIN', email, publicCardPacksCount, name, created, updated}
}

export const registerTC = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/register', {
                email,
                password
            })
            if (response) {
                console.log(response.data)
                const {email, publicCardPacksCount, name, created, updated} = response.data
                dispatch(registerAC(email, publicCardPacksCount, name, created, updated))
            }
        } catch (e) {
            console.log(e);
        }
    }
}