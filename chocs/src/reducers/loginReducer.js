import {NAME_INPUT,PSWD_INPUT} from '../actions/types';

const initialState ={email:'',pswd:''}

const LoginReducer = (state=initialState,action) => {
    switch(action.type) {
        case NAME_INPUT:
            return {...state,email:action.email};
        case PSWD_INPUT:
            return {...state,pswd:action.pswd};
        default:
            return state; 
    }
}

export default LoginReducer;