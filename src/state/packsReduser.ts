import {Dispatch} from "redux";
import axios from "axios";


export type LoginActionType = {
    type: 'PACKS',
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
        case 'PACKS': {
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

export const packsAC = (email: string, publicCardPacksCount: number, name: string, created: string, updated: string): LoginActionType => {
    return {type: 'PACKS', email, publicCardPacksCount, name, created, updated}
}

export const packsTC = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/me', {
                email,
                password
            })
            if (response) {
                console.log(response.data)
                const {email, publicCardPacksCount, name, created, updated} = response.data
                dispatch(packsAC(email, publicCardPacksCount, name, created, updated))
            }
        } catch (e) {
            console.log(e);
        }
    }
}