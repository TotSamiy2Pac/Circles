import axios from "axios";
import Cookies from 'js-cookie'
import {AUTH_USER} from "../types/type";



export const getCircles = () => {
    axios(``)
}




export const addNewUser = (values) => {
    return (dispatch) => {
        console.log(values)
        axios.post(`http://51.20.53.39/accounts/profiles/`, values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
}

export const signInUser = (values) => {
    return (dispatch) => {
        // axios.post(`https://api.escuelajs.co/api/v1/auth/login`, values)
        //     .then(res => {
        //         dispatch({type: AUTH_USER, payload: res.data})
        //         localStorage.setItem('token', JSON.stringify(res.data.access_token))
        //         Cookies.set('token', res.data.access_token)
        //         const token = {
        //             "Authorization": `Bearer ${res.data.access_token}`
        //         }
        //         axios(`https://api.escuelajs.co/api/v1/auth/profile` , {headers: token})
        //             .then(res => {
        //                 Cookies.set('user',JSON.stringify(res.data))
        //             })
        //     })
        //     .catch(error => console.log(error.response.data.message))
    }
}