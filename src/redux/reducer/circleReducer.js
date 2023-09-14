import {GET_CIRCLES} from "../types/type";


const initialState = {
    circles: []
}

export default function  circlesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CIRCLES:
        return {...state, circles: action.payload}
        default:
            return state
    }
}