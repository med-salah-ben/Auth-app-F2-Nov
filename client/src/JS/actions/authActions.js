import axios from "axios";
import { AUTH_ERRORS, GET_AUTH_USER, LOGIN_USER,LOGOUT_USER,REGISTER_USER, USER_LOADING } from "../action-types/actionsTypes";

export const registerUser = (data) => async (dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post ('/api/auth/register',data)
        dispatch({
            type:REGISTER_USER,
            payload:res.data //{msg , user , token}
            
        })
    } catch (error) {
        console.dir(error)
        const {errors} = error.response.data;
        if(Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))
        }
    }
}

export const loginUser = (data) => async (dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post ('/api/auth/login',data)
        dispatch({
            type:LOGIN_USER,
            payload:res.data //{msg , user , token}
        })
    } catch (error) {
        console.dir(error)
        const {errors} = error.response.data;
        if(Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))
        }
     
    }
}

export const getAuthUser = ()=>async(dispatch)=>{
    dispatch(userLoading())
    try {
        //headers
        const config ={
            headers : {
                "x-auth-token":localStorage.getItem('token')
            }
        }
        const res = await axios.get("/api/auth/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data // user : req.user
        })
    } catch (error) {
        console.log(error);
        dispatch({type:AUTH_ERRORS})
    }
}

export const userLoading = ()=>(dispatch)=>{
    dispatch({
        type:USER_LOADING
    })
}

export const logoutUser = ()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}