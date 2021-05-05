import {
    LOGIN_ERROR,
    LOGIN_RESPONSE,
    LOGIN_REQUEST,
    LOGIN_ERROR_CLEAR,
    SET_LOGIN_USER
} from './types'

import axios from 'axios';
import { apiBaseURL } from './../../utils/constant';


export const loginRequest = (user, history) => (dispatch) => {
   dispatch({ type: LOGIN_REQUEST })

   // clear login errors
   dispatch(loginErrorClear())

   axios.post(
       `${apiBaseURL}/api/user/login`,
       user
   ).then((res) => {
    //    console.log(res.data)

        // set login user data to state
       dispatch(setLoginUser(res.data.user))

       // set isloading is false
       dispatch(loginResponse())

       // redirect account page or admin page
       history.push("/your_account")
   }).catch((err) => {
       dispatch(loginError(err.response.data.error))

       // set isloading is false
       dispatch(loginResponse())

    //    console.log(err.response.data)
   })

}

export const loginError = (payload) => {
    return {
        type: LOGIN_ERROR,
        payload: payload
    }
}

export const loginResponse = () => {
    return {
        type: LOGIN_RESPONSE
    }
}

export const loginErrorClear = () => {
    return {
        type: LOGIN_ERROR_CLEAR
    }
}

export const setLoginUser = (payload) => {
    return {
        type: SET_LOGIN_USER,
        payload: payload
    }
}