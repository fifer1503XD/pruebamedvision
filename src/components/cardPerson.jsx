import React from 'react';
import "./Card.css";
const CardPerson = (props) => {

  const {firstName,lastName,birthDate,isMarried,height}=props.person
  return (
    <div className="card col-sm-12" onClick={()=>props.setcard(props.person)}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{firstName[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">Nombre: {firstName+''+lastName}</h5>
        </div>
      </div>
      <div className="card-text">Fecha de cumpleaños: {birthDate}</div>
      <div className="card-text">Altura: {height}</div>
      <div className="card-text">Casado: {
         isMarried ? 'Si':'No'
      }</div>
      <div className="card-like-bar">
        
      </div>
    </div>
    
  );
}

 
export default CardPerson;