const setLogin = (userData) => {
    return {
        type: 'LOGIN',
        payload: userData
    }
}

const setLogout = () => {
    return {
        type: 'LOGOUT'
    }
}