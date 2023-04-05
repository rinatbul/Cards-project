

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
    return {type: 'LOGIN', email, publicCardPacksCount, name, created, updated
    }
}


