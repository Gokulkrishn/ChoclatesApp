import {GET_BRANDS,GET_BRANDS_SUCCESS,GET_BRANDS_FAILURE} from '../actions/types';

const initialState = {brands:[],errorMsg:''}
const getBrandReducer =(state={initialState},action) => {
   // const payload = action.payload;
    switch(action.type) {
        case GET_BRANDS:
               
            return {...state}
        case GET_BRANDS_SUCCESS:
                debugger;
            return {...state,brands:action.response}
        case GET_BRANDS_FAILURE:
            return {...state,errorMsg:action.errorMsg}
        default:
            return state;
    }
}

export default getBrandReducer;