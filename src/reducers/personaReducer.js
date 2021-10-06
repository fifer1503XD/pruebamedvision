import { types } from "../types/types";

const initialState = {
   dataPersonas:[]
}
export const personaReducer = ( state = initialState, action ) => {


    switch (action.type) {
        case types.PersonasCargarData:
            return {
                ...state,
                dataPersonas:action.payload, 
                }
        case types.PersonasAgregarNuevo:
            return {
                ...state,
                dataDogs: [
                    ...state.dataPersonas,
                    action.payload
                ]
                }
                
        default:
            return state;
    }




}