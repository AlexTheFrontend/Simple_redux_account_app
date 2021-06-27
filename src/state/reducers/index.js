// combining reducers

import {combineReducers} from "redux"
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    //taking key value pair
    account: accountReducer
})

export default reducers
