import {React, useState, useEffect} from 'react';
import Axios from 'axios';
import NormalUser from '../components/NormalUser';
import Admin from '../components/Admin';
import Moderator from '../components/Moderator';


const Main = () => {

const[role, setRole] = useState("");

Axios.defaults.withCredentials = true;

useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);
  
  return (
    <div>
      <h1>{role}</h1>
    {role === "visitor" && (
      <NormalUser/>
    )}
    {role === "admin" && (
      <Admin/>
    )}
    {role === "moderator" && (
      <Moderator/>
    )}
    </div>
  )
}

export default Main