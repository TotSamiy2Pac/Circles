import {AUTH_USER, CLOSE, GET_CIRCLES, LOG_OUT, OPEN} from "../types/type";


const initialState = {
    circles: [],
    isOpen: false,
    isAuth: false,
}

export default function  circlesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CIRCLES:
            return {...state, circles: action.payload}
        case OPEN:
            return {...state, isOpen: true}
        case CLOSE:
            return {...state, isOpen: false, isUpdate: false, user: {}}
        case AUTH_USER:
            return {...state, isAuth: true, token: action.payload.access_token}
        case LOG_OUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}