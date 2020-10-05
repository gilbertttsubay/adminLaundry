import AuthReducer from './authReducer';
import {combineReduer} from 'redux';

export const rootReducer = combineReduer({
    authReducer: AuthReducer,
})