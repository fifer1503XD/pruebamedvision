import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchConToken } from "../helpers/fetch";




export const GetDataPersonas = (  ) => {
    return async( dispatch ) => {
        const resp = await fetchConToken( 'Person/GetAllPeople', {}, 'GET' );
        const response = await resp.json();
        
        if( response ) {
            dispatch( DataPersonas(
               response
            ) )
        } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas!'
        })
        

    }
    }
}
export const AddNewPerson = ( document,firstName,lastName,birthDate,isMarried,height ) => {
    const houses =[
    ];
    return async( dispatch) => {
        try {
            await fetchConToken( 'Person/AddPerson', {document,firstName,lastName,birthDate,isMarried,height,houses}, 'POST' );
       
        dispatch(AddPerson({document,firstName,lastName,birthDate,isMarried,height,houses}))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
        })
        
        
        }}}




export const DataPersonas = ( personas ) => ({
    type: types.PersonasCargarData,
    payload: personas
});

 const AddPerson = ( person ) => ({
    type: types.PersonasAgregarNuevo,
    payload: person
});