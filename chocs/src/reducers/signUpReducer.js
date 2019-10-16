import {SIGNUP_FIRST_NAME,SIGNUP_LAST_NAME,SIGNUP_EMAIL,SIGNUP_PASSWORD} from '../actions/types';

const initialState = {firstName:'',lastName:'',email:'',password:''}
const SignUpReducer = (state=initialState,action) => {
    switch(action.type) {
        case SIGNUP_FIRST_NAME:
            return {...state,firstName:action.fname}
        case SIGNUP_LAST_NAME:
            return {...state,lastName:action.lname}
        case SIGNUP_EMAIL:
            return {...state,email:action.email}
        case SIGNUP_PASSWORD:
            return {...state,password:action.pswd}
        default:
            return state;
    }
}

export default SignUpReducer