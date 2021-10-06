import React,{useEffect} from 'react';
import Navbar  from "./Navbar";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { logout } from "../actions/auth";


const PublicationScreen = () => {

  const dispatch = useDispatch();
  useEffect(() => {

  }, [dispatch]);
    return (  <div>
      <div>
      <Navbar/>
      </div>
        

        <Link to="/account" >
             
               
              </Link>
              <button onClick ={()=>dispatch(logout())}>
      logout
    </button>
              
    </div>);
}
 
export default PublicationScreen;