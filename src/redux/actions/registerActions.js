import {
    REGISTER_ERROR,
    REGISTER_RESPONSE,
    REGISTER_REQUEST,
    REGISTER_ERROR_CLEAR
} from './types'

import axios from 'axios';
import { apiBaseURL } from './../../utils/constant';


export const registerRequest = (user, history) => (dispatch) => {
    dispatch({
        type: REGISTER_REQUEST
    })

    dispatch(registerErrorClear())

    axios.post(
        `${apiBaseURL}/api/user/register`,
        user
    ).then((res)=>{
        dispatch(registerResponse())
        // console.log(res.data)
        history.push("/login")
    }).catch((err)=>{
        dispatch(registerResponse())
        dispatch(registerError(err.response.data.errors))
    })
}

export const registerError = (payload) => {
    return {
        type: REGISTER_ERROR,
        payload: payload
    }
}

export const registerResponse = () => {
    return {
        type: REGISTER_RESPONSE
    }
}

export const registerErrorClear = () => {
    return {
        type: REGISTER_ERROR_CLEAR
    }
}