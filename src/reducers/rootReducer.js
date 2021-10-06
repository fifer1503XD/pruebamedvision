import { combineReducers } from "redux";


import { authReducer } from "./authReducer";
import { personaReducer } from "./personaReducer";




export const rootReducer = combineReducers({
    auth : authReducer,
    persona : personaReducer,
})