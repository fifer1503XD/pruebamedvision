import CardHouse from "./cardHouse";


const DetalleHouse = (props) => {

    const {firstName,lastName,houses}=props.person
    return (
        <div>
            
            <div className="containerDescription">
            <div className="containerInfo">
            <h1><b>{firstName.toUpperCase()+lastName.toUpperCase() }</b></h1>
            <div>
            {houses.map((house)=>{
            return(<div><CardHouse house={house}/></div>)
        })} 
            
            </div>
            </div>
           

            </div>

            



         
        </div>
    );
}

export default DetalleHouse;