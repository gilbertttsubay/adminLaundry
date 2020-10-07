const initialState =  {
    userOnLogin: null,
    isLogin: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userOnLogin: action.payload,
                isLogin: true
            }

        case 'LOGOUT':
            return {
                userOnLogin: null,
                isLogin: false
            }
    
        default:
            return state;
    }

}


export default AuthReducer