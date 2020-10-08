export const setLogin = (userData) => {
    return {
        type: 'LOGIN',
        payload: userData
    }
}

export const setLogout = () => {
    return {
        type: 'LOGOUT'
    }
}