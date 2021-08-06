import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './usertypes'
import axios from 'axios'
export const fetchuserrequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
 const fetchusersuccess=users=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
 const fetchuserfailure=error=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}
export const fetchusers=()=>{
    return (dispatch)=>{
        dispatch(fetchuserrequest)
        axios.get('https://imdb-api.com/en/API/Top250Movies/k_hyz33eb6')
        .then (response =>{
            const users=response.data
            dispatch(fetchusersuccess(users))
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchuserfailure(errorMsg))
        })
    }
}