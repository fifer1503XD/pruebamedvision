import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { GetDataPersonas } from "../actions/personas";
import AgregarPersona from "./AgregarPersona";
import CardPerson from "./cardPerson";
import DetalleHouse from "./DetalleHouse";
import Navbar from "./Navbar";

const Houses = () => {
    const dataPersonas = useSelector(state => state.house.dataHouse);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetDataPersonas());
    }, [dataPersonas]);

    const [Person, setPerson] = useState('');
    
    return (
    <div>
        <Navbar/>
        {Person ? 
        
        (<div>
            <DetalleHouse person={Person}/>
        </div>) 
        :
        ( <div className="containerPublication">
        {dataPersonas.map((person)=>{
            return(<CardPerson setcard={setPerson} person={person}/>)
        })}
        <AgregarPersona/>
        </div>
        ) 
        }
        
        </div> 
        );
}
 
export default Personas;