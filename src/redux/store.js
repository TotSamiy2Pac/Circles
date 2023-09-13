import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import circlesReducer from "./reducer/circleReducer";

const store = createStore(
    combineReducers({
        circlesReducer : circlesReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;