import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import SignUpReducer from './signUpReducer';
import getBrandReducer from './getBrandReducer';

export default combineReducers({
       login:loginReducer,
       signup:SignUpReducer,
       brands:getBrandReducer
})
