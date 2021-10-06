import React from 'react';
import "./Card.css";
const CardHouse = (props) => {

  const {houseID,address,description}=props.house
  return (
    <div className="card col-sm-12" onClick={()=>props.setcard(props.person)}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{houseID}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">Casa ID {houseID}</h5>
        </div>
      </div>
      {/* <div className="container-Image"> 
      <img className="card-image"  src={foto} alt="Logo" /></div> */}
      <div className="card-text">Dirección: {address}</div>
      <div className="card-text">Descripción: {description}</div>
      
      <div className="card-like-bar">
        
      </div>
    </div>
    
  );
}

 
export default CardHouse;