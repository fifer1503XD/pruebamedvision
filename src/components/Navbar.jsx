import './navbar.css'
import React ,{useState} from 'react';
import { NavLink} from 'react-router-dom';
import Personas from './Personas';
import { useDispatch } from "react-redux";
import { ChangeComponent } from "../actions/auth";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();
    return ( 
    <nav className="navbar">
    <div className="nav-container">
    <NavLink exact to="/" className="nav-logo">
            MEDVISION
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(Personas))}
              >
                Personas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(Personas))}
              >
                Casas
              </NavLink>
            </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
    </div> 
    </nav> );
}
 
export default Navbar;