import {NAME_INPUT,PSWD_INPUT,SIGNUP_FIRST_NAME,SIGNUP_LAST_NAME,SIGNUP_EMAIL,SIGNUP_PASSWORD} from './types';
import {GET_BRANDS,GET_BRANDS_SUCCESS,GET_BRANDS_FAILURE} from './types';
import jsonPlaceholder from '../axios/jsonPlaceholder';
import { async } from 'q';

export const getUser = (email) => {
    console.log('getUser',email);
    return {
        type:NAME_INPUT,
        email
    }
}

export const getPswd = (pswd) => {
    console.log('getPswd',pswd)
    return {
        type:PSWD_INPUT,
        pswd
    }
}

export const getSignUpFirstName = (fname) => {
    return {
        type: SIGNUP_FIRST_NAME,
        fname
    }
}

export const getSignUpLastName = (lname) => {
    return {
        type: SIGNUP_LAST_NAME,
        lname
    }
}

export const getSignUpEmail = (email) => {
    return {
        type: SIGNUP_EMAIL,
        email
    }
}

export const getSignUpPassword = (pswd) => {
    return {
        type: SIGNUP_PASSWORD,
        pswd
    }
}

export const getBrands = () => {
    return {
        type: GET_BRANDS
    }
}

export const getBrandsSuccess = (response) => {
    return {
        type: GET_BRANDS_SUCCESS,
        response
    }
}

export const getBrandsFailure = (errorMsg) => {
    return {
        type: GET_BRANDS_FAILURE,
        errorMsg
    }
}